"use client";

import { Image, MessageSquare, Search, Settings } from "lucide-react";

import { getGroupLabel } from "@/app/agent/lib/agent-groups";
import {
  type AgentWithGroups,
  getAgentGroupNames
} from "@/app/agent/lib/parse-group-json";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface AgentCardProps {
  agent: AgentWithGroups;
  onSelect?: (agent: AgentWithGroups) => void;
  className?: string;
}

export const AgentCard: React.FC<AgentCardProps> = ({
  agent,
  onSelect,
  className = ""
}) => {
  const groups = getAgentGroupNames(agent.groups);

  const onCardClick = () => {
    onSelect?.(agent);
  };

  const formatDate = (date: Date): string => {
    return new Date(date).toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };

  return (
    <Card
      className={`group flex cursor-pointer flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${className}`}
      onClick={onCardClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-brand text-white">
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
            </div>
          </div>

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
        {agent.description && (
          <p
            className="mb-3 text-sm leading-relaxed text-muted-foreground"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              overflow: "hidden"
            }}
          >
            {agent.description}
          </p>
        )}

        {groups.length > 0 && (
          <div className="mb-3">
            <div className="flex flex-wrap gap-1">
              {groups.slice(0, 3).map((groupKey, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-2 py-1 text-xs"
                >
                  {getGroupLabel(groupKey)}
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
                  overflow: "hidden"
                }}
              >
                {agent.prompt}
              </div>
            </div>
          </div>
        )}

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
              }}
            >
              <Settings size={14} className="text-brand-primary-500" />
            </Button>

            <Button
              size="sm"
              className="h-8 bg-brand-primary-500 px-3 opacity-0 transition-opacity hover:bg-brand-primary-300 group-hover:opacity-100"
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
