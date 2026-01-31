import { useCallback } from "react";

import type { Provider } from "@mocean/mastra/prismaType";
import { type SubmitHandler, useForm } from "react-hook-form";

import { useProvidersWithActions } from "@/hooks/useProvidersSWR";

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
 * 供应商配置表单 Hook
 * @param provider 供应商数据
 * @returns 表单方法和状态
 */
export const useProviderConfig = ({
  provider,
  open,
  onOpenChange
}: ProviderConfigDialogProps) => {
  const { update } = useProvidersWithActions();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { isSubmitting },
    watch
  } = useForm<ProviderConfigFormData>({
    defaultValues: {
      name: provider.name,
      apiKey: provider.apiKey,
      apiHost: provider.apiHost,
      enabled: provider.enabled,
      notes: provider.notes || ""
    }
  });

  const updateFormDataWithProvider = useCallback(() => {
    reset({
      name: provider.name,
      apiKey: provider.apiKey,
      apiHost: provider.apiHost,
      enabled: provider.enabled,
      notes: provider.notes || ""
    });
  }, [provider, reset]);

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
  const onSubmit: SubmitHandler<ProviderConfigFormData> = useCallback(
    async (data: ProviderConfigFormData) => {
      try {
        const updateData = {
          name: data.name.trim(),
          apiKey: data.apiKey.trim(),
          apiHost: data.apiHost.trim(),
          enabled: data.enabled,
          notes: data.notes.trim() || null
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
    isSubmitting,
    provider,
    open,
    control,

    register,
    handleSubmit,
    reset,
    watch,
    onSubmit,
    onDialogOpenChange
  };
};
