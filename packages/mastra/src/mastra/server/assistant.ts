import { toAISdkStream } from "@mastra/ai-sdk";
import { convertMessages } from "@mastra/core/agent";
import type { StorageThreadType } from "@mastra/core/memory";
import type { RequestContext } from "@mastra/core/request-context";
import type { LanguageModelUsage } from "@mastra/core/stream";
import type { UIMessage } from "ai";
import { createUIMessageStreamResponse } from "ai";
import type { KnowledgeRecognition } from "generated/prisma/enums";
import { AssistantFullSchema } from "generated/schemas/composed";
import { AssistantSchema } from "generated/schemas/models";
import { z } from "zod";

import { DynamicAgent } from "../agents/dynamicAgent";
import type { assistantRoutes } from "../router/type";
import { AgentTaskEnum, createCommonRunTime } from "../runtime/CommonRunTime";
import type {
  CreateAssistantInputType,
  FullAssistantType,
  UpdateAssistantInputType
} from "../schema/assistant";
import { AssistantWithModelsAndSettingsSchema } from "../schema/assistant";
import { prisma } from "./index";
import { getProviderWithModelsById } from "./provider";
import type { AsyncReturnType } from "./type";

/**
 * 将 ReadableStream 转换为异步生成器，逐块 yield 流内容
 * @param stream - 要消费的可读流
 * @yields 流中的每个字符串块
 */
const consumeStream = async function* (stream: ReadableStream<string>) {
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
};

/**
 * 透传流内容，并在流结束后触发回调
 * @param stream - 原始可读流
 * @param onFinish - 流结束时的回调，参数为所有块拼接后的完整文本
 * @yields 与原始流相同的每个字符串块
 */
export const tapStream = async function* (
  stream: ReadableStream<string>,
  onFinish: (text: string) => void
) {
  const chunks: string[] = [];
  for await (const chunk of consumeStream(stream)) {
    chunks.push(chunk);
    yield chunk;
  }
  onFinish(chunks.join(""));
};

/**
 * 获取所有助手
 * @description 从数据库中获取所有助手的列表
 * @returns 包含所有助手信息的数组
 */
const getAssistants = async (): Promise<
  z.infer<(typeof assistantRoutes)["getAssistants"]["responseSchema"]>
> => {
  const assistants = await prisma.assistant.findMany({
    include: {
      model: true,
      settings: true
    }
  });
  return z.array(AssistantWithModelsAndSettingsSchema).parse(assistants);
};

/**
 * 根据ID获取单个助手
 * @description 通过助手ID从数据库中获取助手基本信息
 * @param id - 助手的唯一标识符
 * @returns 助手对象，如果不存在则返回null
 */
const getAssistantById = async (
  id: string
): Promise<
  z.infer<(typeof assistantRoutes)["getAssistantById"]["responseSchema"]>
> => {
  const assistant = await prisma.assistant.findUnique({
    where: {
      id
    },
    include: {
      model: true,
      provider: true,
      settings: true,
      topics: true,
      knowledgeBases: true,
      mcpServers: true
    }
  });
  return assistant as z.infer<
    (typeof assistantRoutes)["getAssistantById"]["responseSchema"]
  > | null;
};

/**
 * @description 通过助手ID从数据库中获取特定助手的详细信息，包括关联的模型、提供商、设置、主题、知识库、MCP服务器等
 * @param id - 助手的唯一标识符
 * @returns 包含完整助手信息的助手对象，如果不存在则返回null
 */
const getFullAssistantById = async (
  id: string
): Promise<FullAssistantType | null> => {
  const assistant = await prisma.assistant.findUnique({
    where: {
      id
    },
    include: {
      model: true,
      provider: true,
      settings: true,
      topics: true,
      knowledgeBases: true,
      mcpServers: true
    }
  });
  return assistant ? AssistantFullSchema.parse(assistant) : null;
};

/**
 * 创建新助手
 * @description 在数据库中创建一个新的助手记录
 * @param assistant - 包含助手信息的对象，包括名称、描述、提示词等必要字段
 * @returns 新创建的助手对象，包含生成的ID和时间戳
 */
const createAssistant = async (
  assistant: CreateAssistantInputType
): Promise<
  z.infer<(typeof assistantRoutes)["createAssistant"]["responseSchema"]>
> => {
  const newAssistant = await prisma.assistant.create({
    data: {
      name: assistant.name,
      prompt: assistant.prompt,
      type: assistant.type ?? "assistant",
      emoji: assistant.emoji ?? undefined,
      description: assistant.description ?? undefined,
      enableWebSearch: assistant.enableWebSearch ?? false,
      webSearchProviderId: assistant.webSearchProviderId ?? undefined,
      enableGenerateImage: assistant.enableGenerateImage ?? false,
      knowledgeRecognition:
        assistant.knowledgeRecognition as KnowledgeRecognition,
      modelId: assistant.modelId ?? undefined,
      providerId: assistant.providerId ?? undefined
    },
    include: {
      model: true,
      settings: true
    }
  });

  return AssistantWithModelsAndSettingsSchema.parse(newAssistant);
};

/**
 * 更新助手信息
 * @description 根据助手ID更新数据库中的助手信息
 * @param id - 要更新的助手的唯一标识符
 * @param assistant - 包含更新信息的对象，包括名称、描述、提示词等字段
 * @returns 更新后的助手对象
 */
const updateAssistant = async (
  id: string,
  assistant: UpdateAssistantInputType
): Promise<
  z.infer<(typeof assistantRoutes)["updateAssistant"]["responseSchema"]>
> => {
  const { settings, ...rest } = assistant;

  const assistantData = {
    updatedAt: new Date(),
    ...Object.fromEntries(
      Object.entries(rest).filter(([_, value]) => value !== undefined)
    )
  };

  const settingsUpdate = settings
    ? Object.fromEntries(
        Object.entries(settings as Record<string, unknown>).filter(
          ([_, v]) => v !== undefined
        )
      )
    : undefined;

  const updatedAssistant = await prisma.assistant.update({
    where: { id },
    data: {
      ...(assistantData as Parameters<
        typeof prisma.assistant.update
      >[0]["data"]),
      ...(settingsUpdate
        ? {
            settings: {
              upsert: {
                create: {
                  contextCount: 20,
                  temperature: 0.7,
                  topP: 1,
                  enableMaxTokens: false,
                  streamOutput: true,
                  hideMessages: false,
                  ...settingsUpdate
                },
                update: settingsUpdate
              }
            }
          }
        : {})
    },
    include: {
      model: true,
      settings: true
    }
  });
  return AssistantWithModelsAndSettingsSchema.parse(updatedAssistant);
};

/**
 * 删除助手
 * @description 根据助手ID从数据库中删除指定的助手
 * @param id - 要删除的助手的唯一标识符
 * @returns 被删除的助手对象
 */
const deleteAssistant = async (
  id: string
): Promise<
  z.infer<(typeof assistantRoutes)["deleteAssistant"]["responseSchema"]>
> => {
  const deletedAssistant = await prisma.assistant.delete({
    where: {
      id
    }
  });
  return AssistantSchema.parse(deletedAssistant);
};

/**
 * 根据助手ID获取助手及其关联的模型信息
 * @description 通过助手ID获取助手详细信息，包括关联的模型
 * @param assistantId - 助手的唯一标识符
 * @returns 包含模型信息的助手对象
 */
const getAssistantWithModelByAssistantId = async (assistantId: string) => {
  const assistant = await prisma.assistant.findUnique({
    where: {
      id: assistantId
    },
    include: {
      model: true,
      settings: true
    }
  });
  return assistant;
};

/**
 * 执行与助手的聊天对话
 * @description 与指定助手进行对话并返回流式响应
 * @param assistantId - 助手的唯一标识符
 * @param messages - 对话消息数组
 * @param threadId - 对话线程ID
 * @returns 包含流式响应的对象
 *
 * @throws {Error} 当助手不存在时抛出错误
 */
const executeChatWithAssistant = async (
  assistantId: string,
  messages: UIMessage[],
  threadId: string
) => {
  const assistant = await getFullAssistantById(assistantId);

  if (!assistant) {
    throw new Error("助手不存在");
  }

  let lastUsage: LanguageModelUsage | null = null;

  const memory = await DynamicAgent.getMemory();

  const stream = await DynamicAgent.stream(messages, {
    memory: {
      thread: threadId,
      resource: assistantId
    },
    providerOptions: {
      openai: {
        reasoningEffort: "low"
      }
    },
    requestContext: createCommonRunTime({
      assistant
    }),
    modelSettings: {
      temperature: 1
    },
    onStepFinish: async ({ usage }) => {
      lastUsage = usage;
      if (memory && usage) {
        const thread = await memory.getThreadById({ threadId });
        if (thread) {
          await memory.saveThread({
            thread: { ...thread, metadata: { lastUsage: usage } }
          });
        }
      }
    }
  });

  const aiSdkStream = toAISdkStream(stream, {
    from: "agent",
    sendReasoning: true
  });

  type AiSdkChunk =
    typeof aiSdkStream extends ReadableStream<infer T> ? T : never;

  const processedStream = new ReadableStream<AiSdkChunk>({
    async start(controller) {
      try {
        for await (const chunk of aiSdkStream as unknown as AsyncIterable<AiSdkChunk>) {
          controller.enqueue(chunk);
        }
        if (lastUsage) {
          controller.enqueue({
            type: "data-token-usage",
            data: lastUsage
          } as AiSdkChunk);
        }
        controller.close();
      } catch (error) {
        controller.error(error);
      }
    }
  });

  return createUIMessageStreamResponse({
    stream: processedStream as ReadableStream
  });
};

/**
 * 获取助手的对话线程列表
 * @description 根据助手ID获取该助手的所有对话线程
 * @param assistantId - 助手的唯一标识符
 * @returns 包含所有对话线程的数组
 */
const getThreadsByAssistantId = async (assistantId: string) => {
  const memory = await DynamicAgent.getMemory();

  const storage = await memory.storage.getStore("memory");

  const result = await storage?.listThreads({
    filter: { resourceId: assistantId },
    perPage: false
  });

  return result?.threads ?? [];
};

/**
 * 获取助手指定线程的消息
 * @description 根据助手ID和线程ID获取该线程中的所有UI消息
 * @param assistantId - 助手的唯一标识符
 * @param threadId - 对话线程的唯一标识符
 * @returns 包含所有UI消息的数组
 */
const getUIMessagesByThreadId = async (
  assistantId: string,
  threadId: string
): Promise<UIMessage[]> => {
  const assistant = await getFullAssistantById(assistantId);

  if (!assistant) {
    throw new Error("助手不存在");
  }

  const memory = await DynamicAgent.getMemory({
    requestContext: createCommonRunTime({
      assistant
    }) as RequestContext<unknown>
  });

  const result = await memory.recall({
    threadId,
    resourceId: assistantId
  });

  const messages = convertMessages(result.messages).to("AIV5.UI");

  return messages;
};

/**
 * @description 创建标题生成的提示词
 * @returns 标题生成的提示词
 */
const getGeneratedTitlePrompt = () => {
  return `你是对话标题生成器。根据对话的第一条用户消息和第一条助手回复，生成一个精准的标题。

生成规则：
- 核心：提炼用户的提问意图 + 助手回答的主题
- 长度：6~15 个字（中文优先）
- 格式：名词短语或动宾短语，不加句号
- 技术问题：保留关键技术词（如"React Hook 闭包问题"、"Prisma 联表查询"）
- 概念提问：点明概念和方向（如"什么是 RAG 检索增强"）
- 任务请求：动宾结构（如"生成 Git Commit 信息"、"翻译英文合同"）
- 不要泛化（禁止用"代码问题"、"技术讨论"、"日常对话"此类无意义标题）
- 只输出标题本身，不加引号、不加任何解释`;
};

/**
 * @description 生成对话标题
 * @param assistantId - 助手 ID
 * @param threadId - 对话线程 ID
 * @returns 返回生成标题的流式响应
 */
const generateThreadTitle = async (assistantId: string, threadId: string) => {
  const fullAssistant = await getFullAssistantById(assistantId);
  if (!fullAssistant) {
    throw new Error("助手不存在");
  }

  const providerWithModel = await getProviderWithModelsById(
    fullAssistant.providerId
  );
  if (!providerWithModel) {
    throw new Error("供应商不存在");
  }

  const titleGenerationAssistant = {
    ...fullAssistant,
    prompt: getGeneratedTitlePrompt()
  };

  const memory = await DynamicAgent.getMemory({
    requestContext: createCommonRunTime({
      assistant: titleGenerationAssistant
    }) as RequestContext<unknown>
  });

  const { messages: threadMessages } = await memory.recall({
    threadId,
    resourceId: assistantId
  });

  if (threadMessages.length === 0) {
    throw new Error("对话中没有消息");
  }

  const recentMessages = threadMessages.slice(0, 4);
  const messages = convertMessages(recentMessages).to("AIV5.UI");
  const requestContext = createCommonRunTime({
    assistant: titleGenerationAssistant,
    task: AgentTaskEnum.GENERATE_TITLE
  });

  const stream = await DynamicAgent.stream(messages, {
    requestContext,
    onFinish: async ({ text }) => {
      const thread = await memory.getThreadById({ threadId });
      if (thread) {
        await memory.saveThread({ thread: { ...thread, title: text } });
      }
    }
  });

  const aiSdkStream = toAISdkStream(stream, {
    from: "agent"
  });

  return createUIMessageStreamResponse({
    stream: aiSdkStream as ReadableStream
  });
};

/**
 * Prisma 数据库操作返回类型
 */
export type AssistantsListResult = AsyncReturnType<typeof getAssistants>;
export type AssistantDetailResult = AsyncReturnType<typeof getAssistantById>;
export type AssistantCreateResult = AsyncReturnType<typeof createAssistant>;
export type AssistantUpdateResult = AsyncReturnType<typeof updateAssistant>;
export type AssistantDeleteResult = AsyncReturnType<typeof deleteAssistant>;
export type AssistantThreadsResult = StorageThreadType[];
export type AssistantUIMessagesResult = UIMessage[];

export {
  getAssistants,
  getAssistantById,
  getFullAssistantById,
  createAssistant,
  updateAssistant,
  deleteAssistant,
  getAssistantWithModelByAssistantId,
  executeChatWithAssistant,
  getThreadsByAssistantId,
  getUIMessagesByThreadId,
  generateThreadTitle
};
