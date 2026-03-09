import { useModelsApi } from "@mocean/mastra/apiClient";
import useSWR, { useSWRConfig } from "swr";

/**
 * 使用 SWR 的模型数据获取 hooks
 * @description 在前端应用层提供带缓存的数据获取功能
 *
 * 注意：全局已配置 defaultSWRConfig
 */

// ==================== 基础版本（不包含关联信息） ====================

/**
 * 获取所有模型列表（基础版本）- 使用 SWR
 */
export function useModels() {
  const { getModels } = useModelsApi();

  const { data, error, isLoading, mutate } = useSWR("models-base", async () => {
    const result = await getModels();
    return result?.data || [];
  });

  return {
    models: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}

/**
 * 获取单个模型（基础版本）- 使用 SWR
 */
export function useModel(id: string | null) {
  const { getModelById } = useModelsApi();

  const { data, error, isLoading, mutate } = useSWR(
    id ? `model-base-${id}` : null,
    async () => {
      if (!id) return null;
      const result = await getModelById(id);
      return result?.data || null;
    }
  );

  return {
    model: data,
    isLoading,
    error,
    refresh: mutate
  };
}

/**
 * 根据提供商ID获取模型列表（基础版本）- 使用 SWR
 */
export function useModelsByProvider(providerId: string | null) {
  const { getModelsByProvider } = useModelsApi();

  const { data, error, isLoading, mutate } = useSWR(
    providerId ? `models-base-provider-${providerId}` : null,
    async () => {
      if (!providerId) return [];
      const result = await getModelsByProvider(providerId);
      return result?.data || [];
    },
    {
      dedupingInterval: 30000,
      errorRetryInterval: 3000
    }
  );

  return {
    models: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}

/**
 * 根据分组获取模型列表（基础版本）- 使用 SWR
 */
export function useModelsByGroup(group: string | null) {
  const { getModelsByGroup } = useModelsApi();

  const { data, error, isLoading, mutate } = useSWR(
    group ? `models-base-group-${group}` : null,
    async () => {
      if (!group) return [];
      const result = await getModelsByGroup(group);
      return result?.data || [];
    },
    {
      dedupingInterval: 30000,
      errorRetryInterval: 3000
    }
  );

  return {
    models: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}

// ==================== WithProviders 版本（包含提供商信息） ====================

/**
 * 获取所有模型列表（包含提供商信息）- 使用 SWR
 */
export function useModelsWithProviders() {
  const { getModelsWithProviders } = useModelsApi();

  const { data, error, isLoading, mutate } = useSWR(
    "models-with-providers",
    async () => {
      const result = await getModelsWithProviders();
      return result?.data || [];
    }
  );

  return {
    models: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}

/**
 * 获取单个模型（包含提供商信息）- 使用 SWR
 */
export function useModelWithProviders(id: string | null) {
  const { getModelWithProvidersById } = useModelsApi();

  const { data, error, isLoading, mutate } = useSWR(
    id ? `model-with-providers-${id}` : null,
    async () => {
      if (!id) return null;
      const result = await getModelWithProvidersById(id);
      return result?.data || null;
    }
  );

  return {
    model: data,
    isLoading,
    error,
    refresh: mutate
  };
}

/**
 * 根据提供商ID获取模型列表（包含提供商信息）- 使用 SWR
 */
export function useModelsByProviderWithProviders(providerId: string | null) {
  const { getModelsByProviderWithProviders } = useModelsApi();

  const { data, error, isLoading, mutate } = useSWR(
    providerId ? `models-provider-with-providers-${providerId}` : null,
    async () => {
      if (!providerId) return [];
      const result = await getModelsByProviderWithProviders(providerId);
      return result?.data || [];
    },
    {
      dedupingInterval: 30000,
      errorRetryInterval: 3000
    }
  );

  return {
    models: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}

/**
 * 根据分组获取模型列表（包含提供商信息）- 使用 SWR
 */
export function useModelsByGroupWithProviders(group: string | null) {
  const { getModelsByGroupWithProviders } = useModelsApi();

  const { data, error, isLoading, mutate } = useSWR(
    group ? `models-group-with-providers-${group}` : null,
    async () => {
      if (!group) return [];
      const result = await getModelsByGroupWithProviders(group);
      return result?.data || [];
    },
    {
      dedupingInterval: 30000,
      errorRetryInterval: 3000
    }
  );

  return {
    models: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}

// ==================== 操作 Hooks（与数据获取解耦）====================

/**
 * Model 操作 hooks - 与数据获取解耦
 * @param customMutate 可选的自定义刷新函数，如果不传则自动刷新所有相关缓存
 *
 * @example
 * // 场景1: 自动刷新所有相关数据
 * const { create, update, remove } = useModelActions();
 *
 * @example
 * // 场景2: 只刷新特定列表
 * const { models, refresh } = useModels();
 * const { create, update } = useModelActions(refresh);
 *
 * @example
 * // 场景3: 刷新多个数据源
 * const { refresh: refreshList } = useModels();
 * const { refresh: refreshDetail } = useModel(id);
 * const actions = useModelActions(async () => {
 *   await Promise.all([refreshList(), refreshDetail()]);
 * });
 */
export function useModelActions(customMutate?: () => Promise<unknown>) {
  const { mutate: globalMutate } = useSWRConfig();
  const { createModel, updateModel, deleteModel } = useModelsApi();

  // 刷新逻辑：优先使用自定义 mutate，否则使用全局刷新
  const refreshData = async () => {
    if (customMutate) {
      await customMutate();
    } else {
      // 刷新所有 model 相关的缓存
      await globalMutate(
        (key) => typeof key === "string" && key.startsWith("model"),
        undefined,
        { revalidate: true }
      );
    }
  };

  const create = async (data: Parameters<typeof createModel>[0]) => {
    const result = await createModel(data);
    if (result) {
      await refreshData();
    }
    return result;
  };

  const update = async (
    id: string,
    data: Parameters<typeof updateModel>[1]
  ) => {
    const result = await updateModel(id, data);
    if (result) {
      await refreshData();
    }
    return result;
  };

  const remove = async (id: string) => {
    const result = await deleteModel(id);
    if (result) {
      await refreshData();
    }
    return result;
  };

  return {
    create,
    update,
    remove
  };
}
