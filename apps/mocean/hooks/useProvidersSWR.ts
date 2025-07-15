import { useProvidersApi } from "@mocean/mastra/apiClient";
import useSWR from "swr";

/**
 * 使用 SWR 的提供商数据获取 hooks
 * @description 在前端应用层提供带缓存的数据获取功能
 */

/**
 * 获取所有提供商列表 - 使用 SWR
 */
export function useProvidersSWR() {
  const { getProviders } = useProvidersApi();

  const { data, error, isLoading, mutate } = useSWR(
    "providers",
    async () => {
      const result = await getProviders();
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
    providers: data || [],
    isLoading,
    error,
    refresh: mutate,
  };
}

/**
 * 获取启用的提供商列表 - 使用 SWR
 */
export function useEnabledProvidersSWR() {
  const { getEnabledProviders } = useProvidersApi();

  const { data, error, isLoading, mutate } = useSWR(
    "providers-enabled",
    async () => {
      const result = await getEnabledProviders();
      return result?.data || [];
    },
    {
      refreshInterval: 0,
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 60000,
      errorRetryCount: 3,
      errorRetryInterval: 5000,
    },
  );

  return {
    providers: data || [],
    isLoading,
    error,
    refresh: mutate,
  };
}

/**
 * 获取单个提供商 - 使用 SWR
 */
export function useProviderSWR(id: string | null) {
  const { getProviderById } = useProvidersApi();

  const { data, error, isLoading, mutate } = useSWR(
    id ? `provider-${id}` : null,
    async () => {
      if (!id) return null;
      const result = await getProviderById(id);
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
    provider: data,
    isLoading,
    error,
    refresh: mutate,
  };
}

/**
 * 根据类型获取提供商列表 - 使用 SWR
 * @param type - 提供商类型（为空时不发起请求）
 * @returns 包含提供商数据、加载状态、错误信息和刷新方法的对象
 */
export function useProvidersByTypeSWR(type: string | null) {
  const { getProvidersByType } = useProvidersApi();

  const { data, error, isLoading, mutate } = useSWR(
    type ? `providers-type-${type}` : null,
    async () => {
      if (!type) return [];
      const result = await getProvidersByType(type);
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
    providers: data || [],
    isLoading,
    error,
    refresh: mutate,
  };
}

/**
 * 增强的提供商 API hooks - 结合 CRUD 操作和 SWR 缓存
 */
export function useProvidersWithActions() {
  const { providers, isLoading, error, refresh } = useProvidersSWR();
  const {
    createProvider,
    updateProvider,
    deleteProvider,
    toggleProviderEnabled,
  } = useProvidersApi();

  return {
    // SWR 数据
    providers,
    isLoading,
    error,

    // CRUD 操作（带缓存更新）
    async create(data: Parameters<typeof createProvider>[0]) {
      try {
        const result = await createProvider(data);
        if (result) {
          // 创建成功后，刷新缓存
          refresh();
        }
        return result;
      } catch (error) {
        console.error("创建提供商失败:", error);
        throw error;
      }
    },

    async update(id: string, data: Parameters<typeof updateProvider>[1]) {
      try {
        const result = await updateProvider(id, data);
        if (result) {
          // 更新成功后，刷新缓存
          refresh();
        }
        return result;
      } catch (error) {
        console.error("更新提供商失败:", error);
        throw error;
      }
    },

    async remove(id: string) {
      try {
        const result = await deleteProvider(id);
        if (result) {
          // 删除成功后，刷新缓存
          refresh();
        }
        return result;
      } catch (error) {
        console.error("删除提供商失败:", error);
        throw error;
      }
    },

    async toggleEnabled(id: string) {
      try {
        const result = await toggleProviderEnabled(id);
        if (result) {
          // 操作成功后，刷新缓存
          refresh();
        }
        return result;
      } catch (error) {
        console.error("切换提供商状态失败:", error);
        throw error;
      }
    },

    // 手动刷新
    refresh,
  };
}
