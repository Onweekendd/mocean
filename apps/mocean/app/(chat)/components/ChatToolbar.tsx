"use client";

import { useCallback } from "react";

import { useRouter } from "next/navigation";

import { SquarePen } from "lucide-react";
import toast from "react-hot-toast";

import { useStore } from "@/app/store/useStore";
import { ModelSelector } from "@/components/custom/model-selector";
import {
  useAssistantActions,
  useAssistantSWR,
  useAssistantThreadsSWR,
  useAssistantUIMessageSWR
} from "@/hooks/useAssistantsSWR";

export function ChatToolbar() {
  const router = useRouter();
  const { activeAssistantId, activeThread, setActiveThread } = useStore();
  const { assistant, refresh } = useAssistantSWR(activeAssistantId ?? "");
  const { update: updateAssistant } = useAssistantActions();
  const { threads } = useAssistantThreadsSWR(activeAssistantId || null);
  const { refresh: refreshUIMessage } = useAssistantUIMessageSWR(
    activeAssistantId || null,
    activeThread || null
  );

  const currentThread = threads?.find((t) => t.id === activeThread);
  const threadTitle =
    currentThread?.title ||
    (activeThread ? `对话 ${activeThread.slice(-8)}` : "");

  const onModelChange = useCallback(
    async (selection: {
      providerId: string;
      providerName: string;
      modelId: string;
      modelName: string;
    }) => {
      if (!activeAssistantId) {
        toast.error("请选择一个助手");
        return;
      }
      try {
        await updateAssistant(activeAssistantId, {
          modelId: selection.modelId,
          providerId: selection.providerId
        });
        await refresh();
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "更新助手失败");
      }
    },
    [activeAssistantId, updateAssistant, refresh]
  );

  const onCreateThread = useCallback(() => {
    if (!activeAssistantId) return;
    setActiveThread(null);
    void refreshUIMessage();
    router.push(`/${activeAssistantId}`);
  }, [activeAssistantId, refreshUIMessage, router, setActiveThread]);

  return (
    <div className="flex h-12 shrink-0 items-center justify-between border-b border-border/40 px-4">
      {/* Left: model selector */}
      <div className="flex min-w-0 flex-1 items-center">
        {activeAssistantId && assistant ? (
          <ModelSelector
            value={{
              providerId: assistant.provider?.id ?? "",
              providerName: assistant.provider?.name ?? "",
              modelId: assistant.model?.id ?? "",
              modelName: assistant.model?.name ?? ""
            }}
            onChange={onModelChange}
          />
        ) : (
          <span className="text-sm text-muted-foreground">未选择助手</span>
        )}
      </div>

      {/* Center: thread title */}
      <div className="flex min-w-0 shrink items-center justify-center px-4">
        <span className="truncate text-sm font-medium text-foreground/80">
          {threadTitle}
        </span>
      </div>

      {/* Right: new thread button */}
      <div className="flex flex-1 items-center justify-end">
        <button
          onClick={onCreateThread}
          className=":hover:bg-brand-primary-500/80 flex items-center justify-center rounded-full bg-brand-primary-500 px-2 py-1 text-sm text-brand-main transition-all duration-150 hover:bg-brand-primary-500/80"
        >
          + 新建对话
        </button>
      </div>
    </div>
  );
}
