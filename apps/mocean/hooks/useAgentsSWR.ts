import { AgentInput, useAgentsApi } from "@mocean/mastra/apiClient";
import useSWR from "swr";

/**
 * 使用 SWR 的代理数据获取 hooks
 * @description 在前端应用层提供带缓存的代理数据获取功能
 */

/**
 * 获取所有代理列表 - 使用 SWR
 * @returns 包含代理数据、加载状态、错误信息和刷新方法的对象
 *
 * @example
 * // 获取所有代理
 * const { agents, isLoading, error, refresh } = useAgentsSWR();
 * console.log(agents); // -> AgentModel[]
 */
export function useAgentsSWR() {
  const { getAgents } = useAgentsApi();

  const { data, error, isLoading, mutate } = useSWR(
    "agents",
    async () => {
      const result = await getAgents();
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
    agents: data || [],
    isLoading,
    error,
    refresh: mutate,
  };
}

/**
 * 获取单个代理 - 使用 SWR
 * @param id - 代理的唯一标识符（为空时不发起请求）
 * @returns 包含代理数据、加载状态、错误信息和刷新方法的对象
 *
 * @example
 * // 获取特定代理
 * const { agent, isLoading, error, refresh } = useAgentSWR("agent-id");
 * console.log(agent); // -> AgentModel | null
 */
export function useAgentSWR(id: string | null) {
  const { getAgentById } = useAgentsApi();

  const { data, error, isLoading, mutate } = useSWR(
    id ? `agent-${id}` : null,
    async () => {
      if (!id) return null;
      const result = await getAgentById(id);
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
    agent: data,
    isLoading,
    error,
    refresh: mutate,
  };
}

/**
 * 根据分组获取代理 - 使用 SWR
 * @param group - 代理分组名称（为空时不发起请求）
 * @returns 包含代理数据、加载状态、错误信息和刷新方法的对象
 *
 * @example
 * // 获取特定分组的代理
 * const { agents, isLoading, error, refresh } = useAgentsByGroupSWR("writing");
 * console.log(agents); // -> AgentModel[]
 */
export function useAgentsByGroupSWR(group: string | null) {
  const { getAgentByGroup } = useAgentsApi();

  const { data, error, isLoading, mutate } = useSWR(
    group ? `agents-group-${group}` : null,
    async () => {
      if (!group) return [];
      const result = await getAgentByGroup(group);
      return result?.data || [];
    },
    {
      refreshInterval: 0,
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 30000, // 30秒内的重复请求会被去重（分组数据更新频率适中）
      errorRetryCount: 3,
      errorRetryInterval: 3000,
    },
  );

  return {
    agents: data || [],
    isLoading,
    error,
    refresh: mutate,
  };
}

/**
 * 增强的代理 API hooks - 结合 CRUD 操作和 SWR 缓存
 * @returns 包含代理数据、CRUD 操作方法和缓存管理的对象
 *
 * @example
 * // 完整的代理管理功能
 * const { agents, isLoading, create, update, remove, refresh } = useAgentsWithActions();
 *
 * // 创建代理
 * await create({ name: "新代理", description: "描述", prompt: "提示词", type: "text" });
 *
 * // 更新代理
 * await update("agent-id", { name: "更新后的名称" });
 *
 * // 删除代理
 * await remove("agent-id");
 */
export function useAgentsWithActions() {
  const { agents, isLoading, error, refresh } = useAgentsSWR();
  const { createAgent, updateAgent, deleteAgent } = useAgentsApi();

  return {
    // SWR 数据
    agents,
    isLoading,
    error,

    // CRUD 操作（带缓存更新）
    async create(data: AgentInput) {
      try {
        const result = await createAgent(data);
        if (result) {
          // 创建成功后，刷新缓存
          refresh();
        }
        return result;
      } catch (error) {
        console.error("创建代理失败:", error);
        throw error;
      }
    },

    async update(id: string, data: Partial<AgentInput>) {
      try {
        const result = await updateAgent(id, data);
        if (result) {
          // 更新成功后，刷新缓存
          refresh();
        }
        return result;
      } catch (error) {
        console.error("更新代理失败:", error);
        throw error;
      }
    },

    async remove(id: string) {
      try {
        const result = await deleteAgent(id);
        if (result) {
          // 删除成功后，刷新缓存
          refresh();
        }
        return result;
      } catch (error) {
        console.error("删除代理失败:", error);
        throw error;
      }
    },

    // 手动刷新
    refresh,
  };
}
