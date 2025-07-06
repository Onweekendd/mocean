import { UIMessage } from "ai";
import { z } from "zod";

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
  knowledgeRecognition: z.string().nullable().optional(),
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
  knowledgeRecognition: z.string().nullable().optional(),
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
type CreateAssistantInput = z.infer<typeof createAssistantSchema>;
type UpdateAssistantInput = z.infer<typeof updateAssistantSchema>;

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

export {
  getAssistants,
  getAssistantById,
  createAssistant,
  updateAssistant,
  deleteAssistant,
  getAssistantWithModelByAssistantId,
  createAssistantSchema,
  updateAssistantSchema,
  chatWithAssistantSchema,
  assistantIdParamSchema,
  assistantThreadIdParamSchema,
};
