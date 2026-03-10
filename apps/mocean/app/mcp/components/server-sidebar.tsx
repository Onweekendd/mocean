"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface Server {
  id: string;
  name: string;
  type: "stdio" | "sse";
  active: boolean;
}

interface ServerSidebarProps {
  servers: Server[];
  selectedId: string;
  onSelectServer: (id: string) => void;
  onNewServer: () => void;
}

export function ServerSidebar({
  servers,
  selectedId,
  onSelectServer,
  onNewServer
}: ServerSidebarProps) {
  return (
    <aside className="flex w-[260px] shrink-0 flex-col rounded-lg bg-muted/50 p-4">
      <Button
        variant="outline"
        className="mb-4 w-full justify-center"
        onClick={onNewServer}
      >
        <Plus className="mr-2 h-4 w-4" />
        New Server
      </Button>

      <div className="flex flex-1 flex-col gap-2 overflow-y-auto">
        {servers.map((server) => (
          <button
            key={server.id}
            onClick={() => onSelectServer(server.id)}
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
    </aside>
  );
}
