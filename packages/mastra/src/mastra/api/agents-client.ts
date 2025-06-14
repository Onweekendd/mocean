/// <reference lib="dom" />
import { AgentModel } from "generated/prisma/models";

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
  async getAgents(): Promise<ApiResponse<AgentModel[]>> {
    return this.get<AgentModel[]>("/agents");
  }

  /**
   * 根据ID获取单个代理
   * @description 通过代理ID获取特定代理的详细信息
   * @param id - 代理的唯一标识符
   */
  async getAgentById(id: string): Promise<ApiResponse<AgentModel>> {
    return this.get<AgentModel>(`/agents/${id}`);
  }

  /**
   * 创建新代理
   * @description 在系统中创建一个新的代理
   * @param agentData - 代理信息对象
   */
  async createAgent(agentData: AgentInput): Promise<ApiResponse<AgentModel>> {
    return this.post<AgentModel>("/agents", agentData);
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
  ): Promise<ApiResponse<AgentModel>> {
    return this.put<AgentModel>(`/agents/${id}`, agentData);
  }

  /**
   * 删除代理
   * @description 删除指定的代理
   * @param id - 代理的唯一标识符
   */
  async deleteAgent(id: string): Promise<ApiResponse<AgentModel>> {
    return this.delete<AgentModel>(`/agents/${id}`);
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
};

/**
 * React Hook 风格的 API 调用方法
 * @description 适用于 React 应用的 Hook 风格调用
 */
export const useAgentsApi = () => {
  return {
    getAgents: agentsApi.getAgents.bind(agentsApi),
    getAgentById: agentsApi.getAgentById.bind(agentsApi),
    createAgent: agentsApi.createAgent.bind(agentsApi),
    updateAgent: agentsApi.updateAgent.bind(agentsApi),
    deleteAgent: agentsApi.deleteAgent.bind(agentsApi),
  };
};

/**
 * 使用示例：
 *
 * 1. 类实例方式：
 * ```typescript
 * import { AgentsApiClient } from '@/api/agents-client';
 *
 * const client = new AgentsApiClient({
 *   baseUrl: 'http://localhost:4111',
 *   headers: { 'Authorization': 'Bearer token' }
 * });
 *
 * const { data, error } = await client.getAgents();
 * if (error) {
 *   console.error('获取代理失败:', error);
 * } else {
 *   console.log('代理列表:', data);
 * }
 * ```
 *
 * 2. 函数式调用：
 * ```typescript
 * import { agentsApiMethods } from '@/api/agents-client';
 *
 * const { data, error } = await agentsApiMethods.getAgents();
 * ```
 *
 * 3. React Hook 方式：
 * ```typescript
 * import { useAgentsApi } from '@/api/agents-client';
 *
 * function MyComponent() {
 *   const api = useAgentsApi();
 *
 *   const handleGetAgents = async () => {
 *     const { data, error } = await api.getAgents();
 *     // 处理结果
 *   };
 * }
 * ```
 *
 * 4. 创建代理示例：
 * ```typescript
 * const newAgent = await agentsApiMethods.createAgent({
 *   name: "客服助手",
 *   description: "专业的客服代理",
 *   prompt: "你是一个专业的客服助手...",
 *   type: "customer_service",
 *   emoji: "🤖",
 *   enableWebSearch: true,
 *   enableGenerateImage: false,
 *   knowledgeRecognition: true
 * });
 * ```
 */
