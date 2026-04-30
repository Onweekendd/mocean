"use client";

import type { UIMessage } from "ai";

import { useParams } from "next/navigation";

import { useStore } from "@/app/store/useStore";
import { useAssistantUIMessageSWR } from "@/hooks/useAssistantsSWR";

import ChatView from "../components/ChatView";

export default function Chat() {
  const { activeAssistantId, activeThreadId } = useStore();
  const { threadId } = useParams();

  const { messages, error } = useAssistantUIMessageSWR(
    activeAssistantId,
    activeThreadId
  );

  if (error) {
    return (
      <div className="flex h-full flex-1 items-center justify-center">
        <div className="rounded-xl border border-destructive bg-destructive/10 p-8 text-center">
          <p className="mb-2 font-medium text-destructive">加载失败</p>
          <p className="text-sm text-brand-text-muted">
            无法加载聊天记录，请稍后重试
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex-1">
      <ChatView
        key={(threadId as string) ?? "new"}
        messages={(messages || []) as UIMessage[]}
      />
    </div>
  );
}
