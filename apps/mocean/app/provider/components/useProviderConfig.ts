import { useCallback, useEffect } from "react";

import type { Provider } from "@mocean/mastra/prismaType";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useProviderActions } from "@/hooks/useProvidersSWR";

/**
 * 供应商配置编辑对话框属性
 */
export interface ProviderConfigDialogProps {
  /** 供应商数据 */
  provider: Provider;
  /** 对话框开启状态 */
  open: boolean;
  /** 对话框状态变更回调 */
  onOpenChange: (open: boolean) => void;
  /** 供应商更新成功回调 */
  onSuccess?: () => Promise<void>;
}

/**
 * 供应商配置表单数据
 */
export type ProviderConfigFormData = {
  name: string;
  apiKey: string;
  apiHost: string;
  enabled: boolean;
  notes: string;
};

/**
 * 供应商配置表单验证 Schema
 */
export const providerConfigSchema = z.object({
  name: z
    .string()
    .min(1, "供应商名称不能为空")
    .trim()
    .min(1, "供应商名称不能为空"),
  apiKey: z.string().trim().optional(),
  apiHost: z
    .string()
    .min(1, "API 接口地址不能为空")
    .url("请输入有效的 URL")
    .or(z.literal(""))
    .transform((val) => val.trim())
    .refine((val) => val !== "", { message: "API 接口地址不能为空" }),
  enabled: z.boolean(),
  notes: z.string().optional()
});

/**
 * 供应商配置表单 Hook
 * @param provider 供应商数据
 * @returns 表单方法和状态
 */
export const useProviderConfig = ({
  provider,
  open,
  onOpenChange,
  onSuccess
}: ProviderConfigDialogProps) => {
  const { update } = useProviderActions(onSuccess);

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

  /**
   * 处理对话框打开状态变更
   */
  const onDialogOpenChange = useCallback(
    (isOpen: boolean) => {
      if (isOpen) {
        updateFormDataWithProvider();
      }

      onOpenChange(isOpen);
    },
    [onOpenChange, updateFormDataWithProvider]
  );

  /**
   * 处理表单提交
   */
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

  return {
    isSubmitting: formState.isSubmitting,
    provider,
    open,
    form,
    onDialogOpenChange,
    onSubmit
  };
};
