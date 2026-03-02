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
    <div className="flex h-screen overflow-hidden">
      <div className="h-full w-80 flex-shrink-0 bg-primary-light-100">
        <AgentGroupSelect groups={groups} />
      </div>
      <div className="h-full min-w-0 flex-1 overflow-y-auto rounded-tl-lg bg-brand-main">
        {children}
      </div>
    </div>
  );
}
