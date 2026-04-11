import React from "react";

import { CheckCircle2, Loader2, XCircle } from "lucide-react";

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
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

import type { ProviderConfigDialogProps } from "./useProviderConfig";
import { useProviderConfig } from "./useProviderConfig";

export const ProviderConfigDialog: React.FC<ProviderConfigDialogProps> = (
  props
) => {
  const {
    isSubmitting,
    provider,
    open,
    form,
    onDialogOpenChange,
    onSubmit,
    onTestConnection,
    testStatus,
    testMessage
  } = useProviderConfig(props);

  return (
    <Dialog open={open} onOpenChange={onDialogOpenChange}>
      <DialogContent className="max-w-md bg-brand-slate-100">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>供应商配置</DialogTitle>
              <DialogDescription>
                修改 {provider.name} 供应商的基本信息和接口配置
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-4">
              {/* 供应商名称 */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>供应商名称</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="请输入供应商名称"
                        className="border border-brandSlate-300 focus-visible:shadow-md focus-visible:ring-brand-primary-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* API Key */}
              <FormField
                control={form.control}
                name="apiKey"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>API Key</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="请输入API密钥"
                        className="border border-brandSlate-300 focus-visible:shadow-md focus-visible:ring-brand-primary-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* API 接口地址 */}
              <FormField
                control={form.control}
                name="apiHost"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>API 接口地址</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="https://api.example.com"
                        className="border border-brandSlate-300 focus-visible:shadow-md focus-visible:ring-brand-primary-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* 配置选项 */}
              <div className="space-y-3">
                {/* 启用状态 */}
                <FormField
                  control={form.control}
                  name="enabled"
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-between">
                      <FormLabel>启用供应商</FormLabel>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:border-brand-primary-500 data-[state=checked]:bg-brand-primary-500"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              {/* 备注 */}
              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>备注</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="供应商相关备注信息..."
                        rows={3}
                        className="border border-brandSlate-300 focus-visible:shadow-md focus-visible:ring-brand-primary-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter className="flex-col gap-2 sm:flex-col">
              {testStatus !== "idle" && (
                <div
                  className={
                    testStatus === "success"
                      ? "flex items-center gap-1.5 text-xs text-green-600 dark:text-green-400"
                      : testStatus === "error"
                        ? "flex items-center gap-1.5 text-xs text-red-600 dark:text-red-400"
                        : "flex items-center gap-1.5 text-xs text-muted-foreground"
                  }
                >
                  {testStatus === "testing" && (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  )}
                  {testStatus === "success" && (
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  )}
                  {testStatus === "error" && (
                    <XCircle className="h-3.5 w-3.5" />
                  )}
                  {testStatus === "testing" ? "正在测试..." : testMessage}
                </div>
              )}
              <div className="flex justify-end gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onDialogOpenChange(false)}
                  disabled={isSubmitting}
                  className="bg-brand-slate-200/20 hover:bg-brand-slate-200/60"
                >
                  取消
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={onTestConnection}
                  disabled={testStatus === "testing"}
                >
                  {testStatus === "testing" && (
                    <Loader2 className="mr-1 h-4 w-4 animate-spin" />
                  )}
                  测试连通性
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
              </div>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
