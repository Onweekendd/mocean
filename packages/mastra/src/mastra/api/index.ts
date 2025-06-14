import { agentsApiMethods, useAgentsApi } from "./agents-client";
import { assistantsApiMethods, useAssistantsApi } from "./assistants-client";

export { BASE_URL } from "./base-client";

/**
 * API 客户端统一导出
 * @description 提供所有API客户端的统一入口
 */

// 基础API客户端
export {
  BaseApiClient,
  type ApiResponse,
  type ApiClientConfig,
} from "./base-client";

// 代理相关API
export {
  AgentsApiClient,
  agentsApi,
  agentsApiMethods,
  useAgentsApi,
  type AgentInput,
} from "./agents-client";

// 助手相关API
export {
  AssistantsApiClient,
  assistantsApi,
  assistantsApiMethods,
  useAssistantsApi,
  type AssistantInput,
} from "./assistants-client";

/**
 * 所有API方法的统一导出
 * @description 方便前端一次性导入所有API方法
 */
export const api = {
  agents: agentsApiMethods,
  assistants: assistantsApiMethods,
};

/**
 * 所有React Hook的统一导出
 * @description 方便React应用统一管理API调用
 */
export const useApi = () => ({
  agents: useAgentsApi(),
  assistants: useAssistantsApi(),
});

/**
 * 前端使用示例：
 *
 * 1. 导入特定API：
 * ```typescript
 * import { agentsApiMethods } from '@mastra/api';
 *
 * const { data, error } = await agentsApiMethods.getAgents();
 * ```
 *
 * 2. 导入统一API对象：
 * ```typescript
 * import { api } from '@mastra/api';
 *
 * const { data, error } = await api.agents.getAgents();
 * ```
 *
 * 3. React Hook方式：
 * ```typescript
 * import { useApi } from '@mastra/api';
 *
 * function MyComponent() {
 *   const { agents } = useApi();
 *
 *   const handleGetAgents = async () => {
 *     const { data, error } = await agents.getAgents();
 *   };
 * }
 * ```
 *
 * 4. 类型安全的创建操作：
 * ```typescript
 * import { api, type AgentInput } from '@mastra/api';
 *
 * const newAgentData: AgentInput = {
 *   name: "新代理",
 *   description: "描述",
 *   prompt: "提示词",
 *   type: "general",
 *   emoji: "🤖",
 *   enableWebSearch: true,
 *   enableGenerateImage: false,
 *   knowledgeRecognition: true
 * };
 *
 * const { data, error } = await api.agents.createAgent(newAgentData);
 * ```
 */
