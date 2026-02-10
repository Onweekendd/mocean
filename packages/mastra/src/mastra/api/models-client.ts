/// <reference lib="dom" />
import type { z } from "zod";

import { modelRoutes } from "../router/type";
import type { CreateModelInput, UpdateModelInput } from "../schema/model";
import type { ApiClientConfig, ApiResponse } from "./base-client";
import { BaseApiClient } from "./base-client";

/**
 * 模型 API 客户端类
 * @description 提供类型安全的模型相关 API 调用方法
 */
export class ModelsApiClient extends BaseApiClient {
  constructor(config: ApiClientConfig = {}) {
    super(config);
  }

  // ==================== 基础版本（不包含关联信息） ====================

  /**
   * 获取所有模型（基础版本）
   * @description 获取系统中所有可用的模型列表，不包含关联信息
   */
  async getModels(): Promise<
    ApiResponse<z.infer<(typeof modelRoutes)["getModels"]["responseSchema"]>>
  > {
    return this.get<
      z.infer<(typeof modelRoutes)["getModels"]["responseSchema"]>
    >(modelRoutes.getModels.path);
  }

  /**
   * 根据ID获取单个模型（基础版本）
   * @description 通过模型ID获取特定模型的详细信息，不包含关联信息
   * @param id - 模型的唯一标识符
   */
  async getModelById(
    id: string
  ): Promise<
    ApiResponse<z.infer<(typeof modelRoutes)["getModelById"]["responseSchema"]>>
  > {
    return this.get<
      z.infer<(typeof modelRoutes)["getModelById"]["responseSchema"]>
    >(modelRoutes.getModelById.path.replace(":id", id));
  }

  /**
   * 根据提供商ID获取模型列表（基础版本）
   * @description 获取指定提供商下的所有模型，不包含关联信息
   * @param providerId - 提供商的唯一标识符
   */
  async getModelsByProvider(
    providerId: string
  ): Promise<
    ApiResponse<
      z.infer<(typeof modelRoutes)["getModelsByProvider"]["responseSchema"]>
    >
  > {
    return this.get<
      z.infer<(typeof modelRoutes)["getModelsByProvider"]["responseSchema"]>
    >(modelRoutes.getModelsByProvider.path.replace(":providerId", providerId));
  }

  /**
   * 根据分组获取模型列表（基础版本）
   * @description 获取指定分组的所有模型，不包含关联信息
   * @param group - 模型分组
   */
  async getModelsByGroup(
    group: string
  ): Promise<
    ApiResponse<
      z.infer<(typeof modelRoutes)["getModelsByGroup"]["responseSchema"]>
    >
  > {
    return this.get<
      z.infer<(typeof modelRoutes)["getModelsByGroup"]["responseSchema"]>
    >(modelRoutes.getModelsByGroup.path.replace(":group", group));
  }

  // ==================== WithProviders 版本（包含提供商信息） ====================

  /**
   * 获取所有模型（包含提供商信息）
   * @description 获取系统中所有可用的模型列表，包含关联的提供商信息
   */
  async getModelsWithProviders(): Promise<
    ApiResponse<
      z.infer<(typeof modelRoutes)["getModelsWithProviders"]["responseSchema"]>
    >
  > {
    return this.get<
      z.infer<(typeof modelRoutes)["getModelsWithProviders"]["responseSchema"]>
    >(modelRoutes.getModelsWithProviders.path);
  }

  /**
   * 根据ID获取单个模型（包含提供商信息）
   * @description 通过模型ID获取特定模型的详细信息，包含关联的提供商
   * @param id - 模型的唯一标识符
   */
  async getModelWithProvidersById(
    id: string
  ): Promise<
    ApiResponse<
      z.infer<
        (typeof modelRoutes)["getModelWithProvidersById"]["responseSchema"]
      >
    >
  > {
    return this.get<
      z.infer<
        (typeof modelRoutes)["getModelWithProvidersById"]["responseSchema"]
      >
    >(modelRoutes.getModelWithProvidersById.path.replace(":id", id));
  }

  /**
   * 根据提供商ID获取模型列表（包含提供商信息）
   * @description 获取指定提供商下的所有模型，包含关联的提供商信息
   * @param providerId - 提供商的唯一标识符
   */
  async getModelsByProviderWithProviders(
    providerId: string
  ): Promise<
    ApiResponse<
      z.infer<
        (typeof modelRoutes)["getModelsByProviderWithProviders"]["responseSchema"]
      >
    >
  > {
    return this.get<
      z.infer<
        (typeof modelRoutes)["getModelsByProviderWithProviders"]["responseSchema"]
      >
    >(
      modelRoutes.getModelsByProviderWithProviders.path.replace(
        ":providerId",
        providerId
      )
    );
  }

  /**
   * 根据分组获取模型列表（包含提供商信息）
   * @description 获取指定分组的所有模型，包含关联的提供商信息
   * @param group - 模型分组
   */
  async getModelsByGroupWithProviders(
    group: string
  ): Promise<
    ApiResponse<
      z.infer<
        (typeof modelRoutes)["getModelsByGroupWithProviders"]["responseSchema"]
      >
    >
  > {
    return this.get<
      z.infer<
        (typeof modelRoutes)["getModelsByGroupWithProviders"]["responseSchema"]
      >
    >(modelRoutes.getModelsByGroupWithProviders.path.replace(":group", group));
  }

  // ==================== 修改操作 ====================

  /**
   * 创建新模型
   * @description 创建一个新的模型记录，并关联指定的提供商
   * @param model - 包含模型信息的对象
   */
  async createModel(
    model: CreateModelInput
  ): Promise<
    ApiResponse<z.infer<(typeof modelRoutes)["createModel"]["responseSchema"]>>
  > {
    return this.post<
      z.infer<(typeof modelRoutes)["createModel"]["responseSchema"]>
    >(modelRoutes.createModel.path, model);
  }

  /**
   * 更新模型信息
   * @description 更新指定模型的信息，包括提供商关联
   * @param id - 模型的唯一标识符
   * @param model - 包含更新信息的对象
   */
  async updateModel(
    id: string,
    model: UpdateModelInput
  ): Promise<
    ApiResponse<z.infer<(typeof modelRoutes)["updateModel"]["responseSchema"]>>
  > {
    return this.put<
      z.infer<(typeof modelRoutes)["updateModel"]["responseSchema"]>
    >(modelRoutes.updateModel.path.replace(":id", id), model);
  }

  /**
   * 删除模型
   * @description 删除指定的模型记录
   * @param id - 模型的唯一标识符
   */
  async deleteModel(
    id: string
  ): Promise<
    ApiResponse<z.infer<(typeof modelRoutes)["deleteModel"]["responseSchema"]>>
  > {
    return this.delete<
      z.infer<(typeof modelRoutes)["deleteModel"]["responseSchema"]>
    >(modelRoutes.deleteModel.path.replace(":id", id));
  }
}

/**
 * 默认的模型 API 客户端实例
 */
export const modelsApi = new ModelsApiClient();

/**
 * 便捷的函数式 API 调用方法
 * @description 提供更简洁的函数调用方式
 */
export const modelsApiMethods = {
  // 基础版本
  getModels: () => modelsApi.getModels(),
  getModelById: (id: string) => modelsApi.getModelById(id),
  getModelsByProvider: (providerId: string) =>
    modelsApi.getModelsByProvider(providerId),
  getModelsByGroup: (group: string) => modelsApi.getModelsByGroup(group),

  // WithProviders 版本
  getModelsWithProviders: () => modelsApi.getModelsWithProviders(),
  getModelWithProvidersById: (id: string) =>
    modelsApi.getModelWithProvidersById(id),
  getModelsByProviderWithProviders: (providerId: string) =>
    modelsApi.getModelsByProviderWithProviders(providerId),
  getModelsByGroupWithProviders: (group: string) =>
    modelsApi.getModelsByGroupWithProviders(group),

  // 修改操作
  createModel: (model: CreateModelInput) => modelsApi.createModel(model),
  updateModel: (id: string, model: UpdateModelInput) =>
    modelsApi.updateModel(id, model),
  deleteModel: (id: string) => modelsApi.deleteModel(id)
};

/**
 * React Hook 风格的 API 调用方法返回类型
 * @description 从 ModelsApiClient 类中提取方法类型，自动保持类型同步
 */
export type UseModelsApiReturn = Pick<
  ModelsApiClient,
  | "getModels"
  | "getModelById"
  | "getModelsByProvider"
  | "getModelsByGroup"
  | "getModelsWithProviders"
  | "getModelWithProvidersById"
  | "getModelsByProviderWithProviders"
  | "getModelsByGroupWithProviders"
  | "createModel"
  | "updateModel"
  | "deleteModel"
>;

/**
 * React Hook 风格的 API 调用方法
 * @description 适用于 React 应用的 Hook 风格调用
 *
 * @returns 绑定了 this 上下文的 API 方法对象
 *
 * @example
 * const api = useModelsApi();
 * const response = await api.getModelsWithProviders();
 */
export const useModelsApi = (): UseModelsApiReturn => {
  return {
    // 基础版本
    getModels: modelsApi.getModels.bind(
      modelsApi
    ) as UseModelsApiReturn["getModels"],
    getModelById: modelsApi.getModelById.bind(
      modelsApi
    ) as UseModelsApiReturn["getModelById"],
    getModelsByProvider: modelsApi.getModelsByProvider.bind(
      modelsApi
    ) as UseModelsApiReturn["getModelsByProvider"],
    getModelsByGroup: modelsApi.getModelsByGroup.bind(
      modelsApi
    ) as UseModelsApiReturn["getModelsByGroup"],

    // WithProviders 版本
    getModelsWithProviders: modelsApi.getModelsWithProviders.bind(
      modelsApi
    ) as UseModelsApiReturn["getModelsWithProviders"],
    getModelWithProvidersById: modelsApi.getModelWithProvidersById.bind(
      modelsApi
    ) as UseModelsApiReturn["getModelWithProvidersById"],
    getModelsByProviderWithProviders:
      modelsApi.getModelsByProviderWithProviders.bind(
        modelsApi
      ) as UseModelsApiReturn["getModelsByProviderWithProviders"],
    getModelsByGroupWithProviders: modelsApi.getModelsByGroupWithProviders.bind(
      modelsApi
    ) as UseModelsApiReturn["getModelsByGroupWithProviders"],

    // 修改操作
    createModel: modelsApi.createModel.bind(
      modelsApi
    ) as UseModelsApiReturn["createModel"],
    updateModel: modelsApi.updateModel.bind(
      modelsApi
    ) as UseModelsApiReturn["updateModel"],
    deleteModel: modelsApi.deleteModel.bind(
      modelsApi
    ) as UseModelsApiReturn["deleteModel"]
  };
};
