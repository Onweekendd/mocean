"use client";

import { useCallback } from "react";

import { useRouter } from "next/navigation";

import type { Model, Provider } from "@mocean/mastra/prismaType";
import type { AssistantFullType } from "@mocean/mastra/schemas";
import { MessageSquarePlus } from "lucide-react";
import toast from "react-hot-toast";

import { useStore } from "@/app/store/useStore";
import { ModelSelector } from "@/components/custom/model-selector";
import type { ModelSelection } from "@/components/custom/useModelSelector";
import {
  useAssistantActions,
  useAssistantThreadsSWR,
  useAssistantUIMessageSWR,
  useFullAssistant
} from "@/hooks/useAssistantsSWR";

export function ChatToolbar() {
  const router = useRouter();
  const {
    activeAssistantId,
    activeThreadId: activeThread,
    setActiveThreadId: setActiveThread
  } = useStore();
  const { assistant, refresh } = useFullAssistant(activeAssistantId ?? "");
  const { update: updateAssistant } =
    useAssistantActions<AssistantFullType | null>(refresh);
  const { threads } = useAssistantThreadsSWR(activeAssistantId || null);
  const { refresh: refreshUIMessage } = useAssistantUIMessageSWR(
    activeAssistantId || null,
    activeThread || null
  );

  const currentThread = threads?.find((t) => t.id === activeThread);
  const threadTitle = getThreadDisplayTitle(currentThread, activeThread);

  const onModelChange = useCallback(
    async (selection: ModelSelection) => {
      if (!activeAssistantId || !assistant) {
        toast.error("请选择一个助手");
        return;
      }
      try {
        await updateAssistant(
          activeAssistantId,
          {
            modelId: selection.model.id,
            providerId: selection.provider.id
          },
          {
            ...assistant,
            model: { ...assistant.model, ...selection.model },
            provider: { ...assistant.provider, ...selection.provider }
          }
        );
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "更新助手失败");
      }
    },
    [activeAssistantId, assistant, updateAssistant]
  );

  const onCreateThread = useCallback(() => {
    if (!activeAssistantId) return;
    setActiveThread(null);
    void refreshUIMessage();
    router.push(`/${activeAssistantId}`);
  }, [activeAssistantId, refreshUIMessage, router, setActiveThread]);

  return (
    <div className="flex h-11 shrink-0 items-center justify-between border-b border-border/30 px-4">
      {/* Left: model selector */}
      <div className="flex max-w-16 items-center">
        {activeAssistantId && assistant ? (
          <ModelSelector
            value={
              assistant.provider && assistant.model
                ? {
                    provider: assistant.provider as Provider,
                    model: assistant.model as Model
                  }
                : undefined
            }
            onChange={onModelChange}
          />
        ) : (
          <span className="text-[13px] text-muted-foreground">未选择助手</span>
        )}
      </div>

      {/* Center: thread title */}
      {threadTitle && (
        <div className="">
          <span className="text-[13px] text-muted-foreground">
            {threadTitle}
          </span>
        </div>
      )}

      {/* Right: new thread */}
      <div className="flex items-center">
        <button
          onClick={onCreateThread}
          className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors duration-150 hover:bg-foreground/[0.04] hover:text-foreground"
          title="新建对话"
        >
          <MessageSquarePlus className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

function getThreadDisplayTitle(
  thread: { title?: string | null } | undefined,
  activeThreadId: string | null
): string {
  if (!activeThreadId) return "";
  return thread?.title ?? "";
}
