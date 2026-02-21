import type { StorageThreadType } from "@mocean/mastra/apiClient";
import { ArrowLeft, Bot, MessageCircle, SquarePen } from "lucide-react";

import { useStore } from "@/app/store/useStore";
import { cn } from "@/lib/utils";

interface ThreadListProps {
  threads: StorageThreadType[];
  assistantName: string;
  assistantEmoji?: string;
  onCreateThread?: () => void;
  onThreadClick?: (thread: StorageThreadType) => void;
  onBack?: () => void;
}

const ThreadItem: React.FC<{
  thread: StorageThreadType;
  onClick: (thread: StorageThreadType) => void;
  isActive: boolean;
}> = ({ thread, onClick, isActive }) => {
  return (
    <button
      className={cn(
        "group flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-[13px] transition-colors duration-150",
        isActive
          ? "bg-foreground/[0.06] font-medium text-foreground"
          : "text-foreground/70 hover:bg-foreground/[0.04]"
      )}
      onClick={() => onClick(thread)}
    >
      <span className="truncate">{thread.title}</span>
    </button>
  );
};

const ThreadList: React.FC<ThreadListProps> = ({
  threads,
  assistantName,
  assistantEmoji,
  onCreateThread,
  onThreadClick,
  onBack
}) => {
  const { activeThread } = useStore();

  return (
    <div className="flex h-full flex-col">
      {/* Header: back + new thread */}
      <div className="flex shrink-0 items-center justify-between px-3 pb-1 pt-4">
        {onBack && (
          <button
            onClick={onBack}
            className="group flex min-w-0 items-center gap-2 rounded-lg px-2 py-1.5 transition-colors duration-150 hover:bg-foreground/[0.04]"
          >
            <ArrowLeft className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform duration-150 group-hover:-translate-x-0.5" />
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded text-xs">
              {assistantEmoji || (
                <Bot className="h-3.5 w-3.5 text-muted-foreground" />
              )}
            </span>
            <span className="truncate text-[13px] font-medium text-foreground/80">
              {assistantName}
            </span>
          </button>
        )}
      </div>

      {/* Thread list */}
      <div className="flex-1 overflow-y-auto px-2 pb-4 pt-1">
        <div className="flex flex-col gap-4">
          {threads.length > 0 ? (
            threads.map((thread) => (
              <ThreadItem
                key={thread.id}
                thread={thread}
                onClick={(t) => onThreadClick?.(t)}
                isActive={activeThread === thread.id}
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <MessageCircle className="mb-3 h-6 w-6 text-muted-foreground/20" />
              <p className="text-[13px] text-muted-foreground/60">
                暂无对话记录
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThreadList;
