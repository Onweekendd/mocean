"use client";

import { useParams, useRouter } from "next/navigation";

import type { AgentGroup } from "@mocean/mastra/prismaType";

import {
  AGENT_GROUPS,
  DEFAULT_GROUP,
  getGroupLabel
} from "@/app/agent/lib/agent-groups";
import { ItemList } from "@/components/custom/item-list";

import { AgentGroupIcon } from "./AgentGroupIcon";

export interface AgentGroupSelectProps {
  groups: AgentGroup[];
  className?: string;
}

export const AgentGroupSelect: React.FC<AgentGroupSelectProps> = ({
  groups
}) => {
  const router = useRouter();
  const params = useParams<{ type: string }>();
  const currentGroupId = params.type ?? DEFAULT_GROUP;

  // 只显示后端存在且在 AGENT_GROUPS 中已定义的分组
  const groupList = groups.filter((g) => AGENT_GROUPS[g.name]);

  const onGroupClick = (groupId: string) => {
    router.push(`/agent/${groupId}`);
  };

  const renderGroupItem = (group: AgentGroup) => {
    const isSelected = currentGroupId === group.id;
    const label = getGroupLabel(group.name);

    return (
      <div
        key={group.id}
        className={`cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
          isSelected
            ? "border border-transparent bg-gradient-brand text-white shadow-lg"
            : "border border-border bg-card hover:border-primary/50 hover:bg-muted/80"
        } group rounded-lg p-3`}
        onClick={() => onGroupClick(group.id)}
      >
        <div className="flex items-center space-x-3">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-lg transition-transform duration-200 group-hover:scale-110 ${
              isSelected
                ? "bg-white/20 text-white"
                : "to-brand-secondary/10 bg-gradient-to-br from-brand-primary/10 text-info"
            } `}
          >
            <AgentGroupIcon groupKey={group.name} size={16} strokeWidth={1.5} />
          </div>
          <span
            className={`text-sm font-medium transition-colors ${isSelected ? "text-white" : "text-foreground group-hover:text-primary"} `}
          >
            {label}
          </span>
        </div>
      </div>
    );
  };

  const searchFilter = (group: AgentGroup, searchTerm: string): boolean => {
    const label = getGroupLabel(group.name);
    const term = searchTerm.toLowerCase();
    return (
      group.name.toLowerCase().includes(term) ||
      label.toLowerCase().includes(term)
    );
  };

  const currentGroup = groups.find((g) => g.id === currentGroupId);

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
            <AgentGroupIcon groupKey={currentGroup.name} size={12} />
          </div>
          <span className="text-xs text-muted-foreground">
            当前:{" "}
            <span className="text-base font-medium text-foreground">
              {getGroupLabel(currentGroup.name)}
            </span>
          </span>
        </div>
      )}
    </div>
  );
};
