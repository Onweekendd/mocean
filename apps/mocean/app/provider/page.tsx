"use client";

import { Database, MousePointerClick } from "lucide-react";

import { EmptyPlaceholder } from "@/components/custom/empty-placeholder";

/**
 * 供应商默认页面
 * @description 当没有选择具体供应商时显示提示信息
 */
export default function ProviderPage() {
  return (
    <EmptyPlaceholder
      icon={Database}
      title="选择提供商"
      description="从左侧选择一个提供商，即可查看其可用的模型列表"
      hints={[
        { icon: MousePointerClick, text: "点击左侧提供商卡片选择" }
      ]}
    />
  );
}
