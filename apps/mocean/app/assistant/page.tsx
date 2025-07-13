"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { AgentModel, AssistantModel } from "@mocean/mastra/prismaType";
import { toast } from "sonner";

import { AgentList } from "@/app/assistant/components/AgentList";
import { useStore } from "@/app/store/useStore";
// 使用新的 SWR hooks 替代直接的 API 调用
import { useAgentsSWR } from "@/hooks/useAgentsSWR";
import { useAssistantsWithActions } from "@/hooks/useAssistantsSWR";

export default function Assistant() {
  // 使用 SWR hooks 获取代理数据
  const { agents, isLoading, error, refresh } = useAgentsSWR();
  const { setAgentList, activeAgentGroup } = useStore();
  const router = useRouter();

  // 创建助手相关状态
  const [isCreatingAssistant, setIsCreatingAssistant] = useState(false);
  const { create: createAssistant } = useAssistantsWithActions();

  useEffect(() => {
    // 当代理数据加载完成时，更新 store
    if (agents.length > 0) {
      setAgentList(agents);
    }
  }, [agents, setAgentList]);

  /**
   * 处理创建助手操作
   * @param agent - 要创建助手的智能体
   * @returns Promise<boolean> - 创建是否成功
   */
  const onCreateAssistant = async (agent: AgentModel): Promise<boolean> => {
    if (!agent || isCreatingAssistant) return false;

    setIsCreatingAssistant(true);
    try {
      // 构建创建助手的参数，符合 AssistantInput 类型
      const assistantData: Omit<
        AssistantModel,
        "id" | "createdAt" | "updatedAt"
      > = {
        name: agent.name,
        prompt: agent.prompt || "",
        type: agent.type || "default",
        emoji: "🤖",
        description: agent.description || `基于智能体 ${agent.name} 创建的助手`,
        enableWebSearch: false,
        webSearchProviderId: null,
        enableGenerateImage: false,
        knowledgeRecognition: "off",
        modelId: "gpt-4o",
        defaultModelId: "gpt-4o",
      };

      const assistant = await createAssistant(assistantData);

      if (assistant) {
        toast.success("创建成功", {
          description: `助手 "${agent.name}" 已成功创建`,
        });

        router.push(`/${assistant.data?.id}`);

        return true;
      }

      return false;
    } catch (error) {
      console.error("创建助手失败:", error);
      toast.error("创建失败", {
        description:
          error instanceof Error ? error.message : "创建助手时发生未知错误",
      });
      return false;
    } finally {
      setIsCreatingAssistant(false);
    }
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
        onCreateAssistant={onCreateAssistant}
        isCreatingAssistant={isCreatingAssistant}
        className="h-full"
      />
    </div>
  );
}
