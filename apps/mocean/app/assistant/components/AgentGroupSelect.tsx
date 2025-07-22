"use client";

import { useStore } from "@/app/store/useStore";
import { ItemList } from "@/components/custom/item-list";

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
  onGroupSelect,
}) => {
  const { activeAgentGroup, setActiveAgentGroup } = useStore();
  const currentGroup = activeAgentGroup || "精选";

  /**
   * 处理分组选择事件
   * @param group - 选中的分组名称
   */
  const onGroupClick = (group: string) => {
    setActiveAgentGroup(group);
    onGroupSelect?.(group);
  };

  const groupList = Object.keys(iconMap) as Array<keyof typeof iconMap>;

  /**
   * 渲染单个分组项
   * @param group - 分组名称
   */
  const renderGroupItem = (group: keyof typeof iconMap) => {
    const isSelected = currentGroup === group;

    return (
      <div
        key={group}
        className={`cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
          isSelected
            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
            : "border border-border bg-card hover:border-primary/50 hover:bg-muted/80"
        } group rounded-lg p-3`}
        onClick={() => onGroupClick(group)}
      >
        <div className="flex items-center space-x-3">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-lg transition-transform duration-200 group-hover:scale-110 ${
              isSelected
                ? "bg-white/20 text-white"
                : "bg-gradient-to-br from-blue-500/10 to-purple-600/10 text-blue-600"
            } `}
          >
            <AgentGroupIcon groupName={group} size={16} strokeWidth={1.5} />
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
  const searchFilter = (
    group: keyof typeof iconMap,
    searchTerm: string,
  ): boolean => {
    return group.toLowerCase().includes(searchTerm.toLowerCase());
  };

  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex flex-shrink-0 items-center space-x-3">
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-purple-600 text-white">
          <AgentGroupIcon groupName="我的" size={16} />
        </div>
        <h3 className="text-lg font-semibold text-foreground">Agent分组</h3>
      </div>

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
            default: 1,
          }}
          emptyState={{
            title: "未找到分组",
            description: "没有找到匹配的Agent分组",
          }}
          className="h-full"
          height="h-full"
        />
      </div>

      {currentGroup && (
        <div className="mt-4 flex flex-shrink-0 items-center space-x-2 pt-4">
          <div className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white">
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
