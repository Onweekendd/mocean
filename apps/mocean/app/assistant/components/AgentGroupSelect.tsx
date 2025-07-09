"use client";

import { useStore } from "@/app/store/useStore";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import { AgentGroupIcon, iconMap } from "./AgentGroupIcon";

export interface AgentGroupSelectProps {
  onGroupSelect?: (group: string) => void;
  className?: string;
}

export const AgentGroupSelect: React.FC<AgentGroupSelectProps> = ({
  onGroupSelect,
  className = "",
}) => {
  const { activeAgentGroup, setActiveAgentGroup } = useStore();
  const currentGroup = activeAgentGroup || "精选";

  const handleGroupSelect = (group: string) => {
    setActiveAgentGroup(group);
    onGroupSelect?.(group);
  };

  const groupList = Object.keys(iconMap) as Array<keyof typeof iconMap>;

  return (
    <Card className={`flex h-full flex-col ${className}`}>
      <CardContent className="flex h-full flex-col p-6">
        <div className="flex h-full flex-col">
          <div className="mb-4 flex flex-shrink-0 items-center space-x-3">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              <AgentGroupIcon groupName="我的" size={16} />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Agent分组</h3>
          </div>

          <div className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800 flex-1 overflow-y-auto">
            <div className="flex flex-col gap-2 pr-2 pt-4">
              {groupList.map((group) => {
                const isSelected = currentGroup === group;

                return (
                  <div
                    key={group}
                    className={`cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                      isSelected
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                        : "border border-border bg-card hover:border-primary/50 hover:bg-muted/80"
                    } group rounded-lg p-3`}
                    onClick={() => handleGroupSelect(group)}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-lg transition-transform duration-200 group-hover:scale-110 ${
                          isSelected
                            ? "bg-white/20 text-white"
                            : "bg-gradient-to-br from-blue-500/10 to-purple-600/10 text-blue-600"
                        } `}
                      >
                        <AgentGroupIcon
                          groupName={group}
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
                  </div>
                );
              })}
            </div>
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
      </CardContent>
    </Card>
  );
};
