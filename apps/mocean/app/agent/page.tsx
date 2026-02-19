"use client";

import { Bot, MousePointerClick, Sparkles } from "lucide-react";

import { EmptyPlaceholder } from "@/components/custom/empty-placeholder";

export default function AgentPage() {
  return (
    <EmptyPlaceholder
      icon={Bot}
      title="选择 Agent"
      description="从左侧选择一个 Agent，即可查看详情并创建助手"
      hints={[
        { icon: MousePointerClick, text: "点击左侧 Agent 卡片选择" },
        { icon: Sparkles, text: "选择 Agent 后可基于它创建专属助手" }
      ]}
    />
  );
}
