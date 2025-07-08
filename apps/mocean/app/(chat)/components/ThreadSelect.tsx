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
  const { activeAssistant, activeThread, setActiveThread } = useStore();

  const router = useRouter();

  const { threads, refresh } = useAssistantThreadsSWR(
    activeAssistant?.id || null,
  );

  const { refresh: refreshUIMessage } = useAssistantUIMessageSWR(
    activeAssistant?.id || null,
    activeThread || null,
  );

  useEffect(() => {
    refresh();
  }, [refresh, activeAssistant?.id, isActive]);

  const onCreateThread = useCallback(() => {
    if (!activeAssistant) {
      return;
    }
    setActiveThread(null);
    refreshUIMessage();
    router.push(`/${activeAssistant.id}`);
  }, [activeAssistant, refreshUIMessage, router, setActiveThread]);

  const onThreadClick = (thread: StorageThreadType) => {
    setActiveThread(thread.id);
    refreshUIMessage();
    router.replace(`/${activeAssistant?.id}/${thread.id}`);
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
