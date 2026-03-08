"use client";

import { useState } from "react";

import { useParams, useRouter } from "next/navigation";

import { toast } from "sonner";

import { AgentList } from "@/app/agent/components/AgentList";
import type { AgentWithGroups } from "@/app/agent/lib/parse-group-json";
import { useStore } from "@/app/store/useStore";
import { useAgentGroupsSWR, useAgentsByGroupSWR } from "@/hooks/useAgentsSWR";
import { useAssistantActions } from "@/hooks/useAssistantsSWR";

export default function AgentTypePage() {
  const router = useRouter();
  const params = useParams<{ type: string }>();
  const currentGroupId = params.type ?? "";

  const { groups } = useAgentGroupsSWR();
  const currentGroup = groups.find((g) => g.id === currentGroupId);

  const { agents, isLoading, error, refresh } = useAgentsByGroupSWR(
    currentGroupId || null
  );
  const { create: createAssistant } = useAssistantActions();
  const setActiveAssistantId = useStore((s) => s.setActiveAssistantId);

  const [isCreatingAssistant, setIsCreatingAssistant] = useState(false);

  const onCreateAssistant = async (
    agent: AgentWithGroups
  ): Promise<boolean> => {
    if (!agent || isCreatingAssistant) return false;

    setIsCreatingAssistant(true);
    try {
      const result = await createAssistant({
        name: agent.name,
        prompt: agent.prompt || "",
        type: agent.type || "default",
        emoji: agent.emoji || "🤖",
        description: agent.description || `基于智能体 ${agent.name} 创建的助手`,
        enableWebSearch: agent.enableWebSearch ?? false,
        webSearchProviderId: agent.webSearchProviderId ?? null,
        enableGenerateImage: agent.enableGenerateImage ?? false,
        knowledgeRecognition: agent.knowledgeRecognition ?? "off"
      });

      if (result?.data) {
        toast.success("创建成功", {
          description: `助手 "${agent.name}" 已成功创建`
        });
        const assistantId = (result.data as { id: string }).id;
        setActiveAssistantId(assistantId);
        router.push(`/${assistantId}`);
        return true;
      }

      return false;
    } catch (err) {
      console.error("创建助手失败:", err);
      toast.error("创建失败", {
        description:
          err instanceof Error ? err.message : "创建助手时发生未知错误"
      });
      return false;
    } finally {
      setIsCreatingAssistant(false);
    }
  };

  if (error) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-center">
          <h2 className="mb-2 text-lg font-semibold text-foreground">
            加载智能体失败
          </h2>
          <p className="mb-4 text-sm text-muted-foreground">
            {error instanceof Error ? error.message : "未知错误"}
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
    <AgentList
      agents={agents as AgentWithGroups[]}
      selectedGroup={currentGroup?.name ?? null}
      isLoading={isLoading}
      onCreateAssistant={onCreateAssistant}
      isCreatingAssistant={isCreatingAssistant}
      className="h-full"
    />
  );
}
