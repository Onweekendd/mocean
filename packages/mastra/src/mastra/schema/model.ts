/**
 * Response Schemas
 * 用于 Router 的响应类型验证
 */
import { ModelSchema, ProviderSchema } from "generated/schemas/models";
import { z } from "zod";

// 基础 Model Response Schema（不含关联关系）
export const ModelResponseSchema = ModelSchema;

// Models 列表 Response Schema
export const ModelsResponseSchema = z.array(ModelResponseSchema);

// 带 providers 数组的 Model Response Schema
export const ModelWithProvidersResponseSchema = ModelSchema.pick({
  id: true,
  name: true,
  owned_by: true,
  description: true,
  isSystem: true,
  contextLength: true,
  supportsAttachments: true,
  supportsTools: true,
  supportsReasoning: true,
  supportsImage: true,
  supportsAudio: true,
  supportsVideo: true,
  supportsEmbedding: true,
  inputPricePerMillion: true,
  outputPricePerMillion: true,
  sort: true,
  createdAt: true,
  updatedAt: true
}).extend({
  providers: z.array(ProviderSchema)
});

// 批量创建响应 Schema
export const CreateManyModelsResponseSchema = z.object({
  count: z.number()
});

// 模型提供商关联响应 Schema
export const ModelProviderRelationResponseSchema = z.object({
  modelId: z.string(),
  providerId: z.string(),
  groupId: z.string(),
  model: ModelResponseSchema,
  provider: z.any(),
  group: z.any()
});

/**
 * 模型相关的zod校验schemas
 */

// 从 ModelSchema 中提取字段类型，然后扩展自定义验证
export const createModelSchema = ModelSchema.pick({
  id: true,
  name: true,
  owned_by: true,
  description: true,
  isSystem: true,
  contextLength: true,
  supportsAttachments: true,
  supportsTools: true,
  supportsReasoning: true,
  supportsImage: true,
  supportsAudio: true,
  supportsVideo: true,
  supportsEmbedding: true,
  inputPricePerMillion: true,
  outputPricePerMillion: true
}).extend({
  id: z.string().min(1, "模型ID不能为空"),
  name: z.string().min(1, "模型名称不能为空"),
  groupId: z.string().min(1, "分组ID不能为空"),
  isSystem: z.boolean().optional().default(false),
  supportsAttachments: z.boolean().optional().default(false),
  supportsTools: z.boolean().optional().default(false),
  supportsReasoning: z.boolean().optional().default(false),
  supportsImage: z.boolean().optional().default(false),
  supportsAudio: z.boolean().optional().default(false),
  supportsVideo: z.boolean().optional().default(false),
  supportsEmbedding: z.boolean().optional().default(false),
  // 扩展 providers 字段（用于 modelGroups 关联）
  providers: ProviderSchema.partial()
});

export const updateModelSchema = ModelSchema.pick({
  id: true,
  name: true,
  owned_by: true,
  description: true,
  isSystem: true,
  sort: true,
  contextLength: true,
  supportsAttachments: true,
  supportsTools: true,
  supportsReasoning: true,
  supportsImage: true,
  supportsAudio: true,
  supportsVideo: true,
  supportsEmbedding: true,
  inputPricePerMillion: true,
  outputPricePerMillion: true
}).extend({
  name: z.string().min(1, "模型名称不能为空").optional(),
  groupId: z.string().optional()
});

export const idParamSchema = z.object({
  id: z.string().min(1, "模型ID不能为空")
});

export const providerParamSchema = z.object({
  providerId: z.string().min(1, "提供商ID不能为空")
});

export const groupParamSchema = z.object({
  group: z.string().min(1, "分组不能为空")
});

export const modelProviderRelationSchema = z.object({
  modelId: z.string().min(1, "模型ID不能为空"),
  providerId: z.string().min(1, "提供商ID不能为空"),
  groupId: z.string().min(1, "分组ID不能为空")
});

// zod类型推导
export type CreateModelInput = z.infer<typeof createModelSchema>;
export type UpdateModelInput = z.infer<typeof updateModelSchema>;
