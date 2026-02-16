import React from "react";

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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

import type { GroupManageDialogProps } from "./useGroupManage";
import { useGroupManage } from "./useGroupManage";

/**
 * 模型分组管理对话框组件
 * @description 用于管理供应商的模型分组，支持增删改操作
 */
export const GroupManageDialog: React.FC<GroupManageDialogProps> = ({
  groups,
  providerId,
  open,
  onOpenChange,
  onSuccess
}) => {
  // 使用 useGroupManage hook 管理状态和操作
  const { state, form, actions } = useGroupManage({
    providerId,
    groups: groups || [],
    open,
    onOpenChange,
    onSuccess
  });

  /**
   * 处理对话框打开状态变更
   */
  const handleDialogOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      actions.cancel();
    }
    onOpenChange(newOpen);
  };

  /**
   * 获取对话框标题
   */
  const getDialogTitle = () => {
    switch (state.mode) {
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
    switch (state.mode) {
      case "add":
        return "创建一个新的模型分组";
      case "edit":
        return `重命名分组 "${state.groupName}"`;
      default:
        return "管理当前供应商的模型分组";
    }
  };

  // 过滤掉默认分组
  const editableGroups = groups?.filter((g) => !g.isDefault) || [];

  return (
    <>
      <Dialog open={open} onOpenChange={handleDialogOpenChange}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{getDialogTitle()}</DialogTitle>
            <DialogDescription>{getDialogDescription()}</DialogDescription>
          </DialogHeader>

          <div className="py-4">
            {state.mode === "list" && (
              <div className="space-y-4">
                {/* 分组列表 */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>
                      可编辑分组 ({editableGroups.length})
                      {groups?.some((g) => g.isDefault) && (
                        <span className="ml-2 text-xs text-muted-foreground">
                          (默认分组不可编辑)
                        </span>
                      )}
                    </Label>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={actions.startAdd}
                      className="text-brand-primary-500 hover:bg-brand-primary-50"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      新建分组
                    </Button>
                  </div>

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
                              <Badge
                                variant="secondary"
                                className="text-brand-primary-500"
                              >
                                {group.name}
                              </Badge>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                  actions.startEdit(group.id, group.name)
                                }
                                className="h-8 px-2 text-brand-primary-500 hover:text-brand-primary-600"
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                  actions.startDelete(group.id, group.name)
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
                </div>
              </div>
            )}

            {(state.mode === "add" || state.mode === "edit") && (
              <Form {...form}>
                <form className="space-y-4">
                  <FormField
                    control={form.control}
                    name="groupName"
                    rules={{
                      required: "分组名称不能为空",
                      validate: (value) => {
                        if (!value.trim()) {
                          return "分组名称不能为空";
                        }
                        return true;
                      }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>分组名称 *</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="请输入分组名称"
                            autoFocus
                            className="border-brand-primary-500/30 focus:border-brand-primary-500 focus-visible:ring-brand-primary-500"
                          />
                        </FormControl>
                        <FormMessage />
                        {state.mode === "edit" && (
                          <p className="text-xs text-muted-foreground">
                            修改分组名称会影响该分组下的所有模型
                          </p>
                        )}
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            )}
          </div>

          <DialogFooter>
            {state.mode === "list" ? (
              <Button
                onClick={() => handleDialogOpenChange(false)}
                className="bg-brand-primary-500 hover:bg-brand-primary-600"
              >
                关闭
              </Button>
            ) : (
              <div className="flex space-x-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={actions.cancel}
                  disabled={form.formState.isSubmitting}
                >
                  取消
                </Button>
                <Button
                  onClick={
                    state.mode === "add"
                      ? actions.confirmAdd
                      : actions.confirmEdit
                  }
                  disabled={form.formState.isSubmitting}
                  className="bg-brand-primary-500 hover:bg-brand-primary-600"
                >
                  {form.formState.isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {state.mode === "add" ? "添加中..." : "保存中..."}
                    </>
                  ) : state.mode === "add" ? (
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
      <AlertDialog
        open={state.mode === "delete"}
        onOpenChange={(open) => {
          if (!open) actions.cancel();
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <span>确认删除分组</span>
            </AlertDialogTitle>
            <AlertDialogDescription>
              <>
                您确定要删除分组{" "}
                <strong>
                  {state.mode === "delete" ? state.groupName : ""}
                </strong>{" "}
                吗？
                <br />
                <br />
                <span>
                  该操作将把该分组下的所有模型移动到&ldquo;默认&rdquo;分组中，此操作不可撤销。
                </span>
              </>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={form.formState.isSubmitting}>
              取消
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                void actions.confirmDelete();
              }}
              disabled={form.formState.isSubmitting}
              className="bg-destructive hover:bg-destructive/90"
            >
              {form.formState.isSubmitting ? (
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
