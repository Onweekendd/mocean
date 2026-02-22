import { useCallback, useEffect } from "react";

import { useRouter } from "next/navigation";

import type { StorageThreadType } from "@mocean/mastra/apiClient";

import { useStore } from "@/app/store/useStore";
import {
  useAssistantSWR,
  useAssistantThreadsSWR,
  useAssistantUIMessageSWR
} from "@/hooks/useAssistantsSWR";

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
    setActiveThread(thread.id);
    void refreshUIMessage();
    router.replace(`/${activeAssistantId}/${thread.id}`);
  };

  return (
    <div className="h-full w-full">
      <ThreadList
        threads={threads || []}
        assistantName={assistant?.name || "助手"}
        assistantEmoji={assistant?.emoji || undefined}
        onCreateThread={onCreateThread}
        onThreadClick={onThreadClick}
        onBack={onBack}
      />
    </div>
  );
};

export default ThreadSelect;
