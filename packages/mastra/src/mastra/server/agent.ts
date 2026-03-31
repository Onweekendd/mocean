import type z from "zod";

import type { agentRoutes } from "../router/type";
import type {
  CreateAgentGroupInput,
  CreateAgentInput,
  UpdateAgentGroupInput,
  UpdateAgentInput
} from "../schema/agent";
import { prisma } from "./index";
import type { AsyncReturnType } from "./type";

// Agent 查询时统一 include groups 关系的配置
const agentGroupsInclude = {
  groups: {
    select: {
      agentGroup: { select: { id: true, name: true, label: true } }
    }
  }
} as const;

/**
 * 获取所有代理
 * @description 从数据库中获取所有代理的列表
 * @returns 包含所有代理信息的数组
 */

const getAgents = async (): Promise<
  z.infer<(typeof agentRoutes)["getAgents"]["responseSchema"]>
> => {
  const agents = await prisma.agent.findMany({
    include: {
      ...agentGroupsInclude,

      topics: true
    }
  });

  return agents;
};

/**
 * 根据ID获取单个代理
 * @description 通过代理ID从数据库中获取特定代理的详细信息
 * @param id - 代理的唯一标识符
 * @returns 代理对象，如果不存在则返回null
 */

const getAgentById = async (
  id: string
): Promise<z.infer<(typeof agentRoutes)["getAgentById"]["responseSchema"]>> => {
  const agent = await prisma.agent.findUnique({
    where: {
      id
    },

    include: {
      ...agentGroupsInclude,

      topics: true
    }
  });

  return agent;
};

/**
 * 根据分组名称获取代理列表
 * @description 通过 AgentGroup.name 关联查询属于该分组的所有代理
 * @param groupName - 分组名称（AgentGroup.name）
 */
const getAgentByGroup = async (
  groupId: string
): Promise<
  z.infer<(typeof agentRoutes)["getAgentByGroup"]["responseSchema"]>
> => {
  const agents = await prisma.agent.findMany({
    where: {
      groups: {
        some: {
          agentGroup: {
            id: groupId
          }
        }
      }
    },
    include: {
      groups: {
        select: {
          agentGroup: { select: { id: true, name: true, label: true } }
        }
      }
    }
  });

  return agents;
};

/**
 * 获取所有有关联代理的分组
 * @description 从 AgentGroup 表中查询所有至少有一个关联代理的分组
 * @returns 分组对象数组
 */
const getAgentGroups = async (): Promise<
  z.infer<(typeof agentRoutes)["getAgentGroups"]["responseSchema"]>
> => {
  const groups = await prisma.agentGroup.findMany({
    where: {
      agents: { some: {} }
    },
    orderBy: { name: "asc" }
  });

  return groups;
};

/**
 * 创建新代理
 * @description 在数据库中创建一个新的代理记录
 * @param agent - 包含代理信息的对象，包括名称、描述、提示词等必要字段
 * @returns 新创建的代理对象，包含生成的ID和时间戳
 */

const createAgent = async (
  agent: CreateAgentInput
): Promise<z.infer<(typeof agentRoutes)["createAgent"]["responseSchema"]>> => {
  const newAgent = await prisma.agent.create({
    data: {
      ...agent,

      createdAt: new Date(),

      updatedAt: new Date()
    } as Parameters<typeof prisma.agent.create>[0]["data"],

    include: {
      ...agentGroupsInclude,
      topics: true
    }
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

const updateAgent = async (
  id: string,
  agent: UpdateAgentInput
): Promise<z.infer<(typeof agentRoutes)["updateAgent"]["responseSchema"]>> => {
  const updatedAgent = await prisma.agent.update({
    where: {
      id
    },

    data: {
      ...agent,

      updatedAt: new Date()
    },

    include: {
      ...agentGroupsInclude,
      topics: true
    }
  });

  return updatedAgent;
};

/**
 * 删除代理
 * @description 根据代理ID从数据库中删除指定的代理
 * @param id - 要删除的代理的唯一标识符
 * @returns 被删除的代理对象
 */

const deleteAgent = async (
  id: string
): Promise<z.infer<(typeof agentRoutes)["deleteAgent"]["responseSchema"]>> => {
  const deletedAgent = await prisma.agent.delete({
    where: {
      id
    }
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
      id: agentId
    },

    include: {
      ...agentGroupsInclude
    }
  });

  return agent;
};

// ─── AgentGroup CRUD ────────────────────────────────

/**
 * 创建新的智能体分组
 * @param input - 包含分组名称和标签的对象
 */
const createAgentGroup = async (
  input: CreateAgentGroupInput
): Promise<
  z.infer<(typeof agentRoutes)["createAgentGroup"]["responseSchema"]>
> => {
  return prisma.agentGroup.create({
    data: {
      ...input,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  });
};

/**
 * 更新智能体分组信息
 * @param id - 分组ID
 * @param input - 包含更新信息的对象
 */
const updateAgentGroup = async (
  id: string,
  input: UpdateAgentGroupInput
): Promise<
  z.infer<(typeof agentRoutes)["updateAgentGroup"]["responseSchema"]>
> => {
  const data = Object.fromEntries(
    Object.entries(input).filter(([_, v]) => v !== undefined)
  );
  return prisma.agentGroup.update({
    where: { id },
    data: { ...data, updatedAt: new Date() }
  });
};

/**
 * 删除智能体分组
 * @param id - 分组ID
 * @throws 如果分组下还有智能体，拒绝删除
 */
const deleteAgentGroup = async (
  id: string
): Promise<
  z.infer<(typeof agentRoutes)["deleteAgentGroup"]["responseSchema"]>
> => {
  const group = await prisma.agentGroup.findUnique({
    where: { id },
    include: { agents: { take: 1 } }
  });

  if (!group) {
    throw new Error("分组不存在");
  }

  if (group.agents.length > 0) {
    throw new Error("该分组下还有智能体，无法删除");
  }

  return prisma.agentGroup.delete({ where: { id } });
};

// ─── Agent-Group 关系管理 ────────────────────────────

/**
 * 将智能体添加到分组
 * @param agentId - 智能体ID
 * @param groupId - 分组ID
 */
const addAgentToGroup = async (
  agentId: string,
  groupId: string
): Promise<
  z.infer<(typeof agentRoutes)["addAgentToGroup"]["responseSchema"]>
> => {
  const agent = await prisma.agent.findUnique({ where: { id: agentId } });
  if (!agent) {
    throw new Error("智能体不存在");
  }

  const group = await prisma.agentGroup.findUnique({
    where: { id: groupId }
  });
  if (!group) {
    throw new Error("分组不存在");
  }

  await prisma.agentAgentGroup.create({
    data: { agentId, agentGroupId: groupId }
  });

  return prisma.agent.findUnique({
    where: { id: agentId },
    include: { ...agentGroupsInclude, topics: true }
  });
};

/**
 * 将智能体从分组中移除
 * @param agentId - 智能体ID
 * @param groupId - 分组ID
 */
const removeAgentFromGroup = async (
  agentId: string,
  groupId: string
): Promise<
  z.infer<(typeof agentRoutes)["removeAgentFromGroup"]["responseSchema"]>
> => {
  await prisma.agentAgentGroup.delete({
    where: { agentId_agentGroupId: { agentId, agentGroupId: groupId } }
  });

  return prisma.agent.findUnique({
    where: { id: agentId },
    include: { ...agentGroupsInclude, topics: true }
  });
};

/**
 * Prisma 数据库操作返回类型
 */

export type AgentsListResult = AsyncReturnType<typeof getAgents>;

export type AgentDetailResult = AsyncReturnType<typeof getAgentById>;

export type AgentCreateResult = AsyncReturnType<typeof createAgent>;

export type AgentUpdateResult = AsyncReturnType<typeof updateAgent>;

export type AgentDeleteResult = AsyncReturnType<typeof deleteAgent>;

export type AgentsByGroupResult = AsyncReturnType<typeof getAgentByGroup>;

export type AgentGroupsResult = Awaited<ReturnType<typeof getAgentGroups>>;

export type { CreateAgentInput, CreateAgentGroupInput, UpdateAgentGroupInput };

export {
  getAgents,
  getAgentById,
  getAgentByGroup,
  getAgentGroups,
  createAgent,
  updateAgent,
  deleteAgent,
  getAgentWithSettingsByAgentId,
  createAgentGroup,
  updateAgentGroup,
  deleteAgentGroup,
  addAgentToGroup,
  removeAgentFromGroup
};
