"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AgentGroupIcon, iconMap } from "./AgentGroupIcon";
import { useStore } from "@/app/store/useStore";

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
        <Card className={`h-full flex flex-col ${className}`}>
            <CardContent className="p-6 flex flex-col h-full">
                <div className="flex flex-col h-full">
                    <div className="flex items-center space-x-3 mb-4 flex-shrink-0">
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md flex items-center justify-center text-white">
                            <AgentGroupIcon groupName="我的" size={16} />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">
                            Agent分组
                        </h3>
                    </div>

                    <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800">
                        <div className="flex flex-col gap-2 pr-2">
                            {groupList.map((group) => {
                                const isSelected = currentGroup === group;

                                return (
                                    <div
                                        key={group}
                                        className={`
                        cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5
                        ${isSelected
                                                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                                                : "bg-card hover:bg-muted/80 border border-border hover:border-primary/50"
                                            }
                        rounded-lg p-3 group
                      `}
                                        onClick={() => handleGroupSelect(group)}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <div className={`
                          w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-110
                          ${isSelected
                                                    ? "bg-white/20 text-white"
                                                    : "bg-gradient-to-br from-blue-500/10 to-purple-600/10 text-blue-600"
                                                }
                                        `}>
                                                <AgentGroupIcon
                                                    groupName={group}
                                                    size={16}
                                                    strokeWidth={1.5}
                                                />
                                            </div>
                                            <span className={`
                          text-sm font-medium transition-colors
                          ${isSelected ? "text-white" : "text-foreground group-hover:text-primary"}
                        `}>
                                                {group}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {currentGroup && (
                        <div className="flex items-center space-x-2 pt-4 flex-shrink-0 mt-4">
                            <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                                <AgentGroupIcon groupName={currentGroup as keyof typeof iconMap} size={12} />
                            </div>
                            <span className="text-xs text-muted-foreground">
                                当前: <span className="text-foreground font-medium text-base">{currentGroup}</span>
                            </span>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};
