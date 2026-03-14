"use client";

import { useEffect, useState } from "react";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

import { AddServerDialog } from "./components/add-server-dialog";
import { ServerDetailForm } from "./components/server-detail-form";
import { ServerSidebar } from "./components/server-sidebar";

const servers = [
  { id: "1", name: "Cognitive Research", type: "stdio" as const, active: true },
  { id: "2", name: "Browser Automation", type: "sse" as const, active: true },
  { id: "3", name: "File System", type: "stdio" as const, active: false },
  { id: "4", name: "Database Query", type: "stdio" as const, active: true }
];

export default function MCPServerPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedServerId, setSelectedServerId] = useState("1");
  const [addServerOpen, setAddServerOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const selectedServer = servers.find((s) => s.id === selectedServerId);

  const handleNewServer = () => {
    setAddServerOpen(true);
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-8">
        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="搜索 MCP 服务器，工具或资源..."
            className="h-11 pl-10"
          />
        </div>

        {/* Two-column Layout */}
        <div className="flex gap-6">
          {/* Left Sidebar */}
          <ServerSidebar
            servers={servers}
            selectedId={selectedServerId}
            onSelectServer={setSelectedServerId}
            onNewServer={handleNewServer}
          />

          {/* Right - Server Detail (full remaining width) */}
          <ServerDetailForm serverName={selectedServer?.name} />
        </div>
      </div>

      {/* Add Server Dialog */}
      <AddServerDialog open={addServerOpen} onOpenChange={setAddServerOpen} />
    </main>
  );
}
