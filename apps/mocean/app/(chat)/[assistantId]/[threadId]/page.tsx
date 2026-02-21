"use client";

import { useEffect } from "react";

import { useParams } from "next/navigation";

import { useStore } from "@/app/store/useStore";
import { Loading } from "@/components/ui/loading";
import { useAssistantUIMessageSWR } from "@/hooks/useAssistantsSWR";

import ChatView from "../components/ChatView";

export default function Chat() {
  const { assistantId, threadId } = useParams();
  const { setActiveThread } = useStore();

  // 获取消息数据
  const { messages, isLoading, error } = useAssistantUIMessageSWR(
    (assistantId as string) || null,
    (threadId as string) || null
  );

  useEffect(() => {
    if (threadId) {
      setActiveThread(threadId as string);
    }
  }, [threadId, setActiveThread]);

  // 显示加载状态
  if (isLoading) {
    return (
      <div className="flex h-full flex-1 items-center justify-center">
        <Loading
          text="正在加载聊天记录..."
          size="lg"
          className="rounded-xl border bg-card p-8 shadow-lg"
        />
      </div>
    );
  }

  // 显示错误状态
  if (error) {
    return (
      <div className="flex h-full flex-1 items-center justify-center">
        <div className="rounded-xl border border-destructive bg-destructive/10 p-8 text-center">
          <p className="mb-2 font-medium text-destructive">加载失败</p>
          <p className="text-sm text-muted-foreground">
            无法加载聊天记录，请稍后重试
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex-1">
      <ChatView messages={messages || []} />
    </div>
  );
}
