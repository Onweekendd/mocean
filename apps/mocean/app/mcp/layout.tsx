"use client";

import { useParams } from "next/navigation";

import { ServerSidebar } from "./components/server-sidebar";

const servers = [
  { id: "1", name: "Cognitive Research", type: "stdio" as const, active: true },
  { id: "2", name: "Browser Automation", type: "sse" as const, active: true },
  { id: "3", name: "File System", type: "stdio" as const, active: false },
  { id: "4", name: "Database Query", type: "stdio" as const, active: true }
];

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

  return (
    <div className="flex h-screen gap-2 overflow-hidden bg-brand-main">
      {/* 左侧服务器列表 */}
      <div className="h-full w-[18rem] flex-shrink-0">
        <ServerSidebar servers={servers} selectedId={selectedServerId || ""} />
      </div>

      {/* 右侧内容区域 */}
      <div className="h-full min-w-0 flex-1 overflow-y-auto rounded-tl-[1rem] bg-brand-slate-100/80 shadow-[inset_12px_0_10px_-6px_hsl(var(--brand-slate))]">
        {children}
      </div>
    </div>
  );
}
