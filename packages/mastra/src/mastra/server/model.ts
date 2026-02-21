import type { ModelUpdateInput } from "generated/prisma/models";
import type z from "zod";

import type { modelRoutes } from "../router/type";
import type { CreateModelInput, UpdateModelInput } from "../schema/model";
import {
  CreateManyModelsResponseSchema,
  ModelProviderRelationResponseSchema,
  ModelResponseSchema,
  ModelWithProvidersResponseSchema,
  ModelsResponseSchema,
  createModelSchema,
  groupParamSchema,
  idParamSchema,
  modelProviderRelationSchema,
  providerParamSchema,
  updateModelSchema
} from "../schema/model";
import { prisma } from "./index";
import type { AsyncReturnType } from "./type";

/**
 * Response Schemas
 * 用于 Router 的响应类型验证
 */
export {
  ModelResponseSchema,
  ModelsResponseSchema,
  ModelWithProvidersResponseSchema,
  CreateManyModelsResponseSchema,
  ModelProviderRelationResponseSchema
};

/**
 * 获取所有模型（基础版本，不包含关联信息）
 * @description 从数据库中获取所有模型的列表，不包含关联信息
 * @returns 包含所有模型信息的数组
 */
const getModels = async (): Promise<
  z.infer<(typeof modelRoutes)["getModels"]["responseSchema"]>
> => {
  const models = await prisma.model.findMany({
    orderBy: {
      name: "asc"
    }
  });

  return models;
};

/**
 * 获取所有模型（包含提供商信息）
 * @description 从数据库中获取所有模型的列表，包含关联的提供商信息
 * @returns 包含所有模型信息和关联提供商的数组
 */
const getModelsWithProviders = async (): Promise<
  z.infer<(typeof modelRoutes)["getModelsWithProviders"]["responseSchema"]>
> => {
  const models = await prisma.model.findMany({
    include: {
      group: {
        include: {
          provider: true
        }
      }
    },
    orderBy: {
      name: "asc"
    }
  });

  // 整理提供商信息
  return models.map((model) => ({
    ...model,
    providers: [model.group.provider]
  }));
};

/**
 * 根据ID获取单个模型（基础版本，不包含关联信息）
 * @description 通过模型ID从数据库中获取特定模型的详细信息
 * @param id - 模型的唯一标识符
 * @returns 模型对象，如果不存在则返回null
 */
const getModelById = async (
  id: string
): Promise<z.infer<(typeof modelRoutes)["getModelById"]["responseSchema"]>> => {
  const model = await prisma.model.findUnique({
    where: { id }
  });

  if (!model) return null;
  return model;
};

/**
 * 根据ID获取单个模型（包含提供商信息）
 * @description 通过模型ID从数据库中获取特定模型的详细信息，包含关联的提供商
 * @param id - 模型的唯一标识符
 * @returns 模型对象，如果不存在则返回null
 */
const getModelWithProvidersById = async (
  id: string
): Promise<
  z.infer<(typeof modelRoutes)["getModelWithProvidersById"]["responseSchema"]>
> => {
  const model = await prisma.model.findUnique({
    where: { id },
    include: {
      group: {
        include: {
          provider: true
        }
      }
    }
  });

  if (!model) return null;

  return {
    ...model,
    providers: [model.group.provider]
  };
};

/**
 * 根据提供商ID获取模型（基础版本）
 * @description 通过提供商ID获取对应的模型列表
 * @param providerId - 提供商ID
 * @returns 符合提供商的模型数组
 */
const getModelsByProvider = async (
  providerId: string
): Promise<
  z.infer<(typeof modelRoutes)["getModelsByProvider"]["responseSchema"]>
> => {
  // 通过 Group 查询，因为 Model -> Group -> Provider
  const models = await prisma.model.findMany({
    where: {
      group: {
        providerId
      }
    },
    orderBy: {
      name: "asc"
    }
  });

  return models;
};

/**
 * 根据提供商ID获取模型（包含提供商信息）
 * @description 通过提供商ID获取对应的模型列表
 * @param providerId - 提供商ID
 * @returns 符合提供商的模型数组
 */
const getModelsByProviderWithProviders = async (
  providerId: string
): Promise<
  z.infer<
    (typeof modelRoutes)["getModelsByProviderWithProviders"]["responseSchema"]
  >
> => {
  const models = await prisma.model.findMany({
    where: {
      group: {
        providerId
      }
    },
    include: {
      group: {
        include: {
          provider: true
        }
      }
    },
    orderBy: {
      name: "asc"
    }
  });

  return models.map((model) => ({
    ...model,
    providers: [model.group.provider]
  }));
};

/**
 * 根据分组ID获取模型（基础版本）
 * @description 通过分组ID获取对应的模型列表
 * @param groupId - 分组ID
 * @returns 符合分组的模型数组
 */
const getModelsByGroup = async (
  groupId: string
): Promise<
  z.infer<(typeof modelRoutes)["getModelsByGroup"]["responseSchema"]>
> => {
  const models = await prisma.model.findMany({
    where: {
      groupId
    },
    orderBy: {
      name: "asc"
    }
  });

  return models;
};

/**
 * 根据分组ID获取模型（包含提供商信息）
 * @description 通过分组ID获取对应的模型列表
 * @param groupId - 分组ID
 * @returns 符合分组的模型数组
 */
const getModelsByGroupWithProviders = async (
  groupId: string
): Promise<
  z.infer<
    (typeof modelRoutes)["getModelsByGroupWithProviders"]["responseSchema"]
  >
> => {
  const models = await prisma.model.findMany({
    where: {
      groupId
    },
    include: {
      group: {
        include: {
          provider: true
        }
      }
    },
    orderBy: {
      name: "asc"
    }
  });

  return models.map((model) => ({
    ...model,
    providers: [model.group.provider]
  }));
};

/**
 * 创建新模型
 * @description 在数据库中创建一个新的模型记录
 * @param model - 包含模型信息的对象
 * @returns 新创建的模型对象
 */
const createModel = async (
  model: CreateModelInput
): Promise<z.infer<(typeof modelRoutes)["createModel"]["responseSchema"]>> => {
  // 验证分组是否存在
  const group = await prisma.group.findUnique({
    where: { id: model.groupId },
    include: { provider: true }
  });

  if (!group) {
    throw new Error(`分组 ${model.groupId} 不存在`);
  }

  const newModel = await prisma.model.create({
    data: {
      id: model.id,
      name: model.name,
      owned_by: model.owned_by,
      description: model.description,
      isSystem: model.isSystem,
      contextLength: model.contextLength,
      supportsAttachments: model.supportsAttachments,
      supportsTools: model.supportsTools,
      supportsReasoning: model.supportsReasoning,
      supportsImage: model.supportsImage,
      supportsAudio: model.supportsAudio,
      supportsVideo: model.supportsVideo,
      supportsEmbedding: model.supportsEmbedding,
      inputPricePerMillion: model.inputPricePerMillion,
      outputPricePerMillion: model.outputPricePerMillion,
      group: {
        connect: { id: model.groupId }
      }
    },
    include: {
      group: {
        include: {
          provider: true
        }
      }
    }
  });

  return {
    ...newModel,
    providers: [newModel.group.provider]
  };
};

/**
 * 更新模型信息
 * @description 根据模型ID更新数据库中的模型信息
 * @param id - 要更新的模型的唯一标识符
 * @param model - 包含更新信息的对象
 * @returns 更新后的模型对象
 */
const updateModel = async (
  id: string,
  model: UpdateModelInput
): Promise<z.infer<(typeof modelRoutes)["updateModel"]["responseSchema"]>> => {
  // 如果提供了groupId，验证分组是否存在
  if (model.groupId) {
    const group = await prisma.group.findUnique({
      where: { id: model.groupId }
    });

    if (!group) {
      throw new Error(`分组 ${model.groupId} 不存在`);
    }
  }

  // 分离 groupId 和其他字段，因为 groupId 是外键，需要通过 connect 来更新
  const { groupId, ...otherFields } = model;

  // 构建 Prisma 更新数据，使用 any 类型避免复杂的类型推导

  const data: ModelUpdateInput = {
    ...otherFields,
    updatedAt: new Date(),
    ...(groupId && { group: { connect: { id: groupId } } })
  };

  const updatedModel = await prisma.model.update({
    where: { id },
    data,
    include: {
      group: {
        include: {
          provider: true
        }
      }
    }
  });

  return {
    ...updatedModel,
    providers: [updatedModel.group.provider]
  };
};

/**
 * 删除模型
 * @description 根据模型ID从数据库中删除指定的模型
 * @param id - 要删除的模型的唯一标识符
 * @returns 被删除的模型对象
 */
const deleteModel = async (
  id: string
): Promise<z.infer<(typeof modelRoutes)["deleteModel"]["responseSchema"]>> => {
  // 先检查是否有关联的助手或知识库
  const modelWithRelations = await prisma.model.findUnique({
    where: { id },
    include: {
      _count: {
        select: {
          assistants: true,
          rerankFor: true
        }
      }
    }
  });

  if (modelWithRelations) {
    const { _count } = modelWithRelations;
    const totalRelations = _count.assistants + _count.rerankFor;

    if (totalRelations > 0) {
      throw new Error(`无法删除模型：仍有 ${totalRelations} 个关联的记录`);
    }
  }

  const deletedModel = await prisma.model.delete({
    where: { id }
  });

  return deletedModel;
};

/**
 * 批量创建模型
 * @description 批量创建多个模型记录
 * @param models - 模型信息数组
 * @returns 创建结果统计
 */
const createManyModels = async (
  models: CreateModelInput[]
): Promise<
  z.infer<(typeof modelRoutes)["createManyModels"]["responseSchema"]>
> => {
  // 验证所有分组是否存在
  const allGroupIds = [...new Set(models.map((m) => m.groupId))];
  const groups = await prisma.group.findMany({
    where: { id: { in: allGroupIds } },
    select: { id: true }
  });

  const existingGroupIds = new Set(groups.map((g) => g.id));
  const missingGroups = allGroupIds.filter((id) => !existingGroupIds.has(id));

  if (missingGroups.length > 0) {
    throw new Error(`以下分组不存在: ${missingGroups.join(", ")}`);
  }

  // 使用事务创建模型
  const result = await prisma.$transaction(async (tx) => {
    const createdModels = [];

    for (const model of models) {
      const createdModel = await tx.model.create({
        data: {
          ...model,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      });

      createdModels.push(createdModel);
    }

    return { count: createdModels.length };
  });

  return result;
};

/**
 * 添加模型与提供商的关联（通过更改模型所属分组）
 * @description 将模型移动到指定提供商的分组中
 * @param relation - 模型ID和目标分组ID
 * @returns 更新后的模型对象
 */
const addModelProviderRelation = async (relation: {
  modelId: string;
  groupId: string;
}): Promise<
  z.infer<(typeof modelRoutes)["addModelProviderRelation"]["responseSchema"]>
> => {
  // 验证模型是否存在
  const model = await prisma.model.findUnique({
    where: { id: relation.modelId }
  });

  if (!model) {
    throw new Error("指定的模型不存在");
  }

  // 验证分组是否存在
  const group = await prisma.group.findUnique({
    where: { id: relation.groupId },
    include: { provider: true }
  });

  if (!group) {
    throw new Error("指定的分组不存在");
  }

  // 更新模型的分组
  const updatedModel = await prisma.model.update({
    where: { id: relation.modelId },
    data: { groupId: relation.groupId },
    include: {
      group: {
        include: {
          provider: true
        }
      }
    }
  });

  return {
    modelId: updatedModel.id,
    providerId: updatedModel.group.providerId,
    groupId: updatedModel.groupId,
    model: updatedModel,
    provider: updatedModel.group.provider,
    group: updatedModel.group
  };
};

/**
 * 移除模型与提供商的关联（将模型移至默认分组）
 * @description 将模型移动到提供商的默认分组
 * @param relation - 模型ID
 * @returns 更新后的模型对象
 */
const removeModelProviderRelation = async (relation: {
  modelId: string;
  providerId: string;
}): Promise<
  z.infer<(typeof modelRoutes)["removeModelProviderRelation"]["responseSchema"]>
> => {
  // 获取提供商的默认分组
  const defaultGroup = await prisma.group.findFirst({
    where: {
      providerId: relation.providerId,
      isDefault: true
    }
  });

  if (!defaultGroup) {
    throw new Error("未找到默认分组");
  }

  // 更新模型的分组
  const updatedModel = await prisma.model.update({
    where: { id: relation.modelId },
    data: { groupId: defaultGroup.id },
    include: {
      group: {
        include: {
          provider: true
        }
      }
    }
  });

  return {
    modelId: updatedModel.id,
    providerId: updatedModel.group.providerId,
    groupId: updatedModel.groupId,
    model: updatedModel,
    provider: updatedModel.group.provider,
    group: updatedModel.group
  };
};

/**
 * 获取模型与提供商的关联列表
 * @description 获取指定模型的所有信息（包含分组和提供商）
 * @param modelId - 模型ID
 * @returns 模型信息（包含分组和提供商）
 */
const getModelProviderRelations = async (
  modelId: string
): Promise<
  z.infer<(typeof modelRoutes)["getModelProviderRelations"]["responseSchema"]>
> => {
  const model = await prisma.model.findUnique({
    where: { id: modelId },
    include: {
      group: {
        include: {
          provider: true
        }
      }
    }
  });

  if (!model) {
    return [];
  }

  // 返回单个关联（因为一个模型只属于一个分组）
  return [
    {
      modelId: model.id,
      providerId: model.group.providerId,
      groupId: model.groupId,
      model: model,
      provider: model.group.provider,
      group: model.group
    }
  ];
};

/**
 * Prisma 数据库操作返回类型
 */
// 查询 - 基础版本
export type ModelsListResult = AsyncReturnType<typeof getModels>;
export type ModelDetailResult = AsyncReturnType<typeof getModelById>;
export type ModelsByProviderResult = AsyncReturnType<
  typeof getModelsByProvider
>;
export type ModelsByGroupResult = AsyncReturnType<typeof getModelsByGroup>;

// 查询 - WithProviders 版本
export type ModelsWithProvidersResult = AsyncReturnType<
  typeof getModelsWithProviders
>;
export type ModelWithProvidersResult = AsyncReturnType<
  typeof getModelWithProvidersById
>;
export type ModelsByProviderWithProvidersResult = AsyncReturnType<
  typeof getModelsByProviderWithProviders
>;
export type ModelsByGroupWithProvidersResult = AsyncReturnType<
  typeof getModelsByGroupWithProviders
>;

// 写操作
export type ModelCreateResult = AsyncReturnType<typeof createModel>;
export type ModelUpdateResult = AsyncReturnType<typeof updateModel>;
export type ModelDeleteResult = AsyncReturnType<typeof deleteModel>;
export type ModelsBatchCreateResult = AsyncReturnType<typeof createManyModels>;

// 关联操作
export type ModelProviderRelationAddResult = AsyncReturnType<
  typeof addModelProviderRelation
>;
export type ModelProviderRelationRemoveResult = AsyncReturnType<
  typeof removeModelProviderRelation
>;
export type ModelProviderRelationsResult = AsyncReturnType<
  typeof getModelProviderRelations
>;

export {
  getModels,
  getModelsWithProviders,
  getModelById,
  getModelWithProvidersById,
  getModelsByProvider,
  getModelsByProviderWithProviders,
  getModelsByGroup,
  getModelsByGroupWithProviders,
  createModel,
  updateModel,
  deleteModel,
  createManyModels,
  addModelProviderRelation,
  removeModelProviderRelation,
  getModelProviderRelations,
  createModelSchema,
  updateModelSchema,
  idParamSchema,
  providerParamSchema,
  groupParamSchema,
  modelProviderRelationSchema
};
