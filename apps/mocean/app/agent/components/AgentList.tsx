"use client";

import { useMemo, useState } from "react";

import { Filter, Search } from "lucide-react";

import { AgentDetailDialog } from "@/app/agent/components/AgentDetailDialog";
import type { AgentWithGroups } from "@/app/agent/lib/parse-group-json";
import { LoadingPlaceholder } from "@/components/custom/loading-placeholder";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { AgentCard } from "./AgentCard";

export interface AgentListProps {
  agents: AgentWithGroups[];
  selectedGroup?: string | null;
  isLoading?: boolean;
  onCreateAssistant?: (agent: AgentWithGroups) => Promise<boolean>;
  isCreatingAssistant?: boolean;
  className?: string;
}

export const AgentList: React.FC<AgentListProps> = ({
  agents,
  selectedGroup = null,
  isLoading = false,
  onCreateAssistant,
  isCreatingAssistant = false,
  className = ""
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAgent, setSelectedAgent] = useState<AgentWithGroups | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onAgentCardSelect = (agent: AgentWithGroups) => {
    setSelectedAgent(agent);
    setIsDialogOpen(true);
  };

  const onCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedAgent(null);
  };

  // 仅搜索过滤，分组过滤已由后端完成
  const filteredAgents = useMemo(() => {
    if (!searchTerm.trim()) return agents;

    const term = searchTerm.toLowerCase().trim();
    return agents.filter(
      (agent) =>
        agent.name.toLowerCase().includes(term) ||
        agent.description?.toLowerCase().includes(term) ||
        agent.type?.toLowerCase().includes(term) ||
        agent.prompt?.toLowerCase().includes(term)
    );
  }, [agents, searchTerm]);

  const stats = {
    total: agents.length,
    filtered: filteredAgents.length,
    group: selectedGroup || "全部"
  };

  if (isLoading) {
    return <LoadingPlaceholder text="加载智能体中..." />;
  }

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="m-1 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="搜索智能体名称、描述或提示词..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="font-normal">
              {stats.group}
            </Badge>
            <span className="text-sm text-muted-foreground">
              显示 {stats.filtered} 个，共 {stats.total} 个智能体
            </span>
          </div>

          {searchTerm && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSearchTerm("")}
              className="h-8 px-2"
            >
              清除搜索
            </Button>
          )}
        </div>
      </div>

      {filteredAgents.length === 0 ? (
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
              <Filter className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="mb-2 text-lg font-medium text-foreground">
              {searchTerm ? "未找到匹配的智能体" : "暂无智能体"}
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              {searchTerm
                ? `没有找到包含 "${searchTerm}" 的智能体`
                : selectedGroup
                  ? `"${selectedGroup}" 分组下暂无智能体`
                  : "暂时没有任何智能体"}
            </p>
            {searchTerm && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSearchTerm("")}
              >
                清除搜索条件
              </Button>
            )}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {filteredAgents.map((agent) => (
            <AgentCard
              key={agent.id}
              agent={agent}
              onSelect={onAgentCardSelect}
              className="h-full"
            />
          ))}
        </div>
      )}

      <AgentDetailDialog
        agent={selectedAgent}
        isOpen={isDialogOpen}
        onClose={onCloseDialog}
        onCreateAssistant={onCreateAssistant}
        isCreatingAssistant={isCreatingAssistant}
      />
    </div>
  );
};
