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
      <div className="h-full">
        <ChatConfig />
      </div>
      <div className="flex-1 overflow-hidden rounded-tl-[1rem] bg-white shadow-sm">
        {children}
      </div>
    </div>
  );
};

export default ChatLayout;
