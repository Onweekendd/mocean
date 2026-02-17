"use client";

import { AgentGroupSelect } from "./components/AgentGroupSelect";

const AssistantLayout = ({ children }: { children: React.ReactNode }) => {
  const handleGroupSelect = (group: string) => {
    console.log("选择的分组:", group);
  };

  return (
    <div className="flex h-screen gap-2 overflow-hidden bg-background">
      <div className="h-full w-80 flex-shrink-0">
        <AgentGroupSelect onGroupSelect={handleGroupSelect} />
      </div>

      {/* 右侧 - 主要内容区域 */}
      <div className="h-full min-w-0 flex-1 overflow-y-auto">{children}</div>
    </div>
  );
};

export default AssistantLayout;
