import React, { useEffect, useState } from "react";

import type { Model } from "@mocean/mastra/prismaType";
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
import { useGroupsByProviderSWR } from "@/hooks/useGroupsSWR";
import { useModelsWithActions } from "@/hooks/useModelsSWR";

import type { EditModelProps } from "./useModelEdit";
import { useModelEdit } from "./useModelEdit";

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
export const EditModelDialog: React.FC<EditModelProps> = (props) => {
  const {
    model,
    groups,
    open,
    groupsLoading,
    isSubmitting,
    register,
    onOpenChange: onDialogOpenChange,
    onSubmit
  } = useModelEdit(props);

  if (!model) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onDialogOpenChange}>
      <DialogContent className="max-h-[80vh] max-w-lg overflow-y-auto">
        <form>
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
                placeholder="如：GPT-4 Turbo"
                className="focus-visible:ring-brand-primary-500"
                {...register("name", { required: true })}
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
                <Select {...register("groupId", { required: true })}>
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

            {/* 模型描述 */}
            <div className="space-y-2">
              <Label htmlFor="description">模型描述</Label>
              <Textarea
                id="description"
                {...register("description")}
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
              disabled={isSubmitting}
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
