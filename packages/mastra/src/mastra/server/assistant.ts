import { StorageThreadType } from "@mastra/core";
import { convertMessages } from "@mastra/core/agent";
import { RuntimeContext } from "@mastra/core/di";
import { UIMessage } from "ai";
import { z } from "zod";

import { DynamicAgent } from "../agents/dynamicAgent";
import { createCommonRunTime } from "../runtime/CommonRunTime";
import { prisma } from "./index";

/**
 * 助手相关的zod校验schemas
 */
const createAssistantSchema = z.object({
  name: z.string().min(1, "助手名称不能为空"),
  prompt: z.string().min(1, "提示词不能为空"),
  type: z.string().optional().default("assistant"),
  emoji: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  enableWebSearch: z.boolean().optional().default(false),
  webSearchProviderId: z.string().nullable().optional(),
  enableGenerateImage: z.boolean().optional().default(false),
  knowledgeRecognition: z.enum(["off", "on"]).nullable().optional(),
  modelId: z.string().nullable().optional(),
  defaultModelId: z.string().nullable().optional(),
});

const updateAssistantSchema = z.object({
  name: z.string().min(1, "助手名称不能为空").optional(),
  prompt: z.string().min(1, "提示词不能为空").optional(),
  type: z.string().optional(),
  emoji: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  enableWebSearch: z.boolean().optional(),
  webSearchProviderId: z.string().nullable().optional(),
  enableGenerateImage: z.boolean().optional(),
  knowledgeRecognition: z.enum(["off", "on"]).nullable().optional(),
  providerId: z.string().nullable().optional(),
  modelId: z.string().nullable().optional(),
  defaultModelId: z.string().nullable().optional(),
});

// 提取 experimental_prepareRequestBody 返回值类型
export type PrepareRequestBodyReturnType = {
  id: string;
  threadId: string;
  messages: UIMessage[];
  assistantId?: string;
  requestBody: Record<string, unknown>;
  requestData: Record<string, unknown>;
};

const assistantIdParamSchema = z.object({
  assistantId: z.string().min(1, "助手ID不能为空"),
});

const assistantThreadIdParamSchema = z.object({
  assistantId: z.string().min(1, "助手ID不能为空"),
  threadId: z.string().min(1, "对话ID不能为空"),
});

const chatWithAssistantSchema = z.custom<PrepareRequestBodyReturnType>();

// zod类型推导
export type CreateAssistantInput = z.infer<typeof createAssistantSchema>;
export type UpdateAssistantInput = z.infer<typeof updateAssistantSchema>;

/**
 * 获取所有助手
 * @description 从数据库中获取所有助手的列表
 * @returns 包含所有助手信息的数组
 */
const getAssistants = async () => {
  const assistants = await prisma.assistant.findMany({
    include: {
      model: true,
      defaultModel: true,
      settings: true,
    },
  });
  return assistants;
};

/**
 * 根据ID获取单个助手
 * @description 通过助手ID从数据库中获取特定助手的详细信息
 * @param id - 助手的唯一标识符
 * @returns 助手对象，如果不存在则返回null
 */
const getAssistantById = async (id: string) => {
  const assistant = await prisma.assistant.findUnique({
    where: {
      id,
    },
    include: {
      model: true,
      defaultModel: true,
      provider: true,
      settings: true,
      topics: true,
      knowledgeBases: true,
      mcpServers: true,
    },
  });
  return assistant;
};

/**
 * @description 通过助手ID从数据库中获取特定助手的详细信息，包括关联的模型、提供商、设置、主题、知识库、MCP服务器等
 * @param id - 助手的唯一标识符
 * @returns 包含完整助手信息的助手对象，如果不存在则返回null
 */
const getFullAssistantById = async (id: string) => {
  const assistant = await prisma.assistant.findUnique({
    where: {
      id,
    },
    include: {
      model: true,
      defaultModel: true,
      provider: true,
      settings: true,
      topics: true,
      knowledgeBases: true,
      mcpServers: true,
    },
  });
  return assistant;
};

/**
 * 创建新助手
 * @description 在数据库中创建一个新的助手记录
 * @param assistant - 包含助手信息的对象，包括名称、描述、提示词等必要字段
 * @returns 新创建的助手对象，包含生成的ID和时间戳
 */
const createAssistant = async (assistant: CreateAssistantInput) => {
  const newAssistant = await prisma.assistant.create({
    data: {
      ...assistant,
      modelId: 'deepseek-chat',
      providerId: "deepseek",
      createdAt: new Date(),
      updatedAt: new Date(),
    } as Parameters<typeof prisma.assistant.create>[0]["data"],
    include: {
      model: true,
      defaultModel: true,
      settings: true,
    },
  });
  return newAssistant;
};

/**
 * 更新助手信息
 * @description 根据助手ID更新数据库中的助手信息
 * @param id - 要更新的助手的唯一标识符
 * @param assistant - 包含更新信息的对象，包括名称、描述、提示词等字段
 * @returns 更新后的助手对象
 */
const updateAssistant = async (id: string, assistant: UpdateAssistantInput) => {
  const updatedAssistant = await prisma.assistant.update({
    where: {
      id,
    },
    data: {
      ...assistant,
      updatedAt: new Date(),
    },
    include: {
      model: true,
      defaultModel: true,
      settings: true,
    },
  });
  return updatedAssistant;
};

/**
 * 删除助手
 * @description 根据助手ID从数据库中删除指定的助手
 * @param id - 要删除的助手的唯一标识符
 * @returns 被删除的助手对象
 */
const deleteAssistant = async (id: string) => {
  const deletedAssistant = await prisma.assistant.delete({
    where: {
      id,
    },
  });
  return deletedAssistant;
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
      id: assistantId,
    },
    include: {
      model: true,
      defaultModel: true,
      settings: true,
    },
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
  threadId: string,
) => {
  const assistant = await getFullAssistantById(assistantId);

  if (!assistant) {
    throw new Error("助手不存在");
  }

  const stream = await DynamicAgent.stream(messages, {
    format: "aisdk",
    memory: {
      thread: threadId,
      resource: assistantId,
    },
    providerOptions: {
      openai: {
        store: false,
      },
    },
    runtimeContext: createCommonRunTime({ assistant }) as RuntimeContext,
  });

  return stream.toUIMessageStreamResponse();
};

/**
 * 获取助手的对话线程列表
 * @description 根据助手ID获取该助手的所有对话线程
 * @param assistantId - 助手的唯一标识符
 * @returns 包含所有对话线程的数组
 */
const getThreadsByAssistantId = async (assistantId: string) => {
  const memory = await DynamicAgent.getMemory();

  const threads = await memory.getThreadsByResourceId({
    resourceId: assistantId,
  });

  return threads;
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
  threadId: string,
): Promise<UIMessage[]> => {
  const assistant = await getFullAssistantById(assistantId);

  if (!assistant) {
    throw new Error("助手不存在");
  }

  const memory = await DynamicAgent.getMemory({
    runtimeContext: createCommonRunTime({ assistant }) as RuntimeContext,
  });

  const result = await memory.query({
    threadId,
    resourceId: assistantId,
  });

  const messages = convertMessages(result.uiMessages).to("AIV5.UI");

  return messages;
};

/**
 * Prisma 数据库操作返回类型
 */
export type AssistantsListResult = Awaited<ReturnType<typeof getAssistants>>;
export type AssistantDetailResult = Awaited<
  ReturnType<typeof getAssistantById>
>;
export type AssistantCreateResult = Awaited<ReturnType<typeof createAssistant>>;
export type AssistantUpdateResult = Awaited<ReturnType<typeof updateAssistant>>;
export type AssistantDeleteResult = Awaited<ReturnType<typeof deleteAssistant>>;
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
  createAssistantSchema,
  updateAssistantSchema,
  chatWithAssistantSchema,
  assistantIdParamSchema,
  assistantThreadIdParamSchema,
};
