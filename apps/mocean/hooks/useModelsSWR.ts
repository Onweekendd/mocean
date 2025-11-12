import { useModelsApi } from "@mocean/mastra/apiClient";
import { type ModelModel } from "@mocean/mastra/prismaType";
import useSWR, { type KeyedMutator } from "swr";

/**
 * 使用 SWR 的模型数据获取 hooks
 * @description 在前端应用层提供带缓存的数据获取功能
 */

/**
 * 获取所有模型列表 - 使用 SWR
 */
export function useModelsSWR() {
  const { getModels } = useModelsApi();

  const { data, error, isLoading, mutate } = useSWR<
    ModelModel[],
    Error | undefined
  >(
    "models",
    async () => {
      const result = await getModels();
      return result?.data || [];
    },
    {
      // 配置选项
      refreshInterval: 0, // 不自动刷新
      revalidateOnFocus: false, // 焦点时不重新验证
      revalidateOnReconnect: true, // 重连时重新验证
      dedupingInterval: 60000, // 60秒内的重复请求会被去重
      errorRetryCount: 3, // 错误重试次数
      errorRetryInterval: 5000, // 重试间隔
    },
  );

  return {
    models: data || [],
    isLoading,
    error,
    refresh: mutate,
  };
}

/**
 * 获取单个模型 - 使用 SWR
 */
export function useModelSWR(id: string | null) {
  const { getModelById } = useModelsApi();

  const { data, error, isLoading, mutate } = useSWR<
    ModelModel | null,
    Error | undefined
  >(
    id ? `model-${id}` : null,
    async () => {
      if (!id) return null;
      const result = await getModelById(id);
      return result?.data || null;
    },
    {
      refreshInterval: 0,
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 60000,
    },
  );

  return {
    model: data,
    isLoading,
    error,
    refresh: mutate,
  };
}

/**
 * 根据提供商ID获取模型列表 - 使用 SWR
 * @param providerId - 提供商的唯一标识符（为空时不发起请求）
 * @returns 包含模型数据、加载状态、错误信息和刷新方法的对象
 */
export function useModelsByProviderSWR(providerId: string | null) {
  const { getModelsByProvider } = useModelsApi();

  const { data, error, isLoading, mutate } = useSWR<
    ModelModel[],
    Error | undefined
  >(
    providerId ? `models-provider-${providerId}` : null,
    async () => {
      if (!providerId) return [];
      const result = await getModelsByProvider(providerId);
      return result?.data || [];
    },
    {
      refreshInterval: 0,
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 30000, // 30秒内的重复请求会被去重
      errorRetryCount: 3,
      errorRetryInterval: 3000,
    },
  );

  return {
    models: data || [],
    isLoading,
    error,
    refresh: mutate,
  };
}

/**
 * 根据分组获取模型列表 - 使用 SWR
 * @param group - 模型分组（为空时不发起请求）
 * @returns 包含模型数据、加载状态、错误信息和刷新方法的对象
 */
export function useModelsByGroupSWR(group: string | null) {
  const { getModelsByGroup } = useModelsApi();

  const { data, error, isLoading, mutate } = useSWR<
    ModelModel[],
    Error | undefined
  >(
    group ? `models-group-${group}` : null,
    async () => {
      if (!group) return [];
      const result = await getModelsByGroup(group);
      return result?.data || [];
    },
    {
      refreshInterval: 0,
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 30000,
      errorRetryCount: 3,
      errorRetryInterval: 3000,
    },
  );

  return {
    models: data || [],
    isLoading,
    error,
    refresh: mutate,
  };
}

/**
 * 增强的模型 API hooks - 结合 CRUD 操作和 SWR 缓存
 */
export function useModelsWithActions(): {
  models: ModelModel[];
  isLoading: boolean;
  error: Error | undefined;
  create: (
    data: Parameters<ReturnType<typeof useModelsApi>["createModel"]>[0],
  ) => Promise<unknown>;
  update: (
    id: string,
    data: Parameters<ReturnType<typeof useModelsApi>["updateModel"]>[1],
  ) => Promise<unknown>;
  remove: (id: string) => Promise<unknown>;
  refresh: KeyedMutator<ModelModel[]>;
} {
  const { models, isLoading, error, refresh } = useModelsSWR();
  const { createModel, updateModel, deleteModel } = useModelsApi();

  return {
    // SWR 数据
    models,
    isLoading,
    error,

    // CRUD 操作（带缓存更新）
    async create(data: Parameters<typeof createModel>[0]) {
      try {
        const result = await createModel(data);
        if (result) {
          // 创建成功后，刷新缓存
          await refresh();
        }
        return result;
      } catch (error) {
        console.error("创建模型失败:", error);
        throw error;
      }
    },

    async update(id: string, data: Parameters<typeof updateModel>[1]) {
      try {
        const result = await updateModel(id, data);
        if (result) {
          // 更新成功后，刷新缓存
          await refresh();
        }
        return result;
      } catch (error) {
        console.error("更新模型失败:", error);
        throw error;
      }
    },

    async remove(id: string) {
      try {
        const result = await deleteModel(id);
        if (result) {
          // 删除成功后，刷新缓存
          await refresh();
        }
        return result;
      } catch (error) {
        console.error("删除模型失败:", error);
        throw error;
      }
    },

    // 手动刷新
    refresh,
  };
}
