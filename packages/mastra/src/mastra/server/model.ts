import { z } from "zod";

import { prisma } from "./index";

/**
 * 模型相关的zod校验schemas
 */
const createModelSchema = z.object({
  id: z.string().min(1, "模型ID不能为空"),
  name: z.string().min(1, "模型名称不能为空"),
  group: z.string().min(1, "模型分组不能为空"),
  owned_by: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  isSystem: z.boolean().optional().default(false),
  contextLength: z.number().int().nonnegative().nullable().optional(),
  supportsAttachments: z.boolean().optional().default(false),
  supportsTools: z.boolean().optional().default(false),
  supportsReasoning: z.boolean().optional().default(false),
  supportsImage: z.boolean().optional().default(false),
  supportsAudio: z.boolean().optional().default(false),
  supportsVideo: z.boolean().optional().default(false),
  supportsEmbedding: z.boolean().optional().default(false),
  inputPricePerMillion: z.number().nonnegative().nullable().optional(),
  outputPricePerMillion: z.number().nonnegative().nullable().optional(),
  providerIds: z
    .array(z.string().min(1, "提供商ID不能为空"))
    .min(1, "至少需要一个提供商"),
});

const updateModelSchema = z.object({
  name: z.string().min(1, "模型名称不能为空").optional(),
  group: z.string().min(1, "模型分组不能为空").optional(),
  owned_by: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  isSystem: z.boolean().optional(),
  contextLength: z.number().int().positive().nullable().optional(),
  supportsAttachments: z.boolean().optional(),
  supportsTools: z.boolean().optional(),
  supportsReasoning: z.boolean().optional(),
  supportsImage: z.boolean().optional(),
  supportsAudio: z.boolean().optional(),
  supportsVideo: z.boolean().optional(),
  supportsEmbedding: z.boolean().optional(),
  inputPricePerMillion: z.number().nonnegative().nullable().optional(),
  outputPricePerMillion: z.number().nonnegative().nullable().optional(),
  providerIds: z.array(z.string().min(1, "提供商ID不能为空")).optional(),
});

const idParamSchema = z.object({
  id: z.string().min(1, "模型ID不能为空"),
});

const providerParamSchema = z.object({
  providerId: z.string().min(1, "提供商ID不能为空"),
});

const groupParamSchema = z.object({
  group: z.string().min(1, "模型分组不能为空"),
});

const modelProviderRelationSchema = z.object({
  modelId: z.string().min(1, "模型ID不能为空"),
  providerId: z.string().min(1, "提供商ID不能为空"),
});

// zod类型推导
export type CreateModelInput = z.infer<typeof createModelSchema>;
export type UpdateModelInput = z.infer<typeof updateModelSchema>;
export type ModelProviderRelation = z.infer<typeof modelProviderRelationSchema>;

/**
 * 获取所有模型
 * @description 从数据库中获取所有模型的列表，包含关联的提供商信息
 * @returns 包含所有模型信息和关联提供商的数组
 */
const getModels = async () => {
  const models = await prisma.model.findMany({
    include: {
      providers: {
        include: {
          provider: true,
        },
      },
      assistants: true,
      defaultForAssistants: true,
      knowledgeBases: true,
      assistantSettings: true,
      rerankFor: true,
    },
    orderBy: {
      name: "asc",
    },
  });

  // 整理提供商信息
  return models.map((model) => ({
    ...model,
    providerList: model.providers.map((p) => p.provider),
  }));
};

/**
 * 根据ID获取单个模型
 * @description 通过模型ID从数据库中获取特定模型的详细信息，包含关联的提供商
 * @param id - 模型的唯一标识符
 * @returns 模型对象，如果不存在则返回null
 */
const getModelById = async (id: string) => {
  const model = await prisma.model.findUnique({
    where: {
      id,
    },
    include: {
      providers: {
        include: {
          provider: true,
        },
      },
      assistants: true,
      defaultForAssistants: true,
      knowledgeBases: true,
      assistantSettings: true,
      rerankFor: true,
    },
  });

  if (!model) return null;

  // 整理提供商信息
  return {
    ...model,
    providerList: model.providers.map((p) => p.provider),
  };
};

/**
 * 根据提供商ID获取模型
 * @description 通过提供商ID获取对应的模型列表
 * @param providerId - 提供商ID
 * @returns 符合提供商的模型数组
 */
const getModelsByProvider = async (providerId: string) => {
  const models = await prisma.model.findMany({
    where: {
      providers: {
        some: {
          providerId,
        },
      },
    },
    include: {
      providers: {
        include: {
          provider: true,
        },
      },
    },
    orderBy: {
      name: "asc",
    },
  });

  // 整理提供商信息
  return models.map((model) => ({
    ...model,
    providerList: model.providers.map((p) => p.provider),
  }));
};

/**
 * 根据分组获取模型
 * @description 通过模型分组获取对应的模型列表
 * @param group - 模型分组
 * @returns 符合分组的模型数组
 */
const getModelsByGroup = async (group: string) => {
  const models = await prisma.model.findMany({
    where: {
      group,
    },
    include: {
      providers: {
        include: {
          provider: true,
        },
      },
    },
    orderBy: {
      name: "asc",
    },
  });

  // 整理提供商信息
  return models.map((model) => ({
    ...model,
    providerList: model.providers.map((p) => p.provider),
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
  const providers = await prisma.provider.findMany({
    where: { id: { in: model.providerIds } },
  });

  if (providers.length !== model.providerIds.length) {
    const existingIds = providers.map((p) => p.id);
    const missingIds = model.providerIds.filter(
      (id) => !existingIds.includes(id),
    );
    throw new Error(`以下提供商不存在: ${missingIds.join(", ")}`);
  }

  const { providerIds, ...modelData } = model;

  const newModel = await prisma.model.create({
    data: {
      ...modelData,
      providers: {
        create: providerIds.map((providerId) => ({ providerId })),
      },
    },
    include: {
      providers: {
        include: {
          provider: true,
        },
      },
    },
  });

  return {
    ...newModel,
    providerList: newModel.providers.map((p) => p.provider),
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
  // 如果提供了providerIds，验证提供商是否存在
  if (model.providerIds) {
    const providers = await prisma.provider.findMany({
      where: { id: { in: model.providerIds } },
    });

    if (providers.length !== model.providerIds.length) {
      const existingIds = providers.map((p) => p.id);
      const missingIds = model.providerIds.filter(
        (id) => !existingIds.includes(id),
      );
      throw new Error(`以下提供商不存在: ${missingIds.join(", ")}`);
    }
  }

  const { providerIds, ...modelData } = model;

  const updatedModel = await prisma.model.update({
    where: {
      id,
    },
    data: {
      ...modelData,
      ...(providerIds && {
        providers: {
          deleteMany: {},
          create: providerIds.map((providerId) => ({ providerId })),
        },
      }),
    },
    include: {
      providers: {
        include: {
          provider: true,
        },
      },
    },
  });

  return {
    ...updatedModel,
    providerList: updatedModel.providers.map((p) => p.provider),
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
          rerankFor: true,
        },
      },
    },
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
    where: {
      id,
    },
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
  const allProviderIds = [...new Set(models.flatMap((m) => m.providerIds))];
  const providers = await prisma.provider.findMany({
    where: {
      id: { in: allProviderIds },
    },
    select: { id: true },
  });

  const existingProviderIds = new Set(providers.map((p) => p.id));
  const missingProviders = allProviderIds.filter(
    (id) => !existingProviderIds.has(id),
  );

  if (missingProviders.length > 0) {
    throw new Error(`以下提供商不存在: ${missingProviders.join(", ")}`);
  }

  // 使用事务创建模型和关联
  const result = await prisma.$transaction(async (tx) => {
    const createdModels = [];

    for (const model of models) {
      const { providerIds, ...modelData } = model;

      const createdModel = await tx.model.create({
        data: {
          ...modelData,
        },
      });

      // 创建关联关系
      await tx.modelProvider.createMany({
        data: providerIds.map((providerId) => ({
          modelId: createdModel.id,
          providerId,
        })),
      });

      createdModels.push(createdModel);
    }

    return { count: createdModels.length };
  });

  return result;
};

/**
 * 添加模型与提供商的关联
 * @description 为模型添加新的提供商关联
 * @param relation - 模型ID和提供商ID
 * @returns 关联关系对象
 */
const addModelProviderRelation = async (relation: ModelProviderRelation) => {
  // 验证模型和提供商是否存在
  const [model, provider] = await Promise.all([
    prisma.model.findUnique({ where: { id: relation.modelId } }),
    prisma.provider.findUnique({ where: { id: relation.providerId } }),
  ]);

  if (!model) {
    throw new Error("指定的模型不存在");
  }
  if (!provider) {
    throw new Error("指定的提供商不存在");
  }

  // 检查关联是否已存在
  const existingRelation = await prisma.modelProvider.findUnique({
    where: {
      modelId_providerId: {
        modelId: relation.modelId,
        providerId: relation.providerId,
      },
    },
  });

  if (existingRelation) {
    throw new Error("该模型与提供商的关联已存在");
  }

  const newRelation = await prisma.modelProvider.create({
    data: relation,
    include: {
      model: true,
      provider: true,
    },
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
  const deletedRelation = await prisma.modelProvider.delete({
    where: {
      modelId_providerId: {
        modelId: relation.modelId,
        providerId: relation.providerId,
      },
    },
    include: {
      model: true,
      provider: true,
    },
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
  const relations = await prisma.modelProvider.findMany({
    where: {
      modelId,
    },
    include: {
      model: true,
      provider: true,
    },
  });

  return relations;
};

/**
 * Prisma 数据库操作返回类型
 */
export type ModelsListResult = Awaited<ReturnType<typeof getModels>>;
export type ModelDetailResult = Awaited<ReturnType<typeof getModelById>>;
export type ModelsByProviderResult = Awaited<
  ReturnType<typeof getModelsByProvider>
>;
export type ModelsByGroupResult = Awaited<ReturnType<typeof getModelsByGroup>>;
export type ModelCreateResult = Awaited<ReturnType<typeof createModel>>;
export type ModelUpdateResult = Awaited<ReturnType<typeof updateModel>>;
export type ModelDeleteResult = Awaited<ReturnType<typeof deleteModel>>;
export type ModelsBatchCreateResult = Awaited<
  ReturnType<typeof createManyModels>
>;
export type ModelProviderRelationAddResult = Awaited<
  ReturnType<typeof addModelProviderRelation>
>;
export type ModelProviderRelationRemoveResult = Awaited<
  ReturnType<typeof removeModelProviderRelation>
>;
export type ModelProviderRelationsResult = Awaited<
  ReturnType<typeof getModelProviderRelations>
>;

export {
  getModels,
  getModelById,
  getModelsByProvider,
  getModelsByGroup,
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
  modelProviderRelationSchema,
};
