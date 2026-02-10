/// <reference lib="dom" />
import type { ProviderType } from "generated/prisma/enums";
import type { z } from "zod";

import { providerRoutes } from "../router/type";
import type {
  CreateProviderInput,
  UpdateProviderInput
} from "../schema/provider";
import type { ApiClientConfig, ApiResponse } from "./base-client";
import { BaseApiClient } from "./base-client";

/**
 * 提供商 API 客户端类
 * @description 提供类型安全的提供商相关 API 调用方法
 */
export class ProvidersApiClient extends BaseApiClient {
  constructor(config: ApiClientConfig = {}) {
    super(config);
  }

  // ==================== 基础版本（不包含关联模型）====================

  /**
   * 获取所有提供商（基础版本）
   * @description 获取系统中所有可用的提供商列表，不包含关联模型
   */
  async getProviders(): Promise<
    ApiResponse<
      z.infer<(typeof providerRoutes)["getProviders"]["responseSchema"]>
    >
  > {
    return this.get<
      z.infer<(typeof providerRoutes)["getProviders"]["responseSchema"]>
    >(providerRoutes.getProviders.path);
  }

  /**
   * 获取启用的提供商（基础版本）
   * @description 获取系统中所有启用状态的提供商列表，不包含关联模型
   */
  async getEnabledProviders(): Promise<
    ApiResponse<
      z.infer<(typeof providerRoutes)["getEnabledProviders"]["responseSchema"]>
    >
  > {
    return this.get<
      z.infer<(typeof providerRoutes)["getEnabledProviders"]["responseSchema"]>
    >(providerRoutes.getEnabledProviders.path);
  }

  /**
   * 根据ID获取单个提供商（基础版本）
   * @description 通过提供商ID获取特定提供商的详细信息，不包含关联模型
   * @param id - 提供商的唯一标识符
   */
  async getProviderById(
    id: string
  ): Promise<
    ApiResponse<
      z.infer<(typeof providerRoutes)["getProviderById"]["responseSchema"]>
    >
  > {
    return this.get<
      z.infer<(typeof providerRoutes)["getProviderById"]["responseSchema"]>
    >(providerRoutes.getProviderById.path.replace(":id", id));
  }

  /**
   * 根据类型获取提供商（基础版本）
   * @description 获取指定类型的所有提供商，不包含关联模型
   * @param type - 提供商类型
   */
  async getProvidersByType(
    type: ProviderType
  ): Promise<
    ApiResponse<
      z.infer<(typeof providerRoutes)["getProvidersByType"]["responseSchema"]>
    >
  > {
    return this.get<
      z.infer<(typeof providerRoutes)["getProvidersByType"]["responseSchema"]>
    >(providerRoutes.getProvidersByType.path.replace(":type", type));
  }

  /**
   * 根据模型ID获取提供商列表（基础版本）
   * @description 获取与指定模型关联的所有提供商，不包含关联模型
   * @param modelId - 模型的唯一标识符
   */
  async getProvidersByModel(
    modelId: string
  ): Promise<
    ApiResponse<
      z.infer<(typeof providerRoutes)["getProvidersByModel"]["responseSchema"]>
    >
  > {
    return this.get<
      z.infer<(typeof providerRoutes)["getProvidersByModel"]["responseSchema"]>
    >(providerRoutes.getProvidersByModel.path.replace(":modelId", modelId));
  }

  // ==================== WithModels 版本（包含模型列表）====================

  /**
   * 获取所有提供商（包含模型列表）
   * @description 获取系统中所有可用的提供商列表，包含关联的模型信息
   */
  async getProvidersWithModels(): Promise<
    ApiResponse<
      z.infer<
        (typeof providerRoutes)["getProvidersWithModels"]["responseSchema"]
      >
    >
  > {
    return this.get<
      z.infer<
        (typeof providerRoutes)["getProvidersWithModels"]["responseSchema"]
      >
    >(providerRoutes.getProvidersWithModels.path);
  }

  /**
   * 获取启用的提供商（包含模型列表）
   * @description 获取系统中所有启用状态的提供商列表，包含关联的模型
   */
  async getEnabledProvidersWithModels(): Promise<
    ApiResponse<
      z.infer<
        (typeof providerRoutes)["getEnabledProvidersWithModels"]["responseSchema"]
      >
    >
  > {
    return this.get<
      z.infer<
        (typeof providerRoutes)["getEnabledProvidersWithModels"]["responseSchema"]
      >
    >(providerRoutes.getEnabledProvidersWithModels.path);
  }

  /**
   * 根据ID获取单个提供商（包含模型列表）
   * @description 通过提供商ID获取特定提供商的详细信息，包含关联的模型
   * @param id - 提供商的唯一标识符
   */
  async getProviderWithModelsById(
    id: string
  ): Promise<
    ApiResponse<
      z.infer<
        (typeof providerRoutes)["getProviderWithModelsById"]["responseSchema"]
      >
    >
  > {
    return this.get<
      z.infer<
        (typeof providerRoutes)["getProviderWithModelsById"]["responseSchema"]
      >
    >(providerRoutes.getProviderWithModelsById.path.replace(":id", id));
  }

  /**
   * 根据类型获取提供商（包含模型列表）
   * @description 获取指定类型的所有提供商，包含关联的模型
   * @param type - 提供商类型
   */
  async getProvidersByTypeWithModels(
    type: ProviderType
  ): Promise<
    ApiResponse<
      z.infer<
        (typeof providerRoutes)["getProvidersByTypeWithModels"]["responseSchema"]
      >
    >
  > {
    return this.get<
      z.infer<
        (typeof providerRoutes)["getProvidersByTypeWithModels"]["responseSchema"]
      >
    >(providerRoutes.getProvidersByTypeWithModels.path.replace(":type", type));
  }

  /**
   * 根据模型ID获取提供商列表（包含模型列表）
   * @description 获取与指定模型关联的所有提供商，包含关联的模型
   * @param modelId - 模型的唯一标识符
   */
  async getProvidersByModelWithModels(
    modelId: string
  ): Promise<
    ApiResponse<
      z.infer<
        (typeof providerRoutes)["getProvidersByModelWithModels"]["responseSchema"]
      >
    >
  > {
    return this.get<
      z.infer<
        (typeof providerRoutes)["getProvidersByModelWithModels"]["responseSchema"]
      >
    >(
      providerRoutes.getProvidersByModelWithModels.path.replace(
        ":modelId",
        modelId
      )
    );
  }

  /**
   * 创建新提供商
   * @description 创建一个新的提供商记录
   * @param provider - 包含提供商信息的对象
   */
  async createProvider(
    provider: CreateProviderInput
  ): Promise<
    ApiResponse<
      z.infer<(typeof providerRoutes)["createProvider"]["responseSchema"]>
    >
  > {
    return this.post<
      z.infer<(typeof providerRoutes)["createProvider"]["responseSchema"]>
    >(providerRoutes.createProvider.path, provider);
  }

  /**
   * 更新提供商信息
   * @description 更新指定提供商的信息
   * @param id - 提供商的唯一标识符
   * @param provider - 包含更新信息的对象
   */
  async updateProvider(
    id: string,
    provider: UpdateProviderInput
  ): Promise<
    ApiResponse<
      z.infer<(typeof providerRoutes)["updateProvider"]["responseSchema"]>
    >
  > {
    return this.put<
      z.infer<(typeof providerRoutes)["updateProvider"]["responseSchema"]>
    >(providerRoutes.updateProvider.path.replace(":id", id), provider);
  }

  /**
   * 删除提供商
   * @description 删除指定的提供商记录
   * @param id - 提供商的唯一标识符
   */
  async deleteProvider(
    id: string
  ): Promise<
    ApiResponse<
      z.infer<(typeof providerRoutes)["deleteProvider"]["responseSchema"]>
    >
  > {
    return this.delete<
      z.infer<(typeof providerRoutes)["deleteProvider"]["responseSchema"]>
    >(providerRoutes.deleteProvider.path.replace(":id", id));
  }

  /**
   * 切换提供商启用状态
   * @description 切换提供商的启用/禁用状态
   * @param id - 提供商的唯一标识符
   */
  async toggleProviderEnabled(
    id: string
  ): Promise<
    ApiResponse<
      z.infer<
        (typeof providerRoutes)["toggleProviderEnabled"]["responseSchema"]
      >
    >
  > {
    return this.put<
      z.infer<
        (typeof providerRoutes)["toggleProviderEnabled"]["responseSchema"]
      >
    >(providerRoutes.toggleProviderEnabled.path.replace(":id", id), {});
  }
}

/**
 * 默认的提供商 API 客户端实例
 */
export const providersApi = new ProvidersApiClient();

/**
 * 便捷的函数式 API 调用方法
 * @description 提供更简洁的函数调用方式
 */
export const providersApiMethods = {
  // 基础版本
  getProviders: () => providersApi.getProviders(),
  getEnabledProviders: () => providersApi.getEnabledProviders(),
  getProviderById: (id: string) => providersApi.getProviderById(id),
  getProvidersByType: (type: ProviderType) =>
    providersApi.getProvidersByType(type),
  getProvidersByModel: (modelId: string) =>
    providersApi.getProvidersByModel(modelId),

  // WithModels 版本
  getProvidersWithModels: () => providersApi.getProvidersWithModels(),
  getEnabledProvidersWithModels: () =>
    providersApi.getEnabledProvidersWithModels(),
  getProviderWithModelsById: (id: string) =>
    providersApi.getProviderWithModelsById(id),
  getProvidersByTypeWithModels: (type: ProviderType) =>
    providersApi.getProvidersByTypeWithModels(type),
  getProvidersByModelWithModels: (modelId: string) =>
    providersApi.getProvidersByModelWithModels(modelId),

  // 写操作
  createProvider: (providerData: CreateProviderInput) =>
    providersApi.createProvider(providerData),
  updateProvider: (id: string, providerData: UpdateProviderInput) =>
    providersApi.updateProvider(id, providerData),
  deleteProvider: (id: string) => providersApi.deleteProvider(id),
  toggleProviderEnabled: (id: string) => providersApi.toggleProviderEnabled(id)
};

/**
 * React Hook 风格的 API 调用方法返回类型
 * @description 从 ProvidersApiClient 类中提取方法类型，自动保持类型同步
 */
export type UseProvidersApiReturn = Pick<
  ProvidersApiClient,
  // 基础版本
  | "getProviders"
  | "getEnabledProviders"
  | "getProviderById"
  | "getProvidersByType"
  | "getProvidersByModel"
  // WithModels 版本
  | "getProvidersWithModels"
  | "getEnabledProvidersWithModels"
  | "getProviderWithModelsById"
  | "getProvidersByTypeWithModels"
  | "getProvidersByModelWithModels"
  // 写操作
  | "createProvider"
  | "updateProvider"
  | "deleteProvider"
  | "toggleProviderEnabled"
>;

/**
 * React Hook 风格的 API 调用方法
 * @description 适用于 React 应用的 Hook 风格调用
 *
 * @returns 绑定了 this 上下文的 API 方法对象
 *
 * @example
 * const api = useProvidersApi();
 * const response = await api.getProviders();
 */
export const useProvidersApi = (): UseProvidersApiReturn => {
  return {
    // 基础版本
    getProviders: providersApi.getProviders.bind(
      providersApi
    ) as UseProvidersApiReturn["getProviders"],
    getEnabledProviders: providersApi.getEnabledProviders.bind(
      providersApi
    ) as UseProvidersApiReturn["getEnabledProviders"],
    getProviderById: providersApi.getProviderById.bind(
      providersApi
    ) as UseProvidersApiReturn["getProviderById"],
    getProvidersByType: providersApi.getProvidersByType.bind(
      providersApi
    ) as UseProvidersApiReturn["getProvidersByType"],
    getProvidersByModel: providersApi.getProvidersByModel.bind(
      providersApi
    ) as UseProvidersApiReturn["getProvidersByModel"],

    // WithModels 版本
    getProvidersWithModels: providersApi.getProvidersWithModels.bind(
      providersApi
    ) as UseProvidersApiReturn["getProvidersWithModels"],
    getEnabledProvidersWithModels:
      providersApi.getEnabledProvidersWithModels.bind(
        providersApi
      ) as UseProvidersApiReturn["getEnabledProvidersWithModels"],
    getProviderWithModelsById: providersApi.getProviderWithModelsById.bind(
      providersApi
    ) as UseProvidersApiReturn["getProviderWithModelsById"],
    getProvidersByTypeWithModels:
      providersApi.getProvidersByTypeWithModels.bind(
        providersApi
      ) as UseProvidersApiReturn["getProvidersByTypeWithModels"],
    getProvidersByModelWithModels:
      providersApi.getProvidersByModelWithModels.bind(
        providersApi
      ) as UseProvidersApiReturn["getProvidersByModelWithModels"],

    // 写操作
    createProvider: providersApi.createProvider.bind(
      providersApi
    ) as UseProvidersApiReturn["createProvider"],
    updateProvider: providersApi.updateProvider.bind(
      providersApi
    ) as UseProvidersApiReturn["updateProvider"],
    deleteProvider: providersApi.deleteProvider.bind(
      providersApi
    ) as UseProvidersApiReturn["deleteProvider"],
    toggleProviderEnabled: providersApi.toggleProviderEnabled.bind(
      providersApi
    ) as UseProvidersApiReturn["toggleProviderEnabled"]
  };
};
