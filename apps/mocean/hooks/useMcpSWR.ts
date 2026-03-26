import { useMcpApi } from "@mocean/mastra/apiClient";
import type { KeyedMutator } from "swr";
import useSWR, { useSWRConfig } from "swr";

/**
 * 注意：全局已配置 defaultSWRConfig，此处只需配置与全局不同的部分
 */

// ==================== 基础版本（不包含关联数据）====================

/**
 * 获取所有 MCP Server 列表 - 使用 SWR
 */
export function useMcpServers() {
  const { getMcpServers } = useMcpApi();

  const { data, error, isLoading, mutate } = useSWR(
    "mcp-servers",
    async () => {
      const result = await getMcpServers();
      return result?.data || [];
    }
  );

  return {
    mcpServers: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}

/**
 * 获取单个 MCP Server - 使用 SWR
 * @param id - MCP Server ID（为空时不发起请求）
 */
export function useMcpServer(id: string | null) {
  const { getMcpServerById } = useMcpApi();

  const { data, error, isLoading, mutate } = useSWR(
    id ? `mcp-server-${id}` : null,
    async () => {
      if (!id) return null;
      const result = await getMcpServerById(id);
      return result?.data || null;
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

/**
 * MCP Server 操作 hooks - 与数据获取解耦
 * @param customMutate 可选的自定义刷新函数，不传则自动刷新所有相关缓存
 *
 * @example 场景1: 自动刷新所有相关数据
 * const { create, update, remove } = useMcpServerActions();
 *
 * @example 场景2: 只刷新特定列表
 * const { mcpServers, refresh } = useMcpServers();
 * const { create } = useMcpServerActions(refresh);
 *
 * @example 场景3: 乐观更新单项
 * const { mcpServer, refresh } = useMcpServer(id);
 * const { update } = useMcpServerActions(refresh);
 * await update(id, newData, { ...mcpServer, name: "新名称" });
 */
export function useMcpServerActions<T = unknown>(
  customMutate?: KeyedMutator<T>
) {
  const { mutate: globalMutate } = useSWRConfig();
  const {
    createMcpServer,
    updateMcpServer,
    deleteMcpServer,
    toggleMcpServer,
    toggleMcpTool
  } = useMcpApi();

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

  const create = async (data: Parameters<typeof createMcpServer>[0]) => {
    const result = await createMcpServer(data);
    if (result) await refreshData();
    return result;
  };

  const update = async (
    id: string,
    data: Parameters<typeof updateMcpServer>[1],
    optimisticData?: T
  ) => {
    if (optimisticData && customMutate) {
      // 乐观更新：fire-and-forget API + SWR 乐观写入
      void updateMcpServer(id, data);
      await customMutate(() => optimisticData, {
        optimisticData,
        rollbackOnError: true,
        revalidate: false
      });
      return null;
    }
    const result = await updateMcpServer(id, data);
    if (result) await refreshData();
    return result;
  };

  const remove = async (id: string) => {
    const result = await deleteMcpServer(id);
    if (result) await refreshData();
    return result;
  };

  const toggleServer = async (id: string) => {
    const result = await toggleMcpServer(id);
    if (result) await refreshData();
    return result;
  };

  const toggleTool = async (id: string, toolName: string) => {
    const result = await toggleMcpTool(id, toolName);
    if (result) await refreshData();
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
