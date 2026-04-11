"use client";

import { Loader2, Pencil } from "lucide-react";

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
import { ModelSelector } from "@/components/custom/model-selector";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import type { EditAssistantDialogProps } from "./useAssistantEdit";
import { useAssistantEdit } from "./useAssistantEdit";

const EditAssistantDialog: React.FC<EditAssistantDialogProps> = (props) => {
  const {
    assistant,
    open,
    form,
    modelSelection,
    setModelSelection,
    isSubmitting,
    onDialogOpenChange,
    onSubmit
  } = useAssistantEdit(props);

  if (!assistant) return null;

  return (
    <Dialog open={open} onOpenChange={onDialogOpenChange}>
      <DialogContent className="max-h-[80vh] max-w-lg overflow-y-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>编辑助手</DialogTitle>
              <DialogDescription>
                修改 &quot;{assistant.name}&quot; 的基本信息
              </DialogDescription>
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
                        <Input
                          {...field}
                          value={field.value ?? ""}
                          placeholder="😊"
                          className="w-16 text-center text-lg"
                          maxLength={2}
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
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditAssistantDialog;
