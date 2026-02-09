/// <reference lib="dom" />
import type { z } from "zod";

import { agentRoutes } from "../router/agents";
import type { CreateAgentInput, UpdateAgentInput } from "../server/agent";
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
  async getAgents(): Promise<
    ApiResponse<z.infer<(typeof agentRoutes)["getAgents"]["responseSchema"]>>
  > {
    return this.get<
      z.infer<(typeof agentRoutes)["getAgents"]["responseSchema"]>
    >(agentRoutes.getAgents.path);
  }

  /**
   * 根据ID获取单个代理
   * @description 通过代理ID获取特定代理的详细信息
   * @param id - 代理的唯一标识符
   */
  async getAgentById(
    id: string
  ): Promise<
    ApiResponse<z.infer<(typeof agentRoutes)["getAgentById"]["responseSchema"]>>
  > {
    return this.get<
      z.infer<(typeof agentRoutes)["getAgentById"]["responseSchema"]>
    >(agentRoutes.getAgentById.path.replace(":id", id));
  }

  /**
   * 创建新代理
   * @description 在系统中创建一个新的代理
   * @param agent - 包含代理信息的对象
   */
  async createAgent(
    agent: CreateAgentInput
  ): Promise<
    ApiResponse<z.infer<(typeof agentRoutes)["createAgent"]["responseSchema"]>>
  > {
    return this.post<
      z.infer<(typeof agentRoutes)["createAgent"]["responseSchema"]>
    >(agentRoutes.createAgent.path, agent);
  }

  /**
   * 更新代理信息
   * @description 更新指定代理的信息
   * @param id - 代理的唯一标识符
   * @param agent - 包含更新信息的对象
   */
  async updateAgent(
    id: string,
    agent: UpdateAgentInput
  ): Promise<
    ApiResponse<z.infer<(typeof agentRoutes)["updateAgent"]["responseSchema"]>>
  > {
    return this.put<
      z.infer<(typeof agentRoutes)["updateAgent"]["responseSchema"]>
    >(agentRoutes.updateAgent.path.replace(":id", id), agent);
  }

  /**
   * 删除代理
   * @description 删除指定的代理
   * @param id - 代理的唯一标识符
   */
  async deleteAgent(
    id: string
  ): Promise<
    ApiResponse<z.infer<(typeof agentRoutes)["deleteAgent"]["responseSchema"]>>
  > {
    return this.delete<
      z.infer<(typeof agentRoutes)["deleteAgent"]["responseSchema"]>
    >(agentRoutes.deleteAgent.path.replace(":id", id));
  }

  /**
   * 根据分组获取代理
   * @description 根据分组获取代理
   * @param group - 分组
   */
  async getAgentByGroup(
    group: string
  ): Promise<
    ApiResponse<
      z.infer<(typeof agentRoutes)["getAgentByGroup"]["responseSchema"]>
    >
  > {
    return this.get<
      z.infer<(typeof agentRoutes)["getAgentByGroup"]["responseSchema"]>
    >(agentRoutes.getAgentByGroup.path.replace(":group", group));
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
  getAgents: () => agentsApi.getAgents(),
  getAgentById: (id: string) => agentsApi.getAgentById(id),
  createAgent: (agent: CreateAgentInput) => agentsApi.createAgent(agent),
  updateAgent: (id: string, agent: UpdateAgentInput) =>
    agentsApi.updateAgent(id, agent),
  deleteAgent: (id: string) => agentsApi.deleteAgent(id),
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
    getAgents: agentsApi.getAgents.bind(
      agentsApi
    ) as UseAgentsApiReturn["getAgents"],
    getAgentById: agentsApi.getAgentById.bind(
      agentsApi
    ) as UseAgentsApiReturn["getAgentById"],
    createAgent: agentsApi.createAgent.bind(
      agentsApi
    ) as UseAgentsApiReturn["createAgent"],
    updateAgent: agentsApi.updateAgent.bind(
      agentsApi
    ) as UseAgentsApiReturn["updateAgent"],
    deleteAgent: agentsApi.deleteAgent.bind(
      agentsApi
    ) as UseAgentsApiReturn["deleteAgent"],
    getAgentByGroup: agentsApi.getAgentByGroup.bind(
      agentsApi
    ) as UseAgentsApiReturn["getAgentByGroup"]
  };
};
