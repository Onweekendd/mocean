import { useCallback, useEffect, useMemo } from "react";

import { useRouter } from "next/navigation";

import { type StorageThreadType, apiClient } from "@mocean/mastra/apiClient";
import { toast } from "sonner";

import { useStore } from "@/app/store/useStore";
import {
  useAssistantSWR,
  useAssistantThreadsSWR,
  useAssistantUIMessageSWR
} from "@/hooks/useAssistantsSWR";

import ThreadList from "./thead/ThreadList";

interface ThreadSelectProps {
  onBack: () => void;
  onSettings: () => void;
}

const ThreadSelect: React.FC<ThreadSelectProps> = ({ onBack, onSettings }) => {
  const {
    activeAssistantId,
    activeThreadId: activeThread,
    setActiveThreadId: setActiveThread
  } = useStore();

  const router = useRouter();

  const { assistant } = useAssistantSWR(activeAssistantId || null);

  const { threads, refresh } = useAssistantThreadsSWR(
    activeAssistantId || null
  );

  const streamingTitles = useStore((s) => s.streamingTitles);

  const currentAssistantStreamingThreads = useMemo(
    () => streamingTitles[activeAssistantId || ""] ?? [],
    [streamingTitles, activeAssistantId]
  );

  const threadsWithCreating = useMemo<StorageThreadType[]>(() => {
    return [...currentAssistantStreamingThreads, ...threads];
  }, [threads, currentAssistantStreamingThreads]);

  const streamingThreadIds = useMemo(
    () => new Set(currentAssistantStreamingThreads.map((t) => t.id)),
    [currentAssistantStreamingThreads]
  );

  const { refresh: refreshUIMessage } = useAssistantUIMessageSWR(
    activeAssistantId || null,
    activeThread || null
  );

  useEffect(() => {
    void refresh();
  }, [refresh, activeAssistantId]);

  const onCreateThread = useCallback(() => {
    if (!activeAssistantId) {
      return;
    }
    setActiveThread(null);
    void refreshUIMessage();
    router.push(`/${activeAssistantId}`);
  }, [activeAssistantId, refreshUIMessage, router, setActiveThread]);

  const onThreadClick = (thread: StorageThreadType) => {
    // 如果点击已选中的会话，则取消选中
    if (activeThread === thread.id) {
      setActiveThread(null);
      router.push(`/${activeAssistantId}`);
    } else {
      setActiveThread(thread.id);
      router.replace(`/${activeAssistantId}/${thread.id}`);
    }
  };

  const onRenameThread = useCallback(
    async (thread: StorageThreadType, newTitle: string) => {
      await apiClient.customApi.assistants.threads[":threadId"].$put({
        param: { threadId: thread.id },
        json: { title: newTitle }
      });
      await refresh();
    },
    [refresh]
  );

  const onDeleteThread = useCallback(
    async (thread: StorageThreadType) => {
      await apiClient.customApi.assistants.threads[":threadId"].$delete({
        param: { threadId: thread.id }
      });
      toast.success("对话已删除");
      if (activeThread === thread.id) {
        setActiveThread(null);
        void refreshUIMessage();
        router.push(`/${activeAssistantId}`);
      }
      await refresh();
    },
    [
      refresh,
      activeThread,
      activeAssistantId,
      setActiveThread,
      refreshUIMessage,
      router
    ]
  );

  return (
    <div className="h-full w-full">
      <ThreadList
        threads={threadsWithCreating}
        streamingThreadIds={streamingThreadIds}
        assistantName={assistant?.name || "助手"}
        assistantEmoji={assistant?.emoji || undefined}
        onCreateThread={onCreateThread}
        onThreadClick={onThreadClick}
        onRenameThread={onRenameThread}
        onDeleteThread={onDeleteThread}
        onBack={onBack}
        onSettings={onSettings}
      />
    </div>
  );
};

export default ThreadSelect;
