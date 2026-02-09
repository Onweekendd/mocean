import { createRoute } from "@mastra/server/server-adapter";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";

import { PREFIX } from "../api/base-client";
import {
  ModelResponseSchema,
  ModelWithProvidersResponseSchema,
  ModelsResponseSchema,
  addModelProviderRelation,
  createManyModels,
  createModel,
  createModelSchema,
  deleteModel,
  getModelById,
  getModelProviderRelations,
  getModelWithProvidersById,
  getModels,
  getModelsByGroup,
  getModelsByGroupWithProviders,
  getModelsByProvider,
  getModelsByProviderWithProviders,
  getModelsWithProviders,
  groupParamSchema,
  idParamSchema,
  modelProviderRelationSchema,
  providerParamSchema,
  removeModelProviderRelation,
  updateModel,
  updateModelSchema
} from "../server/model";

// 批量创建响应 Schema
const CreateManyModelsResponseSchema = z.object({
  count: z.number()
});

// 模型提供商关联响应 Schema
const ModelProviderRelationResponseSchema = z.object({
  modelId: z.string(),
  providerId: z.string(),
  groupId: z.string(),
  model: ModelResponseSchema,
  provider: z.any(),
  group: z.any()
});

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

/**
 * 获取所有模型的路由处理器（基础版本）
 * @description 返回系统中所有可用的模型列表，不包含关联信息
 */
const getModelsRouter = createRoute({
  method: "GET",
  path: modelRoutes.getModels.path,
  responseType: "json",
  responseSchema: modelRoutes.getModels.responseSchema,
  summary: "获取所有模型",
  description: "返回系统中所有可用的模型列表，不包含关联信息",
  tags: ["Models"],
  handler: async () => {
    return await getModels();
  }
});

/**
 * 获取所有模型的路由处理器（包含提供商信息）
 * @description 返回系统中所有可用的模型列表，包含关联的提供商信息
 */
const getModelsWithProvidersRouter = createRoute({
  method: "GET",
  path: modelRoutes.getModelsWithProviders.path,
  responseType: "json",
  responseSchema: modelRoutes.getModelsWithProviders.responseSchema,
  summary: "获取所有模型（包含提供商信息）",
  description: "返回系统中所有可用的模型列表，包含关联的提供商信息",
  tags: ["Models"],
  handler: async () => {
    return await getModelsWithProviders();
  }
});

/**
 * 根据ID获取单个模型的路由处理器（基础版本）
 * @description 通过模型ID获取特定模型的详细信息，不包含关联信息
 */
const getModelByIdRouter = createRoute({
  method: "GET",
  path: modelRoutes.getModelById.path,
  responseType: "json",
  responseSchema: modelRoutes.getModelById.responseSchema,
  pathParamSchema: idParamSchema,
  summary: "根据ID获取单个模型",
  description: "通过模型ID获取特定模型的详细信息，不包含关联信息",
  tags: ["Models"],
  handler: async ({ id }) => {
    const model = await getModelById(id);

    if (!model) {
      throw new HTTPException(404, { message: "模型不存在" });
    }

    return model;
  }
});

/**
 * 根据ID获取单个模型的路由处理器（包含提供商信息）
 * @description 通过模型ID获取特定模型的详细信息，包含关联的提供商
 */
const getModelWithProvidersByIdRouter = createRoute({
  method: "GET",
  path: modelRoutes.getModelWithProvidersById.path,
  responseType: "json",
  responseSchema: modelRoutes.getModelWithProvidersById.responseSchema,
  pathParamSchema: idParamSchema,
  summary: "根据ID获取单个模型（包含提供商信息）",
  description: "通过模型ID获取特定模型的详细信息，包含关联的提供商",
  tags: ["Models"],
  handler: async ({ id }) => {
    const model = await getModelWithProvidersById(id);

    if (!model) {
      throw new HTTPException(404, { message: "模型不存在" });
    }

    return model;
  }
});

/**
 * 根据提供商ID获取模型的路由处理器（基础版本）
 * @description 通过提供商ID获取对应的模型列表，不包含关联信息
 */
const getModelsByProviderRouter = createRoute({
  method: "GET",
  path: modelRoutes.getModelsByProvider.path,
  responseType: "json",
  responseSchema: modelRoutes.getModelsByProvider.responseSchema,
  pathParamSchema: providerParamSchema,
  summary: "根据提供商ID获取模型列表",
  description: "通过提供商ID获取对应的模型列表，不包含关联信息",
  tags: ["Models"],
  handler: async ({ providerId }) => {
    return await getModelsByProvider(providerId);
  }
});

/**
 * 根据提供商ID获取模型的路由处理器（包含提供商信息）
 * @description 通过提供商ID获取对应的模型列表，包含关联的提供商
 */
const getModelsByProviderWithProvidersRouter = createRoute({
  method: "GET",
  path: modelRoutes.getModelsByProviderWithProviders.path,
  responseType: "json",
  responseSchema: modelRoutes.getModelsByProviderWithProviders.responseSchema,
  pathParamSchema: providerParamSchema,
  summary: "根据提供商ID获取模型列表（包含提供商信息）",
  description: "通过提供商ID获取对应的模型列表，包含关联的提供商",
  tags: ["Models"],
  handler: async ({ providerId }) => {
    return await getModelsByProviderWithProviders(providerId);
  }
});

/**
 * 根据分组获取模型的路由处理器（基础版本）
 * @description 通过模型分组获取对应的模型列表，不包含关联信息
 */
const getModelsByGroupRouter = createRoute({
  method: "GET",
  path: modelRoutes.getModelsByGroup.path,
  responseType: "json",
  responseSchema: modelRoutes.getModelsByGroup.responseSchema,
  pathParamSchema: groupParamSchema,
  summary: "根据分组获取模型列表",
  description: "通过模型分组获取对应的模型列表，不包含关联信息",
  tags: ["Models"],
  handler: async ({ group }) => {
    return await getModelsByGroup(group);
  }
});

/**
 * 根据分组获取模型的路由处理器（包含提供商信息）
 * @description 通过模型分组获取对应的模型列表，包含关联的提供商
 */
const getModelsByGroupWithProvidersRouter = createRoute({
  method: "GET",
  path: modelRoutes.getModelsByGroupWithProviders.path,
  responseType: "json",
  responseSchema: modelRoutes.getModelsByGroupWithProviders.responseSchema,
  pathParamSchema: groupParamSchema,
  summary: "根据分组获取模型列表（包含提供商信息）",
  description: "通过模型分组获取对应的模型列表，包含关联的提供商",
  tags: ["Models"],
  handler: async ({ group }) => {
    return await getModelsByGroupWithProviders(group);
  }
});

/**
 * 创建新模型的路由处理器
 * @description 接收模型数据并在系统中创建新的模型
 */
const createModelRouter = createRoute({
  method: "POST",
  path: modelRoutes.createModel.path,
  responseType: "json",
  bodySchema: createModelSchema,
  responseSchema: modelRoutes.createModel.responseSchema,
  summary: "创建新模型",
  description: "接收模型数据并在系统中创建新的模型",
  tags: ["Models"],
  handler: async (data) => {
    return await createModel(data);
  }
});

/**
 * 批量创建模型的路由处理器
 * @description 接收模型数据数组并批量创建模型
 */
const createManyModelsRouter = createRoute({
  method: "POST",
  path: modelRoutes.createManyModels.path,
  responseType: "json",
  bodySchema: z.array(createModelSchema),
  responseSchema: modelRoutes.createManyModels.responseSchema,
  summary: "批量创建模型",
  description: "接收模型数据数组并批量创建模型",
  tags: ["Models"],
  handler: async (data) => {
    return await createManyModels(data);
  }
});

/**
 * 更新模型的路由处理器
 * @description 接收模型ID和更新数据，修改指定模型的信息
 */
const updateModelRouter = createRoute({
  method: "PUT",
  path: modelRoutes.updateModel.path,
  responseType: "json",
  pathParamSchema: idParamSchema,
  bodySchema: updateModelSchema,
  responseSchema: modelRoutes.updateModel.responseSchema,
  summary: "更新模型信息",
  description: "接收模型ID和更新数据，修改指定模型的信息",
  tags: ["Models"],
  handler: async ({ id }, data) => {
    return await updateModel(id, data);
  }
});

/**
 * 删除模型的路由处理器
 * @description 根据模型ID删除指定的模型
 */
const deleteModelRouter = createRoute({
  method: "DELETE",
  path: modelRoutes.deleteModel.path,
  responseType: "json",
  pathParamSchema: idParamSchema,
  responseSchema: modelRoutes.deleteModel.responseSchema,
  summary: "删除模型",
  description: "根据模型ID删除指定的模型",
  tags: ["Models"],
  handler: async ({ id }) => {
    return await deleteModel(id);
  }
});

/**
 * 添加模型与提供商关联的路由处理器
 * @description 为指定模型添加与提供商的关联关系
 */
const addModelProviderRelationRouter = createRoute({
  method: "POST",
  path: modelRoutes.addModelProviderRelation.path,
  responseType: "json",
  bodySchema: modelProviderRelationSchema,
  responseSchema: modelRoutes.addModelProviderRelation.responseSchema,
  summary: "添加模型与提供商关联",
  description: "为指定模型添加与提供商的关联关系",
  tags: ["Models"],
  handler: async (data) => {
    return await addModelProviderRelation(data);
  }
});

/**
 * 移除模型与提供商关联的路由处理器
 * @description 移除指定模型与提供商的关联关系
 */
const removeModelProviderRelationRouter = createRoute({
  method: "DELETE",
  path: modelRoutes.removeModelProviderRelation.path,
  responseType: "json",
  bodySchema: modelProviderRelationSchema,
  responseSchema: modelRoutes.removeModelProviderRelation.responseSchema,
  summary: "移除模型与提供商关联",
  description: "移除指定模型与提供商的关联关系",
  tags: ["Models"],
  handler: async (data) => {
    return await removeModelProviderRelation(data);
  }
});

/**
 * 获取模型与提供商关联列表的路由处理器
 * @description 获取指定模型的所有提供商关联关系
 */
const getModelProviderRelationsRouter = createRoute({
  method: "GET",
  path: modelRoutes.getModelProviderRelations.path,
  responseType: "json",
  responseSchema: modelRoutes.getModelProviderRelations.responseSchema,
  pathParamSchema: idParamSchema,
  summary: "获取模型与提供商关联列表",
  description: "获取指定模型的所有提供商关联关系",
  tags: ["Models"],
  handler: async ({ id }) => {
    return await getModelProviderRelations(id);
  }
});

// 导出所有路由
export const modelsRouter = [
  // 基础版本（不包含关联信息）
  getModelsRouter,
  getModelByIdRouter,
  getModelsByProviderRouter,
  getModelsByGroupRouter,
  // WithProviders 版本（包含提供商信息）
  getModelsWithProvidersRouter,
  getModelWithProvidersByIdRouter,
  getModelsByProviderWithProvidersRouter,
  getModelsByGroupWithProvidersRouter,
  // 写操作
  createModelRouter,
  createManyModelsRouter,
  updateModelRouter,
  deleteModelRouter,
  // 关联操作
  addModelProviderRelationRouter,
  removeModelProviderRelationRouter,
  getModelProviderRelationsRouter
];
