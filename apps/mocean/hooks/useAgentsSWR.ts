import { apiClient } from "@mocean/mastra/apiClient";
import type { AgentGroup } from "@mocean/mastra/prismaType";
import useSWR from "swr";

export function useAgentsSWR() {
  const { data, error, isLoading, mutate } = useSWR("agents", async () => {
    const res = await apiClient.customApi.agents.$get();
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  });

  return {
    agents: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}

export function useAgentSWR(id: string | null) {
  const { data, error, isLoading, mutate } = useSWR(
    id ? `agent-${id}` : null,
    async () => {
      if (!id) return null;
      const res = await apiClient.customApi.agents[":id"].$get({
        param: { id }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    }
  );

  return {
    agent: data,
    isLoading,
    error,
    refresh: mutate
  };
}

export function useAgentsByGroupSWR(group: string | null) {
  const { data, error, isLoading, mutate } = useSWR(
    group ? `agents-group-${group}` : null,
    async () => {
      if (!group) return [];
      const res = await apiClient.customApi.agents.group[":group"].$get({
        param: { group }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    },
    {
      dedupingInterval: 30000
    }
  );

  return {
    agents: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}

export function useAgentGroupsSWR() {
  const { data, error, isLoading, mutate } = useSWR(
    "agent-groups",
    async () => {
      const res = await apiClient.customApi.agents.groups.$get();
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    }
  );

  return {
    groups: data ?? ([] as AgentGroup[]),
    isLoading,
    error,
    refresh: mutate
  };
}

export function useAgentsWithActions() {
  const { agents, isLoading, error, refresh } = useAgentsSWR();

  const create = async (
    data: Parameters<typeof apiClient.customApi.agents.$post>[0]["json"]
  ) => {
    try {
      const res = await apiClient.customApi.agents.$post({ json: data });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const result = await res.json();
      await refresh();
      return result;
    } catch (error) {
      console.error("创建代理失败:", error);
      throw error;
    }
  };

  const update = async (
    id: string,
    data: Parameters<
      (typeof apiClient.customApi.agents)[":id"]["$put"]
    >[0]["json"]
  ) => {
    try {
      const res = await apiClient.customApi.agents[":id"].$put({
        param: { id },
        json: data
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const result = await res.json();
      await refresh();
      return result;
    } catch (error) {
      console.error("更新代理失败:", error);
      throw error;
    }
  };

  const remove = async (id: string) => {
    try {
      const res = await apiClient.customApi.agents[":id"].$delete({
        param: { id }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const result = await res.json();
      await refresh();
      return result;
    } catch (error) {
      console.error("删除代理失败:", error);
      throw error;
    }
  };

  return {
    agents,
    isLoading,
    error,
    create,
    update,
    remove,
    refresh
  };
}
