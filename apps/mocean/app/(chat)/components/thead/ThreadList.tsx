import { useRef, useState } from "react";

import type { StorageThreadType } from "@mocean/mastra/apiClient";
import {
  ArrowLeft,
  MessageCircle,
  MoreHorizontal,
  Pencil,
  Trash2
} from "lucide-react";

import { IconPreview } from "@/app/(chat)/components/assistant/AssistantIconPicker";
import { useStore } from "@/app/store/useStore";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface ThreadListProps {
  threads: StorageThreadType[];
  assistantName: string;
  assistantEmoji?: string;
  onCreateThread?: () => void;
  onThreadClick?: (thread: StorageThreadType) => void;
  onRenameThread?: (thread: StorageThreadType, newTitle: string) => void;
  onDeleteThread?: (thread: StorageThreadType) => void;
  onBack?: () => void;
}

const ThreadItem: React.FC<{
  thread: StorageThreadType;
  isActive: boolean;
  onClick: (thread: StorageThreadType) => void;
  onRename: (thread: StorageThreadType, newTitle: string) => void;
  onDelete: (thread: StorageThreadType) => void;
}> = ({ thread, isActive, onClick, onRename, onDelete }) => {
  const [isRenaming, setIsRenaming] = useState(false);
  const [renameValue, setRenameValue] = useState(thread.title ?? "");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleRenameStart = () => {
    setRenameValue(thread.title ?? "");
    setIsRenaming(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleRenameSubmit = () => {
    const trimmed = renameValue.trim();
    if (trimmed && trimmed !== thread.title) {
      onRename(thread, trimmed);
    }
    setIsRenaming(false);
  };

  const handleRenameKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleRenameSubmit();
    if (e.key === "Escape") setIsRenaming(false);
  };

  return (
    <>
      <div
        className={cn(
          "group flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-left text-[13px] transition-colors duration-150",
          isActive
            ? "bg-foreground/[0.06] font-medium text-foreground"
            : "text-foreground/70 hover:bg-foreground/[0.04]"
        )}
        onClick={() => !isRenaming && onClick(thread)}
      >
        {isRenaming ? (
          <input
            ref={inputRef}
            value={renameValue}
            onChange={(e) => setRenameValue(e.target.value)}
            onBlur={handleRenameSubmit}
            onKeyDown={handleRenameKeyDown}
            onClick={(e) => e.stopPropagation()}
            className="flex-1 border-b border-foreground/30 bg-transparent py-0.5 outline-none"
          />
        ) : (
          <span className="flex-1 truncate">{thread.title}</span>
        )}

        {!isRenaming && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="flex h-5 w-5 items-center justify-center rounded opacity-0 transition-opacity hover:bg-foreground/10 group-hover:opacity-100"
                onClick={(e) => e.stopPropagation()}
              >
                <MoreHorizontal className="h-3.5 w-3.5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-40"
              onClick={(e) => e.stopPropagation()}
            >
              <DropdownMenuItem
                onClick={(e) => {
                  e.stopPropagation();
                  handleRenameStart();
                }}
              >
                <Pencil className="mr-2 h-3.5 w-3.5" />
                重命名对话
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={(e) => {
                  e.stopPropagation();
                  setDeleteDialogOpen(true);
                }}
                className="text-destructive focus:text-destructive"
              >
                <Trash2 className="mr-2 h-3.5 w-3.5" />
                删除对话
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>删除对话</AlertDialogTitle>
            <AlertDialogDescription>
              确定要删除「{thread.title}」吗？此操作无法撤销。
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>取消</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => onDelete(thread)}
              className="bg-destructive hover:bg-destructive/90"
            >
              删除
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

const ThreadList: React.FC<ThreadListProps> = ({
  threads,
  assistantName,
  assistantEmoji,
  onThreadClick,
  onRenameThread,
  onDeleteThread,
  onBack
}) => {
  const { activeThreadId: activeThread } = useStore();

  return (
    <div className="flex h-full flex-col">
      {/* Header: back + new thread */}
      <div className="flex shrink-0 items-center justify-between pb-1 pt-4">
        {onBack && (
          <button
            onClick={onBack}
            className="group flex w-full min-w-0 items-center gap-1 rounded-lg px-1 py-1.5 transition-colors duration-150 hover:bg-foreground/[0.04]"
          >
            <ArrowLeft className="h-3.5 w-3.5 shrink-0 text-brand-text-muted transition-transform duration-150 group-hover:-translate-x-0.5" />
            <IconPreview value={assistantEmoji} size="h-5 w-5" />
            <span className="truncate text-[13px] font-medium text-brand-text">
              {assistantName}
            </span>
          </button>
        )}
      </div>

      {/* Thread list */}
      <div className="flex-1 overflow-y-auto px-2 pb-4 pt-1">
        <div className="flex h-full w-full flex-col gap-4">
          {threads.length > 0 ? (
            threads.map((thread) => (
              <ThreadItem
                key={thread.id}
                thread={thread}
                isActive={activeThread === thread.id}
                onClick={(t) => onThreadClick?.(t)}
                onRename={(t, title) => onRenameThread?.(t, title)}
                onDelete={(t) => onDeleteThread?.(t)}
              />
            ))
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center py-16 text-center">
              <MessageCircle className="mb-3 h-6 w-6 text-muted-foreground/20" />
              <p className="text-[13px] text-brand-text-muted">暂无对话记录</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThreadList;
