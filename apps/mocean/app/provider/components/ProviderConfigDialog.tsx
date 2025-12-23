import React from "react";

import { Loader2 } from "lucide-react";
import { Controller } from "react-hook-form";

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

import {
  ProviderConfigDialogProps,
  useProviderConfig,
} from "./useProviderConfigDialog";

export const ProviderConfigDialog: React.FC<ProviderConfigDialogProps> = (
  props
) => {
  const {
    isSubmitting,
    provider,
    open,
    control,
    onDialogOpenChange,
    register,
    handleSubmit,
    onSubmit,
  } = useProviderConfig(props);

  return (
    <Dialog open={open} onOpenChange={onDialogOpenChange}>
      <DialogContent className="max-w-md">
        <form onSubmit={handleSubmit(onSubmit)}>
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
                placeholder="请输入供应商名称"
                required
                className="focus-visible:ring-brand-primary-500"
                {...register("name", { required: true })}
              />
            </div>

            {/* API Key */}
            <div className="space-y-2">
              <Label htmlFor="apiKey">API Key</Label>
              <Input
                id="apiKey"
                type="password"
                placeholder="请输入API密钥"
                className="focus-visible:ring-brand-primary-500"
                {...register("apiKey")}
              />
            </div>

            {/* API 接口地址 */}
            <div className="space-y-2">
              <Label htmlFor="apiHost">API 接口地址 *</Label>
              <Input
                id="apiHost"
                placeholder="https://api.example.com"
                required
                className="focus-visible:ring-brand-primary-500"
                {...register("apiHost", { required: true })}
              />
            </div>

            {/* 配置选项 */}
            <div className="space-y-3">
              {/* 启用状态 */}
              <div className="flex items-center justify-between">
                <Label htmlFor="enabled">启用供应商</Label>
                <Controller
                  name="enabled"
                  control={control}
                  render={({ field }) => (
                    <Switch
                      id="enabled"
                      className="data-[state=checked]:bg-brand-primary"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  )}
                />
              </div>
            </div>

            {/* 备注 */}
            <div className="space-y-2">
              <Label htmlFor="notes">备注</Label>
              <Textarea
                id="notes"
                placeholder="供应商相关备注信息..."
                rows={3}
                className="focus-visible:ring-brand-primary-500"
                {...register("notes")}
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
