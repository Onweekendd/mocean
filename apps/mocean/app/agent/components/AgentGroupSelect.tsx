"use client";

import { useRouter } from "next/navigation";

import { useStore } from "@/app/store/useStore";
import { ItemList } from "@/components/custom/item-list";
import { useAgentGroupsSWR } from "@/hooks/useAgentsSWR";

import { AgentGroupIcon, iconMap } from "./AgentGroupIcon";

export interface AgentGroupSelectProps {
  onGroupSelect?: (group: string) => void;
  className?: string;
}

/**
 * Agent分组选择组件
 * @description 展示可选的 Agent 分组列表，支持选择和切换
 */
export const AgentGroupSelect: React.FC<AgentGroupSelectProps> = ({
  onGroupSelect
}) => {
  const router = useRouter();
  const { activeAgentGroup, setActiveAgentGroup } = useStore();
  const { groups: groupListFromBackend, isLoading } = useAgentGroupsSWR();

  const currentGroup = activeAgentGroup || "精选";

  // 合并后端分组数据与前端 iconMap，确保只显示后端存在的分组
  const groupList =
    groupListFromBackend.length > 0
      ? groupListFromBackend.filter(
          (group: string) => iconMap[group as keyof typeof iconMap]
        )
      : Object.keys(iconMap);

  /**
   * 处理分组选择事件
   * @param group - 选中的分组名称
   */
  const onGroupClick = (group: string) => {
    setActiveAgentGroup(group);
    onGroupSelect?.(group);

    // URL 导航到对应分组
    const encodedGroup = encodeURIComponent(group);
    router.push(`/agent/${encodedGroup}`);
  };

  /**
   * 渲染单个分组项
   * @param group - 分组名称
   */
  const renderGroupItem = (group: string) => {
    const isSelected = currentGroup === group;

    return (
      <div
        key={group}
        className={`cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
          isSelected
            ? "border border-transparent bg-gradient-brand text-white shadow-lg"
            : "border border-border bg-card hover:border-primary/50 hover:bg-muted/80"
        } group rounded-lg p-3`}
        onClick={() => onGroupClick(group)}
      >
        <div className="flex items-center space-x-3">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-lg transition-transform duration-200 group-hover:scale-110 ${
              isSelected
                ? "bg-white/20 text-white"
                : "to-brand-secondary/10 bg-gradient-to-br from-brand-primary/10 text-info"
            } `}
          >
            <AgentGroupIcon
              groupName={group as keyof typeof iconMap}
              size={16}
              strokeWidth={1.5}
            />
          </div>
          <span
            className={`text-sm font-medium transition-colors ${isSelected ? "text-white" : "text-foreground group-hover:text-primary"} `}
          >
            {group}
          </span>
        </div>
        <div className="flex items-center space-x-2" />
      </div>
    );
  };

  /**
   * 分组搜索过滤函数
   * @param group - 分组名称
   * @param searchTerm - 搜索词
   */
  const searchFilter = (group: string, searchTerm: string): boolean => {
    return group.toLowerCase().includes(searchTerm.toLowerCase());
  };

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-hidden">
        <ItemList
          items={groupList}
          renderItem={renderGroupItem}
          searchFilter={searchFilter}
          searchPlaceholder="搜索Agent分组..."
          showStats={false}
          showSearch={true}
          groupName="分组"
          gridCols={{
            default: 1
          }}
          emptyState={{
            title: "未找到分组",
            description: "没有找到匹配的Agent分组"
          }}
          className="h-full"
          height="h-full"
        />
      </div>

      {currentGroup && (
        <div className="mt-4 flex flex-shrink-0 items-center space-x-2 pl-2">
          <div className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-brand text-white">
            <AgentGroupIcon
              groupName={currentGroup as keyof typeof iconMap}
              size={12}
            />
          </div>
          <span className="text-xs text-muted-foreground">
            当前:{" "}
            <span className="text-base font-medium text-foreground">
              {currentGroup}
            </span>
          </span>
        </div>
      )}
    </div>
  );
};
