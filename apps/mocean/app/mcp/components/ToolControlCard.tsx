"use client";

import { useState } from "react";

import { Cpu, Download, Plug, Terminal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

interface Tool {
  id: string;
  icon: "terminal" | "chip" | "plug";
  name: string;
  description: string;
  enabled: boolean;
}

const iconMap = {
  terminal: Terminal,
  chip: Cpu,
  plug: Plug
};

export function ToolControlCard() {
  const [tools, setTools] = useState<Tool[]>([
    {
      id: "1",
      icon: "terminal",
      name: "simulate-researcher",
      description: "Simulate research cognitive researcher",
      enabled: true
    },
    {
      id: "2",
      icon: "chip",
      name: "analyze-data",
      description: "Analyze process analytical data streams for deep insights",
      enabled: true
    },
    {
      id: "3",
      icon: "plug",
      name: "get-concept",
      description: "Retrieve conceptual definitions and relationships",
      enabled: false
    }
  ]);

  const toggleTool = (id: string) => {
    setTools(
      tools.map((tool) =>
        tool.id === id ? { ...tool, enabled: !tool.enabled } : tool
      )
    );
  };

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>Tool Fine-grained Control</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        {tools.map((tool) => {
          const Icon = iconMap[tool.icon];
          return (
            <div
              key={tool.id}
              className={cn(
                "flex items-start justify-between gap-4 rounded-lg border p-4 transition-colors",
                !tool.enabled && "bg-muted/50 opacity-50"
              )}
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold">{tool.name}</span>
                  <p className="line-clamp-2 text-xs text-muted-foreground">
                    {tool.description}
                  </p>
                </div>
              </div>
              <Switch
                checked={tool.enabled}
                onCheckedChange={() => toggleTool(tool.id)}
                className="shrink-0 data-[state=checked]:bg-blue-500"
              />
            </div>
          );
        })}
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          <Download className="mr-2 h-4 w-4" />
          Export Config
        </Button>
      </CardFooter>
    </Card>
  );
}
