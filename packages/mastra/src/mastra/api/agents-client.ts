/// <reference lib="dom" />
import type {
  AgentCreateResult,
  AgentDeleteResult,
  AgentDetailResult,
  AgentUpdateResult,
  AgentsByGroupResult,
  AgentsListResult,
  CreateAgentInput,
  UpdateAgentInput
} from "../server/agent";
import type { ApiClientConfig, ApiResponse } from "./base-client";
import { BaseApiClient } from "./base-client";

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
    agentData: CreateAgentInput
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
    agentData: UpdateAgentInput
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
    group: string
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
  createAgent: (agentData: CreateAgentInput) =>
    agentsApi.createAgent(agentData),

  /**
   * 更新代理
   * @param id - 代理ID
   * @param agentData - 更新数据
   */
  updateAgent: (id: string, agentData: UpdateAgentInput) =>
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
  getAgentByGroup: (group: string) => agentsApi.getAgentByGroup(group)
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
    getAgents: agentsApiMethods.getAgents,
    getAgentById: agentsApiMethods.getAgentById,
    createAgent: agentsApiMethods.createAgent,
    updateAgent: agentsApiMethods.updateAgent,
    deleteAgent: agentsApiMethods.deleteAgent,
    getAgentByGroup: agentsApiMethods.getAgentByGroup
  };
};
