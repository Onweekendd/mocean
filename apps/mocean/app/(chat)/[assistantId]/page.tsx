"use client";

import { useStore } from "@/app/store/useStore";

import ChatView from "./components/ChatView";

export default function Chat() {
  const { activeAssistant } = useStore();

  if (!activeAssistant) {
    return <div>请选择一个助手</div>;
  }

  return (
    <div className="h-full flex-1">
      <ChatView />
    </div>
  );
}
