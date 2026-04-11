"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { AddServerDialog } from "./AddServerDialog";

interface Server {
  id: string;
  name: string;
  type: string;
  active: boolean;
}

interface ServerSidebarProps {
  servers: Server[];
  selectedId: string;
  isLoading?: boolean;
}

export function ServerSidebar({
  servers,
  selectedId,
  isLoading
}: ServerSidebarProps) {
  const router = useRouter();

  const [open, setOpen] = useState<boolean>(false);

  const handleServerSelect = (serverId: string) => {
    if (selectedId === serverId) {
      router.push("/mcp");
    } else {
      router.push(`/mcp/${serverId}`);
    }
  };

  return (
    <aside className="flex h-full w-[18rem] shrink-0 flex-col bg-brand-main">
      <div className="group mt-2 flex items-center justify-between px-3 pt-4">
        <span className="font-bold text-brand-text">MCP服务</span>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 text-brand-text-muted hover:text-primary"
          onClick={() => setOpen(true)}
          title="新增服务"
        >
          <Plus className="h-3.5 w-3.5" />
        </Button>
      </div>

      <div className="flex flex-1 flex-col gap-2 overflow-y-auto pb-4">
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-md px-3 py-3"
              >
                <div className="h-2.5 w-2.5 shrink-0 animate-pulse rounded-full bg-brand-secondary-200" />
                <div className="flex flex-1 flex-col gap-1.5">
                  <div className="h-3.5 w-3/4 animate-pulse rounded bg-brand-secondary-200" />
                  <div className="h-3 w-1/3 animate-pulse rounded bg-brand-secondary-100" />
                </div>
              </div>
            ))
          : servers.map((server) => (
              <button
                key={server.id}
                onClick={() => handleServerSelect(server.id)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-md px-3 py-3 text-left transition-colors",
                  selectedId === server.id
                    ? "border-l-2 border-primary bg-primary/10"
                    : "hover:bg-brand-slate-200/40"
                )}
              >
                {/* Status dot */}
                {server.active ? (
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-500" />
                ) : (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="h-2.5 w-2.5 shrink-0 cursor-help rounded-full bg-brand-secondary-300" />
                    </TooltipTrigger>
                    <TooltipContent>Server disabled</TooltipContent>
                  </Tooltip>
                )}

                {/* Server info */}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-brand-text">
                    {server.name}
                  </p>
                  <span className="mt-1 inline-block rounded-sm bg-brand-secondary-100 px-1.5 py-0.5 font-mono text-xs text-brand-secondary-600">
                    {server.type}
                  </span>
                </div>
              </button>
            ))}
      </div>
      <AddServerDialog open={open} onOpenChange={setOpen} />
    </aside>
  );
}
