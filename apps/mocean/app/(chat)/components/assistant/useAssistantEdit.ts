import { useCallback, useEffect, useMemo, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import type { Assistant } from "@mocean/mastra/prismaType";
import { useForm } from "react-hook-form";
import { z } from "zod";

import type { ModelSelection } from "@/components/custom/useModelSelector";
import { useAssistantActions } from "@/hooks/useAssistantsSWR";
import { useEnabledProvidersWithModels } from "@/hooks/useProvidersSWR";

export interface EditAssistantDialogProps {
  assistant: Assistant | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const editAssistantSchema = z.object({
  name: z.string().min(1, "助手名称不能为空"),
  emoji: z.string().nullish(),
  description: z.string().nullish(),
  prompt: z.string().min(1, "提示词不能为空")
});

export type EditAssistantFormData = z.infer<typeof editAssistantSchema>;

export const useAssistantEdit = ({
  assistant,
  open,
  onOpenChange
}: EditAssistantDialogProps) => {
  const { update } = useAssistantActions();
  const { providers } = useEnabledProvidersWithModels();

  const [modelSelection, setModelSelection] = useState<
    ModelSelection | undefined
  >(undefined);

  // 根据 assistant 的 modelId/providerId 从 providers 中找到初始选中项
  const initialModelSelection = useMemo(() => {
    if (!assistant?.modelId || !assistant?.providerId || providers.length === 0)
      return undefined;

    const provider = providers.find((p) => p.id === assistant.providerId);
    if (!provider) return undefined;

    const model = provider.groups
      .flatMap((g) => g.models)
      .find((m) => m.id === assistant.modelId);
    if (!model) return undefined;

    return { provider, model } as ModelSelection;
  }, [assistant, providers]);

  const form = useForm<EditAssistantFormData>({
    resolver: zodResolver(editAssistantSchema),
    defaultValues: {
      name: "",
      emoji: "",
      description: "",
      prompt: ""
    }
  });

  const resetForm = useCallback(() => {
    if (assistant) {
      form.reset({
        name: assistant.name ?? "",
        emoji: assistant.emoji ?? "",
        description: assistant.description ?? "",
        prompt: assistant.prompt ?? ""
      });
      setModelSelection(initialModelSelection);
    }
  }, [assistant, form, initialModelSelection]);

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  const onDialogOpenChange = useCallback(
    (isOpen: boolean) => {
      if (isOpen) {
        resetForm();
      }
      onOpenChange(isOpen);
    },
    [onOpenChange, resetForm]
  );

  const onSubmit = useCallback(
    async (data: EditAssistantFormData) => {
      if (!assistant) return;
      await update(assistant.id, {
        name: data.name.trim(),
        emoji: data.emoji?.trim() || null,
        description: data.description?.trim() || null,
        prompt: data.prompt.trim(),
        modelId: modelSelection?.model.id ?? null,
        providerId: modelSelection?.provider.id ?? null
      });
      onDialogOpenChange(false);
    },
    [assistant, update, onDialogOpenChange, modelSelection]
  );

  return {
    assistant,
    open,
    form,
    modelSelection,
    setModelSelection,
    isSubmitting: form.formState.isSubmitting,
    onDialogOpenChange,
    onSubmit
  };
};
