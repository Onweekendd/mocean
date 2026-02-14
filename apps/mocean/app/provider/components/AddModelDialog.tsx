import React from "react";

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
  DialogTitle
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { type AddModelProps, MODEL_TYPES, useAddModel } from "./useAddModel";

/**
 * 添加模型对话框属性
 */
export type AddModelDialogProps = AddModelProps;

/**
 * 添加模型对话框组件
 * @description 用于向指定供应商添加新模型
 *
 * @param providerId - 供应商ID
 * @param open - 对话框开启状态
 * @param onOpenChange - 对话框状态变更回调
 * @param [onSuccess] - 成功回调函数
 *
 * @example
 * // 添加模型
 * <AddModelDialog
 *   providerId="provider-123"
 *   open={addDialogOpen}
 *   onOpenChange={setAddDialogOpen}
 *   onSuccess={refreshModels}
 * />
 */
export const AddModelDialog: React.FC<AddModelDialogProps> = (props) => {
  const {
    open,
    groups,
    groupsLoading,
    isSubmitting,
    formData,
    register,
    handleSubmit,
    setValue,
    generateId,
    toggleType,
    removeType,
    onSubmit,
    handleOpenChange
  } = useAddModel(props);

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[80vh] max-w-lg overflow-y-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register("name")}
                value={formData.name}
                onChange={(e) => setValue("name", e.target.value)}
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
                  onClick={generateId}
                  disabled={!formData.name.trim()}
                >
                  基于名称生成
                </Button>
              </div>
              <Input
                id="modelId"
                {...register("id")}
                value={formData.id}
                onChange={(e) => setValue("id", e.target.value)}
                placeholder="如：gpt-4-turbo"
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
                  onValueChange={(value) => setValue("groupId", value)}
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
                            onClick={() => removeType(type)}
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
                        onCheckedChange={() => toggleType(type.value)}
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
                {...register("ownedBy")}
                value={formData.ownedBy}
                onChange={(e) => setValue("ownedBy", e.target.value)}
                placeholder="如：OpenAI, Anthropic"
                className="focus-visible:ring-brand-primary-500"
              />
            </div>

            {/* 模型描述 */}
            <div className="space-y-2">
              <Label htmlFor="description">模型描述</Label>
              <Textarea
                id="description"
                {...register("description")}
                value={formData.description}
                onChange={(e) => setValue("description", e.target.value)}
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
              onClick={() => handleOpenChange(false)}
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
                !formData.groupId ||
                formData.types.length === 0
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
