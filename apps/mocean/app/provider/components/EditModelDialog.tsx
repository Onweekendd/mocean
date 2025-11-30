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
  /** 可用分组列表 */
  availableGroups?: string[];
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
  group: string;
  types: string[];
  ownedBy: string;
  description: string;
  newGroup: string;
}

/**
 * 编辑模型对话框组件
 * @description 用于编辑现有模型的信息，模型ID不可修改
 *
 * @param model - 要编辑的模型对象
 * @param availableGroups - 可用的分组列表
 * @param open - 对话框打开状态
 * @param onOpenChange - 状态变更回调函数
 * @param onSuccess - 编辑成功回调函数
 *
 * @example
 * // 编辑模型
 * <EditModelDialog
 *   model={selectedModel}
 *   availableGroups={groups}
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   onSuccess={() => refreshModels()}
 * />
 */
export const EditModelDialog: React.FC<EditModelDialogProps> = ({
  model,
  availableGroups = [],
  open,
  onOpenChange,
  onSuccess,
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    group: "",
    types: [],
    ownedBy: "",
    description: "",
    newGroup: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { update } = useModelsWithActions();

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

      setFormData({
        name: model.name || "",
        group: model.group || "未分组",
        types: types,
        ownedBy: model.owned_by || "",
        description: model.description || "",
        newGroup: "",
      });
    }
  }, [model, open]);

  /**
   * 重置表单数据
   */
  const resetForm = () => {
    setFormData({
      name: "",
      group: "",
      types: [],
      ownedBy: "",
      description: "",
      newGroup: "",
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
    if (!model || isSubmitting) return;

    // 表单验证
    if (
      !formData.name.trim() ||
      formData.types.length === 0 ||
      (formData.group === "新建分组" && !formData.newGroup.trim())
    ) {
      return;
    }

    setIsSubmitting(true);

    try {
      // 处理分组名
      const finalGroup =
        formData.group === "新建分组" ? formData.newGroup : formData.group;

      const updateData = {
        name: formData.name.trim(),
        group: finalGroup === "未分组" ? undefined : finalGroup,
        owned_by: formData.ownedBy.trim() || null,
        description: formData.description.trim() || null,
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

  // 分组选项列表
  const groupOptions = [...availableGroups, "未分组", "新建分组"];

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
              <Label htmlFor="group">模型分组</Label>
              <Select
                value={formData.group}
                onValueChange={(value) => onFormDataChange("group", value)}
              >
                <SelectTrigger className="focus:ring-brand-primary-500">
                  <SelectValue placeholder="选择分组" />
                </SelectTrigger>
                <SelectContent>
                  {groupOptions.map((group) => (
                    <SelectItem key={group} value={group}>
                      {group}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* 新建分组输入框 */}
            {formData.group === "新建分组" && (
              <div className="space-y-2">
                <Label htmlFor="newGroup">新分组名称 *</Label>
                <Input
                  id="newGroup"
                  value={formData.newGroup}
                  onChange={(e) => onFormDataChange("newGroup", e.target.value)}
                  placeholder="请输入新分组名称"
                  required
                  className="focus-visible:ring-brand-primary-500"
                />
              </div>
            )}

            {/* 模型类型 */}
            <div className="space-y-2">
              <Label>模型类型 *</Label>
              <div className="space-y-2">
                {/* 选中的类型 */}
                {formData.types.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {formData.types.map((type) => {
                      const typeInfo = MODEL_TYPES.find(
                        (t) => t.value === type,
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
                formData.types.length === 0 ||
                (formData.group === "新建分组" && !formData.newGroup.trim())
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
