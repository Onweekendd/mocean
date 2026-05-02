import { apiClient } from "@mocean/mastra/apiClient";
import type { AssistantFullType } from "@mocean/mastra/schemas";
import type { KeyedMutator } from "swr";
import useSWR, { useSWRConfig } from "swr";

// ==================== 基础版本（不包含关联数据）====================

export function useAssistantsSWR() {
  const { data, error, isLoading, mutate } = useSWR("assistants", async () => {
    const res = await apiClient.customApi.assistants.$get();
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  });

  return {
    assistants: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}

export function useAssistantSWR(id: string | null) {
  const { data, error, isLoading, mutate } = useSWR(
    id ? `assistant-${id}` : null,
    async () => {
      if (!id) return null;
      const res = await apiClient.customApi.assistants[":assistantId"].$get({
        param: { assistantId: id }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    }
  );

  return {
    assistant: data,
    isLoading,
    error,
    refresh: mutate
  };
}

export function useFullAssistant(id: string | null) {
  const { data, error, isLoading, mutate } = useSWR<AssistantFullType | null>(
    id ? `assistant-with-models-${id}` : null,
    async () => {
      if (!id) return null;
      const res = await apiClient.customApi.assistants[
        ":assistantId"
      ].full.$get({ param: { assistantId: id } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    }
  );

  return {
    assistant: data,
    isLoading,
    error,
    refresh: mutate
  };
}

export function useAssistantsWithModels() {
  const { data, error, isLoading, mutate } = useSWR(
    "assistants-with-models",
    async () => {
      const res = await apiClient.customApi.assistants.$get();
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    }
  );

  return {
    assistants: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}

// ==================== 线程和消息 Hooks ====================

export function useAssistantThreadsSWR(assistantId: string | null) {
  const { data, error, isLoading, mutate } = useSWR(
    assistantId ? `assistant-threads-${assistantId}` : null,
    async () => {
      if (!assistantId) return [];
      const res = await apiClient.customApi.assistants.history[
        ":assistantId"
      ].$get({ param: { assistantId } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    },
    { dedupingInterval: 30000 }
  );

  return {
    threads: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}

export function useAssistantUIMessageSWR(
  assistantId: string | null,
  threadId: string | null
) {
  const { data, error, isLoading, mutate } = useSWR(
    threadId ? `assistant-thread-${assistantId}-${threadId}` : null,
    async () => {
      if (!assistantId || !threadId) return null;
      const res = await apiClient.customApi.assistants.messages[":assistantId"][
        ":threadId"
      ].$get({ param: { assistantId, threadId } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    }
  );

  return {
    messages: data,
    isLoading,
    error,
    refresh: mutate
  };
}

// ==================== 操作 Hooks（与数据获取解耦）====================

export function useAssistantActions<T = unknown>(
  customMutate?: KeyedMutator<T>
) {
  const { mutate: globalMutate } = useSWRConfig();

  const refreshData = async () => {
    if (customMutate) {
      await customMutate();
    } else {
      await globalMutate(
        (key) => typeof key === "string" && key.startsWith("assistant"),
        undefined,
        { revalidate: true }
      );
    }
  };

  const create = async (
    data: Parameters<typeof apiClient.customApi.assistants.$post>[0]["json"]
  ) => {
    const res = await apiClient.customApi.assistants.$post({ json: data });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const result = await res.json();
    await refreshData();
    return result;
  };

  const update = async (
    id: string,
    data: Parameters<
      (typeof apiClient.customApi.assistants)[":assistantId"]["$put"]
    >[0]["json"],
    optimisticData?: T
  ) => {
    if (optimisticData && customMutate) {
      void apiClient.customApi.assistants[":assistantId"].$put({
        param: { assistantId: id },
        json: data
      });
      await customMutate(() => optimisticData, {
        optimisticData,
        rollbackOnError: true,
        revalidate: false
      });
      return null;
    }
    const res = await apiClient.customApi.assistants[":assistantId"].$put({
      param: { assistantId: id },
      json: data
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const result = await res.json();
    await refreshData();
    return result;
  };

  const remove = async (id: string) => {
    const res = await apiClient.customApi.assistants[":assistantId"].$delete({
      param: { assistantId: id }
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

// ==================== 组合 Hooks（数据 + 操作）====================

/**
 * @deprecated 推荐使用 useAssistantsSWR() + useAssistantActions() 组合
 */
export function useAssistantsWithActions() {
  const { assistants, isLoading, error, refresh } = useAssistantsSWR();
  const actions = useAssistantActions(refresh);

  return {
    assistants,
    isLoading,
    error,
    ...actions,
    refresh
  };
}
