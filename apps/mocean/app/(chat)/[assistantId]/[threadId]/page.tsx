"use client";

import { useEffect } from "react";

import { useParams } from "next/navigation";

import { useStore } from "@/app/store/useStore";

import ChatView from "../components/ChatView";

export default function Chat() {
  const { threadId } = useParams();
  const { setActiveThread } = useStore();

  useEffect(() => {
    if (threadId) {
      setActiveThread(threadId as string);
    }
  }, [threadId, setActiveThread]);

  return (
    <div className="h-full flex-1">
      <ChatView />
    </div>
  );
}
