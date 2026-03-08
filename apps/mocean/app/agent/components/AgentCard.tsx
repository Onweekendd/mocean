"use client";

import { Image, MessageSquare, Search, Settings } from "lucide-react";

import { getGroupColor, getGroupLabel } from "@/app/agent/lib/agent-groups";
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
      className={`bg-brand-slate-200/30 group flex cursor-pointer flex-col border-none shadow-[6px_6px_8px_0px_hsl(var(--brand-slate))] transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg ${className}`}
      onClick={onCardClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg text-white">
              {agent.emoji ? (
                <span className="text-2xl">{agent.emoji}</span>
              ) : (
                <MessageSquare size={20} />
              )}
            </div>
            <div className="flex-1">
              <CardTitle className="text-lg font-semibold text-brand-text group-hover:text-primary">
                {agent.name}
              </CardTitle>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col pt-0">
        {agent.description && (
          <p
            className="text-brand-text-body mb-3 text-sm leading-relaxed"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              whiteSpace: "pre-line"
            }}
          >
            {agent.description.replace(/\\n/g, "\n")}
          </p>
        )}

        {groups.length > 0 && (
          <div className="mb-3">
            <div className="flex flex-wrap gap-1">
              {groups.slice(0, 3).map((groupKey, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className={`border-0 px-2 py-1 text-xs ${getGroupColor(groupKey)}`}
                >
                  {getGroupLabel(groupKey)}
                </Badge>
              ))}
              {groups.length > 3 && (
                <Badge
                  variant="outline"
                  className="text-brand-text-muted px-2 py-1 text-xs"
                >
                  +{groups.length - 3}
                </Badge>
              )}
            </div>
          </div>
        )}

        <div className="mt-auto flex items-center justify-between">
          <span className="text-brand-text-muted text-xs">
            创建于 {formatDate(agent.createdAt)}
          </span>

          <div className="flex items-center space-x-2">
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
