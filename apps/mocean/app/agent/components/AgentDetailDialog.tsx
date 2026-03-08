"use client";

import { Suspense, lazy, useCallback } from "react";

import { Bot, Eye, Loader2, Tag, X, Zap } from "lucide-react";

import { getGroupColor, getGroupLabel } from "@/app/agent/lib/agent-groups";
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
      <DialogContent className="flex h-[80vh] max-w-4xl flex-col overflow-hidden bg-brand-main p-0 text-brand-text focus:outline-none sm:max-w-lg md:max-w-2xl lg:max-w-4xl">
        <DialogHeader className="shrink-0 px-6 pb-4 pt-6">
          <DialogTitle className="flex items-center space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand text-white">
              <Bot className="h-4 w-4" />
            </div>
            <span className="text-lg">{agent?.name}</span>
          </DialogTitle>
        </DialogHeader>

        {agent && (
          <>
            <div className="scrollbar-hide flex-1 space-y-4 overflow-y-auto px-6 pb-4">
              <Card className="rounded-xl border-none bg-primary-100 shadow-[6px_6px_8px_0px_var(--dt-primary)]">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="h-4 w-4 text-brand-primary" />
                    <span>基本信息</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="mb-2 flex items-center space-x-2">
                      <Tag className="text-brand-text-muted h-4 w-4" />
                      <p className="text-brand-text-muted text-sm">分组标签</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {agentGroups.length > 0 ? (
                        agentGroups.map((groupKey, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className={`border-0 ${getGroupColor(groupKey)}`}
                          >
                            {getGroupLabel(groupKey)}
                          </Badge>
                        ))
                      ) : (
                        <Badge
                          variant="secondary"
                          className="text-muted-foreground"
                        >
                          未分组
                        </Badge>
                      )}
                    </div>
                  </div>

                  {agent.description && (
                    <div className="pt-2">
                      <p className="text-brand-text-muted mb-2 text-sm">描述</p>
                      <p
                        className="text-brand-text-body text-sm leading-relaxed"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {agent.description.replace(/\\n/g, "\n")}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {agent.prompt && (
                <Card className="rounded-xl border-none bg-primary-100 shadow-[6px_6px_8px_0px_var(--dt-primary)]">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center space-x-2 text-base">
                      <Eye className="h-4 w-4 text-brand-primary" />
                      <span>系统提示词</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="scrollbar-hide max-h-[40vh] overflow-y-auto rounded-lg p-3 [&_h1]:text-base [&_h1]:font-semibold [&_h2]:text-sm [&_h2]:font-semibold [&_h3]:text-sm [&_h3]:font-medium">
                      <Suspense fallback={<div>加载中...</div>}>
                        <MarkdownRenderer
                          content={agent.prompt}
                          className="text-brand-text-body text-sm leading-relaxed"
                        />
                      </Suspense>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="flex shrink-0 justify-end space-x-3 px-6 py-4">
              <Button
                variant="secondary"
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
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
