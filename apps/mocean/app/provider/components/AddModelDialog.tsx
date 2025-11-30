import React, { useState } from "react";

import { Loader2, Plus, X } from "lucide-react";

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
 * 添加模型对话框属性
 */
export interface AddModelDialogProps {
  /** 供应商ID */
  providerId: string | null;
  /** 初始分组 */
  initialGroup?: string;
  /** 可用分组列表 */
  availableGroups?: string[];
  /** 对话框开启状态 */
  open: boolean;
  /** 对话框状态变更回调 */
  onOpenChange: (open: boolean) => void;
  /** 成功回调 */
  onSuccess?: () => void;
}

/**
 * 添加模型对话框组件
 * @description 用于向指定供应商添加新模型
 *
 * @param providerId - 供应商ID
 * @param [initialGroup] - 初始分组名称
 * @param [availableGroups] - 可用分组列表
 * @param open - 对话框开启状态
 * @param onOpenChange - 对话框状态变更回调
 * @param [onSuccess] - 成功回调函数
 *
 * @example
 * // 添加模型到指定分组
 * <AddModelDialog
 *   providerId="provider-123"
 *   initialGroup="GPT系列"
 *   availableGroups={["GPT系列", "Claude系列"]}
 *   open={addDialogOpen}
 *   onOpenChange={setAddDialogOpen}
 *   onSuccess={refreshModels}
 * />
 */
export const AddModelDialog: React.FC<AddModelDialogProps> = ({
  providerId,
  initialGroup = "",
  availableGroups = [],
  open,
  onOpenChange,
  onSuccess,
}) => {
  // 状态管理
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    group: initialGroup,
    newGroup: "",
    description: "",
    ownedBy: "",
    types: [] as string[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // API hooks
  const { create } = useModelsWithActions();

  /**
   * 重置表单数据
   */
  const resetForm = () => {
    setFormData({
      name: "",
      id: "",
      group: initialGroup,
      newGroup: "",
      description: "",
      ownedBy: "",
      types: [],
    });
  };

  /**
   * 处理表单字段变更
   */
  const onFormDataChange = (field: string, value: string | string[]) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  /**
   * 处理模型类型变更
   */
  const onTypeToggle = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      types: prev.types.includes(type)
        ? prev.types.filter((t) => t !== type)
        : [...prev.types, type],
    }));
  };

  /**
   * 移除选中的模型类型
   */
  const onRemoveType = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      types: prev.types.filter((t) => t !== type),
    }));
  };

  /**
   * 根据模型名称自动生成ID
   */
  const onGenerateId = () => {
    if (formData.name.trim()) {
      const generatedId = formData.name
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .trim();
      onFormDataChange("id", generatedId);
    }
  };

  /**
   * 处理表单提交
   */
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting || !providerId) return;
    setIsSubmitting(true);

    try {
      // 确定最终的分组名称
      const finalGroup =
        formData.group === "新建分组"
          ? formData.newGroup.trim()
          : formData.group;

      const modelData = {
        name: formData.name.trim(),
        id: formData.id.trim(),
        group: finalGroup || "未分组",
        description: formData.description.trim() || null,
        owned_by: formData.ownedBy.trim() || null,
        providerIds: [providerId],
        isSystem: false,
        // 根据类型设置能力标志
        supportsTools: formData.types.includes("function_calling"),
        supportsReasoning: formData.types.includes("reasoning"),
        supportsImage: formData.types.includes("vision"),
        supportsEmbedding: formData.types.includes("embedding"),
      };

      await create(modelData);

      onOpenChange(false);
      resetForm();
      onSuccess?.();
    } catch (error) {
      console.error("添加模型失败:", error);
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
  const groupOptions = [
    ...availableGroups,
    ...(initialGroup && !availableGroups.includes(initialGroup)
      ? [initialGroup]
      : []),
    "未分组",
    "新建分组",
  ];

  return (
    <Dialog open={open} onOpenChange={onDialogOpenChange}>
      <DialogContent className="max-h-[80vh] max-w-lg overflow-y-auto">
        <form onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle>添加模型</DialogTitle>
            <DialogDescription>
              为当前供应商添加一个新的AI模型
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
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

            {/* 模型ID */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="modelId">模型ID *</Label>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={onGenerateId}
                  disabled={!formData.name.trim()}
                >
                  基于名称生成
                </Button>
              </div>
              <Input
                id="modelId"
                value={formData.id}
                onChange={(e) => onFormDataChange("id", e.target.value)}
                placeholder="如：gpt-4-turbo"
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
                !formData.id.trim() ||
                formData.types.length === 0 ||
                (formData.group === "新建分组" && !formData.newGroup.trim())
              }
              className="bg-brand-primary-500 hover:bg-brand-primary-600"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  添加中...
                </>
              ) : (
                <>
                  <Plus className="mr-2 h-4 w-4" />
                  添加模型
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
