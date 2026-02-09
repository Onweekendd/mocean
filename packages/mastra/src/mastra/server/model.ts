import type { ModelGroup, Prisma, Provider } from "generated/prisma/client";
import { ModelGroupSchema, ModelSchema, ProviderSchema } from "generated/schemas/models";
import { z } from "zod";

import { prisma } from "./index";
import type { AsyncReturnType } from "./type";

/**
 * Response Schemas
 * 用于 Router 的响应类型验证
 */

// 基础 Model Response Schema（不含关联关系）
export const ModelResponseSchema = ModelSchema.pick({
  id: true,
  name: true,
  owned_by: true,
  description: true,
  isSystem: true,
  contextLength: true,
  supportsAttachments: true,
  supportsTools: true,
  supportsReasoning: true,
  supportsImage: true,
  supportsAudio: true,
  supportsVideo: true,
  supportsEmbedding: true,
  inputPricePerMillion: true,
  outputPricePerMillion: true,
  createdAt: true,
  updatedAt: true
});

// Models 列表 Response Schema
export const ModelsResponseSchema = z.array(ModelResponseSchema);

// 带 providers 数组的 Model Response Schema
export const ModelWithProvidersResponseSchema = ModelSchema.pick({
  id: true,
  name: true,
  owned_by: true,
  description: true,
  isSystem: true,
  contextLength: true,
  supportsAttachments: true,
  supportsTools: true,
  supportsReasoning: true,
  supportsImage: true,
  supportsAudio: true,
  supportsVideo: true,
  supportsEmbedding: true,
  inputPricePerMillion: true,
  outputPricePerMillion: true,
  createdAt: true,
  updatedAt: true
}).extend({
  providers: z.array(ProviderSchema)
});

/**
 * 模型相关的zod校验schemas
 */

// 从 ModelSchema 中提取字段类型，然后扩展自定义验证
const createModelSchema = ModelSchema.pick({
  id: true,
  name: true,
  owned_by: true,
  description: true,
  isSystem: true,
  contextLength: true,
  supportsAttachments: true,
  supportsTools: true,
  supportsReasoning: true,
  supportsImage: true,
  supportsAudio: true,
  supportsVideo: true,
  supportsEmbedding: true,
  inputPricePerMillion: true,
  outputPricePerMillion: true
}).extend({
  id: z.string().min(1, "模型ID不能为空"),
  name: z.string().min(1, "模型名称不能为空"),
  isSystem: z.boolean().optional().default(false),
  supportsAttachments: z.boolean().optional().default(false),
  supportsTools: z.boolean().optional().default(false),
  supportsReasoning: z.boolean().optional().default(false),
  supportsImage: z.boolean().optional().default(false),
  supportsAudio: z.boolean().optional().default(false),
  supportsVideo: z.boolean().optional().default(false),
  supportsEmbedding: z.boolean().optional().default(false),
  // 扩展 providers 字段（用于 modelGroups 关联）
  providers: z.array(ProviderSchema.extend({
    groups:z.array(ModelGroupSchema)
  })).min(1, "至少需要一个提供商")
});

const updateModelSchema = ModelSchema.pick({
  name: true,
  owned_by: true,
  description: true,
  isSystem: true,
  contextLength: true,
  supportsAttachments: true,
  supportsTools: true,
  supportsReasoning: true,
  supportsImage: true,
  supportsAudio: true,
  supportsVideo: true,
  supportsEmbedding: true,
  inputPricePerMillion: true,
  outputPricePerMillion: true
})
  .partial()
  .extend({
    // 扩展 providers 字段
    providers: z.array(ProviderSchema.extend({
      groups:z.array(ModelGroupSchema)
    })).min(1, "至少需要一个提供商")
  });

const idParamSchema = z.object({
  id: z.string().min(1, "模型ID不能为空")
});

const providerParamSchema = z.object({
  providerId: z.string().min(1, "提供商ID不能为空")
});

const groupParamSchema = z.object({
  group: z.string().min(1, "模型分组不能为空")
});

const modelProviderRelationSchema = z.object({
  modelId: z.string().min(1, "模型ID不能为空"),
  providerId: z.string().min(1, "提供商ID不能为空"),
  groupId: z.string().min(1, "分组ID不能为空")
});

// zod类型推导

export type CreateModelInput = z.infer<typeof createModelSchema>;
export type UpdateModelInput = z.infer<typeof updateModelSchema>;
export type ModelProviderRelation = z.infer<typeof modelProviderRelationSchema>;


/**
 * 获取所有模型（基础版本，不包含关联信息）
 * @description 从数据库中获取所有模型的列表，不包含关联信息
 * @returns 包含所有模型信息的数组
 */
const getModels = async () => {
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
const getModelsWithProviders = async () => {
  const models = await prisma.model.findMany({
    include: {
      modelGroups: {
        include: {
          provider: true,
          group: true
        }
      },
      assistants: true,
      defaultForAssistants: true,
      knowledgeBases: true,
      assistantSettings: true,
      rerankFor: true
    },
    orderBy: {
      name: "asc"
    }
  });

  // 整理提供商信息
  return models.map((model) => {
    type ModelWithGroups = typeof model & {
      modelGroups: Array<{ provider: Provider; group: ModelGroup }>;
    };
    return {
      ...model,
      providers: (model as ModelWithGroups).modelGroups.map(
        (mg) => mg.provider
      ),
      _modelRelations: (model as ModelWithGroups).modelGroups
    };
  });
};

/**
 * 根据ID获取单个模型（基础版本，不包含关联信息）
 * @description 通过模型ID从数据库中获取特定模型的详细信息
 * @param id - 模型的唯一标识符
 * @returns 模型对象，如果不存在则返回null
 */
const getModelById = async (id: string) => {
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
const getModelWithProvidersById = async (id: string) => {
  const model = await prisma.model.findUnique({
    where: { id },
    include: {
      modelGroups: {
        include: {
          provider: true,
          group: true
        }
      },
      assistants: true,
      defaultForAssistants: true,
      knowledgeBases: true,
      assistantSettings: true,
      rerankFor: true
    }
  });

  if (!model) return null;

  // 整理提供商信息
  type ModelWithGroups = typeof model & {
    modelGroups: Array<{ provider: Provider; group: ModelGroup }>;
  };
  return {
    ...model,
    providers: (model as ModelWithGroups).modelGroups.map((mg) => mg.provider),
    _modelRelations: (model as ModelWithGroups).modelGroups
  };
};

/**
 * 根据提供商ID获取模型（基础版本）
 * @description 通过提供商ID获取对应的模型列表
 * @param providerId - 提供商ID
 * @returns 符合提供商的模型数组
 */
const getModelsByProvider = async (providerId: string) => {
  const models = await prisma.model.findMany({
    where: {
      providers: {
        some: { providerId }
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
const getModelsByProviderWithProviders = async (providerId: string) => {
  const models = await prisma.model.findMany({
    where: {
      providers: {
        some: { providerId }
      }
    },
    // 查询分组中间表时
    // 还会携带供应商
    include: {
      modelGroups: {
        include: {
          provider: true,
          group: true
        }
      }
    },
    orderBy: {
      name: "asc"
    }
  });

  return models.map((model) => {
    return {
      ...model,
      groups: model.modelGroups.filter(
        (mg) => mg.providerId === providerId
      ),
      providers: model.modelGroups
        .filter((mg) => mg.providerId === providerId)
        .map((mg) => mg.provider)
    };
  });
};

/**
 * 根据分组获取模型（基础版本）
 * @description 通过分组ID获取对应的模型列表
 * @param groupId - 分组ID
 * @returns 符合分组的模型数组
 */
const getModelsByGroup = async (groupId: string) => {
  // 通过 ModelGroup.groupId 查询
  const modelGroups = await prisma.modelGroup.findMany({
    where: { groupId },
    include: {
      model: true
    }
  });

  // 转换为模型列表格式
  return modelGroups.map((mg) => mg.model);
};

/**
 * 根据分组获取模型（包含提供商信息）
 * @description 通过分组ID获取对应的模型列表
 * @param groupId - 分组ID
 * @returns 符合分组的模型数组
 */
const getModelsByGroupWithProviders = async (groupId: string) => {
  // 通过 ModelGroup.groupId 查询
  const modelGroups = await prisma.modelGroup.findMany({
    where: { groupId },
    include: {
      model: true,
      provider: true,
      group: true
    }
  });

  // 转换为模型列表格式
  // 注意：同一模型可能出现多次（不同供应商）
  return modelGroups.map((mg) => ({
    ...mg.model,
    groups: [mg],
    providers: [mg.provider]
  }));
};

/**
 * 创建新模型
 * @description 在数据库中创建一个新的模型记录，并关联指定的提供商
 * @param model - 包含模型信息的对象
 * @returns 新创建的模型对象
 */
const createModel = async (model: CreateModelInput) => {
  // 验证提供商是否存在
  const providerIds = model.providers.map((p) => p.id);
  const providers = await prisma.provider.findMany({
    where: { id: { in: providerIds } }
  });

  if (providers.length !== providerIds.length) {
    const existingIds = providers.map((p) => p.id);
    const missingIds = providerIds.filter((id) => !existingIds.includes(id));
    throw new Error(`以下提供商不存在: ${missingIds.join(", ")}`);
  }

  const { providers: providerRelations, ...modelData } = model;

  const newModel = await prisma.model.create({
    data: {
      ...modelData,
      modelGroups: {
        create: providerRelations.map((p) => ({
          providerId: p.id
        }))
      }
    } as Prisma.ModelCreateInput,
    include: {
      modelGroups: {
        include: {
          provider: true,
          group: true
        }
      }
    }
  });

  type ModelWithGroups = typeof newModel & {
    modelGroups: Array<{ provider: Provider; group: ModelGroup }>;
  };

  return {
    ...newModel,
    providers: (newModel as ModelWithGroups).modelGroups.map(
      (mg) => mg.provider
    ),
    _modelRelations: (newModel as ModelWithGroups).modelGroups
  };
};

/**
 * 更新模型信息
 * @description 根据模型ID更新数据库中的模型信息，包括提供商关联
 * @param id - 要更新的模型的唯一标识符
 * @param model - 包含更新信息的对象
 * @returns 更新后的模型对象
 */
const updateModel = async (id: string, model: UpdateModelInput) => {
  // 如果提供了providers，验证提供商是否存在
  if (model.providers) {
    const providerIds = model.providers.map((p) => p.id);
    const providers = await prisma.provider.findMany({
      where: { id: { in: providerIds } }
    });

    if (providers.length !== providerIds.length) {
      const existingIds = providers.map((p) => p.id);
      const missingIds = providerIds.filter((id) => !existingIds.includes(id));
      throw new Error(`以下提供商不存在: ${missingIds.join(", ")}`);
    }
  }

  const { providers: providerRelations, ...modelData } = model;

  const updatedModel = await prisma.model.update({
    where: { id },
    data: {
      ...modelData,
      ...(providerRelations && {
        modelGroups: {
          deleteMany: {},
          create: providerRelations.map((p) => ({
            providerId: p.id
          }))
        }
      })
    } as Prisma.ModelUpdateInput,
    include: {
      modelGroups: {
        include: {
          provider: true,
          group: true
        }
      }
    }
  });

  type ModelWithGroups = typeof updatedModel & {
    modelGroups: Array<{ provider: Provider; group: ModelGroup }>;
  };
  return {
    ...updatedModel,
    providers: (updatedModel as ModelWithGroups).modelGroups.map(
      (mg) => mg.provider
    ),
    _modelRelations: (updatedModel as ModelWithGroups).modelGroups
  };
};

/**
 * 删除模型
 * @description 根据模型ID从数据库中删除指定的模型
 * @param id - 要删除的模型的唯一标识符
 * @returns 被删除的模型对象
 */
const deleteModel = async (id: string) => {
  // 先检查是否有关联的助手或知识库
  const modelWithRelations = await prisma.model.findUnique({
    where: { id },
    include: {
      _count: {
        select: {
          assistants: true,
          defaultForAssistants: true,
          knowledgeBases: true,
          assistantSettings: true,
          rerankFor: true
        }
      }
    }
  });

  if (modelWithRelations) {
    const { _count } = modelWithRelations;
    const totalRelations =
      _count.assistants +
      _count.defaultForAssistants +
      _count.knowledgeBases +
      _count.assistantSettings +
      _count.rerankFor;

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
const createManyModels = async (models: CreateModelInput[]) => {
  // 验证所有提供商是否存在
  const allProviderIds = [
    ...new Set(models.flatMap((m) => m.providers.map((p) => p.id)))
  ];
  const providers = await prisma.provider.findMany({
    where: { id: { in: allProviderIds } },
    select: { id: true }
  });

  const existingProviderIds = new Set(providers.map((p) => p.id));
  const missingProviders = allProviderIds.filter(
    (id) => !existingProviderIds.has(id)
  );

  if (missingProviders.length > 0) {
    throw new Error(`以下提供商不存在: ${missingProviders.join(", ")}`);
  }

  // 使用事务创建模型和关联
  const result = await prisma.$transaction(async (tx) => {
    const createdModels = [];

    for (const model of models) {
      const { providers: providerRelations, ...modelData } = model;

      const createdModel = await tx.model.create({
        data: { ...modelData }
      });

      // 创建关联关系
      await tx.modelGroup.createMany({
        data: providerRelations.map((p) => ({
          modelId: createdModel.id,
          providerId: p.id,
          groupId: p.groups.find((g) => g. === p.id)?.id || ""
        }))
      });

      createdModels.push(createdModel);
    }

    return { count: createdModels.length };
  });

  return result;
};

/**
 * 添加模型与提供商的关联
 * @description 为模型添加新的提供商关联（分配到指定分组）
 * @param relation - 模型ID、提供商ID和分组ID
 * @returns 关联关系对象
 */
const addModelProviderRelation = async (relation: ModelProviderRelation) => {
  // 验证模型、提供商和分组是否存在
  const [model, provider, group] = await Promise.all([
    prisma.model.findUnique({ where: { id: relation.modelId } }),
    prisma.provider.findUnique({ where: { id: relation.providerId } }),
    prisma.group.findUnique({ where: { id: relation.groupId } })
  ]);

  if (!model) {
    throw new Error("指定的模型不存在");
  }
  if (!provider) {
    throw new Error("指定的提供商不存在");
  }
  if (!group) {
    throw new Error("指定的分组不存在");
  }

  // 验证分组是否属于指定的提供商
  if (group.providerId !== relation.providerId) {
    throw new Error("分组不属于指定的提供商");
  }

  // 检查关联是否已存在
  const existingRelation = await prisma.modelGroup.findUnique({
    where: {
      modelId_providerId: {
        modelId: relation.modelId,
        providerId: relation.providerId
      }
    }
  });

  if (existingRelation) {
    throw new Error("该模型与提供商的关联已存在");
  }

  const newRelation = await prisma.modelGroup.create({
    data: relation,
    include: {
      model: true,
      provider: true,
      group: true
    }
  });

  return newRelation;
};

/**
 * 移除模型与提供商的关联
 * @description 移除模型与提供商之间的关联关系
 * @param relation - 模型ID和提供商ID
 * @returns 被删除的关联关系对象
 */
const removeModelProviderRelation = async (relation: ModelProviderRelation) => {
  const deletedRelation = await prisma.modelGroup.delete({
    where: {
      modelId_providerId: {
        modelId: relation.modelId,
        providerId: relation.providerId
      }
    },
    include: {
      model: true,
      provider: true,
      group: true
    }
  });

  return deletedRelation;
};

/**
 * 获取模型与提供商的关联列表
 * @description 获取指定模型的所有提供商关联
 * @param modelId - 模型ID
 * @returns 关联关系数组
 */
const getModelProviderRelations = async (modelId: string) => {
  const relations = await prisma.modelGroup.findMany({
    where: { modelId },
    include: {
      model: true,
      provider: true,
      group: true
    }
  });

  return relations;
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
