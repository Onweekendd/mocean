/// <reference lib="dom" />
import {
  CreateModelInput,
  ModelCreateResult,
  ModelDeleteResult,
  ModelDetailResult,
  ModelProviderRelation,
  ModelProviderRelationAddResult,
  ModelProviderRelationRemoveResult,
  ModelProviderRelationsResult,
  ModelUpdateResult,
  ModelsBatchCreateResult,
  ModelsByGroupResult,
  ModelsByProviderResult,
  ModelsListResult,
  UpdateModelInput,
} from "../server/model";
import { ApiClientConfig, ApiResponse, BaseApiClient } from "./base-client";

/**
 * 模型 API 客户端类
 * @description 提供类型安全的模型相关 API 调用方法
 */
export class ModelsApiClient extends BaseApiClient {
  constructor(config: ApiClientConfig = {}) {
    super(config);
  }

  /**
   * 获取所有模型
   * @description 获取系统中所有可用的模型列表，包含关联的提供商信息
   */
  async getModels(): Promise<ApiResponse<ModelsListResult>> {
    return this.get<ModelsListResult>("/models");
  }

  /**
   * 根据ID获取单个模型
   * @description 通过模型ID获取特定模型的详细信息
   * @param id - 模型的唯一标识符
   */
  async getModelById(id: string): Promise<ApiResponse<ModelDetailResult>> {
    return this.get<ModelDetailResult>(`/models/${id}`);
  }

  /**
   * 根据提供商ID获取模型列表
   * @description 获取指定提供商下的所有模型
   * @param providerId - 提供商的唯一标识符
   */
  async getModelsByProvider(
    providerId: string,
  ): Promise<ApiResponse<ModelsByProviderResult>> {
    return this.get<ModelsByProviderResult>(`/models/provider/${providerId}`);
  }

  /**
   * 根据分组获取模型列表
   * @description 获取指定分组的所有模型
   * @param group - 模型分组
   */
  async getModelsByGroup(
    group: string,
  ): Promise<ApiResponse<ModelsByGroupResult>> {
    return this.get<ModelsByGroupResult>(`/models/group/${group}`);
  }

  /**
   * 创建新模型
   * @description 创建一个新的模型记录，并关联指定的提供商
   * @param model - 包含模型信息的对象
   */
  async createModel(
    model: CreateModelInput,
  ): Promise<ApiResponse<ModelCreateResult>> {
    return this.post<ModelCreateResult>("/models", model);
  }

  /**
   * 更新模型信息
   * @description 更新指定模型的信息，包括提供商关联
   * @param id - 模型的唯一标识符
   * @param model - 包含更新信息的对象
   */
  async updateModel(
    id: string,
    model: UpdateModelInput,
  ): Promise<ApiResponse<ModelUpdateResult>> {
    return this.put<ModelUpdateResult>(`/models/${id}`, model);
  }

  /**
   * 删除模型
   * @description 删除指定的模型记录
   * @param id - 模型的唯一标识符
   */
  async deleteModel(id: string): Promise<ApiResponse<ModelDeleteResult>> {
    return this.delete<ModelDeleteResult>(`/models/${id}`);
  }

  /**
   * 批量创建模型
   * @description 批量创建多个模型记录
   * @param models - 模型信息数组
   */
  async createManyModels(
    models: CreateModelInput[],
  ): Promise<ApiResponse<ModelsBatchCreateResult>> {
    return this.post<ModelsBatchCreateResult>(
      "/models/batch",
      models as unknown as Record<string, unknown>,
    );
  }

  /**
   * 添加模型与提供商的关联
   * @description 为模型添加新的提供商关联
   * @param relation - 模型ID和提供商ID
   */
  async addModelProviderRelation(
    relation: ModelProviderRelation,
  ): Promise<ApiResponse<ModelProviderRelationAddResult>> {
    return this.post<ModelProviderRelationAddResult>(
      "/models/relations",
      relation,
    );
  }

  /**
   * 移除模型与提供商的关联
   * @description 移除模型与提供商之间的关联关系
   * @param relation - 模型ID和提供商ID
   */
  async removeModelProviderRelation(
    relation: ModelProviderRelation,
  ): Promise<ApiResponse<ModelProviderRelationRemoveResult>> {
    return this.delete<ModelProviderRelationRemoveResult>(
      "/models/relations",
      relation,
    );
  }

  /**
   * 获取模型与提供商的关联列表
   * @description 获取指定模型的所有提供商关联
   * @param modelId - 模型ID
   */
  async getModelProviderRelations(
    modelId: string,
  ): Promise<ApiResponse<ModelProviderRelationsResult>> {
    return this.get<ModelProviderRelationsResult>(
      `/models/${modelId}/relations`,
    );
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
  /**
   * 获取所有模型
   */
  getModels: () => modelsApi.getModels(),

  /**
   * 根据ID获取模型
   * @param id - 模型ID
   */
  getModelById: (id: string) => modelsApi.getModelById(id),

  /**
   * 根据提供商ID获取模型
   * @param providerId - 提供商ID
   */
  getModelsByProvider: (providerId: string) =>
    modelsApi.getModelsByProvider(providerId),

  /**
   * 根据分组获取模型
   * @param group - 模型分组
   */
  getModelsByGroup: (group: string) => modelsApi.getModelsByGroup(group),

  /**
   * 创建模型
   * @param modelData - 模型数据
   */
  createModel: (modelData: CreateModelInput) =>
    modelsApi.createModel(modelData),

  /**
   * 批量创建模型
   * @param modelsData - 模型数据数组
   */
  createManyModels: (modelsData: CreateModelInput[]) =>
    modelsApi.createManyModels(modelsData),

  /**
   * 更新模型
   * @param id - 模型ID
   * @param modelData - 更新数据
   */
  updateModel: (id: string, modelData: UpdateModelInput) =>
    modelsApi.updateModel(id, modelData),

  /**
   * 删除模型
   * @param id - 模型ID
   */
  deleteModel: (id: string) => modelsApi.deleteModel(id),
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
  | "createModel"
  | "createManyModels"
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
 * const response = await api.getModels();
 */
export const useModelsApi = (): UseModelsApiReturn => {
  return {
    getModels: modelsApi.getModels.bind(modelsApi),
    getModelById: modelsApi.getModelById.bind(modelsApi),
    getModelsByProvider: modelsApi.getModelsByProvider.bind(modelsApi),
    getModelsByGroup: modelsApi.getModelsByGroup.bind(modelsApi),
    createModel: modelsApi.createModel.bind(modelsApi),
    createManyModels: modelsApi.createManyModels.bind(modelsApi),
    updateModel: modelsApi.updateModel.bind(modelsApi),
    deleteModel: modelsApi.deleteModel.bind(modelsApi),
  };
};
