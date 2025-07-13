"use client";

import { Suspense, lazy, useCallback } from "react";

import { AgentModel } from "@mocean/mastra/prismaType";
import { Bot, Eye, Loader2, Tag, X, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// 动态导入 MarkdownRenderer
const MarkdownRenderer = lazy(() =>
  import("@/components/markdown-renderer").then((module) => ({
    default: module.MarkdownRenderer,
  })),
);

export interface AgentDetailDialogProps {
  agent: AgentModel | null;
  isOpen: boolean;
  onClose: () => void;
  onCreateAssistant?: (agent: AgentModel) => Promise<boolean>;
  isCreatingAssistant?: boolean;
}

/**
 * 智能体详情对话框组件
 * @description 显示智能体的详细信息，包括基本信息、描述和系统提示词
 *
 * @param agent - 要显示详情的智能体对象
 * @param isOpen - 对话框是否打开
 * @param onClose - 关闭对话框的回调函数
 * @param [onSelect] - 选择智能体时的回调函数
 * @param [onCreateAssistant] - 创建助手时的回调函数
 * @param [isCreatingAssistant] - 是否正在创建助手
 *
 * @example
 * // 显示智能体详情对话框
 * <AgentDetailDialog
 *   agent={selectedAgent}
 *   isOpen={isDialogOpen}
 *   onClose={() => setIsDialogOpen(false)}
 *   onCreateAssistant={(agent) => createAssistant(agent)}
 *   isCreatingAssistant={isCreating}
 * />
 */
export const AgentDetailDialog: React.FC<AgentDetailDialogProps> = ({
  agent,
  isOpen,
  onClose,
  onCreateAssistant,
  isCreatingAssistant = false,
}) => {
  /**
   * 处理选择智能体操作 - 创建助手
   */
  const onSelectAgent = useCallback(async () => {
    if (!agent || !onCreateAssistant) return;
    try {
      await onCreateAssistant(agent);
    } catch (error) {
      console.error(error);
    }
  }, [agent, onCreateAssistant]);

  /**
   * 获取智能体分组信息
   * @param agent - 智能体对象
   * @returns 分组数组
   */
  const getAgentGroups = (agent: AgentModel): string[] => {
    if (!agent.groupJson) return [];

    try {
      let groupData;

      // 如果是字符串，先解析 JSON
      if (typeof agent.groupJson === "string") {
        groupData = JSON.parse(agent.groupJson);
      } else {
        groupData = agent.groupJson;
      }

      // 处理解析后的数据
      if (Array.isArray(groupData)) {
        return groupData.filter((item) => typeof item === "string");
      } else if (typeof groupData === "string") {
        return [groupData];
      } else if (typeof groupData === "object" && groupData !== null) {
        return [String(groupData)];
      }

      return [];
    } catch {
      return [];
    }
  };

  const agentGroups = agent ? getAgentGroups(agent) : [];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[80vh] max-w-4xl overflow-hidden sm:max-w-lg md:max-w-2xl lg:max-w-4xl">
        <DialogHeader className="pb-4">
          <DialogTitle className="flex items-center space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              <Bot className="h-4 w-4" />
            </div>
            <span className="text-lg">{agent?.name}</span>
          </DialogTitle>
        </DialogHeader>

        {agent && (
          <div className="space-y-4 overflow-y-auto pr-2">
            {/* 基本信息卡片 */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center space-x-2 text-base">
                  <Zap className="h-4 w-4 text-purple-600" />
                  <span>基本信息</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* 分组标签 */}
                <div>
                  <div className="mb-2 flex items-center space-x-2">
                    <Tag className="h-4 w-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">分组标签</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {agentGroups.length > 0 ? (
                      agentGroups.map((group, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                        >
                          {group}
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

            {/* 提示词信息 */}
            {agent.prompt && (
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center space-x-2 text-base">
                    <Eye className="h-4 w-4 text-blue-500" />
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

            {/* 操作按钮 */}
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
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50"
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
