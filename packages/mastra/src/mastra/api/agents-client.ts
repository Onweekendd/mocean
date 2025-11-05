/// <reference lib="dom" />
import { AgentModel } from "generated/prisma/models";

import {
  createAgent as createAgentPrisma,
  deleteAgent as deleteAgentPrisma,
  getAgentByGroup as getAgentByGroupPrisma,
  getAgentById as getAgentByIdPrisma,
  getAgents as getAgentsPrisma,
  updateAgent as updateAgentPrisma,
} from "../prisma/agent";
import { ApiClientConfig, ApiResponse, BaseApiClient } from "./base-client";

/**
 * 代理创建和更新的输入类型
 */
export type AgentInput = Pick<
  AgentModel,
  | "name"
  | "description"
  | "prompt"
  | "type"
  | "emoji"
  | "groupJson"
  | "enableWebSearch"
  | "webSearchProviderId"
  | "enableGenerateImage"
  | "knowledgeRecognition"
>;

/**
 * Prisma 数据库操作返回类型
 */
export type AgentsListResult = Awaited<ReturnType<typeof getAgentsPrisma>>;
export type AgentDetailResult = Awaited<ReturnType<typeof getAgentByIdPrisma>>;
export type AgentCreateResult = Awaited<ReturnType<typeof createAgentPrisma>>;
export type AgentUpdateResult = Awaited<ReturnType<typeof updateAgentPrisma>>;
export type AgentDeleteResult = Awaited<ReturnType<typeof deleteAgentPrisma>>;
export type AgentsByGroupResult = Awaited<
  ReturnType<typeof getAgentByGroupPrisma>
>;

/**
 * 代理 API 客户端类
 * @description 提供类型安全的代理相关 API 调用方法
 */
export class AgentsApiClient extends BaseApiClient {
  constructor(config: ApiClientConfig = {}) {
    super(config);
  }

  /**
   * 获取所有代理
   * @description 获取系统中所有可用的代理列表
   */
  async getAgents(): Promise<ApiResponse<AgentsListResult>> {
    return this.get<AgentsListResult>("/agents");
  }

  /**
   * 根据ID获取单个代理
   * @description 通过代理ID获取特定代理的详细信息
   * @param id - 代理的唯一标识符
   */
  async getAgentById(id: string): Promise<ApiResponse<AgentDetailResult>> {
    return this.get<AgentDetailResult>(`/agents/${id}`);
  }

  /**
   * 创建新代理
   * @description 在系统中创建一个新的代理
   * @param agentData - 代理信息对象
   */
  async createAgent(
    agentData: AgentInput,
  ): Promise<ApiResponse<AgentCreateResult>> {
    return this.post<AgentCreateResult>("/agents", agentData);
  }

  /**
   * 更新代理信息
   * @description 更新指定代理的信息
   * @param id - 代理的唯一标识符
   * @param agentData - 更新的代理信息
   */
  async updateAgent(
    id: string,
    agentData: Partial<AgentInput>,
  ): Promise<ApiResponse<AgentUpdateResult>> {
    return this.put<AgentUpdateResult>(`/agents/${id}`, agentData);
  }

  /**
   * 删除代理
   * @description 删除指定的代理
   * @param id - 代理的唯一标识符
   */
  async deleteAgent(id: string): Promise<ApiResponse<AgentDeleteResult>> {
    return this.delete<AgentDeleteResult>(`/agents/${id}`);
  }

  /**
   * 根据分组获取代理
   * @description 根据分组获取代理
   * @param group - 分组
   */
  async getAgentByGroup(
    group: string,
  ): Promise<ApiResponse<AgentsByGroupResult>> {
    return this.get<AgentsByGroupResult>(`/agents/group/${group}`);
  }
}

/**
 * 默认的代理 API 客户端实例
 */
export const agentsApi = new AgentsApiClient();

/**
 * 便捷的函数式 API 调用方法
 * @description 提供更简洁的函数调用方式
 */
export const agentsApiMethods = {
  /**
   * 获取所有代理
   */
  getAgents: () => agentsApi.getAgents(),

  /**
   * 根据ID获取代理
   * @param id - 代理ID
   */
  getAgentById: (id: string) => agentsApi.getAgentById(id),

  /**
   * 创建代理
   * @param agentData - 代理数据
   */
  createAgent: (agentData: AgentInput) => agentsApi.createAgent(agentData),

  /**
   * 更新代理
   * @param id - 代理ID
   * @param agentData - 更新数据
   */
  updateAgent: (id: string, agentData: Partial<AgentInput>) =>
    agentsApi.updateAgent(id, agentData),

  /**
   * 删除代理
   * @param id - 代理ID
   */
  deleteAgent: (id: string) => agentsApi.deleteAgent(id),

  /**
   * 根据分组获取代理
   * @param group - 分组
   */
  getAgentByGroup: (group: string) => agentsApi.getAgentByGroup(group),
};

/**
 * React Hook 风格的 API 调用方法返回类型
 * @description 从 AgentsApiClient 类中提取方法类型，自动保持类型同步
 */
export type UseAgentsApiReturn = Pick<
  AgentsApiClient,
  | "getAgents"
  | "getAgentById"
  | "createAgent"
  | "updateAgent"
  | "deleteAgent"
  | "getAgentByGroup"
>;

/**
 * React Hook 风格的 API 调用方法
 * @description 适用于 React 应用的 Hook 风格调用
 *
 * @returns 绑定了 this 上下文的 API 方法对象
 *
 * @example
 * const api = useAgentsApi();
 * const response = await api.getAgents();
 */
export const useAgentsApi = (): UseAgentsApiReturn => {
  return {
    getAgents: agentsApi.getAgents.bind(agentsApi),
    getAgentById: agentsApi.getAgentById.bind(agentsApi),
    createAgent: agentsApi.createAgent.bind(agentsApi),
    updateAgent: agentsApi.updateAgent.bind(agentsApi),
    deleteAgent: agentsApi.deleteAgent.bind(agentsApi),
    getAgentByGroup: agentsApi.getAgentByGroup.bind(agentsApi),
  };
};
