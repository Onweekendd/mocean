"use client";

import { ArrowLeft, Loader2 } from "lucide-react";

import { ModelSelector } from "@/components/custom/model-selector";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

import AssistantIconPicker from "./AssistantIconPicker";
import { useAssistantSettingsPanel } from "./useAssistantSettingsPanel";

interface AssistantSettingsPanelProps {
  assistantId: string | null;
  onBack: () => void;
  onSaved?: () => void;
}

const AssistantSettingsPanel: React.FC<AssistantSettingsPanelProps> = ({
  assistantId,
  onBack
}) => {
  const {
    assistant,
    isLoading,
    form,
    modelSelection,
    setModelSelection,
    isSaving
  } = useAssistantSettingsPanel(assistantId);

  if (isLoading || !assistant) {
    return (
      <div className="flex h-full items-center justify-center">
        <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between pb-1 pt-4">
        <button
          onClick={onBack}
          className="group flex min-w-0 items-center gap-1 rounded-lg px-1 py-1.5 transition-colors duration-150 hover:bg-foreground/[0.04]"
        >
          <ArrowLeft className="h-3.5 w-3.5 shrink-0 text-brand-text-muted transition-transform duration-150 group-hover:-translate-x-0.5" />
          <span className="truncate text-[13px] font-medium text-brand-text">
            {assistant.name}
          </span>
        </button>
        {isSaving && (
          <Loader2 className="h-3.5 w-3.5 shrink-0 animate-spin text-brand-text-muted" />
        )}
      </div>

      {/* Scrollable form */}
      <ScrollArea className="flex-1">
        <div className="pb-4 pr-2 pt-1">
          <Form {...form}>
            <form className="space-y-5">
              {/* ── 基本信息 ── */}
              <section className="space-y-3">
                <p className="px-1 text-[11px] font-medium uppercase tracking-wider text-brand-text-muted">
                  基本信息
                </p>

                <div className="flex gap-3">
                  <FormField
                    control={form.control}
                    name="emoji"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs">图标</FormLabel>
                        <FormControl>
                          <AssistantIconPicker
                            value={field.value ?? ""}
                            onChange={field.onChange}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className="text-xs">名称</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="助手名称"
                            className="h-8 text-sm"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs">描述</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value ?? ""}
                          placeholder="简短描述助手的用途"
                          className="h-8 text-sm"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </section>

              {/* ── 模型 ── */}
              <section className="space-y-3">
                <p className="px-1 text-[11px] font-medium uppercase tracking-wider text-brand-text-muted">
                  模型
                </p>
                <ModelSelector
                  value={modelSelection}
                  onChange={setModelSelection}
                  className="w-full"
                />
              </section>

              {/* ── 提示词 ── */}
              <section className="space-y-3">
                <p className="px-1 text-[11px] font-medium uppercase tracking-wider text-brand-text-muted">
                  系统提示词
                </p>
                <FormField
                  control={form.control}
                  name="prompt"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="设定助手的角色和行为..."
                          rows={5}
                          className="text-sm"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </section>

              {/* ── 模型参数 ── */}
              <section className="space-y-4">
                <p className="px-1 text-[11px] font-medium uppercase tracking-wider text-brand-text-muted">
                  模型参数
                </p>

                <FormField
                  control={form.control}
                  name="temperature"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel className="text-xs">
                          温度 (Temperature)
                        </FormLabel>
                        <span className="text-xs text-brand-text-muted">
                          {field.value.toFixed(2)}
                        </span>
                      </div>
                      <FormControl>
                        <Slider
                          min={0}
                          max={2}
                          step={0.01}
                          value={[field.value]}
                          onValueChange={([v]) => field.onChange(v)}
                          className="mt-1"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="topP"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel className="text-xs">Top P</FormLabel>
                        <span className="text-xs text-brand-text-muted">
                          {field.value.toFixed(2)}
                        </span>
                      </div>
                      <FormControl>
                        <Slider
                          min={0}
                          max={1}
                          step={0.01}
                          value={[field.value]}
                          onValueChange={([v]) => field.onChange(v)}
                          className="mt-1"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contextCount"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel className="text-xs">上下文条数</FormLabel>
                        <span className="text-xs text-brand-text-muted">
                          {field.value}
                        </span>
                      </div>
                      <FormControl>
                        <Slider
                          min={1}
                          max={100}
                          step={1}
                          value={[field.value]}
                          onValueChange={([v]) => field.onChange(v)}
                          className="mt-1"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="enableMaxTokens"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel className="text-xs">
                          限制输出 Token
                        </FormLabel>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </div>
                    </FormItem>
                  )}
                />

                {form.watch("enableMaxTokens") && (
                  <FormField
                    control={form.control}
                    name="maxTokens"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs">最大 Token 数</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="2048"
                            value={field.value ?? ""}
                            onChange={(e) =>
                              field.onChange(
                                e.target.value ? Number(e.target.value) : null
                              )
                            }
                            className="h-8 text-sm"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </section>

              {/* ── 行为设置 ── */}
              <section className="space-y-3">
                <p className="px-1 text-[11px] font-medium uppercase tracking-wider text-brand-text-muted">
                  行为设置
                </p>

                <FormField
                  control={form.control}
                  name="streamOutput"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel className="text-xs">流式输出</FormLabel>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="hideMessages"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel className="text-xs">隐藏消息历史</FormLabel>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </div>
                    </FormItem>
                  )}
                />
              </section>
            </form>
          </Form>
        </div>
      </ScrollArea>
    </div>
  );
};

export default AssistantSettingsPanel;
