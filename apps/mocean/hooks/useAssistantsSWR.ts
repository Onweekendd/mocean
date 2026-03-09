import { useAssistantsApi } from "@mocean/mastra/apiClient";
import type { AssistantFullType } from "@mocean/mastra/schemas";
import type { KeyedMutator } from "swr";
import useSWR, { useSWRConfig } from "swr";

/**
 * 注意：全局已配置 defaultSWRConfig
 */

// ==================== 基础版本（不包含关联数据）====================

/**
 * 获取所有助手列表（基础版本）- 使用 SWR
 */
export function useAssistantsSWR() {
  const { getAssistants } = useAssistantsApi();

  const { data, error, isLoading, mutate } = useSWR("assistants", async () => {
    const result = await getAssistants();
    return result?.data || [];
  });

  return {
    assistants: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}

/**
 * 获取单个助手（基础版本）- 使用 SWR
 */
export function useAssistantSWR(id: string | null) {
  const { getAssistantById } = useAssistantsApi();

  const { data, error, isLoading, mutate } = useSWR(
    id ? `assistant-${id}` : null,
    async () => {
      if (!id) {
        return null;
      }

      const result = await getAssistantById(id);
      return result?.data || null;
    }
  );

  return {
    assistant: data,
    isLoading,
    error,
    refresh: mutate
  };
}

/**
 * 获取单个助手（含有所关系）- 使用 SWR
 */
export function useFullAssistant(id: string | null) {
  const { getFullAssistantById } = useAssistantsApi();

  const { data, error, isLoading, mutate } = useSWR<AssistantFullType | null>(
    id ? `assistant-with-models-${id}` : null,
    async () => {
      if (!id) return null;
      const result = await getFullAssistantById(id);
      return result?.data || null;
    }
  );

  return {
    assistant: data,
    isLoading,
    error,
    refresh: mutate
  };
}

// ==================== WithModels 版本（包含模型信息）====================

/**
 * 获取所有助手列表（包含模型）- 使用 SWR
 */
export function useAssistantsWithModels() {
  const { getAssistants } = useAssistantsApi();

  const { data, error, isLoading, mutate } = useSWR(
    "assistants-with-models",
    async () => {
      const result = await getAssistants();
      return result?.data || [];
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

/**
 * 获取助手线程列表 - 使用 SWR
 * @param assistantId - 助手的唯一标识符（为空时不发起请求）
 */
export function useAssistantThreadsSWR(assistantId: string | null) {
  const { getAssistantThreads } = useAssistantsApi();

  const { data, error, isLoading, mutate } = useSWR(
    assistantId ? `assistant-threads-${assistantId}` : null,
    async () => {
      if (!assistantId) return [];
      const result = await getAssistantThreads(assistantId);

      if (result.error || !result.data) {
        return [];
      }

      return result.data;
    },
    { dedupingInterval: 30000 } // 线程数据更新频率较高
  );

  return {
    threads: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}

/**
 * 获取助手线程消息 - 使用 SWR
 * @param assistantId - 助手的唯一标识符
 * @param threadId - 线程的唯一标识符
 */
export function useAssistantUIMessageSWR(
  assistantId: string | null,
  threadId: string | null
) {
  const { getAssistantUIMessageByThreadId } = useAssistantsApi();

  const { data, error, isLoading, mutate } = useSWR(
    threadId ? `assistant-thread-${assistantId}-${threadId}` : null,
    async () => {
      if (!assistantId || !threadId) return null;
      const result = await getAssistantUIMessageByThreadId({
        assistantId,
        threadId
      });

      return result?.data || null;
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

/**
 * Assistant 操作 hooks - 与数据获取解耦
 * @param customMutate 可选的自定义刷新函数，如果不传则自动刷新所有相关缓存
 *
 * @example
 * // 场景1: 自动刷新所有相关数据
 * const { create, update, remove } = useAssistantActions();
 *
 * @example
 * // 场景2: 只刷新特定列表
 * const { assistants, refresh } = useAssistantsSWR();
 * const { create, update } = useAssistantActions(refresh);
 *
 * @example
 * // 场景3: 刷新多个数据源
 * const { refresh: refreshList } = useAssistantsSWR();
 * const { refresh: refreshDetail } = useAssistantSWR(id);
 * const actions = useAssistantActions(async () => {
 *   await Promise.all([refreshList(), refreshDetail()]);
 * });
 */
export function useAssistantActions<T = unknown>(
  customMutate?: KeyedMutator<T>
) {
  const { mutate: globalMutate } = useSWRConfig();
  const { createAssistant, updateAssistant, deleteAssistant } =
    useAssistantsApi();

  // 刷新逻辑：优先使用自定义 mutate，否则使用全局刷新
  const refreshData = async () => {
    if (customMutate) {
      await customMutate();
    } else {
      // 刷新所有 assistant 相关的缓存
      await globalMutate(
        (key) => typeof key === "string" && key.startsWith("assistant"),
        undefined,
        { revalidate: true }
      );
    }
  };

  const create = async (data: Parameters<typeof createAssistant>[0]) => {
    const result = await createAssistant(data);
    if (result) {
      await refreshData();
    }
    return result;
  };

  const update = async (
    id: string,
    data: Parameters<typeof updateAssistant>[1],
    optimisticData?: T
  ) => {
    if (optimisticData && customMutate) {
      // 乐观更新：fire-and-forget API + SWR 乐观写入
      void updateAssistant(id, data);
      await customMutate(() => optimisticData, {
        optimisticData,
        rollbackOnError: true,
        revalidate: false
      });
      return null;
    }
    // 无乐观更新：等待 API 完成后刷新
    const result = await updateAssistant(id, data);
    if (result) {
      await refreshData();
    }
    return result;
  };

  const remove = async (id: string) => {
    const result = await deleteAssistant(id);
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

// ==================== 组合 Hooks（数据 + 操作）====================

/**
 * 增强的助手 API hooks - 结合 CRUD 操作和 SWR 缓存
 * @deprecated 推荐使用 useAssistantsSWR() + useAssistantActions() 组合
 */
export function useAssistantsWithActions() {
  const { assistants, isLoading, error, refresh } = useAssistantsSWR();
  const actions = useAssistantActions(refresh);

  return {
    // SWR 数据
    assistants,
    isLoading,
    error,

    // CRUD 操作
    ...actions,

    // 手动刷新
    refresh
  };
}
