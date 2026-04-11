import { useCallback, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import type { ModelSelection } from "@/components/custom/useModelSelector";
import { useAssistantActions } from "@/hooks/useAssistantsSWR";

export interface CreateAssistantDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const createAssistantSchema = z.object({
  name: z.string().min(1, "助手名称不能为空"),
  emoji: z.string().nullish(),
  description: z.string().nullish(),
  prompt: z.string().min(1, "提示词不能为空")
});

export type CreateAssistantFormData = z.infer<typeof createAssistantSchema>;

const DEFAULT_VALUES: CreateAssistantFormData = {
  name: "",
  emoji: "",
  description: "",
  prompt: ""
};

export const useAssistantCreate = ({
  open,
  onOpenChange
}: CreateAssistantDialogProps) => {
  const { create } = useAssistantActions();
  const [modelSelection, setModelSelection] = useState<
    ModelSelection | undefined
  >(undefined);

  const form = useForm<CreateAssistantFormData>({
    resolver: zodResolver(createAssistantSchema),
    defaultValues: DEFAULT_VALUES
  });

  const onDialogOpenChange = useCallback(
    (isOpen: boolean) => {
      if (!isOpen) {
        form.reset(DEFAULT_VALUES);
        setModelSelection(undefined);
      }
      onOpenChange(isOpen);
    },
    [onOpenChange, form]
  );

  const onSubmit = useCallback(
    async (data: CreateAssistantFormData) => {
      await create({
        name: data.name.trim(),
        prompt: data.prompt.trim(),
        emoji: data.emoji?.trim() || null,
        description: data.description?.trim() || null,
        modelId: modelSelection?.model.id ?? null,
        providerId: modelSelection?.provider.id ?? null
      });
      onDialogOpenChange(false);
    },
    [create, modelSelection, onDialogOpenChange]
  );

  return {
    open,
    form,
    modelSelection,
    setModelSelection,
    isSubmitting: form.formState.isSubmitting,
    onDialogOpenChange,
    onSubmit
  };
};
