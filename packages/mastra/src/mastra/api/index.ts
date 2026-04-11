import { agentsApiMethods, useAgentsApi } from "./agents-client";
import { assistantsApiMethods, useAssistantsApi } from "./assistants-client";
import { groupsApiMethods, useGroupsApi } from "./groups-client";
import { mcpApiMethods, useMcpApi } from "./mcp-client";
import { modelsApiMethods, useModelsApi } from "./models-client";
import { providersApiMethods, useProvidersApi } from "./providers-client";

// 显式导入并重新导出 JSON 类型，确保它们在类型定义文件中被正确导出
export type {
  JsonObject,
  JsonArray,
  JsonValue
} from "@mocean/mastra/json-types";

export { API_URL, BASE_URL } from "./base-client";

export { type StorageThreadType } from "@mastra/core/memory";

/**
 * API 客户端统一导出
 * @description 提供所有API客户端的统一入口
 */

// 基础API客户端
export {
  BaseApiClient,
  type ApiResponse,
  type ApiClientConfig
} from "./base-client";

// 代理相关API
export {
  AgentsApiClient,
  agentsApi,
  agentsApiMethods,
  useAgentsApi
} from "./agents-client";

// 助手相关API
export {
  AssistantsApiClient,
  assistantsApi,
  assistantsApiMethods,
  useAssistantsApi
} from "./assistants-client";

// 分组相关API
export {
  GroupsApiClient,
  groupsApi,
  groupsApiMethods,
  useGroupsApi
} from "./groups-client";

// 提供商相关API
export {
  ProvidersApiClient,
  providersApi,
  providersApiMethods,
  useProvidersApi
} from "./providers-client";

// 模型相关API
export {
  ModelsApiClient,
  modelsApi,
  modelsApiMethods,
  useModelsApi
} from "./models-client";

// MCP相关API
export { McpApiClient, mcpApi, mcpApiMethods, useMcpApi } from "./mcp-client";

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
  mcp: mcpApiMethods
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
  mcp: useMcpApi()
});
