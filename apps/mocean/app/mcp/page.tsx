"use client";

import { Server } from "lucide-react";

import { EmptyPlaceholder } from "@/components/custom/empty-placeholder";

/**
 * MCP服务器默认页面
 * @description 当没有选择具体服务器时显示提示信息
 */
export default function MCPPage() {
  return (
    <EmptyPlaceholder
      icon={Server}
      title="选择服务器"
      description="从左侧选择一个 MCP 服务器，即可查看其配置和工具列表"
      hints={[
        {
          icon: Server,
          text: "点击左侧服务器卡片选择"
        }
      ]}
    />
  );
}
