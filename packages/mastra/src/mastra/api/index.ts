import { agentsApiMethods, useAgentsApi } from "./agents-client";
import { assistantsApiMethods, useAssistantsApi } from "./assistants-client";
import { groupsApiMethods, useGroupsApi } from "./groups-client";
import { modelsApiMethods, useModelsApi } from "./models-client";
import { providersApiMethods, useProvidersApi } from "./providers-client";

export { API_URL } from "./base-client";

export { type StorageThreadType } from "@mastra/core/memory";

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
} from "./agents-client";

// 代理类型
export {
  type CreateAgentInput,
  type UpdateAgentInput,
  type AgentsListResult,
  type AgentDetailResult,
  type AgentCreateResult,
  type AgentUpdateResult,
  type AgentDeleteResult,
  type AgentsByGroupResult,
} from "../server/agent";

// 助手相关API
export {
  AssistantsApiClient,
  assistantsApi,
  assistantsApiMethods,
  useAssistantsApi,
} from "./assistants-client";

// 助手类型
export {
  type CreateAssistantInput,
  type UpdateAssistantInput,
  type AssistantsListResult,
  type AssistantDetailResult,
  type AssistantCreateResult,
  type AssistantUpdateResult,
  type AssistantDeleteResult,
  type AssistantThreadsResult,
  type AssistantUIMessagesResult,
} from "../server/assistant";

// 分组相关API
export {
  GroupsApiClient,
  groupsApi,
  groupsApiMethods,
  useGroupsApi,
} from "./groups-client";

// 分组类型
export {
  type CreateGroupInput,
  type UpdateGroupInput,
  type GroupsByProviderResult,
  type GroupDetailResult,
  type GroupCreateResult,
  type GroupUpdateResult,
  type GroupDeleteResult,
} from "../server/group";

// 提供商相关API
export {
  ProvidersApiClient,
  providersApi,
  providersApiMethods,
  useProvidersApi,
} from "./providers-client";

// 提供商类型
export {
  type CreateProviderInput,
  type UpdateProviderInput,
  type ProvidersListResult,
  type EnabledProvidersResult,
  type ProviderDetailResult,
  type ProvidersByTypeResult,
  type ProvidersByModelResult,
  type ProviderCreateResult,
  type ProviderUpdateResult,
  type ProviderDeleteResult,
  type ProviderToggleResult,
} from "../server/provider";

// 模型相关API
export {
  ModelsApiClient,
  modelsApi,
  modelsApiMethods,
  useModelsApi,
} from "./models-client";

// 模型类型
export {
  type CreateModelInput,
  type UpdateModelInput,
  type ModelsListResult,
  type ModelDetailResult,
  type ModelsByProviderResult,
  type ModelsByGroupResult,
  type ModelCreateResult,
  type ModelUpdateResult,
  type ModelDeleteResult,
  type ModelsBatchCreateResult,
  type ModelProviderRelation,
  type ModelProviderRelationAddResult,
  type ModelProviderRelationRemoveResult,
  type ModelProviderRelationsResult,
} from "../server/model";

/**
 * 所有API方法的统一导出
 * @description 方便前端一次性导入所有API方法
 */
export const api = {
  agents: agentsApiMethods,
  assistants: assistantsApiMethods,
  groups: groupsApiMethods,
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
  groups: useGroupsApi(),
  providers: useProvidersApi(),
  models: useModelsApi(),
});
