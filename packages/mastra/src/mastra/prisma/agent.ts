import { z } from "zod";

import { prisma } from "./index";

/**
 * 代理相关的zod校验schemas
 */
const createAgentSchema = z.object({
  name: z.string().min(1, "代理名称不能为空"),
  prompt: z.string().min(1, "提示词不能为空"),
  type: z.string().optional().default("agent"),
  emoji: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  groupJson: z.string().nullable().optional(),
  enableWebSearch: z.boolean().optional().default(false),
  webSearchProviderId: z.string().nullable().optional(),
  enableGenerateImage: z.boolean().optional().default(false),
  knowledgeRecognition: z.enum(["off", "on"]).nullable().optional(),
});

const updateAgentSchema = z.object({
  name: z.string().min(1, "代理名称不能为空").optional(),
  prompt: z.string().min(1, "提示词不能为空").optional(),
  type: z.string().optional(),
  emoji: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  groupJson: z.string().nullable().optional(),
  enableWebSearch: z.boolean().optional(),
  webSearchProviderId: z.string().nullable().optional(),
  enableGenerateImage: z.boolean().optional(),
  knowledgeRecognition: z.enum(["off", "on"]).nullable().optional(),
});

const idParamSchema = z.object({
  id: z.string().min(1, "代理ID不能为空"),
});

const groupParamSchema = z.object({
  group: z.string().min(1, "分组不能为空"),
});

// zod类型推导
type CreateAgentInput = z.infer<typeof createAgentSchema>;
type UpdateAgentInput = z.infer<typeof updateAgentSchema>;

/**
 * 获取所有代理
 * @description 从数据库中获取所有代理的列表
 * @returns 包含所有代理信息的数组
 */
const getAgents = async () => {
  const agents = await prisma.agent.findMany({
    include: {
      settings: true,
      topics: true,
      knowledgeBases: true,
      mcpServers: true,
    },
  });
  return agents;
};

/**
 * 根据ID获取单个代理
 * @description 通过代理ID从数据库中获取特定代理的详细信息
 * @param id - 代理的唯一标识符
 * @returns 代理对象，如果不存在则返回null
 */
const getAgentById = async (id: string) => {
  const agent = await prisma.agent.findUnique({
    where: {
      id,
    },
    include: {
      settings: true,
      topics: true,
      knowledgeBases: true,
      mcpServers: true,
    },
  });
  return agent;
};

const getAgentByGroup = async (group: string) => {
  const agents = await prisma.agent.findMany({
    where: {
      groupJson: {
        string_contains: group,
      },
    },
  });
  return agents;
};
/**
 * 创建新代理
 * @description 在数据库中创建一个新的代理记录
 * @param agent - 包含代理信息的对象，包括名称、描述、提示词等必要字段
 * @returns 新创建的代理对象，包含生成的ID和时间戳
 */
const createAgent = async (agent: CreateAgentInput) => {
  const newAgent = await prisma.agent.create({
    data: {
      ...agent,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as Parameters<typeof prisma.agent.create>[0]["data"],
    include: {
      settings: true,
    },
  });
  return newAgent;
};

/**
 * 更新代理信息
 * @description 根据代理ID更新数据库中的代理信息
 * @param id - 要更新的代理的唯一标识符
 * @param agent - 包含更新信息的对象，包括名称、描述、提示词等字段
 * @returns 更新后的代理对象
 */
const updateAgent = async (id: string, agent: UpdateAgentInput) => {
  const updatedAgent = await prisma.agent.update({
    where: {
      id,
    },
    data: {
      ...agent,
      updatedAt: new Date(),
    },
    include: {
      settings: true,
    },
  });
  return updatedAgent;
};

/**
 * 删除代理
 * @description 根据代理ID从数据库中删除指定的代理
 * @param id - 要删除的代理的唯一标识符
 * @returns 被删除的代理对象
 */
const deleteAgent = async (id: string) => {
  const deletedAgent = await prisma.agent.delete({
    where: {
      id,
    },
  });
  return deletedAgent;
};

/**
 * 根据代理ID获取代理及其关联的设置信息
 * @description 通过代理ID获取代理详细信息，包括关联的设置
 * @param agentId - 代理的唯一标识符
 * @returns 包含设置信息的代理对象
 */
const getAgentWithSettingsByAgentId = async (agentId: string) => {
  const agent = await prisma.agent.findUnique({
    where: {
      id: agentId,
    },
    include: {
      settings: true,
    },
  });
  return agent;
};

export {
  getAgents,
  getAgentById,
  getAgentByGroup,
  createAgent,
  updateAgent,
  deleteAgent,
  getAgentWithSettingsByAgentId,
  createAgentSchema,
  updateAgentSchema,
  idParamSchema,
  groupParamSchema,
};
