"use client";

import { Plus, Server } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAddProviderForm } from "@/hooks/useAddProviderForm";
import { cn } from "@/lib/utils";

interface AddProviderDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddProviderDialog({
  open,
  onOpenChange
}: AddProviderDialogProps) {
  const {
    form,
    errors,
    validateType,
    validateName,
    validateApiKey,
    validateApiHost,
    onSubmit
  } = useAddProviderForm({ onOpenChange });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[85vh] flex-col gap-0 p-0 sm:max-w-[560px]">
        <DialogHeader className="shrink-0 px-6 pb-4 pt-6">
          <DialogTitle className="flex items-center gap-2 text-lg font-semibold">
            <Server className="h-5 w-5 text-primary" />
            新增提供商
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-6 pb-4">
          <Form {...form}>
            <div className="flex flex-col gap-5">
              {/* Row 1: 供应商名称 + 供应商ID */}
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  rules={{ validate: validateName }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>供应商名称</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="例如：我的 OpenAI"
                          {...field}
                          className={cn(
                            errors.name &&
                              "border-red-500 focus-visible:ring-red-500"
                          )}
                        />
                      </FormControl>
                      {errors.name?.message && (
                        <p className="text-xs text-red-600 dark:text-red-400">
                          {errors.name.message}
                        </p>
                      )}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="type"
                  rules={{ validate: validateType }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>供应商 ID</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="例如：openai"
                          {...field}
                          className={cn(
                            errors.type &&
                              "border-red-500 focus-visible:ring-red-500"
                          )}
                        />
                      </FormControl>
                      {errors.type?.message && (
                        <p className="text-xs text-red-600 dark:text-red-400">
                          {errors.type.message}
                        </p>
                      )}
                    </FormItem>
                  )}
                />
              </div>

              {/* Row 2: API Key */}
              <FormField
                control={form.control}
                name="apiKey"
                rules={{ validate: validateApiKey }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>API 密钥</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="sk-..."
                        {...field}
                        className={cn(
                          errors.apiKey &&
                            "border-red-500 focus-visible:ring-red-500"
                        )}
                      />
                    </FormControl>
                    {errors.apiKey?.message && (
                      <p className="text-xs text-red-600 dark:text-red-400">
                        {errors.apiKey.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />

              {/* Row 3: API Host */}
              <FormField
                control={form.control}
                name="apiHost"
                rules={{ validate: validateApiHost }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>API 地址</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://api.example.com"
                        {...field}
                        className={cn(
                          errors.apiHost &&
                            "border-red-500 focus-visible:ring-red-500"
                        )}
                      />
                    </FormControl>
                    {errors.apiHost?.message && (
                      <p className="text-xs text-red-600 dark:text-red-400">
                        {errors.apiHost.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />

              {/* Row 4: Notes */}
              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      备注{" "}
                      <span className="rounded bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">
                        可选
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Textarea rows={3} placeholder="备注信息..." {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </Form>
        </div>

        <div className="flex shrink-0 items-center justify-between border-t bg-background px-6 py-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            取消
          </Button>
          <Button
            onClick={onSubmit}
            className="bg-brand-primary-500 hover:bg-brand-primary-600 focus-visible:ring-brand-primary-600"
          >
            <Plus className="mr-1 h-4 w-4" />
            新增提供商
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
