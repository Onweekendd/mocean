"use client";

import { Bot, Plus } from "lucide-react";

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
import { useAddAgentForm } from "@/hooks/useAddAgentForm";
import { cn } from "@/lib/utils";

interface AddAgentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  groupId: string;
}

export function AddAgentDialog({
  open,
  onOpenChange,
  groupId
}: AddAgentDialogProps) {
  const { form, errors, isSubmitting, validateName, validatePrompt, onSubmit } =
    useAddAgentForm({ groupId, onOpenChange });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[85vh] flex-col gap-0 p-0 sm:max-w-[560px]">
        <DialogHeader className="shrink-0 px-6 pb-4 pt-6">
          <DialogTitle className="flex items-center gap-2 text-lg font-semibold">
            <Bot className="h-5 w-5 text-primary" />
            新增 Agent
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-6 pb-4">
          <Form {...form}>
            <div className="flex flex-col gap-5">
              {/* Row 1: Name + Emoji */}
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  rules={{ validate: validateName }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>代理名称</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="例如：代码助手"
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
                  name="emoji"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        表情符号{" "}
                        <span className="rounded bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">
                          可选
                        </span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="例如：🤖" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              {/* Row 2: Prompt */}
              <FormField
                control={form.control}
                name="prompt"
                rules={{ validate: validatePrompt }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>提示词</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="描述这个代理的角色和任务..."
                        rows={5}
                        {...field}
                        className={cn(
                          errors.prompt &&
                            "border-red-500 focus-visible:ring-red-500"
                        )}
                      />
                    </FormControl>
                    {errors.prompt?.message && (
                      <p className="text-xs text-red-600 dark:text-red-400">
                        {errors.prompt.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />

              {/* Row 3: Description */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      描述{" "}
                      <span className="rounded bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">
                        可选
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="简短描述这个代理的用途..."
                        {...field}
                      />
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
            disabled={isSubmitting}
            className="bg-brand-primary-500 hover:bg-brand-primary-600 focus-visible:ring-brand-primary-600"
          >
            <Plus className="mr-1 h-4 w-4" />
            新增 Agent
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
