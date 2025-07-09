"use client";

import { useMemo, useState } from "react";

import { AgentModel } from "@mocean/mastra/prismaType";
import { Filter, Search } from "lucide-react";

import { AgentDetailDialog } from "@/app/assistant/components/AgentDetailDialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { AgentCard } from "./AgentCard";

export interface AgentListProps {
  agents: AgentModel[];
  selectedGroup?: string | null;
  isLoading?: boolean;
  onCreateAssistant?: (agent: AgentModel) => Promise<boolean>;
  isCreatingAssistant?: boolean;
  className?: string;
}

/**
 * 智能体列表组件
 * @description 根据选中的分组过滤和显示智能体列表，支持搜索和详情查看功能
 *
 * @param agents - 智能体数组
 * @param [selectedGroup] - 当前选中的分组
 * @param [isLoading] - 是否正在加载
 * @param [onAgentSelect] - 选择智能体时的回调函数
 * @param [onCreateAssistant] - 创建助手时的回调函数
 * @param [isCreatingAssistant] - 是否正在创建助手
 * @param [className] - 自定义样式类名
 *
 * @example
 * // 显示智能体列表
 * <AgentList
 *   agents={agentList}
 *   selectedGroup="精选"
 *   onAgentSelect={(agent) => console.log("选中:", agent.name)}
 *   onCreateAssistant={(agent) => createAssistant(agent)}
 * />
 */
export const AgentList: React.FC<AgentListProps> = ({
  agents,
  selectedGroup = null,
  isLoading = false,
  onCreateAssistant,
  isCreatingAssistant = false,
  className = "",
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAgent, setSelectedAgent] = useState<AgentModel | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  /**
   * 检查智能体是否属于指定分组
   * @param agent - 智能体对象
   * @param group - 分组名称
   * @returns 是否属于该分组
   */
  const isAgentInGroup = (agent: AgentModel, group: string): boolean => {
    if (!agent.groupJson) return false;

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
        return groupData.some(
          (item) => typeof item === "string" && item === group,
        );
      } else if (typeof groupData === "string") {
        return groupData === group;
      } else if (typeof groupData === "object" && groupData !== null) {
        return String(groupData) === group;
      }

      return false;
    } catch {
      return false;
    }
  };

  /**
   * 处理智能体选择（原有逻辑保持不变）
   * @param agent - 被选中的智能体
   */
  const onAgentCardSelect = (agent: AgentModel) => {
    setSelectedAgent(agent);
    setIsDialogOpen(true);
  };

  /**
   * 关闭对话框
   */
  const onCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedAgent(null);
  };

  /**
   * 过滤后的智能体列表
   */
  const filteredAgents = useMemo(() => {
    let filtered = agents;

    // 根据分组过滤
    if (selectedGroup) {
      filtered = filtered.filter((agent) =>
        isAgentInGroup(agent, selectedGroup),
      );
    }

    // 根据搜索词过滤
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase().trim();
      filtered = filtered.filter(
        (agent) =>
          agent.name.toLowerCase().includes(term) ||
          agent.description?.toLowerCase().includes(term) ||
          agent.type?.toLowerCase().includes(term) ||
          agent.prompt?.toLowerCase().includes(term),
      );
    }

    return filtered;
  }, [agents, selectedGroup, searchTerm]);

  /**
   * 获取当前显示的统计信息
   */
  const getDisplayStats = () => {
    const total = agents.length;
    const filtered = filteredAgents.length;
    return { total, filtered, group: selectedGroup || "全部" };
  };

  const stats = getDisplayStats();

  if (isLoading) {
    return (
      <div className={`space-y-4 ${className}`}>
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-b-2 border-primary" />
            <p className="text-sm text-muted-foreground">加载智能体中...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* 头部区域 - 搜索和统计 */}
      <div className="m-1 space-y-4">
        {/* 搜索框 */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="搜索智能体名称、描述或提示词..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* 统计信息和过滤器 */}
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

      {/* 智能体网格 */}
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

      {/* 智能体详情对话框 */}
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
