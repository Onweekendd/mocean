"use client";

import { useEffect } from "react";

import { useParams } from "next/navigation";

import { useStore } from "../store/useStore";
import ChatConfig from "./components/ChatConfig";

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
  const { assistantId, threadId } = useParams();
  const { setActiveThreadId: setActiveThread, setActiveAssistantId } =
    useStore();

  useEffect(() => {
    if (assistantId) {
      setActiveAssistantId(assistantId as string);
    }

    if (threadId) {
      setActiveThread(threadId as string);
    }
  }, [threadId, setActiveThread, assistantId, setActiveAssistantId]);
  return (
    <div className="flex h-full">
      <div className="relative z-10 h-full">
        <ChatConfig />
      </div>
      <div className="bg-brand-slate-100 h-full flex-1 overflow-hidden rounded-tl-[1rem] shadow-[inset_12px_0_10px_-6px_hsl(var(--brand-slate))]">
        {children}
      </div>
    </div>
  );
};

export default ChatLayout;
