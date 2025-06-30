"use client";

import { useStore } from "@/app/store/useStore";

export default function Chat() {
  const { activeAssistant } = useStore();

  if (!activeAssistant) {
    return <div>请选择一个助手</div>;
  }

  return <div className="h-full flex-1">选择一个对话开始聊天</div>;
}
