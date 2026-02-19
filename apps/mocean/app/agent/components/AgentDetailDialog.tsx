"use client";

import { Suspense, lazy, useCallback } from "react";

import { Bot, Eye, Loader2, Tag, X, Zap } from "lucide-react";

import { getGroupLabel } from "@/app/agent/lib/agent-groups";
import {
  type AgentWithGroups,
  getAgentGroupNames
} from "@/app/agent/lib/parse-group-json";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";

const MarkdownRenderer = lazy(() =>
  import("@/components/markdown-renderer").then((module) => ({
    default: module.MarkdownRenderer
  }))
);

export interface AgentDetailDialogProps {
  agent: AgentWithGroups | null;
  isOpen: boolean;
  onClose: () => void;
  onCreateAssistant?: (agent: AgentWithGroups) => Promise<boolean>;
  isCreatingAssistant?: boolean;
}

export const AgentDetailDialog: React.FC<AgentDetailDialogProps> = ({
  agent,
  isOpen,
  onClose,
  onCreateAssistant,
  isCreatingAssistant = false
}) => {
  const onSelectAgent = useCallback(async () => {
    if (!agent || !onCreateAssistant) return;
    try {
      await onCreateAssistant(agent);
    } catch (error) {
      console.error(error);
    }
  }, [agent, onCreateAssistant]);

  const agentGroups = agent ? getAgentGroupNames(agent.groups) : [];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl overflow-hidden sm:max-w-lg md:max-w-2xl lg:max-w-4xl">
        <DialogHeader className="pb-4">
          <DialogTitle className="flex items-center space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand text-white">
              <Bot className="h-4 w-4" />
            </div>
            <span className="text-lg">{agent?.name}</span>
          </DialogTitle>
        </DialogHeader>

        {agent && (
          <div className="space-y-4 overflow-y-auto pr-2">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center space-x-2 text-base">
                  <Zap className="h-4 w-4 text-brand-primary" />
                  <span>基本信息</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="mb-2 flex items-center space-x-2">
                    <Tag className="h-4 w-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">分组标签</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {agentGroups.length > 0 ? (
                      agentGroups.map((groupKey, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="border-info/20 bg-info/10 text-info dark:border-info/30 dark:bg-info/20 dark:text-info-foreground"
                        >
                          {getGroupLabel(groupKey)}
                        </Badge>
                      ))
                    ) : (
                      <Badge
                        variant="outline"
                        className="text-muted-foreground"
                      >
                        未分组
                      </Badge>
                    )}
                  </div>
                </div>

                {agent.description && (
                  <div className="pt-2">
                    <p className="mb-2 text-sm text-muted-foreground">描述</p>
                    <div className="rounded-lg border border-border/50 bg-muted/30 p-3">
                      <p className="text-sm leading-relaxed text-foreground">
                        {agent.description}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {agent.prompt && (
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center space-x-2 text-base">
                    <Eye className="h-4 w-4 text-info" />
                    <span>系统提示词</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="max-h-[40vh] overflow-y-auto rounded-lg bg-muted/50 p-3">
                    <Suspense fallback={<div>加载中...</div>}>
                      <MarkdownRenderer
                        content={agent.prompt}
                        className="text-sm leading-relaxed text-foreground"
                      />
                    </Suspense>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="flex justify-end space-x-3 border-t border-border pt-4">
              <Button
                variant="outline"
                onClick={onClose}
                className="flex items-center space-x-2"
                disabled={isCreatingAssistant}
              >
                <X className="h-4 w-4" />
                <span>关闭</span>
              </Button>
              {onCreateAssistant && (
                <Button
                  onClick={onSelectAgent}
                  disabled={isCreatingAssistant}
                  className="flex items-center space-x-2 bg-gradient-brand hover:bg-gradient-brand-active disabled:opacity-50"
                >
                  {isCreatingAssistant ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Zap className="h-4 w-4" />
                  )}
                  <span>{isCreatingAssistant ? "创建中..." : "创建助手"}</span>
                </Button>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
