"use client";

import { useParams } from "next/navigation";

import { useMcpServers } from "@/hooks/useMcpSWR";

import { ServerSidebar } from "./components/ServerSidebar";

interface MCPLayoutProps {
  children: React.ReactNode;
}

/**
 * MCP服务器页面布局组件
 * @description 左侧服务器列表，右侧详细内容的分栏布局
 */
export default function MCPLayout({ children }: MCPLayoutProps) {
  const params = useParams();
  const selectedServerId = typeof params.id === "string" ? params.id : null;

  const { mcpServers, isLoading } = useMcpServers();

  return (
    <div className="flex h-screen gap-2 overflow-hidden bg-brand-main">
      {/* 左侧服务器列表 */}
      <div className="h-full w-[18rem] flex-shrink-0">
        <ServerSidebar
          servers={mcpServers.map((s) => ({
            id: s.id,
            name: s.name,
            type: s.type ?? "stdio",
            active: s.isActive
          }))}
          selectedId={selectedServerId || ""}
          isLoading={isLoading}
        />
      </div>

      {/* 右侧内容区域 */}
      <div className="h-full min-w-0 flex-1 overflow-y-auto rounded-tl-[1rem] bg-brand-slate-100/80 shadow-[inset_12px_0_10px_-6px_hsl(var(--brand-slate))]">
        {children}
      </div>
    </div>
  );
}
