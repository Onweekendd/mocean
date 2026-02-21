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
  const getDisplayTitle = (thread: StorageThreadType) => {
    return thread.title || `对话 ${thread.id.slice(-8)}`;
  };

  return (
    <button
      className={cn(
        "group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors duration-150",
        isActive
          ? "bg-brand-primary/10 text-brand-primary"
          : "text-foreground/80 hover:bg-muted"
      )}
      onClick={() => onClick(thread)}
    >
      <MessageCircle
        className={cn(
          "h-4 w-4 shrink-0",
          isActive
            ? "text-brand-primary"
            : "text-muted-foreground group-hover:text-foreground/60"
        )}
      />
      <span className="truncate">{getDisplayTitle(thread)}</span>
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
      {/* Header: back button + new thread */}
      <div className="flex shrink-0 items-center justify-between px-4 pb-2 pt-5">
        {onBack && (
          <button
            onClick={onBack}
            className="group flex min-w-0 items-center gap-2 rounded-lg px-2 py-1.5 transition-colors duration-150 hover:bg-muted"
          >
            <ArrowLeft className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-150 group-hover:-translate-x-0.5" />
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gradient-brand text-xs text-brand-main">
              {assistantEmoji || <Bot className="h-3.5 w-3.5" />}
            </span>
            <span className="truncate text-sm font-medium text-foreground">
              {assistantName}
            </span>
          </button>
        )}
      </div>

      {/* Thread list - scrollable */}
      <div className="flex-1 overflow-y-auto px-3 pb-4">
        <div className="flex flex-col gap-0.5">
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
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <MessageCircle className="mb-2 h-8 w-8 text-muted-foreground/30" />
              <p className="text-sm text-muted-foreground">暂无对话记录</p>
              <p className="mt-1 text-xs text-muted-foreground/60">
                点击右上角按钮开始新的对话
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThreadList;
