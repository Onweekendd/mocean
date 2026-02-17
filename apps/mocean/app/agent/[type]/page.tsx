"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import type { Agent, Assistant } from "@mocean/mastra/prismaType";
import { toast } from "sonner";

import { AgentList } from "@/app/agent/components/AgentList";
import { useStore } from "@/app/store/useStore";
import { useAgentsByGroupSWR } from "@/hooks/useAgentsSWR";
import { useAssistantsWithActions } from "@/hooks/useAssistantsSWR";

interface AgentTypePageProps {
  params: Promise<{ type: string }>;
}

export default function AgentTypePage({ params }: AgentTypePageProps) {
  const router = useRouter();
  const { activeAgentGroup, setActiveAgentGroup } = useStore();
  const { agents, isLoading, error, refresh } = useAgentsByGroupSWR(null);
  const { create: createAssistant } = useAssistantsWithActions();

  const [isCreatingAssistant, setIsCreatingAssistant] = useState(false);

  // 获取并解码分组名称
  const groupKey = activeAgentGroup || decodeURIComponent(typeof window !== "undefined" ? window.location.pathname.split("/").pop() || "精选" : "精选");

  // 当 URL 参数变化时，更新 store 中的 activeAgentGroup
  if (typeof window !== "undefined") {
    const pathGroup = decodeURIComponent(window.location.pathname.split("/").pop() || "");
    if (pathGroup && pathGroup !== activeAgentGroup) {
      setActiveAgentGroup(pathGroup);
    }
  }

  // 使用当前 URL 中的分组获取数据
  const currentGroup = activeAgentGroup || "精选";
  const { agents: groupAgents, isLoading: isGroupLoading, error: groupError } = useAgentsByGroupSWR(currentGroup);

  /**
   * 处理创建助手操作
   * @param agent - 要创建助手的智能体
   * @returns Promise<boolean> - 创建是否成功
   */
  const onCreateAssistant = async (agent: Agent): Promise<boolean> => {
    if (!agent || isCreatingAssistant) return false;

    setIsCreatingAssistant(true);
    try {
      // 构建创建助手的参数，符合 AssistantInput 类型
      // 注意：modelId 和 defaultModelId 已移除，由后端自动填充
      const assistantData: Omit<Assistant, "id" | "createdAt" | "updatedAt" | "modelId" | "defaultModelId"> = {
        name: agent.name,
        prompt: agent.prompt || "",
        type: agent.type || "default",
        emoji: "🤖",
        description: agent.description || `基于智能体 ${agent.name} 创建的助手`,
        enableWebSearch: false,
        webSearchProviderId: null,
        enableGenerateImage: false,
        knowledgeRecognition: "off"
      };

      const assistant = await createAssistant(assistantData);

      if (assistant) {
        toast.success("创建成功", {
          description: `助手 "${agent.name}" 已成功创建`
        });

        router.push(`/${assistant.data?.id}`);

        return true;
      }

      return false;
    } catch (error) {
      console.error("创建助手失败:", error);
      toast.error("创建失败", {
        description:
          error instanceof Error ? error.message : "创建助手时发生未知错误"
      });
      return false;
    } finally {
      setIsCreatingAssistant(false);
    }
  };

  // 错误处理
  if (groupError) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-center">
          <h2 className="mb-2 text-lg font-semibold text-foreground">
            加载智能体失败
          </h2>
          <p className="mb-4 text-sm text-muted-foreground">
            {groupError.message || "未知错误"}
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
        agents={groupAgents}
        selectedGroup={currentGroup}
        isLoading={isGroupLoading}
        onCreateAssistant={onCreateAssistant}
        isCreatingAssistant={isCreatingAssistant}
        className="h-full"
      />
    </div>
  );
}
