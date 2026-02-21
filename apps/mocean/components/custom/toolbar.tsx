"use client";

import type { Model, Provider } from "@mocean/mastra/prismaType";
import { Info } from "lucide-react";
import toast from "react-hot-toast";

import { useStore } from "@/app/store/useStore";
import { useAssistantActions, useAssistantSWR } from "@/hooks/useAssistantsSWR";

import { ModelSelector } from "./model-selector";
import type { ModelSelection } from "./useModelSelector";

/**
 * 工具栏组件
 *
 * @description 提供模型选择等工具栏功能
 * @returns 工具栏组件
 */
export function Toolbar() {
  const { update: updateAssistant } = useAssistantActions();
  const { activeAssistantId } = useStore();
  const { assistant, refresh } = useAssistantSWR(activeAssistantId ?? "");

  /**
   * 处理模型选择变更
   *
   * @param selection - 选择的模型信息
   */
  const onModelChange = async (selection: ModelSelection) => {
    if (!activeAssistantId) {
      toast.error("请选择一个助手");
      return;
    }

    try {
      await updateAssistant(activeAssistantId, {
        modelId: selection.model.id,
        providerId: selection.provider.id
      });

      await refresh();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "更新助手失败");
      console.error("更新助手失败:", error);
    }
  };

  if (!activeAssistantId || !assistant) {
    return (
      <div className="flex items-center justify-center gap-2 rounded-md border border-dashed border-muted-foreground/25 bg-muted/20 px-4 py-2 text-sm text-muted-foreground">
        <Info className="h-4 w-4 opacity-60" />
        <span>请先选择一个助手</span>
      </div>
    );
  }

  return (
    <ModelSelector
      value={
        assistant?.provider && assistant?.model
          ? {
              provider: assistant.provider as Provider,
              model: assistant.model as Model
            }
          : undefined
      }
      onChange={onModelChange}
    />
  );
}
