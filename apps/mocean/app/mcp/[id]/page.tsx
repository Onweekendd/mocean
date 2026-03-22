"use client";

import { useParams } from "next/navigation";

import { ServerDetailForm } from "../components/server-detail-form";

const servers = [
  { id: "1", name: "Cognitive Research", type: "stdio" as const, active: true },
  { id: "2", name: "Browser Automation", type: "sse" as const, active: true },
  { id: "3", name: "File System", type: "stdio" as const, active: false },
  { id: "4", name: "Database Query", type: "stdio" as const, active: true }
];

/**
 * MCP服务器详情页面
 * @description 展示选中服务器的详细配置和工具列表
 */
export default function MCPServerDetailPage() {
  const params = useParams();
  const serverId = typeof params.id === "string" ? params.id : "";

  const selectedServer = servers.find((s) => s.id === serverId);

  if (!selectedServer) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-semibold">服务器未找到</p>
          <p className="text-sm text-muted-foreground">
            请从左侧选择一个有效的服务器
          </p>
        </div>
      </div>
    );
  }

  return <ServerDetailForm serverName={selectedServer.name} />;
}
