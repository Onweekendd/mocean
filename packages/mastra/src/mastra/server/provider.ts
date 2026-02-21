import type { Prisma, PrismaClient } from "generated/prisma/client";
import type { ProviderType } from "generated/prisma/enums";
import type z from "zod";

import type { providerRoutes } from "../router/type";
import {
  type CreateProviderInput,
  type UpdateProviderInput
} from "../schema/provider";
import { prisma } from "./index";

/**
 * Provider Service 工厂函数
 * 接受 PrismaClient 实例，返回所有 provider 操作函数
 * 支持依赖注入，便于测试时传入 mock 或测试数据库实例
 */

export function createProviderService(db: PrismaClient) {
  const getProviders = async (): Promise<
    z.infer<(typeof providerRoutes)["getProviders"]["responseSchema"]>
  > => {
    return db.provider.findMany({
      orderBy: {
        createdAt: "desc"
      }
    });
  };

  const getProvidersWithModels = async (): Promise<
    z.infer<(typeof providerRoutes)["getProvidersWithModels"]["responseSchema"]>
  > => {
    return db.provider.findMany({
      include: {
        groups: {
          include: {
            models: true
          }
        }
      },
      orderBy: {
        createdAt: "desc"
      }
    });
  };

  const getProviderById = async (
    id: string
  ): Promise<
    z.infer<(typeof providerRoutes)["getProviderById"]["responseSchema"]>
  > => {
    return db.provider.findUnique({
      where: {
        id
      }
    });
  };

  const getProviderWithModelsById = async (
    id: string
  ): Promise<
    z.infer<
      (typeof providerRoutes)["getProviderWithModelsById"]["responseSchema"]
    >
  > => {
    const provider = await db.provider.findUnique({
      where: {
        id
      },
      include: {
        groups: {
          include: {
            models: true
          }
        }
      }
    });

    if (!provider) return null;

    return provider;
  };

  const getProvidersByType = async (
    type: ProviderType
  ): Promise<
    z.infer<(typeof providerRoutes)["getProvidersByType"]["responseSchema"]>
  > => {
    return db.provider.findMany({
      where: {
        type
      }
    });
  };

  const getProvidersByTypeWithModels = async (
    type: ProviderType
  ): Promise<
    z.infer<
      (typeof providerRoutes)["getProvidersByTypeWithModels"]["responseSchema"]
    >
  > => {
    return db.provider.findMany({
      where: {
        type
      },
      include: {
        groups: {
          include: {
            models: true
          }
        }
      }
    });
  };

  const getEnabledProviders = async (): Promise<
    z.infer<(typeof providerRoutes)["getEnabledProviders"]["responseSchema"]>
  > => {
    return db.provider.findMany({
      where: {
        enabled: true
      }
    });
  };

  const getEnabledProvidersWithModels = async (): Promise<
    z.infer<
      (typeof providerRoutes)["getEnabledProvidersWithModels"]["responseSchema"]
    >
  > => {
    const providers = await db.provider.findMany({
      where: {
        enabled: true
      },
      include: {
        groups: {
          include: {
            models: true
          }
        }
      }
    });

    return providers;
  };

  const getProvidersByModel = async (
    modelId: string
  ): Promise<
    z.infer<(typeof providerRoutes)["getProvidersByModel"]["responseSchema"]>
  > => {
    return db.provider.findMany({
      where: {
        groups: {
          some: {
            models: {
              some: {
                id: modelId
              }
            }
          }
        }
      }
    });
  };

  const getProvidersByModelWithModels = async (
    modelId: string
  ): Promise<
    z.infer<
      (typeof providerRoutes)["getProvidersByModelWithModels"]["responseSchema"]
    >
  > => {
    return db.provider.findMany({
      where: {
        groups: {
          some: {
            models: {
              some: {
                id: modelId
              }
            }
          }
        }
      },
      include: {
        groups: {
          include: {
            models: true
          }
        }
      }
    });
  };

  const createProvider = async (
    provider: CreateProviderInput
  ): Promise<
    z.infer<(typeof providerRoutes)["createProvider"]["responseSchema"]>
  > => {
    return db.provider.create({
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
        groups: {
          include: {
            models: true
          }
        }
      }
    });
  };

  const updateProvider = async (
    provider: UpdateProviderInput
  ): Promise<
    z.infer<(typeof providerRoutes)["updateProvider"]["responseSchema"]>
  > => {
    return db.provider.update({
      where: {
        id: provider.id
      },
      data: {
        ...provider,
        updatedAt: new Date()
      },
      include: {
        groups: {
          include: {
            models: true
          }
        }
      }
    });
  };

  const deleteProvider = async (
    id: string
  ): Promise<
    z.infer<(typeof providerRoutes)["deleteProvider"]["responseSchema"]>
  > => {
    const providerWithGroups = await db.provider.findUnique({
      where: { id },
      include: {
        groups: {
          include: {
            _count: {
              select: {
                models: true
              }
            }
          }
        }
      }
    });

    if (providerWithGroups) {
      const totalModels = providerWithGroups.groups.reduce(
        (sum: number, group: { _count: { models: number } }) =>
          sum + group._count.models,
        0
      );
      if (totalModels > 0) {
        throw new Error(`无法删除提供商：仍有 ${totalModels} 个关联的模型`);
      }
    }

    const deletedProvider = await db.provider.delete({
      where: {
        id
      }
    });
    return deletedProvider;
  };

  const toggleProviderEnabled = async (
    id: string
  ): Promise<
    z.infer<(typeof providerRoutes)["toggleProviderEnabled"]["responseSchema"]>
  > => {
    const provider = await db.provider.findUnique({
      where: { id },
      select: { enabled: true }
    });

    if (!provider) {
      throw new Error("提供商不存在");
    }

    return db.provider.update({
      where: { id },
      data: {
        enabled: !provider.enabled,
        updatedAt: new Date()
      },
      include: {
        groups: {
          include: {
            models: true
          }
        }
      }
    });
  };

  return {
    getProviders,
    getProvidersWithModels,
    getProviderById,
    getProviderWithModelsById,
    getProvidersByType,
    getProvidersByTypeWithModels,
    getEnabledProviders,
    getEnabledProvidersWithModels,
    getProvidersByModel,
    getProvidersByModelWithModels,
    createProvider,
    updateProvider,
    deleteProvider,
    toggleProviderEnabled
  };
}

// 默认实例（生产用，兼容现有 import）
// 每次调用都读取当前 prisma 引用（测试环境中 prisma 通过 vi.mock getter 延迟求值）
// 不缓存 service 实例，避免 closeTestDatabase 后持有失效的 prisma 引用
function getDefaultService(): ReturnType<typeof createProviderService> {
  return createProviderService(prisma);
}

const getProviders = () => getDefaultService().getProviders();
const getProviderById = (id: string) => getDefaultService().getProviderById(id);
const getProvidersWithModels = () =>
  getDefaultService().getProvidersWithModels();
const getProviderWithModelsById = (id: string) =>
  getDefaultService().getProviderWithModelsById(id);
const getProvidersByType = (type: ProviderType) =>
  getDefaultService().getProvidersByType(type);
const getProvidersByTypeWithModels = (type: ProviderType) =>
  getDefaultService().getProvidersByTypeWithModels(type);
const getEnabledProviders = () => getDefaultService().getEnabledProviders();
const getEnabledProvidersWithModels = () =>
  getDefaultService().getEnabledProvidersWithModels();
const getProvidersByModel = (modelId: string) =>
  getDefaultService().getProvidersByModel(modelId);
const getProvidersByModelWithModels = (modelId: string) =>
  getDefaultService().getProvidersByModelWithModels(modelId);
const createProvider = (provider: CreateProviderInput) =>
  getDefaultService().createProvider(provider);
const updateProvider = (provider: UpdateProviderInput) =>
  getDefaultService().updateProvider(provider);
const deleteProvider = (id: string) => getDefaultService().deleteProvider(id);
const toggleProviderEnabled = (id: string) =>
  getDefaultService().toggleProviderEnabled(id);

// 类型导出：从函数返回值推导
export type ProviderResult = Awaited<ReturnType<typeof getProviderById>>;
export type ProvidersResult = Awaited<ReturnType<typeof getProviders>>;
export type EnabledProvidersResult = Awaited<
  ReturnType<typeof getEnabledProviders>
>;
export type ProvidersByTypeResult = Awaited<
  ReturnType<typeof getProvidersByType>
>;
export type ProvidersByModelResult = Awaited<
  ReturnType<typeof getProvidersByModel>
>;
export type ProviderWithModelsResult = Awaited<
  ReturnType<typeof getProviderWithModelsById>
>;
export type ProvidersWithModelsResult = Awaited<
  ReturnType<typeof getProvidersWithModels>
>;
export type EnabledProvidersWithModelsResult = Awaited<
  ReturnType<typeof getEnabledProvidersWithModels>
>;
export type ProvidersByTypeWithModelsResult = Awaited<
  ReturnType<typeof getProvidersByTypeWithModels>
>;
export type ProvidersByModelWithModelsResult = Awaited<
  ReturnType<typeof getProvidersByModelWithModels>
>;
export type ProviderCreateResult = Awaited<ReturnType<typeof createProvider>>;
export type ProviderUpdateResult = Awaited<ReturnType<typeof updateProvider>>;
export type ProviderDeleteResult = Awaited<ReturnType<typeof deleteProvider>>;
export type ProviderToggleResult = Awaited<
  ReturnType<typeof toggleProviderEnabled>
>;

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
  toggleProviderEnabled
};
