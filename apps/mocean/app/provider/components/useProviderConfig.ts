import { useCallback, useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { apiClient } from "@mocean/mastra/apiClient";
import type { Provider } from "@mocean/mastra/prismaType";
import { ProviderFullSchema } from "@mocean/mastra/schemas";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useProviderActions } from "@/hooks/useProvidersSWR";

export interface ProviderConfigDialogProps {
  provider: Provider;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => Promise<void>;
}

const providerConfigSchema = ProviderFullSchema.pick({
  name: true,
  apiKey: true,
  apiHost: true,
  enabled: true,
  notes: true
}).extend({
  name: z.string().min(1, "供应商名称不能为空"),
  apiHost: z.string().min(1, "API 接口地址不能为空").url("请输入有效的 URL"),
  enabled: z.boolean(),
  notes: z.string()
});

export type ProviderConfigFormData = z.infer<typeof providerConfigSchema>;

type TestStatus = "idle" | "testing" | "success" | "error";

export const useProviderConfig = ({
  provider,
  open,
  onOpenChange,
  onSuccess
}: ProviderConfigDialogProps) => {
  const { update } = useProviderActions(onSuccess);

  const [testStatus, setTestStatus] = useState<TestStatus>("idle");
  const [testMessage, setTestMessage] = useState("");

  const form = useForm<ProviderConfigFormData>({
    resolver: zodResolver(providerConfigSchema),
    defaultValues: {
      name: provider.name,
      apiKey: provider.apiKey,
      apiHost: provider.apiHost,
      enabled: provider.enabled,
      notes: provider.notes || ""
    }
  });

  const { formState } = form;

  const updateFormDataWithProvider = useCallback(() => {
    form.reset({
      name: provider.name,
      apiKey: provider.apiKey,
      apiHost: provider.apiHost,
      enabled: provider.enabled,
      notes: provider.notes || ""
    });
  }, [provider, form]);

  useEffect(() => {
    updateFormDataWithProvider();
  }, [updateFormDataWithProvider]);

  const onDialogOpenChange = useCallback(
    (isOpen: boolean) => {
      if (isOpen) {
        updateFormDataWithProvider();
      }

      onOpenChange(isOpen);
    },
    [onOpenChange, updateFormDataWithProvider]
  );

  const onSubmit = useCallback(
    async (data: ProviderConfigFormData) => {
      try {
        const updateData = {
          id: provider.id,
          name: data.name.trim(),
          apiKey: data.apiKey?.trim() || "",
          apiHost: data.apiHost.trim(),
          enabled: data.enabled,
          notes: data.notes?.trim() || null
        };

        await update(provider.id, updateData);
        onDialogOpenChange(false);
      } catch (error: unknown) {
        console.error("更新供应商配置失败:", error);
        throw error;
      }
    },
    [provider.id, update, onDialogOpenChange]
  );

  const onTestConnection = async () => {
    const values = form.getValues();
    const apiHost = values.apiHost?.trim();

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
          apiKey: values.apiKey?.trim() ?? "",
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

  return {
    isSubmitting: formState.isSubmitting,
    provider,
    open,
    form,
    onDialogOpenChange,
    onSubmit,
    onTestConnection,
    testStatus,
    testMessage
  };
};
