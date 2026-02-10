import type { Prisma } from "generated/prisma/client";
import { ProviderType } from "generated/prisma/enums";
import { ModelSchema, ProviderSchema } from "generated/schemas/models/index";
import { z } from "zod";

import { prisma } from "./index";

// 导出 ProviderType 类型供路由使用
export { ProviderType };

/**
 * 提供商相关的zod校验schemas
 */

/**
 * Response Schemas
 * 用于 Router 的响应类型验证
 */

// 基础 Provider Response Schema（不含关联关系）
export const ProviderResponseSchema = ProviderSchema.pick({
  id: true,
  type: true,
  name: true,
  apiKey: true,
  apiHost: true,
  apiVersion: true,
  enabled: true,
  isSystem: true,
  isAuthed: true,
  notes: true,
  isGateway: true,
  modelCount: true,
  docsUrl: true,
  createdAt: true,
  updatedAt: true
});

// Providers 列表 Response Schema（不含 models）
export const ProvidersResponseSchema = z.array(ProviderResponseSchema);

// 带 models 数组的 Provider Response Schema
export const ProviderWithModelsResponseSchema = ProviderSchema.pick({
  id: true,
  type: true,
  name: true,
  apiKey: true,
  apiHost: true,
  apiVersion: true,
  enabled: true,
  isSystem: true,
  isAuthed: true,
  notes: true,
  isGateway: true,
  modelCount: true,
  docsUrl: true,
  createdAt: true,
  updatedAt: true
}).extend({
  models: z.array(ModelSchema.partial()),
  _count: z
    .object({
      models: z.number()
    })
    .optional()
});

// Providers 列表 Response Schema（含 models）
export const ProvidersWithModelsResponseSchema = z.array(
  ProviderWithModelsResponseSchema
);

/**
 * URL 验证辅助函数
 */
const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// 基于 ProviderSchema 扩展自定义验证
const createProviderSchema = ProviderSchema.pick({
  type: true,
  name: true,
  apiKey: true,
  apiHost: true,
  apiVersion: true,
  enabled: true,
  isSystem: true,
  isAuthed: true,
  notes: true
}).extend({
  name: z.string().min(1, "提供商名称不能为空"),
  apiKey: z.string().min(1, "API密钥不能为空"),
  apiHost: z.string().refine((val) => isValidUrl(val), {
    message: "API地址格式不正确"
  }),
  enabled: z.boolean().optional().default(true),
  isSystem: z.boolean().optional().default(false),
  isAuthed: z.boolean().optional().default(false)
});

const updateProviderSchema = ProviderSchema.pick({
  type: true,
  name: true,
  apiKey: true,
  apiHost: true,
  apiVersion: true,
  enabled: true,
  isSystem: true,
  isAuthed: true,
  notes: true
})
  .partial()
  .extend({
    apiKey: z
      .string()
      .transform((val) => (val?.trim() === "" ? undefined : val))
      .pipe(z.string().min(1, "API密钥不能为空").optional())
      .optional(),
    apiHost: z
      .string()
      .transform((val) => (val?.trim() === "" ? undefined : val))
      .pipe(
        z
          .string()
          .refine((val) => isValidUrl(val), {
            message: "API地址格式不正确"
          })
          .optional()
      )
      .optional()
  });

const idParamSchema = z.object({
  id: z.string().min(1, "提供商ID不能为空")
});

const typeParamSchema = z.object({
  type: z.enum(ProviderType, { message: "无效的提供商类型" })
});

// zod类型推导
export type CreateProviderInput = z.infer<typeof createProviderSchema>;
export type UpdateProviderInput = z.infer<typeof updateProviderSchema>;

/**
 * 获取所有提供商（基础版本）
 * @description 从数据库中获取所有提供商的列表，不包含关联模型信息
 * @returns 包含所有提供商信息的数组
 */
const getProviders = async () => {
  return prisma.provider.findMany({
    orderBy: {
      createdAt: "desc"
    }
  });
};

/**
 * 获取所有提供商（包含模型列表）
 * @description 从数据库中获取所有提供商的列表，包含关联的模型信息
 * @returns 包含所有提供商信息和展开后模型列表的数组
 */
const getProvidersWithModels = async () => {
  const providers = await prisma.provider.findMany({
    include: {
      models: true,
      _count: {
        select: {
          models: true
        }
      }
    },
    orderBy: {
      createdAt: "desc"
    }
  });

  // 整理模型信息：将关联表数据展开为模型数组
  return providers.map((provider) => ({
    ...provider,
    models: provider.models
  }));
};

/**
 * 根据ID获取单个提供商（基础版本）
 * @description 通过提供商ID从数据库中获取特定提供商的详细信息，不包含关联模型
 * @param id - 提供商的唯一标识符
 * @returns 提供商对象，如果不存在则返回null
 */
const getProviderById = async (id: string) => {
  return prisma.provider.findUnique({
    where: {
      id
    }
  });
};

/**
 * 根据ID获取单个提供商（包含模型列表）
 * @description 通过提供商ID从数据库中获取特定提供商的详细信息，包含关联的模型
 * @param id - 提供商的唯一标识符
 * @returns 提供商对象（含展开的模型列表），如果不存在则返回null
 */
const getProviderWithModelsById = async (id: string) => {
  const provider = await prisma.provider.findUnique({
    where: {
      id
    },
    include: {
      models: true,
      _count: {
        select: {
          models: true
        }
      }
    }
  });

  if (!provider) return null;

  // 整理模型信息：将关联表数据展开为模型数组
  // 保留原始关联表数据作为 _modelRelations（包含 group 等关联字段）
  return {
    ...provider,
    models: provider.models,
    _modelRelations: provider.models
  };
};

/**
 * 根据类型获取提供商（基础版本）
 * @description 通过提供商类型获取对应的提供商列表，不包含关联模型
 * @param type - 提供商类型
 * @returns 符合类型的提供商数组
 */
const getProvidersByType = async (type: ProviderType) => {
  return prisma.provider.findMany({
    where: {
      type
    }
  });
};

/**
 * 根据类型获取提供商（包含模型列表）
 * @description 通过提供商类型获取对应的提供商列表，包含关联的模型
 * @param type - 提供商类型
 * @returns 符合类型的提供商数组（含展开的模型列表）
 */
const getProvidersByTypeWithModels = async (type: ProviderType) => {
  const providers = await prisma.provider.findMany({
    where: {
      type
    },
    include: {
      models: true,
      _count: {
        select: {
          models: true
        }
      }
    }
  });

  // 整理模型信息：将关联表数据展开为模型数组
  // 保留原始关联表数据作为 _modelRelations（包含 group 等关联字段）
  return providers.map((provider) => ({
    ...provider,
    models: provider.models,
    _modelRelations: provider.models
  }));
};

/**
 * 获取启用的提供商（基础版本）
 * @description 获取所有启用状态的提供商，不包含关联模型
 * @returns 启用的提供商数组
 */
const getEnabledProviders = async () => {
  return prisma.provider.findMany({
    where: {
      enabled: true
    }
  });
};

/**
 * 获取启用的提供商（包含模型列表）
 * @description 获取所有启用状态的提供商，包含关联的模型
 * @returns 启用的提供商数组（含展开的模型列表）
 */
const getEnabledProvidersWithModels = async () => {
  const providers = await prisma.provider.findMany({
    where: {
      enabled: true
    },
    include: {
      models: true,
      _count: {
        select: {
          models: true
        }
      }
    }
  });

  // 整理模型信息：将关联表数据展开为模型数组
  // 保留原始关联表数据作为 _modelRelations（包含 group 等关联字段）
  return providers.map((provider) => ({
    ...provider,
    models: provider.models,
    _modelRelations: provider.models
  }));
};

/**
 * 获取与指定模型关联的提供商列表（基础版本）
 * @description 获取与特定模型建立关联的所有提供商，不包含关联模型
 * @param modelId - 模型ID
 * @returns 关联的提供商数组
 */
const getProvidersByModel = async (modelId: string) => {
  return prisma.provider.findMany({
    where: {
      models: {
        some: {
          id: modelId
        }
      }
    }
  });
};

/**
 * 获取与指定模型关联的提供商列表（包含模型列表）
 * @description 获取与特定模型建立关联的所有提供商，包含关联的模型
 * @param modelId - 模型ID
 * @returns 关联的提供商数组（含展开的模型列表）
 */
const getProvidersByModelWithModels = async (modelId: string) => {
  const providers = await prisma.provider.findMany({
    where: {
      models: {
        some: {
          id: modelId
        }
      }
    },
    include: {
      models: true,
      _count: {
        select: {
          models: true
        }
      }
    }
  });

  // 整理模型信息：将关联表数据展开为模型数组
  // 保留原始关联表数据作为 _modelRelations（包含 group 等关联字段）
  return providers.map((provider) => ({
    ...provider,
    models: provider.models,
    _modelRelations: provider.models
  }));
};

/**
 * 创建新提供商
 * @description 在数据库中创建一个新的提供商记录，并自动创建默认分组
 * @param provider - 包含提供商信息的对象
 * @returns 新创建的提供商对象，包含生成的ID和时间戳
 */
const createProvider = async (provider: CreateProviderInput) => {
  const newProvider = await prisma.provider.create({
    data: {
      ...provider,
      createdAt: new Date(),
      updatedAt: new Date(),
      groups: {
        create: {
          name: "默认",
          isDefault: true
        }
      }
    } as Prisma.ProviderCreateInput,
    include: {
      models: true,
      groups: true,
      _count: {
        select: {
          models: true
        }
      }
    }
  });

  // 整理模型信息：将关联表数据展开为模型数组
  return {
    ...newProvider,
    models: newProvider.models
  };
};

/**
 * 更新提供商信息
 * @description 根据提供商ID更新数据库中的提供商信息
 * @param id - 要更新的提供商的唯一标识符
 * @param provider - 包含更新信息的对象
 * @returns 更新后的提供商对象
 */
const updateProvider = async (id: string, provider: UpdateProviderInput) => {
  const updatedProvider = await prisma.provider.update({
    where: {
      id
    },
    data: {
      ...provider,
      updatedAt: new Date()
    },
    include: {
      models: true,
      _count: {
        select: {
          models: true
        }
      }
    }
  });

  // 整理模型信息：将关联表数据展开为模型数组
  return {
    ...updatedProvider,
    models: updatedProvider.models
  };
};

/**
 * 删除提供商
 * @description 根据提供商ID从数据库中删除指定的提供商
 * @param id - 要删除的提供商的唯一标识符
 * @returns 被删除的提供商对象
 */
const deleteProvider = async (id: string) => {
  // 先检查是否有关联的模型
  const providerWithModels = await prisma.provider.findUnique({
    where: { id },
    include: {
      _count: {
        select: {
          models: true
        }
      }
    }
  });

  if (providerWithModels && providerWithModels._count.models > 0) {
    throw new Error(
      `无法删除提供商：仍有 ${providerWithModels._count.models} 个关联的模型`
    );
  }

  const deletedProvider = await prisma.provider.delete({
    where: {
      id
    }
  });
  return deletedProvider;
};

/**
 * 切换提供商启用状态
 * @description 切换提供商的启用/禁用状态
 * @param id - 提供商的唯一标识符
 * @returns 更新后的提供商对象
 */
const toggleProviderEnabled = async (id: string) => {
  const provider = await prisma.provider.findUnique({
    where: { id },
    select: { enabled: true }
  });

  if (!provider) {
    throw new Error("提供商不存在");
  }

  const updatedProvider = await prisma.provider.update({
    where: { id },
    data: {
      enabled: !provider.enabled,
      updatedAt: new Date()
    },
    include: {
      models: true,
      _count: {
        select: {
          models: true
        }
      }
    }
  });

  // 整理模型信息：将关联表数据展开为模型数组
  return {
    ...updatedProvider,
    models: updatedProvider.models
  };
};

// 类型导出：从函数返回值推导
export type ProviderResult = Awaited<ReturnType<typeof getProviderById>>;
export type ProvidersResult = Awaited<ReturnType<typeof getProviders>>;
export type EnabledProvidersResult = Awaited<ReturnType<typeof getEnabledProviders>>;
export type ProvidersByTypeResult = Awaited<ReturnType<typeof getProvidersByType>>;
export type ProvidersByModelResult = Awaited<ReturnType<typeof getProvidersByModel>>;
export type ProviderWithModelsResult = Awaited<ReturnType<typeof getProviderWithModelsById>>;
export type ProvidersWithModelsResult = Awaited<ReturnType<typeof getProvidersWithModels>>;
export type EnabledProvidersWithModelsResult = Awaited<ReturnType<typeof getEnabledProvidersWithModels>>;
export type ProvidersByTypeWithModelsResult = Awaited<ReturnType<typeof getProvidersByTypeWithModels>>;
export type ProvidersByModelWithModelsResult = Awaited<ReturnType<typeof getProvidersByModelWithModels>>;
export type ProviderCreateResult = Awaited<ReturnType<typeof createProvider>>;
export type ProviderUpdateResult = Awaited<ReturnType<typeof updateProvider>>;
export type ProviderDeleteResult = Awaited<ReturnType<typeof deleteProvider>>;
export type ProviderToggleResult = Awaited<ReturnType<typeof toggleProviderEnabled>>;

export {
  // 基础查询函数（不包含关联模型）
  getProviders,
  getProviderById,
  getProvidersByType,
  getEnabledProviders,
  getProvidersByModel,
  // 带模型列表的查询函数（models 字段为展开的 Model 数组）
  getProvidersWithModels,
  getProviderWithModelsById,
  getProvidersByTypeWithModels,
  getEnabledProvidersWithModels,
  getProvidersByModelWithModels,
  // 写操作函数
  createProvider,
  updateProvider,
  deleteProvider,
  toggleProviderEnabled,
  // Schema 校验
  createProviderSchema,
  updateProviderSchema,
  idParamSchema,
  typeParamSchema
};
