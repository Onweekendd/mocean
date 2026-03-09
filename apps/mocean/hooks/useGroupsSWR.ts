import { useGroupsApi } from "@mocean/mastra/apiClient";
import useSWR, { useSWRConfig } from "swr";

/**
 * 使用 SWR 的分组数据获取 hooks
 * @description 在前端应用层提供带缓存的分组数据获取功能
 *
 * 注意：全局已配置 defaultSWRConfig
 */

/**
 * 获取指定提供商的所有分组 - 使用 SWR
 * @param providerId - 提供商ID（为空时不发起请求）
 */
export function useGroupsByProviderSWR(providerId: string | null) {
  const { getGroupsByProvider } = useGroupsApi();

  const { data, error, isLoading, mutate } = useSWR(
    providerId ? `groups-provider-${providerId}` : null,
    async () => {
      if (!providerId) return [];
      const result = await getGroupsByProvider(providerId);
      return result?.data || [];
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

  const { data, error, isLoading, mutate } = useSWR(
    id ? `group-${id}` : null,
    async () => {
      if (!id) return null;
      const result = await getGroupById(id);
      return result?.data || null;
    }
  );

  return {
    group: data,
    isLoading,
    error,
    refresh: mutate
  };
}

// ==================== 操作 Hooks（与数据获取解耦）====================

/**
 * Group 操作 hooks - 与数据获取解耦
 * @param customMutate 可选的自定义刷新函数，如果不传则自动刷新所有相关缓存
 *
 * @example
 * // 场景1: 自动刷新所有相关数据
 * const { create, update, remove } = useGroupActions();
 *
 * @example
 * // 场景2: 只刷新特定列表
 * const { groups, refresh } = useGroupsByProviderSWR(providerId);
 * const { create, update } = useGroupActions(refresh);
 *
 * @example
 * // 场景3: 刷新多个数据源
 * const { refresh: refreshList } = useGroupsByProviderSWR(providerId);
 * const { refresh: refreshDetail } = useGroupSWR(id);
 * const actions = useGroupActions(async () => {
 *   await Promise.all([refreshList(), refreshDetail()]);
 * });
 */
export function useGroupActions(customMutate?: () => Promise<unknown>) {
  const { mutate: globalMutate } = useSWRConfig();
  const { createGroup, updateGroup, deleteGroup } = useGroupsApi();

  // 刷新逻辑：优先使用自定义 mutate，否则使用全局刷新
  const refreshData = async () => {
    if (customMutate) {
      await customMutate();
    } else {
      // 刷新所有 group 相关的缓存
      await globalMutate(
        (key) => typeof key === "string" && key.startsWith("group"),
        undefined,
        { revalidate: true }
      );
    }
  };

  const create = async (data: Parameters<typeof createGroup>[0]) => {
    const result = await createGroup(data);
    if (result) {
      await refreshData();
    }
    return result;
  };

  const update = async (
    id: string,
    data: Parameters<typeof updateGroup>[1]
  ) => {
    const result = await updateGroup(id, data);
    if (result) {
      await refreshData();
    }
    return result;
  };

  const remove = async (id: string) => {
    const result = await deleteGroup(id);
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
