import { useCallback, useEffect, useMemo } from "react";

import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

import { useGroupsByProviderSWR } from "@/hooks/useGroupsSWR";
import { useModelActions } from "@/hooks/useModelsSWR";

/**
 * 添加模型对话框属性
 */
export interface AddModelProps {
  /** 供应商ID */
  providerId: string | null;
  /** 对话框打开状态 */
  open: boolean;
  /** 状态变更回调 */
  onOpenChange: (open: boolean) => void;
  /** 成功回调 */
  onSuccess?: () => void;
}

/**
 * 模型类型选项
 */
export const MODEL_TYPES = [
  { value: "text", label: "文本" },
  { value: "vision", label: "视觉" },
  { value: "embedding", label: "向量" },
  { value: "reasoning", label: "推理" },
  { value: "function_calling", label: "函数调用" },
  { value: "web_search", label: "网络搜索" }
] as const;

export type ModelAddForm = {
  name: string;
  id: string;
  groupId: string;
  description: string;
  ownedBy: string;
  types: string[];
};

export const useAddModel = ({
  providerId,
  open,
  onOpenChange,
  onSuccess
}: AddModelProps) => {
  const { create } = useModelActions(onSuccess);
  const { groups, isLoading: groupsLoading } =
    useGroupsByProviderSWR(providerId);

  /**
   * 获取默认分组
   */
  const defaultGroup = useMemo(() => {
    return groups.find((g) => g.isDefault);
  }, [groups]);

  /**
   * 表单管理
   */
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { isSubmitting }
  } = useForm<ModelAddForm>({
    defaultValues: {
      name: "",
      id: "",
      groupId: "",
      description: "",
      ownedBy: "",
      types: []
    }
  });

  const formData = watch();

  /**
   * 当默认分组加载完成时更新表单
   */
  useEffect(() => {
    if (defaultGroup && !formData.groupId) {
      setValue("groupId", defaultGroup.id);
    }
  }, [defaultGroup, formData.groupId, setValue]);

  /**
   * 重置表单数据
   */
  const resetForm = useCallback(() => {
    reset({
      name: "",
      id: "",
      groupId: defaultGroup?.id || "",
      description: "",
      ownedBy: "",
      types: []
    });
  }, [defaultGroup?.id, reset]);

  /**
   * 根据模型名称自动生成ID
   */
  const generateId = useCallback(() => {
    if (formData.name.trim()) {
      const generatedId = formData.name
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .trim();
      setValue("id", generatedId);
    }
  }, [formData.name, setValue]);

  /**
   * 处理模型类型切换
   */
  const toggleType = useCallback(
    (type: string) => {
      const currentTypes = formData.types;
      const newTypes = currentTypes.includes(type)
        ? currentTypes.filter((t) => t !== type)
        : [...currentTypes, type];
      setValue("types", newTypes);
    },
    [formData.types, setValue]
  );

  /**
   * 移除选中的模型类型
   */
  const removeType = useCallback(
    (type: string) => {
      const newTypes = formData.types.filter((t) => t !== type);
      setValue("types", newTypes);
    },
    [formData.types, setValue]
  );

  /**
   * 处理表单提交
   */
  const onSubmit: SubmitHandler<ModelAddForm> = useCallback(
    async (data: ModelAddForm) => {
      if (!providerId || !data.groupId) {
        return;
      }

      const modelData = {
        name: data.name.trim(),
        id: data.id.trim(),
        description: data.description.trim() || null,
        owned_by: data.ownedBy.trim() || null,
        providers: [
          {
            providerId,
            groupId: data.groupId
          }
        ],
        isSystem: false,
        // 根据类型设置能力标志
        supportsTools: data.types.includes("function_calling"),
        supportsReasoning: data.types.includes("reasoning"),
        supportsImage: data.types.includes("vision"),
        supportsEmbedding: data.types.includes("embedding")
      };

      await create(modelData);
      onOpenChange(false);
      resetForm();
    },
    [providerId, create, onOpenChange, resetForm]
  );

  /**
   * 处理对话框打开状态变更
   */
  const handleOpenChange = useCallback(
    (newOpen: boolean) => {
      if (!newOpen && !isSubmitting) {
        resetForm();
      }
      onOpenChange(newOpen);
    },
    [isSubmitting, resetForm, onOpenChange]
  );

  return {
    open,
    groups,
    groupsLoading,
    isSubmitting,
    formData,
    defaultGroup,
    register,
    handleSubmit,
    setValue,
    generateId,
    toggleType,
    removeType,
    onSubmit,
    handleOpenChange
  };
};
