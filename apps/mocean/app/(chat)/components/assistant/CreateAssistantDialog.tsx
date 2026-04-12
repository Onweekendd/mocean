"use client";

import { Loader2, Plus } from "lucide-react";

import { ModelSelector } from "@/components/custom/model-selector";
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
import { Textarea } from "@/components/ui/textarea";

import AssistantIconPicker from "./AssistantIconPicker";
import type { CreateAssistantDialogProps } from "./useAssistantCreate";
import { useAssistantCreate } from "./useAssistantCreate";

const CreateAssistantDialog: React.FC<CreateAssistantDialogProps> = (props) => {
  const {
    open,
    form,
    modelSelection,
    setModelSelection,
    isSubmitting,
    onDialogOpenChange,
    onSubmit
  } = useAssistantCreate(props);

  return (
    <Dialog open={open} onOpenChange={onDialogOpenChange}>
      <DialogContent className="max-h-[80vh] max-w-lg overflow-y-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>创建助手</DialogTitle>
              <DialogDescription>自定义你的专属 AI 助手</DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-4">
              <div className="flex gap-3">
                {/* 图标 */}
                <FormField
                  control={form.control}
                  name="emoji"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>图标</FormLabel>
                      <FormControl>
                        <AssistantIconPicker
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* 名称 */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>名称</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="助手名称" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* 描述 */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>描述</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        value={field.value ?? ""}
                        placeholder="简短描述助手的用途"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* 模型 */}
              <div className="space-y-2">
                <FormLabel>模型</FormLabel>
                <ModelSelector
                  value={modelSelection}
                  onChange={setModelSelection}
                  className="w-full"
                />
              </div>

              {/* 提示词 */}
              <FormField
                control={form.control}
                name="prompt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>提示词</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="设定助手的角色和行为..."
                        rows={6}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                    创建中...
                  </>
                ) : (
                  <>
                    <Plus className="mr-2 h-4 w-4" />
                    创建助手
                  </>
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateAssistantDialog;
