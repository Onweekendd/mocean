"use client";

import { Plus, Users } from "lucide-react";

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
import { useAddAgentGroupForm } from "@/hooks/useAddAgentGroupForm";
import { cn } from "@/lib/utils";

interface AddAgentGroupDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddAgentGroupDialog({
  open,
  onOpenChange
}: AddAgentGroupDialogProps) {
  const { form, errors, validateName, validateLabel, onSubmit } =
    useAddAgentGroupForm({ onOpenChange });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[85vh] flex-col gap-0 p-0 sm:max-w-[560px]">
        <DialogHeader className="shrink-0 px-6 pb-4 pt-6">
          <DialogTitle className="flex items-center gap-2 text-lg font-semibold">
            <Users className="h-5 w-5 text-primary" />
            新增 Agent 分组
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-6 pb-4">
          <Form {...form}>
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  rules={{ validate: validateName }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>分组标识符</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="例如：custom-coding"
                          {...field}
                          className={cn(
                            errors.name &&
                              "border-red-500 focus-visible:ring-red-500"
                          )}
                        />
                      </FormControl>
                      <p className="text-xs text-muted-foreground">
                        仅支持小写字母、数字和连字符
                      </p>
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
                  name="label"
                  rules={{ validate: validateLabel }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>显示名称</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="例如：自定义"
                          {...field}
                          className={cn(
                            errors.label &&
                              "border-red-500 focus-visible:ring-red-500"
                          )}
                        />
                      </FormControl>
                      {errors.label?.message && (
                        <p className="text-xs text-red-600 dark:text-red-400">
                          {errors.label.message}
                        </p>
                      )}
                    </FormItem>
                  )}
                />
              </div>
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
            新增分组
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
