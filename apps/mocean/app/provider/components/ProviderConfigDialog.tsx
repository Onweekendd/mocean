import React, { useState } from "react";

import { Provider } from "@mocean/mastra/prismaType";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
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
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
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
  /** 成功回调 */
  onSuccess?: () => void;
}

/**
 * 供应商配置编辑对话框组件
 * @description 用于编辑供应商的基本信息和配置
 *
 * @param provider - 供应商数据
 * @param open - 对话框开启状态
 * @param onOpenChange - 对话框状态变更回调
 * @param [onSuccess] - 成功回调函数
 *
 * @example
 * // 编辑供应商配置
 * <ProviderConfigDialog
 *   provider={provider}
 *   open={configDialogOpen}
 *   onOpenChange={setConfigDialogOpen}
 *   onSuccess={() => console.log("配置已更新")}
 * />
 */
export const ProviderConfigDialog: React.FC<ProviderConfigDialogProps> = ({
  provider,
  open,
  onOpenChange,
  onSuccess,
}) => {
  // 状态管理
  const [formData, setFormData] = useState({
    name: provider.name,
    apiKey: provider.apiKey,
    apiHost: provider.apiHost,
    apiVersion: provider.apiVersion || "",
    enabled: provider.enabled,
    isNotSupportArrayContent: provider.isNotSupportArrayContent,
    notes: provider.notes || "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // API hooks
  const { update } = useProvidersWithActions();

  /**
   * 重置表单数据
   */
  const resetForm = () => {
    setFormData({
      name: provider.name,
      apiKey: provider.apiKey,
      apiHost: provider.apiHost,
      apiVersion: provider.apiVersion || "",
      enabled: provider.enabled,
      isNotSupportArrayContent: provider.isNotSupportArrayContent,
      notes: provider.notes || "",
    });
  };

  /**
   * 处理表单字段变更
   */
  const onFormDataChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  /**
   * 处理表单提交
   */
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const updateData = {
        name: formData.name.trim(),
        apiKey: formData.apiKey.trim(),
        apiHost: formData.apiHost.trim(),
        apiVersion: formData.apiVersion.trim() || null,
        enabled: formData.enabled,
        isNotSupportArrayContent: formData.isNotSupportArrayContent,
        notes: formData.notes.trim() || null,
      };

      await update(provider.id, updateData);

      onOpenChange(false);
      onSuccess?.();
    } catch (error) {
      console.error("更新供应商配置失败:", error);
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

  return (
    <Dialog open={open} onOpenChange={onDialogOpenChange}>
      <DialogContent className="max-w-md">
        <form onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle>供应商配置</DialogTitle>
            <DialogDescription>
              修改 {provider.name} 供应商的基本信息和接口配置
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {/* 供应商名称 */}
            <div className="space-y-2">
              <Label htmlFor="name">供应商名称 *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => onFormDataChange("name", e.target.value)}
                placeholder="请输入供应商名称"
                required
                className="focus-visible:ring-brand-primary-500"
              />
            </div>

            {/* API Key */}
            <div className="space-y-2">
              <Label htmlFor="apiKey">API Key *</Label>
              <Input
                id="apiKey"
                type="password"
                value={formData.apiKey}
                onChange={(e) => onFormDataChange("apiKey", e.target.value)}
                placeholder="请输入API密钥"
                required
                className="focus-visible:ring-brand-primary-500"
              />
            </div>

            {/* API 接口地址 */}
            <div className="space-y-2">
              <Label htmlFor="apiHost">API 接口地址 *</Label>
              <Input
                id="apiHost"
                value={formData.apiHost}
                onChange={(e) => onFormDataChange("apiHost", e.target.value)}
                placeholder="https://api.example.com"
                required
                className="focus-visible:ring-brand-primary-500"
              />
            </div>

            {/* API 版本 */}
            <div className="space-y-2">
              <Label htmlFor="apiVersion">API 版本</Label>
              <Input
                id="apiVersion"
                value={formData.apiVersion}
                onChange={(e) => onFormDataChange("apiVersion", e.target.value)}
                placeholder="v1, v2 等"
                className="focus-visible:ring-brand-primary-500"
              />
            </div>

            {/* 配置选项 */}
            <div className="space-y-3">
              {/* 启用状态 */}
              <div className="flex items-center justify-between">
                <Label htmlFor="enabled">启用供应商</Label>
                <Switch
                  id="enabled"
                  checked={formData.enabled}
                  onCheckedChange={(checked) =>
                    onFormDataChange("enabled", checked)
                  }
                />
              </div>

              {/* 数组内容支持 */}
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="arraySupport">不支持数组内容</Label>
                  <p className="text-xs text-muted-foreground">
                    某些提供商不支持数组格式的消息内容
                  </p>
                </div>
                <Switch
                  id="arraySupport"
                  checked={formData.isNotSupportArrayContent}
                  onCheckedChange={(checked) =>
                    onFormDataChange("isNotSupportArrayContent", checked)
                  }
                />
              </div>
            </div>

            {/* 备注 */}
            <div className="space-y-2">
              <Label htmlFor="notes">备注</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => onFormDataChange("notes", e.target.value)}
                placeholder="供应商相关备注信息..."
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
                "保存配置"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
