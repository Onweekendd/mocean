import { useCallback, useEffect } from "react";

import { useRouter } from "next/navigation";

import { StorageThreadType } from "@mocean/mastra/apiClient";

import { useStore } from "@/app/store/useStore";
import {
  useAssistantThreadsSWR,
  useAssistantUIMessageSWR,
} from "@/hooks/useAssistantsSWR";

import ThreadList from "./thead/ThreadList";

interface ThreadSelectProps {
  isActive: boolean;
}

const ThreadSelect: React.FC<ThreadSelectProps> = ({ isActive }) => {
  const { activeAssistantId, activeThread, setActiveThread } = useStore();

  const router = useRouter();

  const { threads, refresh } = useAssistantThreadsSWR(
    activeAssistantId || null,
  );

  const { refresh: refreshUIMessage } = useAssistantUIMessageSWR(
    activeAssistantId || null,
    activeThread || null,
  );

  useEffect(() => {
    void refresh();
  }, [refresh, activeAssistantId, isActive]);

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
        onCreateThread={onCreateThread}
        onThreadClick={onThreadClick}
      />
    </div>
  );
};

export default ThreadSelect;
