"use client";

import { useEffect } from "react";

import { useParams } from "next/navigation";

import { useStore } from "@/app/store/useStore";

import ChatConfig from "./components/ChatConfig";

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
  const { assistantId } = useParams();
  const { setActiveAssistantId } = useStore();

  // 根据 URL 参数更新当前助手 ID
  useEffect(() => {
    if (assistantId) {
      setActiveAssistantId(assistantId as string);
    }
  }, [assistantId, setActiveAssistantId]);

  return (
    <div className="flex h-full">
      <div className="h-full border-r border-border/30 bg-muted/30">
        <ChatConfig />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default ChatLayout;
