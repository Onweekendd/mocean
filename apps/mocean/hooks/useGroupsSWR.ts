import { apiClient } from "@mocean/mastra/apiClient";
import useSWR, { useSWRConfig } from "swr";

export function useGroupsByProviderSWR(providerId: string | null) {
  const { data, error, isLoading, mutate } = useSWR(
    providerId ? `groups-provider-${providerId}` : null,
    async () => {
      if (!providerId) return [];
      const res = await apiClient.customApi.groups.provider[":providerId"].$get(
        { param: { providerId } }
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    }
  );

  return {
    groups: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}

export function useGroupSWR(id: string | null) {
  const { data, error, isLoading, mutate } = useSWR(
    id ? `group-${id}` : null,
    async () => {
      if (!id) return null;
      const res = await apiClient.customApi.groups[":id"].$get({
        param: { id }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
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

export function useGroupActions(customMutate?: () => Promise<unknown>) {
  const { mutate: globalMutate } = useSWRConfig();

  const refreshData = async () => {
    if (customMutate) {
      await customMutate();
    } else {
      await globalMutate(
        (key) => typeof key === "string" && key.startsWith("group"),
        undefined,
        { revalidate: true }
      );
    }
  };

  const create = async (
    data: Parameters<typeof apiClient.customApi.groups.$post>[0]["json"]
  ) => {
    const res = await apiClient.customApi.groups.$post({ json: data });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const result = await res.json();
    await refreshData();
    return result;
  };

  const update = async (
    id: string,
    data: Parameters<
      (typeof apiClient.customApi.groups)[":id"]["$put"]
    >[0]["json"]
  ) => {
    const res = await apiClient.customApi.groups[":id"].$put({
      param: { id },
      json: data
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const result = await res.json();
    await refreshData();
    return result;
  };

  const remove = async (id: string) => {
    const res = await apiClient.customApi.groups[":id"].$delete({
      param: { id }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const result = await res.json();
    await refreshData();
    return result;
  };

  return {
    create,
    update,
    remove
  };
}
