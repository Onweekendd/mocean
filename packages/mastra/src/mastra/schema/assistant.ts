/**
 * Response Schemas
 * 用于 Router 的响应类型验证
 */
import { AssistantFullSchema } from "generated/schemas/composed";
import {
  AssistantSchema,
  AssistantSettingsSchema,
  ModelSchema
} from "generated/schemas/models/index";
import { z } from "zod";

// Re-export base schemas for router usage
export { AssistantSchema, AssistantFullSchema };

// Assistants 列表 Response Schema
export const SimpleAssistantArraySchema = z.array(AssistantSchema);

// 带 model、settings 的 Assistant Response Schema
export const AssistantWithModelsAndSettingsSchema = AssistantSchema.pick({
  id: true,
  name: true,
  prompt: true,
  type: true,
  emoji: true,
  description: true,
  enableWebSearch: true,
  webSearchProviderId: true,
  enableGenerateImage: true,
  knowledgeRecognition: true,
  modelId: true,
  providerId: true,
  createdAt: true,
  updatedAt: true
}).extend({
  model: ModelSchema.partial().nullish(),
  settings: AssistantSettingsSchema.partial().nullish()
});

/**
 * 助手相关的zod校验schemas
 */

// 基于 AssistantSchema 扩展自定义验证
export const createAssistantSchema = z.object({
  name: z.string().min(1, "助手名称不能为空"),
  prompt: z.string().min(1, "提示词不能为空"),
  type: z.string().optional().default("assistant"),
  emoji: z.string().nullish().optional(),
  description: z.string().nullish().optional(),
  enableWebSearch: z.boolean().optional().default(false),
  webSearchProviderId: z.string().nullish().optional(),
  enableGenerateImage: z.boolean().optional().default(false),
  knowledgeRecognition: z.string().nullish().optional(),
  modelId: z.string().nullable().optional(),
  providerId: z.string().nullable().optional()
});

export const updateAssistantSchema = z.object({
  name: z.string().min(1, "助手名称不能为空").optional(),
  prompt: z.string().min(1, "提示词不能为空").optional(),
  type: z.string().optional(),
  emoji: z.string().nullish().optional(),
  description: z.string().nullish().optional(),
  enableWebSearch: z.boolean().optional(),
  webSearchProviderId: z.string().nullish().optional(),
  enableGenerateImage: z.boolean().optional(),
  knowledgeRecognition: z.string().nullish().optional(),
  modelId: z.string().nullable().optional(),
  providerId: z.string().nullable().optional()
});

export const assistantIdParamSchema = z.object({
  assistantId: z.string().min(1, "助手ID不能为空")
});

export const assistantThreadIdParamSchema = z.object({
  assistantId: z.string().min(1, "助手ID不能为空"),
  threadId: z.string().min(1, "线程ID不能为空")
});

export const chatWithAssistantSchema = z.object({
  assistantId: z.string().min(1, "助手ID不能为空"),
  messages: z.array(z.any()),
  threadId: z.string().optional()
});

export type FullAssistantType = z.infer<typeof AssistantFullSchema>;

export type CreateAssistantInputType = z.infer<typeof createAssistantSchema>;
export type UpdateAssistantInputType = z.infer<typeof updateAssistantSchema>;
