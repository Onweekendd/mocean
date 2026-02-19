"use client";

import { MessageSquare, MousePointerClick, Sparkles } from "lucide-react";

import { EmptyPlaceholder } from "@/components/custom/empty-placeholder";

export default function Chat() {
  return (
    <EmptyPlaceholder
      icon={MessageSquare}
      title="开始对话"
      description="从左侧选择一个 AI 助手，即可开始智能对话"
      hints={[
        { icon: MousePointerClick, text: "点击左侧助手卡片选择助手" },
        { icon: Sparkles, text: "选择话题或新建对话，开始提问" }
      ]}
    />
  );
}
