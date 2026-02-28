import type { StorageThreadType } from "@mocean/mastra/apiClient";
import type { UIMessage } from "ai";
import { create } from "zustand";

/**
 * 对线程列表执行 upsert 操作。
 * 若列表中已存在相同 id 的线程则替换，否则插入到头部。
 * @param threads 当前线程列表
 * @param thread 要插入或更新的线程
 * @returns 更新后的线程列表
 */
const upsertThread = (
  threads: StorageThreadType[],
  thread: StorageThreadType
): StorageThreadType[] => {
  const exists = threads.some((t) => t.id === thread.id);
  if (exists) {
    return threads.map((t) => (t.id === thread.id ? thread : t));
  }
  return [thread, ...threads];
};

export type Store = {
  /**
   * @description 当前助手的 ID
   */
  activeAssistantId: string | null;
  setActiveAssistantId: (id: string | null) => void;

  /**
   * @description 初始化消息
   */
  initialMessages: UIMessage[] | null;
  setInitialMessages: (messages: UIMessage[]) => void;

  /**
   * @description 当前线程
   */
  activeThreadId: string | null;
  setActiveThreadId: (thread: string | null) => void;

  /**
   * @description 流式生成中的对话标题，key 为 threadId
   */
  streamingTitles: Record<string, StorageThreadType[]>;
  setStreamingTitle: (assistantId: string, thread: StorageThreadType) => void;
  clearStreamingTitle: (threadId: string) => void;
};

const useStore = create<Store>((set) => ({
  activeAssistantId: null as string | null,
  setActiveAssistantId: (id: string | null) => set({ activeAssistantId: id }),

  initialMessages: [] as UIMessage[],
  setInitialMessages: (messages: UIMessage[]) =>
    set({ initialMessages: messages }),

  activeThreadId: null as string | null,
  setActiveThreadId: (threadId: string | null) =>
    set({ activeThreadId: threadId }),

  streamingTitles: {},
  setStreamingTitle: (assistantId, thread) =>
    set((s) => ({
      streamingTitles: {
        ...s.streamingTitles,
        [assistantId]: upsertThread(
          s.streamingTitles[assistantId] ?? [],
          thread
        )
      }
    })),
  clearStreamingTitle: (threadId) =>
    set((s) => {
      const { [threadId]: _, ...rest } = s.streamingTitles;
      return { streamingTitles: rest };
    })
}));

export { useStore };
