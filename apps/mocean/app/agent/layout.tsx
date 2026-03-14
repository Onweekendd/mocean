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
      <div className="h-full w-[18rem] flex-shrink-0 bg-brand-main">
        <AgentGroupSelect groups={groups} />
      </div>
      <div className="scrollbar-hide h-full min-w-0 flex-1 overflow-y-auto rounded-tl-lg bg-brand-slate-100/80 pl-4 shadow-[inset_12px_0_10px_-6px_hsl(var(--brand-slate))]">
        {children}
      </div>
    </div>
  );
}
