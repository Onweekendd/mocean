import { useForm } from "react-hook-form";

import { apiClient } from "@mocean/mastra/apiClient";

import { useAgentGroupsSWR } from "./useAgentsSWR";

interface FormData {
  name: string;
  label: string;
}

interface UseAddAgentGroupFormProps {
  onOpenChange: (open: boolean) => void;
}

export function useAddAgentGroupForm({
  onOpenChange
}: UseAddAgentGroupFormProps) {
  const { refresh } = useAgentGroupsSWR();

  const form = useForm<FormData>({
    defaultValues: {
      name: "",
      label: ""
    },
    mode: "onBlur"
  });

  const validateName = (value: string) => {
    if (!value.trim()) {
      return "请输入分组标识符";
    }
    if (!/^[a-z][a-z0-9-]*$/.test(value.trim())) {
      return "只允许小写字母、数字和连字符，且必须以字母开头";
    }
    return true;
  };

  const validateLabel = (value: string) => {
    if (!value.trim()) {
      return "请输入分组显示名称";
    }
    return true;
  };

  const onSubmit = async () => {
    const values = form.getValues();

    if (!values.name.trim()) {
      form.setError("name", { type: "required", message: "请输入分组标识符" });
      return;
    }
    if (!/^[a-z][a-z0-9-]*$/.test(values.name.trim())) {
      form.setError("name", {
        type: "pattern",
        message: "只允许小写字母、数字和连字符，且必须以字母开头"
      });
      return;
    }
    if (!values.label.trim()) {
      form.setError("label", {
        type: "required",
        message: "请输入分组显示名称"
      });
      return;
    }

    const res = await apiClient.customApi.agents.groups.$post({
      json: {
        name: values.name.trim(),
        label: values.label.trim()
      }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    await refresh();
    onOpenChange(false);
    form.reset();
  };

  return {
    form,
    errors: form.formState.errors,
    validateName,
    validateLabel,
    onSubmit
  };
}

export type { FormData };
