import React, { useState } from "react";

import { AlertTriangle, Edit, Loader2, Plus, Trash2 } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import { ScrollArea } from "@/components/ui/scroll-area";
import { useGroupsWithActions } from "@/hooks/useGroupsSWR";

/**
 * 分组管理对话框属性
 */
export interface GroupManageDialogProps {
  /** 供应商ID */
  providerId: string | null;
  /** 对话框开启状态 */
  open: boolean;
  /** 对话框状态变更回调 */
  onOpenChange: (open: boolean) => void;
  /** 成功回调 */
  onSuccess?: () => void;
}

/**
 * 分组管理模式枚举
 */
type ManageMode = "list" | "add" | "edit";

/**
 * 模型分组管理对话框组件
 * @description 用于管理供应商的模型分组，支持增删改操作
 *
 * @param providerId - 供应商ID
 * @param open - 对话框开启状态
 * @param onOpenChange - 对话框状态变更回调
 * @param [onSuccess] - 成功回调函数
 *
 * @example
 * // 管理模型分组
 * <GroupManageDialog
 *   providerId="provider-123"
 *   open={groupManageOpen}
 *   onOpenChange={setGroupManageOpen}
 *   onSuccess={refreshModels}
 * />
 */
export const GroupManageDialog: React.FC<GroupManageDialogProps> = ({
  providerId,
  open,
  onOpenChange,
  onSuccess
}) => {
  // API hooks
  const { groups, isLoading, create, update, remove } =
    useGroupsWithActions(providerId);

  // 状态管理
  const [mode, setMode] = useState<ManageMode>("list");
  const [editingGroupId, setEditingGroupId] = useState<string>("");
  const [groupName, setGroupName] = useState("");
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [groupToDelete, setGroupToDelete] = useState<{
    id: string;
    name: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * 重置状态
   */
  const resetState = () => {
    setMode("list");
    setEditingGroupId("");
    setGroupName("");
    setGroupToDelete(null);
    setIsSubmitting(false);
  };

  /**
   * 开始添加新分组
   */
  const onStartAdd = () => {
    setMode("add");
    setGroupName("");
  };

  /**
   * 开始编辑分组
   */
  const onStartEdit = (groupId: string, groupName: string) => {
    setMode("edit");
    setEditingGroupId(groupId);
    setGroupName(groupName);
  };

  /**
   * 取消当前操作
   */
  const onCancel = () => {
    setMode("list");
    setEditingGroupId("");
    setGroupName("");
  };

  /**
   * 确认添加分组
   */
  const onConfirmAdd = async () => {
    if (!groupName.trim() || !providerId) return;

    setIsSubmitting(true);
    try {
      await create({
        name: groupName.trim(),
        providerId
      });

      onCancel();
      onSuccess?.();
    } catch (error) {
      console.error("添加分组失败:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * 确认编辑分组
   */
  const onConfirmEdit = async () => {
    if (!groupName.trim() || !editingGroupId) {
      onCancel();
      return;
    }

    // 如果名称没有改变，直接取消
    const originalGroup = groups.find((g) => g.id === editingGroupId);
    if (originalGroup && groupName.trim() === originalGroup.name) {
      onCancel();
      return;
    }

    setIsSubmitting(true);
    try {
      await update(editingGroupId, {
        name: groupName.trim()
      });

      onCancel();
      onSuccess?.();
    } catch (error) {
      console.error("编辑分组失败:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * 确认删除分组
   */
  const onConfirmDelete = async () => {
    if (!groupToDelete) return;

    setIsSubmitting(true);
    try {
      await remove(groupToDelete.id);

      setDeleteConfirmOpen(false);
      setGroupToDelete(null);
      onSuccess?.();
    } catch (error) {
      console.error("删除分组失败:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * 开始删除分组确认
   */
  const onStartDelete = (groupId: string, groupName: string) => {
    setGroupToDelete({ id: groupId, name: groupName });
    setDeleteConfirmOpen(true);
  };

  /**
   * 处理对话框打开状态变更
   */
  const onDialogOpenChange = (newOpen: boolean) => {
    if (!newOpen && !isSubmitting) {
      resetState();
    }
    onOpenChange(newOpen);
  };

  /**
   * 获取对话框标题
   */
  const getDialogTitle = () => {
    switch (mode) {
      case "add":
        return "添加分组";
      case "edit":
        return "编辑分组";
      default:
        return "分组管理";
    }
  };

  /**
   * 获取对话框描述
   */
  const getDialogDescription = () => {
    switch (mode) {
      case "add":
        return "创建一个新的模型分组";
      case "edit":
        const editingGroup = groups.find((g) => g.id === editingGroupId);
        return `重命名分组 "${editingGroup?.name}"`;
      default:
        return "管理当前供应商的模型分组";
    }
  };

  // 过滤掉默认分组
  const editableGroups = groups.filter((g) => !g.isDefault);

  return (
    <>
      <Dialog open={open} onOpenChange={onDialogOpenChange}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{getDialogTitle()}</DialogTitle>
            <DialogDescription>{getDialogDescription()}</DialogDescription>
          </DialogHeader>

          <div className="py-4">
            {mode === "list" && (
              <div className="space-y-4">
                {/* 分组列表 */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>
                      可编辑分组 ({editableGroups.length})
                      {groups.some((g) => g.isDefault) && (
                        <span className="ml-2 text-xs text-muted-foreground">
                          (默认分组不可编辑)
                        </span>
                      )}
                    </Label>
                    <Button variant="outline" size="sm" onClick={onStartAdd}>
                      <Plus className="mr-2 h-4 w-4" />
                      新建分组
                    </Button>
                  </div>

                  {isLoading ? (
                    <div className="flex items-center justify-center py-6">
                      <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                    </div>
                  ) : (
                    <ScrollArea className="max-h-60">
                      <div className="space-y-2">
                        {editableGroups.length === 0 ? (
                          <div className="py-6 text-center text-sm text-muted-foreground">
                            暂无分组，点击上方按钮创建第一个分组
                          </div>
                        ) : (
                          editableGroups.map((group) => (
                            <div
                              key={group.id}
                              className="flex items-center justify-between rounded-lg border bg-card p-3"
                            >
                              <div className="flex items-center space-x-2">
                                <Badge variant="secondary">{group.name}</Badge>
                                {group._count && (
                                  <span className="text-xs text-muted-foreground">
                                    {group._count.models} 个模型
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center space-x-1">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() =>
                                    onStartEdit(group.id, group.name)
                                  }
                                  className="h-8 px-2"
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() =>
                                    onStartDelete(group.id, group.name)
                                  }
                                  className="h-8 px-2 text-destructive hover:text-destructive/90"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </ScrollArea>
                  )}
                </div>
              </div>
            )}

            {(mode === "add" || mode === "edit") && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="groupName">分组名称 *</Label>
                  <Input
                    id="groupName"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                    placeholder="请输入分组名称"
                    autoFocus
                    required
                    className="focus-visible:ring-brand-primary-500"
                  />
                  {mode === "edit" && (
                    <p className="text-xs text-muted-foreground">
                      修改分组名称会影响该分组下的所有模型
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          <DialogFooter>
            {mode === "list" ? (
              <Button onClick={() => onDialogOpenChange(false)}>关闭</Button>
            ) : (
              <div className="flex space-x-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onCancel}
                  disabled={isSubmitting}
                >
                  取消
                </Button>
                <Button
                  onClick={mode === "add" ? onConfirmAdd : onConfirmEdit}
                  disabled={isSubmitting || !groupName.trim()}
                  className="bg-brand-primary-500 hover:bg-brand-primary-600"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {mode === "add" ? "添加中..." : "保存中..."}
                    </>
                  ) : mode === "add" ? (
                    "添加"
                  ) : (
                    "保存"
                  )}
                </Button>
              </div>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* 删除确认对话框 */}
      <AlertDialog open={deleteConfirmOpen} onOpenChange={setDeleteConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <span>确认删除分组</span>
            </AlertDialogTitle>
            <AlertDialogDescription>
              <>
                您确定要删除分组 <strong>{groupToDelete?.name}</strong> 吗？
                <br />
                <br />
                <span>
                  该操作将把该分组下的所有模型移动到"默认"分组中，此操作不可撤销。
                </span>
              </>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isSubmitting}>取消</AlertDialogCancel>
            <AlertDialogAction
              onClick={onConfirmDelete}
              disabled={isSubmitting}
              className="bg-destructive hover:bg-destructive/90"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  删除中...
                </>
              ) : (
                "确认删除"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
