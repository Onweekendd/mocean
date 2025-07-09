"use client";

import { useEffect } from "react";

import { AgentModel } from "@mocean/mastra/prismaType";

import { AgentList } from "@/app/assistant/components/AgentList";
import { useStore } from "@/app/store/useStore";
// 使用新的 SWR hooks 替代直接的 API 调用
import { useAgentsSWR } from "@/hooks/useAgentsSWR";

export default function Assistant() {
  // 使用 SWR hooks 获取代理数据
  const { agents, isLoading, error, refresh } = useAgentsSWR();
  const { setAgentList, activeAgentGroup } = useStore();

  useEffect(() => {
    // 当代理数据加载完成时，更新 store
    if (agents.length > 0) {
      setAgentList(agents);
    }
  }, [agents, setAgentList]);

  /**
   * 处理智能体选择事件
   * @param agent - 被选中的智能体
   */
  const onAgentSelect = (agent: AgentModel) => {
    console.log("选中智能体:", agent.name);
    // 这里可以添加选择智能体后的操作，比如跳转到聊天界面
  };

  // 错误处理
  if (error) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-center">
          <h2 className="mb-2 text-lg font-semibold text-foreground">
            加载智能体失败
          </h2>
          <p className="mb-4 text-sm text-muted-foreground">
            {error.message || "未知错误"}
          </p>
          <button
            onClick={() => refresh()}
            className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
          >
            重新加载
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full">
      <AgentList
        agents={agents}
        selectedGroup={activeAgentGroup}
        isLoading={isLoading}
        onAgentSelect={onAgentSelect}
        className="h-full"
      />
    </div>
  );
}
