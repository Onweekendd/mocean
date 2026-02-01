import { useCallback, useMemo } from "react";

import type { ModelsByProviderResult } from "@mocean/mastra/apiClient";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

import { useGroupsByProviderSWR } from "@/hooks/useGroupsSWR";
import { useModelsWithActions } from "@/hooks/useModelsSWR";

type FullModel = ModelsByProviderResult[0];

/**
 * 编辑模型对话框属性
 */
export interface EditModelProps {
  /** 要编辑的模型 */
  model: FullModel | null;
  /** 供应商ID */
  providerId: string | null;
  /** 对话框打开状态 */
  open: boolean;
  /** 状态变更回调 */
  onOpenChange: (open: boolean) => void;
  /** 成功回调 */
  onSuccess?: () => void;
}

const abilityMap = {
  supportsTools: "supportsTools",
  supportsReasoning: "supportsReasoning",
  supportsImage: "supportsImage",
  supportsVideo: "supportsVideo",
  supportsAudio: "supportsAudio",
  supportsEmbedding: "supportsEmbedding"
} as const;

export type ModelEditForm = Record<keyof typeof abilityMap, boolean> & {
  name: string;
  groupId: string;
  description: string;
};

export const useModelEdit = ({
  model,
  providerId,
  open,
  onOpenChange,
  onSuccess
}: EditModelProps) => {
  const { update } = useModelsWithActions();
  const { groups, isLoading: groupsLoading } =
    useGroupsByProviderSWR(providerId);

  /**
   * 模型能力
   */
  const modelAbility = useMemo(() => {
    return Object.entries(abilityMap)
      .filter(([key]) => model?.[key as keyof FullModel])
      .map(([, value]) => value);
  }, [model]);

  /**
   * 模型在当前供应商的分组ID
   */
  const groupId = useMemo(() => {
    if (!providerId || !model) {
      return null;
    }

    const groupForCurrentProvider = model.modelGroups.find(
      (group) => group.providerId === providerId
    );
    if (!groupForCurrentProvider) {
      return null;
    }

    return groupForCurrentProvider.groupId;
  }, [providerId, model]);

  /**
   * 表单提交
   */
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<ModelEditForm>({
    defaultValues: {
      name: model?.name || "",
      groupId: groupId || "",
      description: model?.description || "",
      supportsTools: model?.supportsTools || false,
      supportsReasoning: model?.supportsReasoning || false,
      supportsImage: model?.supportsImage || false,
      supportsVideo: model?.supportsVideo || false,
      supportsAudio: model?.supportsAudio || false,
      supportsEmbedding: model?.supportsEmbedding || false
    }
  });

  /**
   * 处理表单提交
   */
  const onSubmit: SubmitHandler<ModelEditForm> = useCallback(
    async (data: ModelEditForm) => {
      try {
        if (!model) {
          return;
        }

        const updateData = {
          name: data.name.trim(),
          groupId: data.groupId,
          description: data.description.trim()
        };

        await update(model?.id, updateData);
        onOpenChange(false);
        if (onSuccess) {
          onSuccess();
        }
      } catch (error: unknown) {
        console.error("更新供应商配置失败:", error);
        throw error;
      }
    },
    [model, update, onOpenChange, onSuccess]
  );

  return {
    model,
    open,
    groups,
    modelAbility,
    groupsLoading,
    isSubmitting,
    onOpenChange,
    register,
    onSubmit,
    handleSubmit
  };
};
