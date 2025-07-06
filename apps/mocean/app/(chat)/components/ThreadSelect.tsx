import { useCallback, useEffect } from "react";

import { useRouter } from "next/navigation";

import { StorageThreadType } from "@mocean/mastra/apiClient";

import { useStore } from "@/app/store/useStore";
import { useAssistantThreadsSWR } from "@/hooks/useAssistantsSWR";

import ThreadList from "./thead/ThreadList";

interface ThreadSelectProps {
  isActive: boolean;
}

const ThreadSelect: React.FC<ThreadSelectProps> = ({ isActive }) => {
  const { activeAssistant } = useStore();

  const router = useRouter();

  const { threads, refresh } = useAssistantThreadsSWR(
    activeAssistant?.id || null,
  );

  useEffect(() => {
    refresh();
  }, [refresh, activeAssistant?.id, isActive]);

  const onCreateThread = useCallback(() => {
    if (!activeAssistant) {
      return;
    }

    router.replace(`${activeAssistant.id}`);
  }, [activeAssistant, router]);

  const onThreadClick = useCallback(
    (thread: StorageThreadType) => {
      router.push(`${activeAssistant?.id}/${thread.id}`);
    },
    [activeAssistant, router],
  );

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
