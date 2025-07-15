/// <reference lib="dom" />
import { ProviderType } from "generated/prisma/enums";
import { ProviderModel } from "generated/prisma/models";

import { ApiClientConfig, ApiResponse, BaseApiClient } from "./base-client";

/**
 * 提供商创建和更新的输入类型
 */
export type ProviderInput = Pick<
  ProviderModel,
  | "type"
  | "name"
  | "apiKey"
  | "apiHost"
  | "apiVersion"
  | "enabled"
  | "isSystem"
  | "isAuthed"
  | "rateLimit"
  | "isNotSupportArrayContent"
  | "notes"
>;

/**
 * 提供商 API 客户端类
 * @description 提供类型安全的提供商相关 API 调用方法
 */
export class ProvidersApiClient extends BaseApiClient {
  constructor(config: ApiClientConfig = {}) {
    super(config);
  }

  /**
   * 获取所有提供商
   * @description 获取系统中所有可用的提供商列表，包含关联的模型信息
   */
  async getProviders(): Promise<ApiResponse<ProviderModel[]>> {
    return this.get<ProviderModel[]>("/providers");
  }

  /**
   * 获取启用的提供商
   * @description 获取系统中所有启用状态的提供商列表
   */
  async getEnabledProviders(): Promise<ApiResponse<ProviderModel[]>> {
    return this.get<ProviderModel[]>("/providers/enabled");
  }

  /**
   * 根据ID获取单个提供商
   * @description 通过提供商ID获取特定提供商的详细信息，包含关联的模型
   * @param id - 提供商的唯一标识符
   */
  async getProviderById(
    id: string,
  ): Promise<ApiResponse<ProviderModel | null>> {
    return this.get<ProviderModel | null>(`/providers/${id}`);
  }

  /**
   * 根据类型获取提供商
   * @description 获取指定类型的所有提供商，包含关联的模型
   * @param type - 提供商类型
   */
  async getProvidersByType(
    type: ProviderType,
  ): Promise<ApiResponse<ProviderModel[]>> {
    return this.get<ProviderModel[]>(`/providers/type/${type}`);
  }

  /**
   * 根据模型ID获取提供商列表
   * @description 获取与指定模型关联的所有提供商
   * @param modelId - 模型的唯一标识符
   */
  async getProvidersByModel(
    modelId: string,
  ): Promise<ApiResponse<ProviderModel[]>> {
    return this.get<ProviderModel[]>(`/providers/by-model/${modelId}`);
  }

  /**
   * 创建新提供商
   * @description 创建一个新的提供商记录
   * @param provider - 包含提供商信息的对象
   */
  async createProvider(
    provider: ProviderInput,
  ): Promise<ApiResponse<ProviderModel>> {
    return this.post<ProviderModel>("/providers", provider);
  }

  /**
   * 更新提供商信息
   * @description 更新指定提供商的信息
   * @param id - 提供商的唯一标识符
   * @param provider - 包含更新信息的对象
   */
  async updateProvider(
    id: string,
    provider: Partial<ProviderInput>,
  ): Promise<ApiResponse<ProviderModel>> {
    return this.put<ProviderModel>(`/providers/${id}`, provider);
  }

  /**
   * 删除提供商
   * @description 删除指定的提供商记录
   * @param id - 提供商的唯一标识符
   */
  async deleteProvider(id: string): Promise<ApiResponse<ProviderModel>> {
    return this.delete<ProviderModel>(`/providers/${id}`);
  }

  /**
   * 切换提供商启用状态
   * @description 切换提供商的启用/禁用状态
   * @param id - 提供商的唯一标识符
   */
  async toggleProviderEnabled(id: string): Promise<ApiResponse<ProviderModel>> {
    return this.put<ProviderModel>(`/providers/${id}/toggle`, {});
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
  /**
   * 获取所有提供商
   */
  getProviders: () => providersApi.getProviders(),

  /**
   * 获取启用的提供商
   */
  getEnabledProviders: () => providersApi.getEnabledProviders(),

  /**
   * 根据ID获取提供商
   * @param id - 提供商ID
   */
  getProviderById: (id: string) => providersApi.getProviderById(id),

  /**
   * 根据类型获取提供商
   * @param type - 提供商类型
   */
  getProvidersByType: (type: ProviderType) =>
    providersApi.getProvidersByType(type),

  /**
   * 创建提供商
   * @param providerData - 提供商数据
   */
  createProvider: (providerData: ProviderInput) =>
    providersApi.createProvider(providerData),

  /**
   * 更新提供商
   * @param id - 提供商ID
   * @param providerData - 更新数据
   */
  updateProvider: (id: string, providerData: Partial<ProviderInput>) =>
    providersApi.updateProvider(id, providerData),

  /**
   * 删除提供商
   * @param id - 提供商ID
   */
  deleteProvider: (id: string) => providersApi.deleteProvider(id),

  /**
   * 切换提供商启用状态
   * @param id - 提供商ID
   */
  toggleProviderEnabled: (id: string) => providersApi.toggleProviderEnabled(id),
};

/**
 * React Hook 风格的 API 调用方法
 * @description 适用于 React 应用的 Hook 风格调用
 */
export const useProvidersApi = () => {
  return {
    getProviders: providersApi.getProviders.bind(providersApi),
    getEnabledProviders: providersApi.getEnabledProviders.bind(providersApi),
    getProviderById: providersApi.getProviderById.bind(providersApi),
    getProvidersByType: providersApi.getProvidersByType.bind(providersApi),
    createProvider: providersApi.createProvider.bind(providersApi),
    updateProvider: providersApi.updateProvider.bind(providersApi),
    deleteProvider: providersApi.deleteProvider.bind(providersApi),
    toggleProviderEnabled:
      providersApi.toggleProviderEnabled.bind(providersApi),
  };
};
