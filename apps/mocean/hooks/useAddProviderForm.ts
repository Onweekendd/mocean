import { useForm } from "react-hook-form";

import { useProviderActions } from "./useProvidersSWR";

interface FormData {
  type: string;
  name: string;
  apiKey: string;
  apiHost: string;
  notes: string;
}

interface UseAddProviderFormProps {
  onOpenChange: (open: boolean) => void;
}

export function useAddProviderForm({ onOpenChange }: UseAddProviderFormProps) {
  const { create } = useProviderActions();

  const form = useForm<FormData>({
    defaultValues: {
      type: "",
      name: "",
      apiKey: "",
      apiHost: "",
      notes: ""
    },
    mode: "onBlur"
  });

  const validateType = (value: string) => {
    if (!value.trim()) {
      return "请输入供应商 ID";
    }
    return true;
  };

  const validateName = (value: string) => {
    if (!value.trim()) {
      return "请输入供应商名称";
    }
    return true;
  };

  const validateApiKey = (value: string) => {
    if (!value.trim()) {
      return "请输入 API 密钥";
    }
    return true;
  };

  const validateApiHost = (value: string) => {
    if (!value.trim()) {
      return "请输入 API 地址";
    }
    try {
      new URL(value.trim());
      return true;
    } catch {
      return "请输入有效的 URL 地址";
    }
  };

  const onSubmit = async () => {
    const values = form.getValues();

    if (!values.type.trim()) {
      form.setError("type", { type: "required", message: "请输入供应商 ID" });
      return;
    }
    if (!values.name.trim()) {
      form.setError("name", { type: "required", message: "请输入供应商名称" });
      return;
    }
    if (!values.apiKey.trim()) {
      form.setError("apiKey", { type: "required", message: "请输入 API 密钥" });
      return;
    }
    if (!values.apiHost.trim()) {
      form.setError("apiHost", { type: "required", message: "请输入 API 地址" });
      return;
    }
    try {
      new URL(values.apiHost.trim());
    } catch {
      form.setError("apiHost", {
        type: "validate",
        message: "请输入有效的 URL 地址"
      });
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await create({
      type: values.type.trim() as any,
      name: values.name.trim(),
      apiKey: values.apiKey.trim(),
      apiHost: values.apiHost.trim(),
      enabled: true,
      notes: values.notes.trim() || undefined
    });

    onOpenChange(false);
    form.reset();
  };

  return {
    form,
    errors: form.formState.errors,
    validateType,
    validateName,
    validateApiKey,
    validateApiHost,
    onSubmit
  };
}

export type { FormData };
