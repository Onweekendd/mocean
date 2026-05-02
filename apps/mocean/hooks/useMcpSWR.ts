import { apiClient } from "@mocean/mastra/apiClient";
import type { KeyedMutator } from "swr";
import useSWR, { useSWRConfig } from "swr";

// ==================== 基础版本（不包含关联数据）====================

export function useMcpServers() {
  const { data, error, isLoading, mutate } = useSWR(
    "mcp-servers",
    async () => {
      const res = await apiClient.customApi.mcp.servers.$get();
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    }
  );

  return {
    mcpServers: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}

export function useMcpServer(id: string | null) {
  const { data, error, isLoading, mutate } = useSWR(
    id ? `mcp-server-${id}` : null,
    async () => {
      if (!id) return null;
      const res = await apiClient.customApi.mcp.servers[":id"].$get({
        param: { id }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    }
  );

  return {
    mcpServer: data,
    isLoading,
    error,
    refresh: mutate
  };
}

// ==================== 操作 Hooks（与数据获取解耦）====================

export function useMcpServerActions<T = unknown>(
  customMutate?: KeyedMutator<T>
) {
  const { mutate: globalMutate } = useSWRConfig();

  const refreshData = async () => {
    if (customMutate) {
      await customMutate();
    } else {
      await globalMutate(
        (key) => typeof key === "string" && key.startsWith("mcp-server"),
        undefined,
        { revalidate: true }
      );
    }
  };

  const create = async (
    data: Parameters<typeof apiClient.customApi.mcp.servers.$post>[0]["json"]
  ) => {
    const res = await apiClient.customApi.mcp.servers.$post({ json: data });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const result = await res.json();
    await refreshData();
    return result;
  };

  const update = async (
    id: string,
    data: Parameters<
      typeof apiClient.customApi.mcp.servers[":id"]["$put"]
    >[0]["json"],
    optimisticData?: T
  ) => {
    if (optimisticData && customMutate) {
      void apiClient.customApi.mcp.servers[":id"].$put({
        param: { id },
        json: data
      });
      await customMutate(() => optimisticData, {
        optimisticData,
        rollbackOnError: true,
        revalidate: false
      });
      return null;
    }
    const res = await apiClient.customApi.mcp.servers[":id"].$put({
      param: { id },
      json: data
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const result = await res.json();
    await refreshData();
    return result;
  };

  const remove = async (id: string) => {
    const res = await apiClient.customApi.mcp.servers[":id"].$delete({
      param: { id }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const result = await res.json();
    await refreshData();
    return result;
  };

  const toggleServer = async (id: string) => {
    const res = await apiClient.customApi.mcp.servers[":id"].toggle.$put({
      param: { id }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const result = await res.json();
    await refreshData();
    return result;
  };

  const toggleTool = async (id: string, toolName: string) => {
    const res = await apiClient.customApi.mcp.servers[":id"].tools[
      ":toolName"
    ].toggle.$put({ param: { id, toolName } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const result = await res.json();
    await refreshData();
    return result;
  };

  return {
    create,
    update,
    remove,
    toggleServer,
    toggleTool
  };
}
