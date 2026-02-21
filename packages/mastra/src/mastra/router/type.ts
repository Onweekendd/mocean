import { GroupSchema, ProviderSchema } from "generated/schemas/models";
import { z } from "zod";

import { PREFIX } from "../api/base-client";
import {
  AgentGroupsResponseSchema,
  AgentResponseSchema,
  AgentWithSettingsResponseSchema,
  AgentsResponseSchema,
  createAgentSchema,
  updateAgentSchema
} from "../schema/agent";
import {
  AssistantResponseSchema,
  AssistantWithModelsResponseSchema,
  AssistantsResponseSchema,
  FullAssistantSchema,
  chatWithAssistantSchema,
  createAssistantSchema,
  updateAssistantSchema
} from "../schema/assistant";
import {
  GroupWithModelsResponseSchema,
  createGroupSchema,
  updateGroupSchema
} from "../schema/group";
import {
  CreateManyModelsResponseSchema,
  ModelProviderRelationResponseSchema,
  ModelResponseSchema,
  ModelWithProvidersResponseSchema,
  ModelsResponseSchema,
  createModelSchema,
  modelProviderRelationSchema,
  updateModelSchema
} from "../schema/model";
import {
  ProviderHierarchyArraySchema,
  ProviderHierarchySchema,
  SimpleProvidersArraySchema,
  createProviderSchema,
  updateProviderSchema
} from "../schema/provider";

export const providerRoutes = {
  // 基础版本
  getProviders: {
    path: `${PREFIX}/providers`,
    responseSchema: SimpleProvidersArraySchema
  },
  getEnabledProviders: {
    path: `${PREFIX}/providers/enabled`,
    responseSchema: SimpleProvidersArraySchema
  },
  getProviderById: {
    path: `${PREFIX}/providers/:id`,
    responseSchema: ProviderSchema.nullable()
  },
  getProvidersByType: {
    path: `${PREFIX}/providers/type/:type`,
    responseSchema: SimpleProvidersArraySchema
  },
  getProvidersByModel: {
    path: `${PREFIX}/providers/by-model/:modelId`,
    responseSchema: SimpleProvidersArraySchema
  },
  // WithModels 版本
  getProvidersWithModels: {
    path: `${PREFIX}/providers/with-models`,
    responseSchema: ProviderHierarchyArraySchema
  },
  getEnabledProvidersWithModels: {
    path: `${PREFIX}/providers/enabled/with-models`,
    responseSchema: ProviderHierarchyArraySchema
  },
  getProviderWithModelsById: {
    path: `${PREFIX}/providers/:id/with-models`,
    responseSchema: ProviderHierarchySchema.nullable()
  },
  getProvidersByTypeWithModels: {
    path: `${PREFIX}/providers/type/:type/with-models`,
    responseSchema: ProviderHierarchyArraySchema
  },
  getProvidersByModelWithModels: {
    path: `${PREFIX}/providers/by-model/:modelId/with-models`,
    responseSchema: ProviderHierarchyArraySchema
  },
  // 写操作
  createProvider: {
    path: `${PREFIX}/providers`,
    requestSchema: createProviderSchema,
    responseSchema: ProviderHierarchySchema
  },
  updateProvider: {
    path: `${PREFIX}/providers/:id`,
    requestSchema: updateProviderSchema,
    responseSchema: ProviderHierarchySchema
  },
  deleteProvider: {
    path: `${PREFIX}/providers/:id`,
    responseSchema: ProviderSchema
  },
  toggleProviderEnabled: {
    path: `${PREFIX}/providers/:id/toggle`,
    responseSchema: ProviderHierarchySchema
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
    requestSchema: createModelSchema,
    responseSchema: ModelWithProvidersResponseSchema
  },
  createManyModels: {
    path: `${PREFIX}/models/batch`,
    requestSchema: z.array(createModelSchema),
    responseSchema: CreateManyModelsResponseSchema
  },
  updateModel: {
    path: `${PREFIX}/models/:id`,
    requestSchema: updateModelSchema,
    responseSchema: ModelWithProvidersResponseSchema
  },
  deleteModel: {
    path: `${PREFIX}/models/:id`,
    responseSchema: ModelResponseSchema
  },
  // 关联操作
  addModelProviderRelation: {
    path: `${PREFIX}/models/relations`,
    requestSchema: modelProviderRelationSchema,
    responseSchema: ModelProviderRelationResponseSchema
  },
  removeModelProviderRelation: {
    path: `${PREFIX}/models/relations`,
    requestSchema: modelProviderRelationSchema.pick({
      modelId: true,
      providerId: true
    }),
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
    responseSchema: z.array(GroupSchema)
  },
  getGroupById: {
    path: `${PREFIX}/groups/:id`,
    responseSchema: GroupWithModelsResponseSchema.nullable()
  },
  createGroup: {
    path: `${PREFIX}/groups`,
    requestSchema: createGroupSchema,
    responseSchema: GroupSchema
  },
  updateGroup: {
    path: `${PREFIX}/groups/:id`,
    requestSchema: updateGroupSchema,
    responseSchema: GroupSchema
  },
  deleteGroup: {
    path: `${PREFIX}/groups/:id`,
    responseSchema: GroupSchema
  }
} as const;

export const assistantRoutes = {
  getAssistants: {
    path: `${PREFIX}/assistants`,
    responseSchema: AssistantsResponseSchema
  },
  getAssistantById: {
    path: `${PREFIX}/assistants/:assistantId`,
    responseSchema: FullAssistantSchema.nullable()
  },
  createAssistant: {
    path: `${PREFIX}/assistants`,
    requestSchema: createAssistantSchema,
    responseSchema: AssistantWithModelsResponseSchema
  },
  updateAssistant: {
    path: `${PREFIX}/assistants/:assistantId`,
    requestSchema: updateAssistantSchema,
    responseSchema: AssistantWithModelsResponseSchema
  },
  deleteAssistant: {
    path: `${PREFIX}/assistants/:assistantId`,
    responseSchema: AssistantResponseSchema
  },
  chatWithAssistant: {
    path: `${PREFIX}/assistants/chat`,
    requestSchema: chatWithAssistantSchema,
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
  getAgentGroups: {
    path: `${PREFIX}/agents/groups`,
    responseSchema: AgentGroupsResponseSchema
  },
  getAgentById: {
    path: `${PREFIX}/agents/:id`,
    responseSchema: AgentWithSettingsResponseSchema.nullable()
  },
  createAgent: {
    path: `${PREFIX}/agents`,
    requestSchema: createAgentSchema,
    responseSchema: AgentWithSettingsResponseSchema
  },
  updateAgent: {
    path: `${PREFIX}/agents/:id`,
    requestSchema: updateAgentSchema,
    responseSchema: AgentWithSettingsResponseSchema
  },
  deleteAgent: {
    path: `${PREFIX}/agents/:id`,
    responseSchema: AgentResponseSchema
  },
  getAgentByGroup: {
    path: `${PREFIX}/agents/group/:groupId`,
    responseSchema: AgentsResponseSchema.nullable()
  }
} as const;
