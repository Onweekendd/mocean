import { useCallback, useEffect, useMemo } from "react";

import { useRouter } from "next/navigation";

import type { StorageThreadType } from "@mocean/mastra/apiClient";

import { toast } from "sonner";

import { useStore } from "@/app/store/useStore";
import {
  useAssistantSWR,
  useAssistantThreadsSWR,
  useAssistantUIMessageSWR
} from "@/hooks/useAssistantsSWR";
import { useMastraClient } from "@/hooks/useMastraClient";

import ThreadList from "./thead/ThreadList";

interface ThreadSelectProps {
  onBack: () => void;
}

const ThreadSelect: React.FC<ThreadSelectProps> = ({ onBack }) => {
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

  const { mastraClient } = useMastraClient();

  const streamingTitles = useStore((s) => s.streamingTitles);

  const threadsWithCreating = useMemo<StorageThreadType[]>(() => {
    const currentAssistantCreatingThread =
      streamingTitles[activeAssistantId || ""] ?? [];

    return [...currentAssistantCreatingThread, ...threads];
  }, [threads, streamingTitles, activeAssistantId]);

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
      await mastraClient
        .getMemoryThread({ threadId: thread.id, agentId: "dynamic-agent" })
        .update({ title: newTitle });
      await refresh();
    },
    [mastraClient, refresh]
  );

  const onDeleteThread = useCallback(
    async (thread: StorageThreadType) => {
      await mastraClient
        .getMemoryThread({ threadId: thread.id, agentId: "dynamic-agent" })
        .delete();
      toast.success("对话已删除");
      if (activeThread === thread.id) {
        setActiveThread(null);
        void refreshUIMessage();
        router.push(`/${activeAssistantId}`);
      }
      await refresh();
    },
    [
      mastraClient,
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
        assistantName={assistant?.name || "助手"}
        assistantEmoji={assistant?.emoji || undefined}
        onCreateThread={onCreateThread}
        onThreadClick={onThreadClick}
        onRenameThread={onRenameThread}
        onDeleteThread={onDeleteThread}
        onBack={onBack}
      />
    </div>
  );
};

export default ThreadSelect;
