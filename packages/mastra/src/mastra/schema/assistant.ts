/**
 * Response Schemas
 * 用于 Router 的响应类型验证
 */
import {
  AssistantSchema,
  AssistantSettingsSchema,
  KnowledgeBaseSchema,
  MCPServerSchema,
  ModelSchema,
  ProviderSchema,
  TopicSchema
} from "generated/schemas/models/index";
import { z } from "zod";

// 基础 Assistant Response Schema（不含关联关系）
export const AssistantResponseSchema = AssistantSchema.pick({
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
  defaultModelId: true,
  providerId: true,
  createdAt: true,
  updatedAt: true
});

// Assistants 列表 Response Schema
export const AssistantsResponseSchema = z.array(AssistantResponseSchema);

// 带 model、defaultModel、settings 的 Assistant Response Schema
export const AssistantWithModelsResponseSchema = AssistantSchema.pick({
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
  defaultModelId: true,
  providerId: true,
  createdAt: true,
  updatedAt: true
}).extend({
  model: ModelSchema.partial().nullish(),
  defaultModel: ModelSchema.partial().nullish(),
  settings: AssistantSettingsSchema.partial().nullish()
});

// 带 provider 的完整 Assistant Response Schema
export const FullAssistantSchema = AssistantSchema.pick({
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
  defaultModelId: true,
  providerId: true,
  createdAt: true,
  updatedAt: true
}).extend({
  model: ModelSchema.partial().nullish(),
  defaultModel: ModelSchema.partial().nullish(),
  provider: ProviderSchema.partial().nullish(),
  settings: AssistantSettingsSchema.partial().nullish(),
  topics: z.array(TopicSchema.partial()),
  knowledgeBases: z.array(KnowledgeBaseSchema.partial()),
  mcpServers: z.array(MCPServerSchema.partial())
});

/**
 * 助手相关的zod校验schemas
 */

// 基于 AssistantSchema 扩展自定义验证
export const createAssistantSchema = AssistantSchema.pick({
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
  defaultModelId: true,
  providerId: true
}).extend({
  name: z.string().min(1, "助手名称不能为空"),
  prompt: z.string().min(1, "提示词不能为空"),
  type: z.string().optional().default("assistant"),
  enableWebSearch: z.boolean().optional().default(false),
  enableGenerateImage: z.boolean().optional().default(false),
  modelId: z.string().nullable().optional(),
  defaultModelId: z.string().nullable().optional()
});

export const updateAssistantSchema = AssistantSchema.pick({
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
  defaultModelId: true
})
  .partial()
  .extend({
    name: z.string().min(1, "助手名称不能为空").optional()
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

export const assistantWithModelSchema = AssistantSchema.extend({
  model: ModelSchema.partial().nullish(),
  defaultModel: ModelSchema.partial().nullish(),
  settings: AssistantSettingsSchema.partial().nullish()
});

// zod类型推导
export type CreateAssistantInput = z.infer<typeof createAssistantSchema>;
export type UpdateAssistantInput = z.infer<typeof updateAssistantSchema>;
export type AssistantResponse = z.infer<typeof AssistantResponseSchema>;
export type AssistantsResponse = z.infer<typeof AssistantsResponseSchema>;
export type AssistantWithModelsResponse = z.infer<
  typeof AssistantWithModelsResponseSchema
>;
export type FullAssistant = z.infer<typeof FullAssistantSchema>;
export type AssistantWithModel = z.infer<typeof assistantWithModelSchema>;
