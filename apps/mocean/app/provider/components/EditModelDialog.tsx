import React, { useEffect, useState } from "react";

import { Model } from "@mocean/mastra/prismaType";
import { Loader2, Pencil, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useGroupsByProviderSWR } from "@/hooks/useGroupsSWR";
import { useModelsWithActions } from "@/hooks/useModelsSWR";

/**
 * 模型类型选项
 */
const MODEL_TYPES = [
  { value: "text", label: "文本" },
  { value: "vision", label: "视觉" },
  { value: "embedding", label: "向量" },
  { value: "reasoning", label: "推理" },
  { value: "function_calling", label: "函数调用" },
  { value: "web_search", label: "网络搜索" },
];

/**
 * 编辑模型对话框属性
 */
export interface EditModelDialogProps {
  /** 要编辑的模型 */
  model: Model | null;
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
 * 表单数据接口
 */
interface FormData {
  name: string;
  groupId: string;
  types: string[];
  ownedBy: string;
  description: string;
}

/**
 * 编辑模型对话框组件
 * @description 用于编辑现有模型的信息，模型ID不可修改
 *
 * @param model - 要编辑的模型对象
 * @param providerId - 供应商ID
 * @param open - 对话框打开状态
 * @param onOpenChange - 状态变更回调函数
 * @param onSuccess - 编辑成功回调函数
 *
 * @example
 * // 编辑模型
 * <EditModelDialog
 *   model={selectedModel}
 *   providerId="provider-123"
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   onSuccess={() => refreshModels()}
 * />
 */
export const EditModelDialog: React.FC<EditModelDialogProps> = ({
  model,
  providerId,
  open,
  onOpenChange,
  onSuccess,
}) => {
  const { groups, isLoading: groupsLoading } =
    useGroupsByProviderSWR(providerId);
  const { update } = useModelsWithActions();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    groupId: "",
    types: [],
    ownedBy: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * 当模型数据变化时初始化表单
   */
  useEffect(() => {
    if (model && open) {
      // 从模型能力字段推导出类型数组
      const types: string[] = [];
      if (model.supportsTools) types.push("function_calling");
      if (model.supportsReasoning) types.push("reasoning");
      if (model.supportsImage) types.push("vision");
      if (model.supportsEmbedding) types.push("embedding");
      // 默认文本能力
      if (types.length === 0) types.push("text");

      // 从 modelGroups 获取分组ID（使用第一个供应商的分组）
      let groupId = "";
      if ((model as any).modelGroups && (model as any).modelGroups.length > 0) {
        groupId = (model as any).modelGroups[0].groupId || "";
      }

      setFormData({
        name: model.name || "",
        groupId: groupId,
        types: types,
        ownedBy: model.owned_by || "",
        description: model.description || "",
      });
    }
  }, [model, open]);

  /**
   * 重置表单数据
   */
  const resetForm = () => {
    setFormData({
      name: "",
      groupId: "",
      types: [],
      ownedBy: "",
      description: "",
    });
  };

  /**
   * 更新表单字段
   * @param field - 字段名
   * @param value - 新值
   */
  const onFormDataChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  /**
   * 切换模型类型
   * @param typeValue - 类型值
   */
  const onTypeToggle = (typeValue: string) => {
    setFormData((prev) => {
      const isSelected = prev.types.includes(typeValue);
      if (isSelected) {
        return {
          ...prev,
          types: prev.types.filter((t) => t !== typeValue),
        };
      } else {
        return {
          ...prev,
          types: [...prev.types, typeValue],
        };
      }
    });
  };

  /**
   * 移除模型类型
   * @param typeValue - 要移除的类型值
   */
  const onRemoveType = (typeValue: string) => {
    setFormData((prev) => ({
      ...prev,
      types: prev.types.filter((t) => t !== typeValue),
    }));
  };

  /**
   * 提交表单
   * @param e - 表单事件
   */
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!model || isSubmitting || !formData.groupId) return;

    // 表单验证
    if (!formData.name.trim() || formData.types.length === 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      // 从 modelGroups 获取供应商信息
      const providers =
        (model as any).modelGroups && (model as any).modelGroups.length > 0
          ? (model as any).modelGroups.map((mg: any) => ({
              providerId: mg.providerId,
              groupId: formData.groupId,
            }))
          : [];

      const updateData = {
        name: formData.name.trim(),
        owned_by: formData.ownedBy.trim() || null,
        description: formData.description.trim() || null,
        providers: providers.length > 0 ? providers : undefined,
        // 根据类型设置能力标志
        supportsTools: formData.types.includes("function_calling"),
        supportsReasoning: formData.types.includes("reasoning"),
        supportsImage: formData.types.includes("vision"),
        supportsEmbedding: formData.types.includes("embedding"),
      };

      await update(model.id, updateData);

      // 成功后回调
      onSuccess?.();
      onOpenChange(false);
    } catch (error) {
      console.error("更新模型失败:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * 处理对话框打开状态变更
   */
  const onDialogOpenChange = (newOpen: boolean) => {
    if (!newOpen && !isSubmitting) {
      resetForm();
    }
    onOpenChange(newOpen);
  };

  if (!model) return null;

  return (
    <Dialog open={open} onOpenChange={onDialogOpenChange}>
      <DialogContent className="max-h-[80vh] max-w-lg overflow-y-auto">
        <form onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle>编辑模型</DialogTitle>
            <DialogDescription>
              编辑模型 &quot;{model.name}&quot; 的信息
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {/* 模型ID（只读） */}
            <div className="space-y-2">
              <Label htmlFor="modelId">模型ID（不可修改）</Label>
              <Input
                id="modelId"
                value={model.id}
                disabled
                className="bg-muted"
              />
            </div>

            {/* 模型名称 */}
            <div className="space-y-2">
              <Label htmlFor="name">模型名称 *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => onFormDataChange("name", e.target.value)}
                placeholder="如：GPT-4 Turbo"
                required
                className="focus-visible:ring-brand-primary-500"
              />
            </div>

            {/* 模型分组 */}
            <div className="space-y-2">
              <Label htmlFor="group">模型分组 *</Label>
              {groupsLoading ? (
                <div className="flex h-10 items-center justify-center rounded-md border">
                  <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                </div>
              ) : (
                <Select
                  value={formData.groupId}
                  onValueChange={(value) => onFormDataChange("groupId", value)}
                >
                  <SelectTrigger className="focus:ring-brand-primary-500">
                    <SelectValue placeholder="选择分组" />
                  </SelectTrigger>
                  <SelectContent>
                    {groups.map((group) => (
                      <SelectItem key={group.id} value={group.id}>
                        {group.name}
                        {group.isDefault && " (默认)"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
              <p className="text-xs text-muted-foreground">
                可在分组管理中创建新分组
              </p>
            </div>

            {/* 模型类型 */}
            <div className="space-y-2">
              <Label>模型类型 *</Label>
              <div className="space-y-2">
                {/* 选中的类型 */}
                {formData.types.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {formData.types.map((type) => {
                      const typeInfo = MODEL_TYPES.find(
                        (t) => t.value === type
                      );
                      return (
                        <Badge
                          key={type}
                          variant="secondary"
                          className="text-xs"
                        >
                          {typeInfo?.label || type}
                          <X
                            className="ml-1 h-3 w-3 cursor-pointer"
                            onClick={() => onRemoveType(type)}
                          />
                        </Badge>
                      );
                    })}
                  </div>
                )}

                {/* 类型选择 */}
                <div className="grid grid-cols-2 gap-2">
                  {MODEL_TYPES.map((type) => (
                    <div
                      key={type.value}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={`type-${type.value}`}
                        checked={formData.types.includes(type.value)}
                        onCheckedChange={() => onTypeToggle(type.value)}
                        className="data-[state=checked]:border-brand-primary-500 data-[state=checked]:bg-brand-primary-500"
                      />
                      <Label
                        htmlFor={`type-${type.value}`}
                        className="text-sm font-normal"
                      >
                        {type.label}
                      </Label>
                    </div>
                  ))}
                </div>

                {formData.types.length === 0 && (
                  <p className="text-xs text-muted-foreground">
                    请至少选择一种模型类型
                  </p>
                )}
              </div>
            </div>

            {/* 拥有者 */}
            <div className="space-y-2">
              <Label htmlFor="ownedBy">模型拥有者</Label>
              <Input
                id="ownedBy"
                value={formData.ownedBy}
                onChange={(e) => onFormDataChange("ownedBy", e.target.value)}
                placeholder="如：OpenAI, Anthropic"
                className="focus-visible:ring-brand-primary-500"
              />
            </div>

            {/* 模型描述 */}
            <div className="space-y-2">
              <Label htmlFor="description">模型描述</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) =>
                  onFormDataChange("description", e.target.value)
                }
                placeholder="描述模型的特点和用途..."
                rows={3}
                className="focus-visible:ring-brand-primary-500"
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onDialogOpenChange(false)}
              disabled={isSubmitting}
            >
              取消
            </Button>
            <Button
              type="submit"
              disabled={
                isSubmitting ||
                !formData.name.trim() ||
                !formData.groupId ||
                formData.types.length === 0
              }
              className="bg-brand-primary-500 hover:bg-brand-primary-600"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  保存中...
                </>
              ) : (
                <>
                  <Pencil className="mr-2 h-4 w-4" />
                  保存修改
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
