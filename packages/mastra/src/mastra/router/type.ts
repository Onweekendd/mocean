import z from "zod";

import { PREFIX } from "../api/base-client";
import {
  AgentResponseSchema,
  AgentWithSettingsResponseSchema,
  AgentsResponseSchema
} from "../schema/agent";
import {
  AssistantFullResponseSchema,
  AssistantResponseSchema,
  AssistantWithModelsResponseSchema,
  AssistantsResponseSchema
} from "../schema/assistant";
import {
  GroupResponseSchema,
  GroupWithModelsResponseSchema,
  GroupsResponseSchema
} from "../schema/group";
import {
  CreateManyModelsResponseSchema,
  ModelProviderRelationResponseSchema,
  ModelResponseSchema,
  ModelWithProvidersResponseSchema,
  ModelsResponseSchema
} from "../schema/model";
import {
  ProviderResponseSchema,
  ProviderWithModelsResponseSchema,
  ProvidersResponseSchema,
  ProvidersWithModelsResponseSchema
} from "../schema/provider";

export const providerRoutes = {
  // 基础版本
  getProviders: {
    path: `${PREFIX}/providers`,
    responseSchema: ProvidersResponseSchema
  },
  getEnabledProviders: {
    path: `${PREFIX}/providers/enabled`,
    responseSchema: ProvidersResponseSchema
  },
  getProviderById: {
    path: `${PREFIX}/providers/:id`,
    responseSchema: ProviderResponseSchema.nullable()
  },
  getProvidersByType: {
    path: `${PREFIX}/providers/type/:type`,
    responseSchema: ProvidersResponseSchema
  },
  getProvidersByModel: {
    path: `${PREFIX}/providers/by-model/:modelId`,
    responseSchema: ProvidersResponseSchema
  },
  // WithModels 版本
  getProvidersWithModels: {
    path: `${PREFIX}/providers/with-models`,
    responseSchema: ProvidersWithModelsResponseSchema
  },
  getEnabledProvidersWithModels: {
    path: `${PREFIX}/providers/enabled/with-models`,
    responseSchema: ProvidersWithModelsResponseSchema
  },
  getProviderWithModelsById: {
    path: `${PREFIX}/providers/:id/with-models`,
    responseSchema: ProviderWithModelsResponseSchema.nullable()
  },
  getProvidersByTypeWithModels: {
    path: `${PREFIX}/providers/type/:type/with-models`,
    responseSchema: ProvidersWithModelsResponseSchema
  },
  getProvidersByModelWithModels: {
    path: `${PREFIX}/providers/by-model/:modelId/with-models`,
    responseSchema: ProvidersWithModelsResponseSchema
  },
  // 写操作
  createProvider: {
    path: `${PREFIX}/providers`,
    responseSchema: ProviderWithModelsResponseSchema
  },
  updateProvider: {
    path: `${PREFIX}/providers/:id`,
    responseSchema: ProviderWithModelsResponseSchema
  },
  deleteProvider: {
    path: `${PREFIX}/providers/:id`,
    responseSchema: ProviderResponseSchema
  },
  toggleProviderEnabled: {
    path: `${PREFIX}/providers/:id/toggle`,
    responseSchema: ProviderWithModelsResponseSchema
  }
} as const;

export const modelRoutes = {
  // 基础版本
  getModels: {
    path: `${PREFIX}/models`,
    responseSchema: ModelsResponseSchema
  },
  getModelById: {
    path: `${PREFIX}/models/:id`,
    responseSchema: ModelResponseSchema.nullable()
  },
  getModelsByProvider: {
    path: `${PREFIX}/models/by-provider/:providerId`,
    responseSchema: ModelsResponseSchema
  },
  getModelsByGroup: {
    path: `${PREFIX}/models/group/:group`,
    responseSchema: ModelsResponseSchema
  },
  // WithProviders 版本
  getModelsWithProviders: {
    path: `${PREFIX}/models/with-providers`,
    responseSchema: z.array(ModelWithProvidersResponseSchema)
  },
  getModelWithProvidersById: {
    path: `${PREFIX}/models/:id/with-providers`,
    responseSchema: ModelWithProvidersResponseSchema.nullable()
  },
  getModelsByProviderWithProviders: {
    path: `${PREFIX}/models/by-provider/:providerId/with-providers`,
    responseSchema: z.array(ModelWithProvidersResponseSchema)
  },
  getModelsByGroupWithProviders: {
    path: `${PREFIX}/models/group/:group/with-providers`,
    responseSchema: z.array(ModelWithProvidersResponseSchema)
  },
  // 写操作
  createModel: {
    path: `${PREFIX}/models`,
    responseSchema: ModelWithProvidersResponseSchema
  },
  createManyModels: {
    path: `${PREFIX}/models/batch`,
    responseSchema: CreateManyModelsResponseSchema
  },
  updateModel: {
    path: `${PREFIX}/models/:id`,
    responseSchema: ModelWithProvidersResponseSchema
  },
  deleteModel: {
    path: `${PREFIX}/models/:id`,
    responseSchema: ModelResponseSchema
  },
  // 关联操作
  addModelProviderRelation: {
    path: `${PREFIX}/models/relations`,
    responseSchema: ModelProviderRelationResponseSchema
  },
  removeModelProviderRelation: {
    path: `${PREFIX}/models/relations`,
    responseSchema: ModelProviderRelationResponseSchema
  },
  getModelProviderRelations: {
    path: `${PREFIX}/models/:id/relations`,
    responseSchema: z.array(ModelProviderRelationResponseSchema)
  }
} as const;

export const groupRoutes = {
  getGroupsByProvider: {
    path: `${PREFIX}/groups/provider/:providerId`,
    responseSchema: GroupsResponseSchema
  },
  getGroupById: {
    path: `${PREFIX}/groups/:id`,
    responseSchema: GroupWithModelsResponseSchema.nullable()
  },
  createGroup: {
    path: `${PREFIX}/groups`,
    responseSchema: GroupWithModelsResponseSchema
  },
  updateGroup: {
    path: `${PREFIX}/groups/:id`,
    responseSchema: GroupWithModelsResponseSchema
  },
  deleteGroup: {
    path: `${PREFIX}/groups/:id`,
    responseSchema: GroupResponseSchema
  }
} as const;

export const assistantRoutes = {
  getAssistants: {
    path: `${PREFIX}/assistants`,
    responseSchema: AssistantsResponseSchema
  },
  getAssistantById: {
    path: `${PREFIX}/assistants/:assistantId`,
    responseSchema: AssistantFullResponseSchema.nullable()
  },
  createAssistant: {
    path: `${PREFIX}/assistants`,
    responseSchema: AssistantWithModelsResponseSchema
  },
  updateAssistant: {
    path: `${PREFIX}/assistants/:assistantId`,
    responseSchema: AssistantWithModelsResponseSchema
  },
  deleteAssistant: {
    path: `${PREFIX}/assistants/:assistantId`,
    responseSchema: AssistantResponseSchema
  },
  chatWithAssistant: {
    path: `${PREFIX}/assistants/chat`,
    responseSchema: z.any() // SSE 流式响应
  },
  getAssistantThreads: {
    path: `${PREFIX}/assistants/history/:assistantId`,
    responseSchema: z.any() // Thread 数组
  },
  getAssistantUIMessageByThreadId: {
    path: `${PREFIX}/assistants/messages/:assistantId/:threadId`,
    responseSchema: z.any() // 消息数组
  }
} as const;

export const agentRoutes = {
  getAgents: {
    path: `${PREFIX}/agents`,
    responseSchema: AgentsResponseSchema
  },
  getAgentById: {
    path: `${PREFIX}/agents/:id`,
    responseSchema: AgentWithSettingsResponseSchema.nullable()
  },
  createAgent: {
    path: `${PREFIX}/agents`,
    responseSchema: AgentWithSettingsResponseSchema
  },
  updateAgent: {
    path: `${PREFIX}/agents/:id`,
    responseSchema: AgentWithSettingsResponseSchema
  },
  deleteAgent: {
    path: `${PREFIX}/agents/:id`,
    responseSchema: AgentResponseSchema
  },
  getAgentByGroup: {
    path: `${PREFIX}/agents/group/:group`,
    responseSchema: AgentsResponseSchema.nullable()
  }
} as const;
