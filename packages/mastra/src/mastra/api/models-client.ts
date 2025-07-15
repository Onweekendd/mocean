/// <reference lib="dom" />
import { ModelType } from "generated/prisma/enums";
import { ModelModel } from "generated/prisma/models";

import { ApiClientConfig, ApiResponse, BaseApiClient } from "./base-client";

/**
 * 模型创建和更新的输入类型
 */
export type ModelInput = Pick<
  ModelModel,
  "id" | "name" | "group" | "owned_by" | "description" | "typeJson"
> & {
  providerIds: string[];
};

/**
 * 模型创建输入类型（包含类型数组）
 */
export type ModelCreateInput = Omit<ModelInput, "typeJson"> & {
  types: ModelType[];
};

/**
 * 模型更新输入类型
 */
export type ModelUpdateInput = Partial<Omit<ModelInput, "id" | "typeJson">> & {
  types?: ModelType[];
};

/**
 * 模型与提供商关联类型
 */
export type ModelProviderRelation = {
  modelId: string;
  providerId: string;
};

/**
 * 批量创建结果类型
 */
export type BatchCreateResult = {
  count: number;
};

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
  async getModels(): Promise<ApiResponse<ModelModel[]>> {
    return this.get<ModelModel[]>("/models");
  }

  /**
   * 根据ID获取单个模型
   * @description 通过模型ID获取特定模型的详细信息
   * @param id - 模型的唯一标识符
   */
  async getModelById(id: string): Promise<ApiResponse<ModelModel | null>> {
    return this.get<ModelModel | null>(`/models/${id}`);
  }

  /**
   * 根据提供商ID获取模型列表
   * @description 获取指定提供商下的所有模型
   * @param providerId - 提供商的唯一标识符
   */
  async getModelsByProvider(
    providerId: string,
  ): Promise<ApiResponse<ModelModel[]>> {
    return this.get<ModelModel[]>(`/models/provider/${providerId}`);
  }

  /**
   * 根据类型获取模型列表
   * @description 获取指定类型的所有模型
   * @param type - 模型类型
   */
  async getModelsByType(type: ModelType): Promise<ApiResponse<ModelModel[]>> {
    return this.get<ModelModel[]>(`/models/type/${type}`);
  }

  /**
   * 根据分组获取模型列表
   * @description 获取指定分组的所有模型
   * @param group - 模型分组
   */
  async getModelsByGroup(group: string): Promise<ApiResponse<ModelModel[]>> {
    return this.get<ModelModel[]>(`/models/group/${group}`);
  }

  /**
   * 创建新模型
   * @description 创建一个新的模型记录，并关联指定的提供商
   * @param model - 包含模型信息的对象
   */
  async createModel(model: ModelCreateInput): Promise<ApiResponse<ModelModel>> {
    // 转换types为typeJson格式
    const payload = {
      ...model,
      typeJson: model.types,
    };

    return this.post<ModelModel>("/models", payload);
  }

  /**
   * 更新模型信息
   * @description 更新指定模型的信息，包括提供商关联
   * @param id - 模型的唯一标识符
   * @param model - 包含更新信息的对象
   */
  async updateModel(
    id: string,
    model: ModelUpdateInput,
  ): Promise<ApiResponse<ModelModel>> {
    // 转换types为typeJson格式
    const payload = model.types
      ? {
          ...model,
          typeJson: model.types,
        }
      : model;

    return this.put<ModelModel>(`/models/${id}`, payload);
  }

  /**
   * 删除模型
   * @description 删除指定的模型记录
   * @param id - 模型的唯一标识符
   */
  async deleteModel(id: string): Promise<ApiResponse<ModelModel>> {
    return this.delete<ModelModel>(`/models/${id}`);
  }

  /**
   * 批量创建模型
   * @description 批量创建多个模型记录
   * @param models - 模型信息数组
   */
  async createManyModels(
    models: ModelCreateInput[],
  ): Promise<ApiResponse<BatchCreateResult>> {
    // 转换types为typeJson格式
    const payload = models.map((model) => ({
      ...model,
      typeJson: model.types,
    }));

    return this.post<BatchCreateResult>(
      "/models/batch",
      payload as Record<string, unknown>,
    );
  }

  /**
   * 添加模型与提供商的关联
   * @description 为模型添加新的提供商关联
   * @param relation - 模型ID和提供商ID
   */
  async addModelProviderRelation(
    relation: ModelProviderRelation,
  ): Promise<ApiResponse<ModelProviderRelation>> {
    return this.post<ModelProviderRelation>("/models/relations", relation);
  }

  /**
   * 移除模型与提供商的关联
   * @description 移除模型与提供商之间的关联关系
   * @param relation - 模型ID和提供商ID
   */
  async removeModelProviderRelation(
    relation: ModelProviderRelation,
  ): Promise<ApiResponse<ModelProviderRelation>> {
    return this.delete<ModelProviderRelation>("/models/relations", relation);
  }

  /**
   * 获取模型与提供商的关联列表
   * @description 获取指定模型的所有提供商关联
   * @param modelId - 模型ID
   */
  async getModelProviderRelations(
    modelId: string,
  ): Promise<ApiResponse<ModelProviderRelation[]>> {
    return this.get<ModelProviderRelation[]>(`/models/${modelId}/relations`);
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
   * 根据类型获取模型
   * @param type - 模型类型
   */
  getModelsByType: (type: ModelType) => modelsApi.getModelsByType(type),

  /**
   * 根据分组获取模型
   * @param group - 模型分组
   */
  getModelsByGroup: (group: string) => modelsApi.getModelsByGroup(group),

  /**
   * 创建模型
   * @param modelData - 模型数据
   */
  createModel: (modelData: ModelCreateInput) =>
    modelsApi.createModel(modelData),

  /**
   * 批量创建模型
   * @param modelsData - 模型数据数组
   */
  createManyModels: (modelsData: ModelCreateInput[]) =>
    modelsApi.createManyModels(modelsData),

  /**
   * 更新模型
   * @param id - 模型ID
   * @param modelData - 更新数据
   */
  updateModel: (id: string, modelData: Partial<ModelCreateInput>) =>
    modelsApi.updateModel(id, modelData),

  /**
   * 删除模型
   * @param id - 模型ID
   */
  deleteModel: (id: string) => modelsApi.deleteModel(id),
};

/**
 * React Hook 风格的 API 调用方法
 * @description 适用于 React 应用的 Hook 风格调用
 */
export const useModelsApi = () => {
  return {
    getModels: modelsApi.getModels.bind(modelsApi),
    getModelById: modelsApi.getModelById.bind(modelsApi),
    getModelsByProvider: modelsApi.getModelsByProvider.bind(modelsApi),
    getModelsByType: modelsApi.getModelsByType.bind(modelsApi),
    getModelsByGroup: modelsApi.getModelsByGroup.bind(modelsApi),
    createModel: modelsApi.createModel.bind(modelsApi),
    createManyModels: modelsApi.createManyModels.bind(modelsApi),
    updateModel: modelsApi.updateModel.bind(modelsApi),
    deleteModel: modelsApi.deleteModel.bind(modelsApi),
  };
};
