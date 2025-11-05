import { agentsApiMethods, useAgentsApi } from "./agents-client";
import { assistantsApiMethods, useAssistantsApi } from "./assistants-client";
import { modelsApiMethods, useModelsApi } from "./models-client";
import { providersApiMethods, useProvidersApi } from "./providers-client";

export { API_URL } from "./base-client";

export { StorageThreadType } from "@mastra/core";

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
  type AgentsListResult,
  type AgentDetailResult,
  type AgentCreateResult,
  type AgentUpdateResult,
  type AgentDeleteResult,
  type AgentsByGroupResult,
} from "./agents-client";

// 助手相关API
export {
  AssistantsApiClient,
  assistantsApi,
  assistantsApiMethods,
  useAssistantsApi,
  type AssistantsListResult,
  type AssistantDetailResult,
  type AssistantCreateResult,
  type AssistantUpdateResult,
  type AssistantDeleteResult,
  type AssistantThreadsResult,
  type AssistantUIMessagesResult,
} from "./assistants-client";

// 提供商相关API
export {
  ProvidersApiClient,
  providersApi,
  providersApiMethods,
  useProvidersApi,
  type ProviderInput,
  type ProvidersListResult,
  type EnabledProvidersResult,
  type ProviderDetailResult,
  type ProvidersByTypeResult,
  type ProvidersByModelResult,
  type ProviderCreateResult,
  type ProviderUpdateResult,
  type ProviderDeleteResult,
  type ProviderToggleResult,
} from "./providers-client";

// 模型相关API
export {
  ModelsApiClient,
  modelsApi,
  modelsApiMethods,
  useModelsApi,
  type ModelInput,
  type ModelCreateInput,
  type BatchCreateResult,
  type ModelsListResult,
  type ModelDetailResult,
  type ModelsByProviderResult,
  type ModelsByTypeResult,
  type ModelsByGroupResult,
  type ModelCreateResult,
  type ModelUpdateResult,
  type ModelDeleteResult,
  type ModelsBatchCreateResult,
  type ModelProviderRelationAddResult,
  type ModelProviderRelationRemoveResult,
  type ModelProviderRelationsResult,
} from "./models-client";

/**
 * 所有API方法的统一导出
 * @description 方便前端一次性导入所有API方法
 */
export const api = {
  agents: agentsApiMethods,
  assistants: assistantsApiMethods,
  providers: providersApiMethods,
  models: modelsApiMethods,
};

/**
 * 所有React Hook的统一导出
 * @description 方便React应用统一管理API调用
 */
export const useApi = () => ({
  agents: useAgentsApi(),
  assistants: useAssistantsApi(),
  providers: useProvidersApi(),
  models: useModelsApi(),
});
