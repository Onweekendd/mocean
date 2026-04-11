"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { Bot, Plus, Sparkles } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import CreateAssistantDialog from "./CreateAssistantDialog";

const CreateAssistantCard: React.FC = () => {
  const router = useRouter();
  const [createDialogOpen, setCreateDialogOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Card className="group cursor-pointer border border-dashed border-foreground/10 bg-transparent transition-all duration-200 hover:border-foreground/20 hover:bg-foreground/[0.02]">
            <CardContent className="flex items-center p-4">
              <div className="flex w-full items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
                  <Plus className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-brand-text transition-colors group-hover:text-brand-text">
                    创建新助手
                  </h3>
                  <p className="text-xs text-brand-text-muted">
                    自定义专属AI助手
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start" className="w-52 p-1.5">
          <DropdownMenuItem
            onClick={() => setCreateDialogOpen(true)}
            className="mb-1 gap-3 rounded-md px-3 py-2.5"
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-muted">
              <Sparkles className="h-3.5 w-3.5 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium">自定义创建</p>
              <p className="text-xs text-muted-foreground">从头开始配置</p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => router.push("/agent")}
            className="gap-3 rounded-md px-3 py-2.5"
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand-primary/10">
              <Bot className="h-3.5 w-3.5 text-brand-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-brand-primary">
                从 Agent 创建
              </p>
              <p className="text-xs text-muted-foreground">基于现有 Agent</p>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <CreateAssistantDialog
        open={createDialogOpen}
        onOpenChange={setCreateDialogOpen}
      />
    </>
  );
};

export default CreateAssistantCard;
