import { useProvidersApi } from "@mocean/mastra/apiClient";
import type { ProviderType } from "@mocean/mastra/prismaType";
import useSWR, { useSWRConfig } from "swr";

/**
 * SWR 默认配置
 */
const defaultSWRConfig = {
  refreshInterval: 0,
  revalidateOnFocus: false,
  revalidateOnReconnect: true,
  dedupingInterval: 60000,
  errorRetryCount: 3,
  errorRetryInterval: 5000
};

// ==================== 基础版本（不包含关联模型）====================

/**
 * 获取所有提供商列表（基础版本）- 使用 SWR
 */
export function useProviders() {
  const { getProviders } = useProvidersApi();

  const { data, error, isLoading, mutate } = useSWR(
    "providers",
    async () => {
      const result = await getProviders();
      return result?.data || [];
    },
    defaultSWRConfig
  );

  return {
    providers: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}

/**
 * 获取启用的提供商列表（基础版本）- 使用 SWR
 */
export function useEnabledProviders() {
  const { getEnabledProviders } = useProvidersApi();

  const { data, error, isLoading, mutate } = useSWR(
    "providers-enabled",
    async () => {
      const result = await getEnabledProviders();

      return result?.data || [];
    },
    defaultSWRConfig
  );

  return {
    providers: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}

/**
 * 获取单个提供商（基础版本）- 使用 SWR
 */
export function useProvider(id: string | null) {
  const { getProviderById } = useProvidersApi();

  const { data, error, isLoading, mutate } = useSWR(
    id ? `provider-${id}` : null,
    async () => {
      if (!id) return null;
      const result = await getProviderById(id);
      return result?.data || null;
    },
    defaultSWRConfig
  );

  return {
    provider: data,
    isLoading,
    error,
    refresh: mutate
  };
}

/**
 * 根据类型获取提供商列表（基础版本）- 使用 SWR
 */
export function useProvidersByType(type: string | null) {
  const { getProvidersByType } = useProvidersApi();

  const { data, error, isLoading, mutate } = useSWR(
    type ? `providers-type-${type}` : null,
    async () => {
      if (!type) return [];
      const result = await getProvidersByType(type as ProviderType);
      return result?.data || [];
    },
    {
      ...defaultSWRConfig,
      dedupingInterval: 30000
    }
  );

  return {
    providers: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}

// ==================== WithModels 版本（包含模型列表）====================

/**
 * 获取所有提供商列表（包含模型）- 使用 SWR
 */
export function useProvidersWithModels() {
  const { getProvidersWithModels } = useProvidersApi();

  const { data, error, isLoading, mutate } = useSWR(
    "providers-with-models",
    async () => {
      const result = await getProvidersWithModels();
      return result?.data || [];
    },
    defaultSWRConfig
  );

  return {
    providers: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}

/**
 * 获取启用的提供商列表（包含模型）- 使用 SWR
 */
export function useEnabledProvidersWithModels() {
  const { getEnabledProvidersWithModels } = useProvidersApi();

  const { data, error, isLoading, mutate } = useSWR(
    "providers-enabled-with-models",
    async () => {
      const result = await getEnabledProvidersWithModels();
      return result?.data || [];
    },
    defaultSWRConfig
  );

  return {
    providers: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}

/**
 * 获取单个提供商（包含模型）- 使用 SWR
 */
export function useProviderWithModels(id: string | null) {
  const { getProviderWithModelsById } = useProvidersApi();

  const { data, error, isLoading, mutate } = useSWR(
    id ? `provider-with-models-${id}` : null,
    async () => {
      if (!id) return null;
      const result = await getProviderWithModelsById(id);
      return result?.data || null;
    },
    defaultSWRConfig
  );

  return {
    provider: data,
    isLoading,
    error,
    refresh: mutate
  };
}

/**
 * 根据类型获取提供商列表（包含模型）- 使用 SWR
 */
export function useProvidersByTypeWithModels(type: string | null) {
  const { getProvidersByTypeWithModels } = useProvidersApi();

  const { data, error, isLoading, mutate } = useSWR(
    type ? `providers-type-with-models-${type}` : null,
    async () => {
      if (!type) return [];
      const result = await getProvidersByTypeWithModels(type as ProviderType);
      return result?.data || [];
    },
    {
      ...defaultSWRConfig,
      dedupingInterval: 30000
    }
  );

  return {
    providers: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}

// ==================== 操作 Hooks（与数据获取解耦）====================

/**
 * Provider 操作 hooks - 与数据获取解耦
 * @param customMutate 可选的自定义刷新函数，如果不传则自动刷新所有相关缓存
 *
 * @example
 * // 场景1: 自动刷新所有相关数据
 * const { create, update, remove } = useProviderActions();
 *
 * @example
 * // 场景2: 只刷新特定列表
 * const { providers, refresh } = useProviders();
 * const { create, update } = useProviderActions(refresh);
 *
 * @example
 * // 场景3: 刷新多个数据源
 * const { refresh: refreshList } = useProviders();
 * const { refresh: refreshDetail } = useProvider(id);
 * const actions = useProviderActions(async () => {
 *   await Promise.all([refreshList(), refreshDetail()]);
 * });
 */
export function useProviderActions(customMutate?: () => Promise<unknown>) {
  const { mutate: globalMutate } = useSWRConfig();
  const {
    createProvider,
    updateProvider,
    deleteProvider,
    toggleProviderEnabled
  } = useProvidersApi();

  // 刷新逻辑：优先使用自定义 mutate，否则使用全局刷新
  const refreshData = async () => {
    if (customMutate) {
      await customMutate();
    } else {
      // 刷新所有 provider 相关的缓存
      await globalMutate(
        (key) => typeof key === "string" && key.startsWith("provider"),
        undefined,
        { revalidate: true }
      );
    }
  };

  const create = async (data: Parameters<typeof createProvider>[0]) => {
    const result = await createProvider(data);
    if (result) {
      await refreshData();
    }
    return result;
  };

  const update = async (
    id: string,
    data: Parameters<typeof updateProvider>[1]
  ) => {
    const result = await updateProvider(id, data);
    if (result) {
      await refreshData();
    }
    return result;
  };

  const remove = async (id: string) => {
    const result = await deleteProvider(id);
    if (result) {
      await refreshData();
    }
    return result;
  };

  const toggleEnabled = async (id: string) => {
    const result = await toggleProviderEnabled(id);
    if (result) {
      await refreshData();
    }
    return result;
  };

  return {
    create,
    update,
    remove,
    toggleEnabled
  };
}
