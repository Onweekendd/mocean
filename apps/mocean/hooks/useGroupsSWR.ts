import type {
  GroupDetailResult,
  GroupsByProviderResult
} from "@mocean/mastra/apiClient";
import { useGroupsApi } from "@mocean/mastra/apiClient";
import useSWR, { type KeyedMutator } from "swr";

/**
 * 使用 SWR 的分组数据获取 hooks
 * @description 在前端应用层提供带缓存的分组数据获取功能
 */

/**
 * 获取指定提供商的所有分组 - 使用 SWR
 * @param providerId - 提供商ID（为空时不发起请求）
 */
export function useGroupsByProviderSWR(providerId: string | null) {
  const { getGroupsByProvider } = useGroupsApi();

  const { data, error, isLoading, mutate } = useSWR<
    GroupsByProviderResult,
    Error | undefined
  >(
    providerId ? `groups-provider-${providerId}` : null,
    async () => {
      if (!providerId) return [];
      const result = await getGroupsByProvider(providerId);
      return result?.data || [];
    },
    {
      refreshInterval: 0,
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 60000,
      errorRetryCount: 3,
      errorRetryInterval: 5000
    }
  );

  return {
    groups: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}

/**
 * 获取单个分组 - 使用 SWR
 * @param id - 分组ID（为空时不发起请求）
 */
export function useGroupSWR(id: string | null) {
  const { getGroupById } = useGroupsApi();

  const { data, error, isLoading, mutate } = useSWR<
    GroupDetailResult | null,
    Error | undefined
  >(
    id ? `group-${id}` : null,
    async () => {
      if (!id) return null;
      const result = await getGroupById(id);
      return result?.data || null;
    },
    {
      refreshInterval: 0,
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 60000
    }
  );

  return {
    group: data,
    isLoading,
    error,
    refresh: mutate
  };
}

/**
 * 增强的分组 API hooks - 结合 CRUD 操作和 SWR 缓存
 * @param providerId - 提供商ID
 */
export function useGroupsWithActions(providerId: string | null): {
  groups: GroupsByProviderResult;
  isLoading: boolean;
  error: Error | undefined;
  create: (
    data: Parameters<ReturnType<typeof useGroupsApi>["createGroup"]>[0]
  ) => Promise<unknown>;
  update: (
    id: string,
    data: Parameters<ReturnType<typeof useGroupsApi>["updateGroup"]>[1]
  ) => Promise<unknown>;
  remove: (id: string) => Promise<unknown>;
  refresh: KeyedMutator<GroupsByProviderResult>;
} {
  const { groups, isLoading, error, refresh } =
    useGroupsByProviderSWR(providerId);
  const { createGroup, updateGroup, deleteGroup } = useGroupsApi();

  return {
    // SWR 数据
    groups,
    isLoading,
    error,

    // CRUD 操作（带缓存更新）
    async create(data: Parameters<typeof createGroup>[0]) {
      try {
        const result = await createGroup(data);
        if (result) {
          // 创建成功后，刷新缓存
          await refresh();
        }
        return result;
      } catch (error) {
        console.error("创建分组失败:", error);
        throw error;
      }
    },

    async update(id: string, data: Parameters<typeof updateGroup>[1]) {
      try {
        const result = await updateGroup(id, data);
        if (result) {
          // 更新成功后，刷新缓存
          await refresh();
        }
        return result;
      } catch (error) {
        console.error("更新分组失败:", error);
        throw error;
      }
    },

    async remove(id: string) {
      try {
        const result = await deleteGroup(id);
        if (result) {
          // 删除成功后，刷新缓存
          await refresh();
        }
        return result;
      } catch (error) {
        console.error("删除分组失败:", error);
        throw error;
      }
    },

    // 手动刷新
    refresh
  };
}
