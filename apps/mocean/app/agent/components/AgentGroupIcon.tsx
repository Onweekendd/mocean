import type { FC } from "react";

import { DynamicIcon } from "lucide-react/dynamic";

import { getGroupIcon } from "@/app/agent/lib/agent-groups";

export interface AgentGroupIconProps {
  groupKey: string;
  size?: number;
  strokeWidth?: number;
}

export const AgentGroupIcon: FC<AgentGroupIconProps> = ({
  groupKey,
  size = 20,
  strokeWidth = 1.2
}) => {
  return (
    <DynamicIcon
      name={getGroupIcon(groupKey)}
      size={size}
      strokeWidth={strokeWidth}
    />
  );
};
