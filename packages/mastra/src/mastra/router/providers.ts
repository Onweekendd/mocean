import { createRoute } from "@mastra/server/server-adapter";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";

import { PREFIX } from "../api/base-client";
import {
  ProviderResponseSchema,
  ProviderWithModelsResponseSchema,
  ProvidersResponseSchema,
  ProvidersWithModelsResponseSchema,
  createProviderSchema,
  idParamSchema,
  typeParamSchema,
  updateProviderSchema
} from "../schema/provider";
import {
  createProvider,
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
  toggleProviderEnabled,
  updateProvider,
  type ProviderType
} from "../server/provider";
import { providerRoutes } from "./type";

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
  path: providerRoutes.getProviders.path,
  responseType: "json",
  responseSchema: providerRoutes.getProviders.responseSchema,
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
  path: providerRoutes.getProvidersWithModels.path,
  responseType: "json",
  responseSchema: providerRoutes.getProvidersWithModels.responseSchema,
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
  path: providerRoutes.getEnabledProviders.path,
  responseType: "json",
  responseSchema: providerRoutes.getEnabledProviders.responseSchema,
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
  path: providerRoutes.getEnabledProvidersWithModels.path,
  responseType: "json",
  responseSchema: providerRoutes.getEnabledProvidersWithModels.responseSchema,
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
  path: providerRoutes.getProviderById.path,
  responseType: "json",
  responseSchema: providerRoutes.getProviderById.responseSchema,
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
  path: providerRoutes.getProviderWithModelsById.path,
  responseType: "json",
  responseSchema: providerRoutes.getProviderWithModelsById.responseSchema,
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
  path: providerRoutes.getProvidersByType.path,
  responseType: "json",
  responseSchema: providerRoutes.getProvidersByType.responseSchema,
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
  path: providerRoutes.getProvidersByTypeWithModels.path,
  responseType: "json",
  responseSchema: providerRoutes.getProvidersByTypeWithModels.responseSchema,
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
  path: providerRoutes.createProvider.path,
  responseType: "json",
  bodySchema: createProviderSchema,
  responseSchema: providerRoutes.createProvider.responseSchema,
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
  path: providerRoutes.updateProvider.path,
  responseType: "json",
  pathParamSchema: idParamSchema,
  bodySchema: updateProviderSchema,
  responseSchema: providerRoutes.updateProvider.responseSchema,
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
  path: providerRoutes.deleteProvider.path,
  responseType: "json",
  pathParamSchema: idParamSchema,
  responseSchema: providerRoutes.deleteProvider.responseSchema,
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
  path: providerRoutes.toggleProviderEnabled.path,
  responseType: "json",
  pathParamSchema: idParamSchema,
  responseSchema: providerRoutes.toggleProviderEnabled.responseSchema,
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
  path: providerRoutes.getProvidersByModel.path,
  responseType: "json",
  responseSchema: providerRoutes.getProvidersByModel.responseSchema,
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
  path: providerRoutes.getProvidersByModelWithModels.path,
  responseType: "json",
  responseSchema: providerRoutes.getProvidersByModelWithModels.responseSchema,
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

export { providersRouter };
