import { useState } from "react";

import { apiClient } from "@mocean/mastra/apiClient";
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

type TestStatus = "idle" | "testing" | "success" | "error";

export function useAddProviderForm({ onOpenChange }: UseAddProviderFormProps) {
  const { create } = useProviderActions();

  const [testStatus, setTestStatus] = useState<TestStatus>("idle");
  const [testMessage, setTestMessage] = useState("");

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

  const validateApiKey = () => true;

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

  const onTestConnection = async () => {
    const values = form.getValues();
    const apiHost = values.apiHost.trim();

    if (!apiHost) {
      setTestStatus("error");
      setTestMessage("请先填写 API 地址");
      return;
    }

    setTestStatus("testing");
    setTestMessage("");

    try {
      const res = await apiClient.customApi.providers["test-connection"].$post({
        json: {
          apiKey: values.apiKey.trim(),
          apiHost
        }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const result = await res.json();

      if (result.success) {
        setTestStatus("success");
        setTestMessage(result.message);
      } else {
        setTestStatus("error");
        setTestMessage(result.message ?? "连接失败");
      }
    } catch {
      setTestStatus("error");
      setTestMessage("连接失败");
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
    if (!values.apiHost.trim()) {
      form.setError("apiHost", {
        type: "required",
        message: "请输入 API 地址"
      });
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
    onSubmit,
    onTestConnection,
    testStatus,
    testMessage
  };
}

export type { FormData };
