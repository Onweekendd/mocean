"use client";

import { useParams } from "next/navigation";

import { Spinner } from "@/components/ui/spinner";
import { useMcpServer } from "@/hooks/useMcpSWR";

import { ServerDetailForm } from "../components/ServerDetailForm";

/**
 * MCP服务器详情页面
 * @description 展示选中服务器的详细配置和工具列表
 */
export default function MCPServerDetailPage() {
  const params = useParams();
  const serverId = typeof params.id === "string" ? params.id : null;

  const { mcpServer, isLoading } = useMcpServer(serverId);

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (!mcpServer) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-semibold text-brand-text">服务器未找到</p>
          <p className="text-sm text-brand-text-muted">
            请从左侧选择一个有效的服务器
          </p>
        </div>
      </div>
    );
  }

  return <ServerDetailForm server={mcpServer} />;
}
