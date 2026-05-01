/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useAssistantsApi } from "@mocean/mastra/apiClient";
import {
  AssistantFullSchema,
  AssistantSettingsFullSchema
} from "@mocean/mastra/schemas";
import type { AssistantFullType } from "@mocean/mastra/schemas";
import { useForm } from "react-hook-form";
import { z } from "zod";

import type { ModelSelection } from "@/components/custom/useModelSelector";
import { useFullAssistant } from "@/hooks/useAssistantsSWR";
import { useEnabledProvidersWithModels } from "@/hooks/useProvidersSWR";

export enum reasoningEffort {
  Low = "low",
  Medium = "medium",
  High = "high"
}

const settingsPanelSchema = z.object({
  name: AssistantFullSchema.shape.name.min(1, "助手名称不能为空"),
  emoji: AssistantFullSchema.shape.emoji,
  description: AssistantFullSchema.shape.description,
  prompt: AssistantFullSchema.shape.prompt.min(1, "提示词不能为空"),
  contextCount: AssistantSettingsFullSchema.shape.contextCount.min(1).max(100),
  temperature: AssistantSettingsFullSchema.shape.temperature.min(0).max(2),
  topP: AssistantSettingsFullSchema.shape.topP.min(0).max(1),
  maxTokens: AssistantSettingsFullSchema.shape.maxTokens,
  enableMaxTokens: z.boolean(),
  streamOutput: z.boolean(),
  hideMessages: z.boolean(),
  reasoning_effort: z.enum(reasoningEffort).nullable(),
  qwenThinkMode: AssistantSettingsFullSchema.shape.qwenThinkMode,
  toolUseMode: AssistantSettingsFullSchema.shape.toolUseMode
});

export type SettingsPanelFormData = z.infer<typeof settingsPanelSchema>;

export const DEFAULT_SETTINGS: Partial<SettingsPanelFormData> = {
  contextCount: 20,
  temperature: 0.7,
  topP: 1,
  enableMaxTokens: false,
  streamOutput: true,
  hideMessages: false
};

export const useAssistantSettingsPanel = (assistantId: string | null) => {
  const {
    assistant,
    isLoading,
    refresh: mutateAssistant
  } = useFullAssistant(assistantId);
  const { updateAssistant } = useAssistantsApi();
  const { providers } = useEnabledProvidersWithModels();
  const [isSaving, setIsSaving] = useState(false);

  const [modelSelection, setModelSelection] = useState<
    ModelSelection | undefined
  >(undefined);

  const initialModelSelection = useMemo(() => {
    if (!assistant?.modelId || !assistant?.providerId || providers.length === 0)
      return undefined;
    const provider = providers.find((p) => p.id === assistant.providerId);
    if (!provider) return undefined;
    const model = provider.groups
      .flatMap((g) => g.models)
      .find((m) => m.id === assistant.modelId);
    if (!model) return undefined;
    return { provider, model } as ModelSelection;
  }, [assistant, providers]);

  const form = useForm<SettingsPanelFormData>({
    resolver: zodResolver(settingsPanelSchema),
    defaultValues: {
      name: "",
      emoji: "",
      description: "",
      prompt: "",
      ...DEFAULT_SETTINGS
    }
  });

  // Only reset form when switching to a different assistant.
  // Same-assistant SWR refreshes (after auto-save) are intentionally ignored
  // to prevent the flash caused by form.reset() re-rendering all fields.
  const lastFormResetIdRef = useRef<string | null>(null);
  useEffect(() => {
    if (!assistant) return;
    if (lastFormResetIdRef.current === assistant.id) return;
    lastFormResetIdRef.current = assistant.id;
    const s = assistant.settings;
    form.reset({
      name: assistant.name ?? "",
      emoji: assistant.emoji ?? "",
      description: assistant.description ?? "",
      prompt: assistant.prompt ?? "",
      contextCount: s?.contextCount ?? DEFAULT_SETTINGS.contextCount!,
      temperature: s?.temperature ?? DEFAULT_SETTINGS.temperature!,
      topP: s?.topP ?? DEFAULT_SETTINGS.topP!,
      maxTokens: s?.maxTokens ?? null,
      enableMaxTokens: s?.enableMaxTokens ?? DEFAULT_SETTINGS.enableMaxTokens!,
      streamOutput: s?.streamOutput ?? DEFAULT_SETTINGS.streamOutput!,
      hideMessages: s?.hideMessages ?? DEFAULT_SETTINGS.hideMessages!,
      reasoning_effort: (s?.reasoning_effort as reasoningEffort) ?? null,
      qwenThinkMode: s?.qwenThinkMode ?? null,
      toolUseMode: s?.toolUseMode ?? null
    });
  }, [assistant, form]);

  // Initialize model selection once per assistant, waiting for providers to load.
  // Pre-seeds prevModelIdRef so the model auto-save effect ignores the initialization.
  const prevModelIdRef = useRef<string | undefined>(undefined);
  const lastModelInitIdRef = useRef<string | null>(null);
  useEffect(() => {
    if (!assistant) {
      return;
    }

    if (lastModelInitIdRef.current === assistant.id) {
      return;
    }

    if (!initialModelSelection && assistant.modelId) {
      return;
    }

    // Providers not loaded yet
    lastModelInitIdRef.current = assistant.id;

    prevModelIdRef.current = initialModelSelection?.model.id;
    setModelSelection(initialModelSelection);
  }, [assistant, initialModelSelection]);

  const onSubmit = useCallback(
    async (data: SettingsPanelFormData) => {
      if (!assistant) {
        return;
      }

      const { name, emoji, description, prompt, ...settingsFields } = data;

      const payload = {
        name: name.trim(),
        emoji: emoji?.trim() || null,
        description: description?.trim() || null,
        prompt: prompt.trim(),
        modelId: modelSelection?.model.id ?? null,
        providerId: modelSelection?.provider.id ?? null,
        settings: settingsFields
      };

      const optimistic: AssistantFullType = {
        ...assistant,
        ...payload,
        settings: assistant.settings
          ? { ...assistant.settings, ...settingsFields }
          : assistant.settings
      };

      await mutateAssistant(
        async () => {
          await updateAssistant(assistant.id, payload);
          // Return optimistic to hold until revalidation fetches fresh full data.
          // updateAssistant endpoint only returns partial data (no provider relation).
          return optimistic;
        },
        { optimisticData: optimistic, revalidate: true }
      );
    },
    [assistant, updateAssistant, mutateAssistant, modelSelection]
  );

  const onSubmitRef = useRef(onSubmit);
  useEffect(() => {
    onSubmitRef.current = onSubmit;
  });

  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );

  const triggerSave = useCallback(() => {
    clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(() => {
      setIsSaving(true);
      void form.handleSubmit(
        async (data) => {
          await onSubmitRef.current(data);
          setIsSaving(false);
        },
        () => setIsSaving(false)
      )();
    }, 600);
  }, [form]);

  // Auto-save on form field changes (name === undefined means programmatic reset)
  useEffect(() => {
    const sub = form.watch((_data, { name }) => {
      if (!name || !assistant) return;
      triggerSave();
    });
    return () => {
      sub.unsubscribe();
      clearTimeout(saveTimeoutRef.current);
    };
  }, [form, assistant, triggerSave]);

  // Auto-save when model selection changes (user action).
  // prevModelIdRef is pre-seeded during initialization so this only fires on user changes.
  useEffect(() => {
    const newId = modelSelection?.model.id;
    if (prevModelIdRef.current === newId) return;
    prevModelIdRef.current = newId;
    triggerSave();
  }, [modelSelection, triggerSave]);

  return {
    assistant,
    isLoading,
    form,
    modelSelection,
    setModelSelection,
    isSaving
  };
};
