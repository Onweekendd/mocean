import {
  type AssistantDetailResult,
  type StorageThreadType,
  useAssistantsApi,
} from "@mocean/mastra/apiClient";
import { type AssistantModel } from "@mocean/mastra/prismaType";
import { type UIMessage } from "ai";
import useSWR, { type KeyedMutator } from "swr";

/**
 * 使用 SWR 的助手数据获取 hooks
 * @description 在前端应用层提供带缓存的数据获取功能
 */

/**
 * 获取所有助手列表 - 使用 SWR
 */
export function useAssistantsSWR(): {
  assistants: AssistantModel[];
  isLoading: boolean;
  error: Error | undefined;
  refresh: KeyedMutator<AssistantModel[]>;
} {
  const { getAssistants } = useAssistantsApi();

  const { data, error, isLoading, mutate } = useSWR(
    "assistants",
    async () => {
      const result = await getAssistants();
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
    assistants: data || [],
    isLoading,
    error,
    refresh: mutate,
  };
}

/**
 * 获取单个助手 - 使用 SWR
 */
export function useAssistantSWR(id: string | null) {
  const { getAssistantById } = useAssistantsApi();

  const { data, error, isLoading, mutate } = useSWR<
    AssistantDetailResult | null | undefined,
    Error | undefined
  >(
    id ? `assistant-${id}` : null,
    async () => {
      if (!id) return null;
      const result = await getAssistantById(id);
      return result?.data || null;
    },
    {
      refreshInterval: 0,
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 60000,
    },
  );

  /**
   * 根据 ID 动态获取助手详情
   * @param id - 助手 ID
   * @returns 助手详情数据
   */
  const fetchAssistantById = async (id: string) => {
    if (!id) return null;
    const result = await getAssistantById(id);
    return result?.data || null;
  };

  return {
    assistant: data,
    isLoading,
    error,
    refresh: mutate,
    getAssistantById: fetchAssistantById,
  };
}

/**
 * 获取助手线程列表 - 使用 SWR
 * @param assistantId - 助手的唯一标识符（为空时不发起请求）
 * @returns 包含线程数据、加载状态、错误信息、刷新方法和动态获取助手方法的对象
 */
export function useAssistantThreadsSWR(assistantId: string | null): {
  threads: StorageThreadType[];
  isLoading: boolean;
  error: Error | undefined;
  refresh: KeyedMutator<StorageThreadType[]>;
} {
  const { getAssistantThreads } = useAssistantsApi();

  const { data, error, isLoading, mutate } = useSWR(
    assistantId ? `assistant-threads-${assistantId}` : null,
    async () => {
      if (!assistantId) return [];
      const result = await getAssistantThreads(assistantId);
      return result?.data || [];
    },
    {
      refreshInterval: 0,
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 30000, // 30秒内的重复请求会被去重（线程数据更新频率较高）
      errorRetryCount: 3,
      errorRetryInterval: 3000,
    },
  );

  return {
    threads: data || [],
    isLoading,
    error,
    refresh: mutate,
  };
}

export function useAssistantUIMessageSWR(
  assistantId: string | null,
  threadId: string | null,
): {
  messages: UIMessage[] | null | undefined;
  isLoading: boolean;
  error: Error | undefined;
  refresh: KeyedMutator<UIMessage[] | null>;
} {
  const { getAssistantUIMessageByThreadId } = useAssistantsApi();

  const { data, error, isLoading, mutate } = useSWR(
    threadId ? `assistant-thread-${assistantId}-${threadId}` : null,
    async () => {
      if (!assistantId || !threadId) return null;
      const result = await getAssistantUIMessageByThreadId(
        assistantId,
        threadId,
      );
      return result?.data || null;
    },
  );

  return {
    messages: data,
    isLoading,
    error,
    refresh: mutate,
  };
}

/**
 * 增强的助手 API hooks - 结合 CRUD 操作和 SWR 缓存
 */
export function useAssistantsWithActions(): {
  assistants: AssistantModel[];
  isLoading: boolean;
  error: Error | undefined;
  create: (
    data: Parameters<ReturnType<typeof useAssistantsApi>["createAssistant"]>[0],
  ) => Promise<unknown>;
  update: (
    id: string,
    data: Parameters<ReturnType<typeof useAssistantsApi>["updateAssistant"]>[1],
  ) => Promise<unknown>;
  remove: (id: string) => Promise<unknown>;
  refresh: KeyedMutator<AssistantModel[]>;
} {
  const { assistants, isLoading, error, refresh } = useAssistantsSWR();
  const { createAssistant, updateAssistant, deleteAssistant } =
    useAssistantsApi();

  return {
    // SWR 数据
    assistants,
    isLoading,
    error,

    // CRUD 操作（带缓存更新）
    async create(data: Parameters<typeof createAssistant>[0]) {
      try {
        const result = await createAssistant(data);
        if (result) {
          // 创建成功后，刷新缓存
          await refresh();
        }

        return result;
      } catch (error) {
        console.error("创建助手失败:", error);
        throw error;
      }
    },

    async update(id: string, data: Parameters<typeof updateAssistant>[1]) {
      try {
        const result = await updateAssistant(id, data);
        if (result) {
          // 更新成功后，刷新缓存
          await refresh();
        }
        return result;
      } catch (error) {
        console.error("更新助手失败:", error);
        throw error;
      }
    },

    async remove(id: string) {
      try {
        const result = await deleteAssistant(id);
        if (result) {
          // 删除成功后，刷新缓存
          await refresh();
        }
        return result;
      } catch (error) {
        console.error("删除助手失败:", error);
        throw error;
      }
    },

    // 手动刷新
    refresh,
  };
}
