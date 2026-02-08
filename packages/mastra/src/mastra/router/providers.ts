import { createRoute } from "@mastra/server/server-adapter";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";

import { PREFIX } from "../api/base-client";
import {
  ProviderResponseSchema,
  ProviderWithModelsResponseSchema, // Response Schemas
  ProvidersResponseSchema,
  ProvidersWithModelsResponseSchema,
  createProvider,
  createProviderSchema,
  deleteProvider,
  getEnabledProviders,
  getEnabledProvidersWithModels,
  getProviderById,
  getProviderWithModelsById,
  getProviders,
  getProvidersByModel,
  getProvidersByModelWithModels,
  getProvidersByType,
  getProvidersByTypeWithModels,
  getProvidersWithModels,
  idParamSchema,
  toggleProviderEnabled,
  typeParamSchema,
  updateProvider,
  updateProviderSchema
} from "../server/provider";

// 定义 modelId 路径参数 schema
const modelIdParamSchema = z.object({
  modelId: z.string().min(1, "模型ID不能为空")
});

/**
 * 获取所有提供商的路由处理器（基础版本）
 * @description 返回系统中所有可用的提供商列表，不包含关联模型
 */
const getProvidersRouter = createRoute({
  method: "GET",
  path: `${PREFIX}/providers`,
  responseType: "json",
  responseSchema: ProvidersResponseSchema,
  summary: "获取所有提供商",
  description: "返回系统中所有可用的提供商列表，不包含关联模型",
  tags: ["Providers"],
  handler: async () => {
    return await getProviders();
  }
});

/**
 * 获取所有提供商的路由处理器（包含模型列表）
 * @description 返回系统中所有可用的提供商列表，包含关联的模型信息
 */
const getProvidersWithModelsRouter = createRoute({
  method: "GET",
  path: `${PREFIX}/providers/with-models`,
  responseType: "json",
  responseSchema: ProvidersWithModelsResponseSchema,
  summary: "获取所有提供商（包含模型列表）",
  description: "返回系统中所有可用的提供商列表，包含关联的模型信息",
  tags: ["Providers"],
  handler: async () => {
    return await getProvidersWithModels();
  }
});

/**
 * 获取启用的提供商的路由处理器（基础版本）
 * @description 返回系统中所有启用状态的提供商列表，不包含关联模型
 */
const getEnabledProvidersRouter = createRoute({
  method: "GET",
  path: `${PREFIX}/providers/enabled`,
  responseType: "json",
  responseSchema: ProvidersResponseSchema,
  summary: "获取启用的提供商",
  description: "返回系统中所有启用状态的提供商列表，不包含关联模型",
  tags: ["Providers"],
  handler: async () => {
    return await getEnabledProviders();
  }
});

/**
 * 获取启用的提供商的路由处理器（包含模型列表）
 * @description 返回系统中所有启用状态的提供商列表，包含关联的模型
 */
const getEnabledProvidersWithModelsRouter = createRoute({
  method: "GET",
  path: `${PREFIX}/providers/enabled/with-models`,
  responseType: "json",
  responseSchema: ProvidersWithModelsResponseSchema,
  summary: "获取启用的提供商（包含模型列表）",
  description: "返回系统中所有启用状态的提供商列表，包含关联的模型",
  tags: ["Providers"],
  handler: async () => {
    return await getEnabledProvidersWithModels();
  }
});

/**
 * 根据ID获取单个提供商的路由处理器（基础版本）
 * @description 通过提供商ID获取特定提供商的详细信息，不包含关联模型
 */
const getProviderByIdRouter = createRoute({
  method: "GET",
  path: `${PREFIX}/providers/:id`,
  responseType: "json",
  responseSchema: ProviderResponseSchema.nullable(),
  pathParamSchema: idParamSchema,
  summary: "根据ID获取单个提供商",
  description: "通过提供商ID获取特定提供商的详细信息，不包含关联模型",
  tags: ["Providers"],
  handler: async ({ id }) => {
    const provider = await getProviderById(id);

    if (!provider) {
      throw new HTTPException(404, { message: "提供商不存在" });
    }

    return provider;
  }
});

/**
 * 根据ID获取单个提供商的路由处理器（包含模型列表）
 * @description 通过提供商ID获取特定提供商的详细信息，包含关联的模型
 */
const getProviderWithModelsByIdRouter = createRoute({
  method: "GET",
  path: `${PREFIX}/providers/:id/with-models`,
  responseType: "json",
  responseSchema: ProviderWithModelsResponseSchema.nullable(),
  pathParamSchema: idParamSchema,
  summary: "根据ID获取单个提供商（包含模型列表）",
  description: "通过提供商ID获取特定提供商的详细信息，包含关联的模型",
  tags: ["Providers"],
  handler: async ({ id }) => {
    const provider = await getProviderWithModelsById(id);

    if (!provider) {
      throw new HTTPException(404, { message: "提供商不存在" });
    }

    return provider;
  }
});

/**
 * 根据类型获取提供商的路由处理器（基础版本）
 * @description 通过提供商类型获取对应的提供商列表，不包含关联模型
 */
const getProvidersByTypeRouter = createRoute({
  method: "GET",
  path: `${PREFIX}/providers/type/:type`,
  responseType: "json",
  responseSchema: ProvidersResponseSchema,
  pathParamSchema: typeParamSchema,
  summary: "根据类型获取提供商",
  description: "通过提供商类型获取对应的提供商列表，不包含关联模型",
  tags: ["Providers"],
  handler: async ({ type }) => {
    return await getProvidersByType(type);
  }
});

/**
 * 根据类型获取提供商的路由处理器（包含模型列表）
 * @description 通过提供商类型获取对应的提供商列表，包含关联的模型
 */
const getProvidersByTypeWithModelsRouter = createRoute({
  method: "GET",
  path: `${PREFIX}/providers/type/:type/with-models`,
  responseType: "json",
  responseSchema: ProvidersWithModelsResponseSchema,
  pathParamSchema: typeParamSchema,
  summary: "根据类型获取提供商（包含模型列表）",
  description: "通过提供商类型获取对应的提供商列表，包含关联的模型",
  tags: ["Providers"],
  handler: async ({ type }) => {
    return await getProvidersByTypeWithModels(type);
  }
});

/**
 * 创建新提供商的路由处理器
 * @description 接收提供商数据并在系统中创建新的提供商
 */
const createProviderRouter = createRoute({
  method: "POST",
  path: `${PREFIX}/providers`,
  responseType: "json",
  bodySchema: createProviderSchema,
  responseSchema: ProviderWithModelsResponseSchema,
  summary: "创建新提供商",
  description: "接收提供商数据并在系统中创建新的提供商",
  tags: ["Providers"],
  handler: async ({
    type,
    name,
    apiKey,
    apiHost,
    apiVersion,
    enabled,
    isSystem,
    isAuthed,
    notes
  }) => {
    const newProvider = await createProvider({
      type,
      name,
      apiKey,
      apiHost,
      apiVersion,
      enabled,
      isSystem,
      isAuthed,
      notes
    });
    return newProvider;
  }
});

/**
 * 更新提供商的路由处理器
 * @description 接收提供商ID和更新数据，修改指定提供商的信息
 */
const updateProviderRouter = createRoute({
  method: "PUT",
  path: `${PREFIX}/providers/:id`,
  responseType: "json",
  pathParamSchema: idParamSchema,
  bodySchema: updateProviderSchema,
  responseSchema: ProviderWithModelsResponseSchema,
  summary: "更新提供商信息",
  description: "接收提供商ID和更新数据，修改指定提供商的信息",
  tags: ["Providers"],
  handler: async ({
    id,
    type,
    name,
    apiKey,
    apiHost,
    apiVersion,
    enabled,
    isSystem,
    isAuthed,
    notes
  }) => {
    // eslint-disable-next-line no-console
    console.log("📥 收到更新请求:", {
      id,
      data: {
        type,
        name,
        apiKey,
        apiHost,
        apiVersion,
        enabled,
        isSystem,
        isAuthed,
        notes
      }
    });

    const providerData = {
      type,
      name,
      apiKey,
      apiHost,
      apiVersion,
      enabled,
      isSystem,
      isAuthed,
      notes
    };

    // eslint-disable-next-line no-console
    console.log("✅ 数据验证通过:", providerData);

    const updatedProvider = await updateProvider(id, providerData);

    // eslint-disable-next-line no-console
    console.log("✅ 提供商更新成功");

    return updatedProvider;
  }
});

/**
 * 删除提供商的路由处理器
 * @description 根据提供商ID删除指定的提供商
 */
const deleteProviderRouter = createRoute({
  method: "DELETE",
  path: `${PREFIX}/providers/:id`,
  responseType: "json",
  pathParamSchema: idParamSchema,
  responseSchema: ProviderResponseSchema,
  summary: "删除提供商",
  description: "根据提供商ID删除指定的提供商",
  tags: ["Providers"],
  handler: async ({ id }) => {
    try {
      const deletedProvider = await deleteProvider(id);
      return deletedProvider;
    } catch (error) {
      // 处理业务逻辑错误（如有关联模型无法删除）
      if (error instanceof Error) {
        throw new HTTPException(409, {
          message: error.message
        });
      }
      throw error;
    }
  }
});

/**
 * 切换提供商启用状态的路由处理器
 * @description 切换提供商的启用/禁用状态
 */
const toggleProviderEnabledRouter = createRoute({
  method: "PUT",
  path: `${PREFIX}/providers/:id/toggle`,
  responseType: "json",
  pathParamSchema: idParamSchema,
  responseSchema: ProviderWithModelsResponseSchema,
  summary: "切换提供商启用状态",
  description: "切换提供商的启用/禁用状态",
  tags: ["Providers"],
  handler: async ({ id }) => {
    console.log("toggleProviderEnabledRouter");
    try {
      const updatedProvider = await toggleProviderEnabled(id);
      return updatedProvider;
    } catch (error) {
      // 处理业务逻辑错误
      if (error instanceof Error) {
        throw new HTTPException(404, { message: error.message });
      }
      throw error;
    }
  }
});

/**
 * 根据模型ID获取提供商列表的路由处理器（基础版本）
 * @description 获取与指定模型关联的所有提供商，不包含关联模型
 */
const getProvidersByModelRouter = createRoute({
  method: "GET",
  path: `${PREFIX}/providers/by-model/:modelId`,
  responseType: "json",
  responseSchema: ProvidersResponseSchema,
  pathParamSchema: modelIdParamSchema,
  summary: "根据模型ID获取提供商列表",
  description: "获取与指定模型关联的所有提供商，不包含关联模型",
  tags: ["Providers"],
  handler: async ({ modelId }) => {
    return await getProvidersByModel(modelId);
  }
});

/**
 * 根据模型ID获取提供商列表的路由处理器（包含模型列表）
 * @description 获取与指定模型关联的所有提供商，包含关联的模型
 */
const getProvidersByModelWithModelsRouter = createRoute({
  method: "GET",
  path: `${PREFIX}/providers/by-model/:modelId/with-models`,
  responseType: "json",
  responseSchema: ProvidersWithModelsResponseSchema,
  pathParamSchema: modelIdParamSchema,
  summary: "根据模型ID获取提供商列表（包含模型列表）",
  description: "获取与指定模型关联的所有提供商，包含关联的模型",
  tags: ["Providers"],
  handler: async ({ modelId }) => {
    return await getProvidersByModelWithModels(modelId);
  }
});

// 导出所有路由
const providersRouter = [
  // 基础版本（不包含关联模型）
  getProvidersRouter,
  getEnabledProvidersRouter,
  getProviderByIdRouter,
  getProvidersByTypeRouter,
  getProvidersByModelRouter,
  // WithModels 版本（包含模型列表）
  getProvidersWithModelsRouter,
  getEnabledProvidersWithModelsRouter,
  getProviderWithModelsByIdRouter,
  getProvidersByTypeWithModelsRouter,
  getProvidersByModelWithModelsRouter,
  // 写操作
  createProviderRouter,
  updateProviderRouter,
  deleteProviderRouter,
  toggleProviderEnabledRouter
];

// 导出 route 定义（path + responseSchema）供 client 使用
export const providerRoutes = {
  // 基础版本
  getProviders: {
    path: getProvidersRouter.path,
    responseSchema: getProvidersRouter.responseSchema
  },
  getEnabledProviders: {
    path: getEnabledProvidersRouter.path,
    responseSchema: getEnabledProvidersRouter.responseSchema
  },
  getProviderById: {
    path: getProviderByIdRouter.path,
    responseSchema: getProviderByIdRouter.responseSchema
  },
  getProvidersByType: {
    path: getProvidersByTypeRouter.path,
    responseSchema: getProvidersByTypeRouter.responseSchema
  },
  getProvidersByModel: {
    path: getProvidersByModelRouter.path,
    responseSchema: getProvidersByModelRouter.responseSchema
  },
  // WithModels 版本
  getProvidersWithModels: {
    path: getProvidersWithModelsRouter.path,
    responseSchema: getProvidersWithModelsRouter.responseSchema
  },
  getEnabledProvidersWithModels: {
    path: getEnabledProvidersWithModelsRouter.path,
    responseSchema: getEnabledProvidersWithModelsRouter.responseSchema
  },
  getProviderWithModelsById: {
    path: getProviderWithModelsByIdRouter.path,
    responseSchema: getProviderWithModelsByIdRouter.responseSchema
  },
  getProvidersByTypeWithModels: {
    path: getProvidersByTypeWithModelsRouter.path,
    responseSchema: getProvidersByTypeWithModelsRouter.responseSchema
  },
  getProvidersByModelWithModels: {
    path: getProvidersByModelWithModelsRouter.path,
    responseSchema: getProvidersByModelWithModelsRouter.responseSchema
  },
  // 写操作
  createProvider: {
    path: createProviderRouter.path,
    responseSchema: createProviderRouter.responseSchema
  },
  updateProvider: {
    path: updateProviderRouter.path,
    responseSchema: updateProviderRouter.responseSchema
  },
  deleteProvider: {
    path: deleteProviderRouter.path,
    responseSchema: deleteProviderRouter.responseSchema
  },
  toggleProviderEnabled: {
    path: toggleProviderEnabledRouter.path,
    responseSchema: toggleProviderEnabledRouter.responseSchema
  }
} as const;

export { providersRouter };
