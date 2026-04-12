import { useState } from "react";

import type { Assistant } from "@mocean/mastra/prismaType";
import { MoreHorizontal, Pencil, Sparkles, Trash2 } from "lucide-react";

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
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useAssistantActions } from "@/hooks/useAssistantsSWR";

import { useStore } from "../../../store/useStore";
import { IconPreview } from "./AssistantIconPicker";
import EditAssistantDialog from "./EditAssistantDialog";

interface AssistantCardProps {
  assistant: Assistant;
  onClick: (assistant: Assistant) => void;
  onDeleted?: (assistantId: string) => void;
}

const AssistantCard: React.FC<AssistantCardProps> = ({
  assistant,
  onClick,
  onDeleted
}) => {
  const { activeAssistantId } = useStore();
  const isActive = activeAssistantId === assistant.id;
  const { remove } = useAssistantActions();

  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteConfirm = async () => {
    setIsDeleting(true);
    try {
      await remove(assistant.id);
      onDeleted?.(assistant.id);
    } finally {
      setIsDeleting(false);
      setDeleteOpen(false);
    }
  };

  return (
    <>
      <div
        className={`group relative cursor-pointer rounded-lg px-3 py-2.5 transition-all duration-150 ${
          isActive ? "bg-primary/[0.06]" : "hover:bg-muted/40"
        }`}
        onClick={() => onClick(assistant)}
      >
        <div className="flex items-center gap-3">
          <div
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm ${
              isActive ? "text-primary" : "bg-muted text-muted-foreground"
            }`}
          >
            <IconPreview value={assistant.emoji} size="h-8 w-8" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="truncate text-sm font-medium text-brand-text">
                {assistant.name}
              </span>
              {isActive && (
                <Sparkles className="h-3 w-3 shrink-0 text-primary" />
              )}
            </div>
            {assistant.description && (
              <p className="mt-0.5 truncate text-xs text-brand-text-muted">
                {assistant.description}
              </p>
            )}
          </div>

          {/* 三点菜单按钮：hover 时显示 */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                onClick={(e) => e.stopPropagation()}
              >
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              onClick={(e) => e.stopPropagation()}
            >
              <DropdownMenuItem onClick={() => setEditOpen(true)}>
                <Pencil className="mr-2 h-4 w-4" />
                编辑
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => setDeleteOpen(true)}
                className="text-destructive focus:text-destructive"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                删除
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <EditAssistantDialog
        assistant={assistant}
        open={editOpen}
        onOpenChange={setEditOpen}
      />

      <AlertDialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>确认删除助手</AlertDialogTitle>
            <AlertDialogDescription>
              删除 &quot;{assistant.name}&quot;
              后将无法恢复，该助手的所有对话记录也会一并删除。
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>取消</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => void handleDeleteConfirm()}
              disabled={isDeleting}
              className="bg-destructive hover:bg-destructive/90"
            >
              {isDeleting ? "删除中..." : "确认删除"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default AssistantCard;
