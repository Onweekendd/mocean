import { useState } from "react";

import { useForm } from "react-hook-form";

import { useAgentsApi } from "@mocean/mastra/apiClient";
import { toast } from "sonner";

import { useAgentsByGroupSWR } from "./useAgentsSWR";

interface FormData {
  name: string;
  prompt: string;
  emoji: string;
  description: string;
}

interface UseAddAgentFormProps {
  groupId: string;
  onOpenChange: (open: boolean) => void;
}

export function useAddAgentForm({ groupId, onOpenChange }: UseAddAgentFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { createAgent, addAgentToGroup } = useAgentsApi();
  const { refresh } = useAgentsByGroupSWR(groupId);

  const form = useForm<FormData>({
    defaultValues: {
      name: "",
      prompt: "",
      emoji: "",
      description: ""
    },
    mode: "onBlur"
  });

  const validateName = (value: string) => {
    if (!value.trim()) {
      return "请输入代理名称";
    }
    return true;
  };

  const validatePrompt = (value: string) => {
    if (!value.trim()) {
      return "请输入提示词";
    }
    return true;
  };

  const onSubmit = async () => {
    const values = form.getValues();

    if (!values.name.trim()) {
      form.setError("name", { type: "required", message: "请输入代理名称" });
      return;
    }
    if (!values.prompt.trim()) {
      form.setError("prompt", { type: "required", message: "请输入提示词" });
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await createAgent({
        name: values.name.trim(),
        prompt: values.prompt.trim(),
        type: "agent",
        emoji: values.emoji.trim() || undefined,
        description: values.description.trim() || undefined
      });

      if (result?.data) {
        const newAgentId = (result.data as { id: string }).id;
        await addAgentToGroup(newAgentId, groupId);
        await refresh();
        toast.success("创建成功", {
          description: `Agent "${values.name}" 已成功创建`
        });
        onOpenChange(false);
        form.reset();
      }
    } catch (err) {
      toast.error("创建失败", {
        description: err instanceof Error ? err.message : "创建 Agent 时发生未知错误"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    errors: form.formState.errors,
    isSubmitting,
    validateName,
    validatePrompt,
    onSubmit
  };
}

export type { FormData };
