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
  type: "stdio" | "sse";
  active: boolean;
}

interface ServerSidebarProps {
  servers: Server[];
  selectedId: string;
}

export function ServerSidebar({ servers, selectedId }: ServerSidebarProps) {
  const router = useRouter();

  const [open, setOpen] = useState<boolean>(false);

  const handleServerSelect = (serverId: string) => {
    // 如果点击已选中的服务器，则取消选中
    if (selectedId === serverId) {
      router.push("/mcp");
    } else {
      router.push(`/mcp/${serverId}`);
    }
  };

  return (
    <aside className="flex h-full w-[18rem] shrink-0 flex-col bg-brand-main p-4">
      <Button
        variant="ghost"
        className="mb-4 flex w-full items-center justify-start rounded-md border border-dashed text-brand-text/60"
        onClick={() => setOpen(true)}
      >
        <Plus className="mr-1 h-4 w-4" />
        新增服务
      </Button>

      <div className="flex flex-1 flex-col gap-2 overflow-y-auto">
        {servers.map((server) => (
          <button
            key={server.id}
            onClick={() => handleServerSelect(server.id)}
            className={cn(
              "flex w-full items-center gap-3 rounded-md px-3 py-3 text-left transition-colors",
              selectedId === server.id
                ? "border-l-2 border-primary bg-primary/10"
                : "hover:bg-muted"
            )}
          >
            {/* Status dot */}
            {server.active ? (
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-500" />
            ) : (
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="h-2.5 w-2.5 shrink-0 cursor-help rounded-full bg-muted-foreground/40" />
                </TooltipTrigger>
                <TooltipContent>Server disabled</TooltipContent>
              </Tooltip>
            )}

            {/* Server info */}
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{server.name}</p>
              <span className="mt-1 inline-block rounded-sm bg-gray-100 px-1.5 py-0.5 font-mono text-xs text-gray-500">
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
