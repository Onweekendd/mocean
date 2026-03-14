"use client";

import { useParams, useRouter } from "next/navigation";

import type { AgentGroup } from "@mocean/mastra/prismaType";

import {
  AGENT_GROUPS,
  DEFAULT_GROUP,
  getGroupColor,
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
        className={`cursor-pointer duration-100 hover:-translate-y-0.5 hover:bg-brand-slate-200/30 hover:shadow-md ${
          isSelected ? "bg-brand-slate-200/50" : ""
        } group rounded-lg p-3`}
        onClick={() => onGroupClick(group.id)}
      >
        <div className="flex items-center space-x-3">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-lg group-hover:scale-110 ${getGroupColor(
              group.name
            )}`}
          >
            <AgentGroupIcon groupKey={group.name} size={16} strokeWidth={1.5} />
          </div>
          <span
            className={`text-sm font-medium ${isSelected ? "text-brand-text" : "text-brand-text-muted group-hover:text-primary"}`}
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
      <div className="flex-1 overflow-hidden pb-4">
        <ItemList
          items={groupList}
          renderItem={renderGroupItem}
          searchFilter={searchFilter}
          searchPlaceholder="搜索Agent分组..."
          showStats={false}
          showSearch={false}
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
          <span className="text-xs text-brand-text-muted">
            当前:{" "}
            <span className="text-base font-medium text-brand-text">
              {getGroupLabel(currentGroup.name)}
            </span>
          </span>
        </div>
      )}
    </div>
  );
};
