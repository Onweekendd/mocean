"use client";

import { AgentModel } from "@mocean/mastra/prismaType";
import { Image, MessageSquare, Search, Settings } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface AgentCardProps {
  agent: AgentModel;
  onSelect?: (agent: AgentModel) => void;
  className?: string;
}

/**
 * 智能体卡片组件
 * @description 显示单个智能体的详细信息和操作按钮
 *
 * @param agent - 智能体数据对象
 * @param [onSelect] - 选择智能体时的回调函数
 * @param [className] - 自定义样式类名
 *
 * @example
 * // 显示智能体卡片
 * <AgentCard
 *   agent={agentData}
 *   onSelect={(agent) => console.log("选中智能体:", agent.name)}
 * />
 */
export const AgentCard: React.FC<AgentCardProps> = ({
  agent,
  onSelect,
  className = "",
}) => {
  /**
   * 解析分组JSON数据
   * @returns 分组名称数组
   */
  const parseGroups = (): string[] => {
    try {
      if (!agent.groupJson) return [];

      let groupData;

      // 如果是字符串，先解析 JSON
      if (typeof agent.groupJson === "string") {
        groupData = JSON.parse(agent.groupJson);
      } else {
        groupData = agent.groupJson;
      }

      // 处理解析后的数据
      if (Array.isArray(groupData)) {
        return groupData.filter(
          (item): item is string => typeof item === "string",
        );
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

  const groups = parseGroups();

  /**
   * 处理卡片点击事件
   */
  const onCardClick = () => {
    onSelect?.(agent);
  };

  /**
   * 格式化创建时间
   * @param date - 日期对象
   * @returns 格式化后的日期字符串
   */
  const formatDate = (date: Date): string => {
    return new Date(date).toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Card
      className={`group flex min-h-[400px] cursor-pointer flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${className}`}
      onClick={onCardClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            {/* 智能体头像/图标 */}
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              {agent.emoji ? (
                <span className="text-lg">{agent.emoji}</span>
              ) : (
                <MessageSquare size={20} />
              )}
            </div>
            <div className="flex-1">
              <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary">
                {agent.name}
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                {agent.type || "通用"}
              </CardDescription>
            </div>
          </div>

          {/* 功能特性标识 */}
          <div className="flex items-center space-x-1">
            {agent.enableWebSearch && (
              <Badge
                variant="secondary"
                className="flex h-6 w-6 items-center justify-center p-0"
              >
                <Search size={12} />
              </Badge>
            )}
            {agent.enableGenerateImage && (
              <Badge
                variant="secondary"
                className="flex h-6 w-6 items-center justify-center p-0"
              >
                <Image size={12} />
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col pt-0">
        {/* 描述信息 */}
        {agent.description && (
          <p
            className="mb-3 text-sm leading-relaxed text-muted-foreground"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {agent.description}
          </p>
        )}

        {/* 分组标签 */}
        {groups.length > 0 && (
          <div className="mb-3">
            <div className="flex flex-wrap gap-1">
              {groups.slice(0, 3).map((group, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-2 py-1 text-xs"
                >
                  {group}
                </Badge>
              ))}
              {groups.length > 3 && (
                <Badge
                  variant="outline"
                  className="px-2 py-1 text-xs text-muted-foreground"
                >
                  +{groups.length - 3}
                </Badge>
              )}
            </div>
          </div>
        )}

        {/* 提示词预览 */}
        {agent.prompt && (
          <div className="mb-3">
            <p className="mb-1 text-xs text-muted-foreground">提示词:</p>
            <div className="rounded-md bg-muted/50 p-2">
              <div
                className="text-sm leading-[1.4]"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {agent.prompt}
              </div>
            </div>
          </div>
        )}

        {/* 底部信息和操作 */}
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            创建于 {formatDate(agent.createdAt)}
          </span>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 px-2 opacity-0 transition-opacity group-hover:opacity-100"
              onClick={(e) => {
                e.stopPropagation();
                // 这里可以添加设置功能
                console.log("配置智能体:", agent.name);
              }}
            >
              <Settings size={14} />
            </Button>

            <Button
              size="sm"
              className="h-8 px-3 opacity-0 transition-opacity group-hover:opacity-100"
              onClick={(e) => {
                e.stopPropagation();
                onSelect?.(agent);
              }}
            >
              使用
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
