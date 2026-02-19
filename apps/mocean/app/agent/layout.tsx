"use client";

import { LoadingPlaceholder } from "@/components/custom/loading-placeholder";
import { useAgentGroupsSWR } from "@/hooks/useAgentsSWR";

import { AgentGroupSelect } from "./components/AgentGroupSelect";

export default function AgentLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const { groups, isLoading } = useAgentGroupsSWR();

  if (isLoading) {
    return <LoadingPlaceholder text="加载分组中..." />;
  }

  return (
    <div className="flex h-screen gap-2 overflow-hidden bg-background">
      <div className="h-full w-80 flex-shrink-0">
        <AgentGroupSelect groups={groups} />
      </div>
      <div className="h-full min-w-0 flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
