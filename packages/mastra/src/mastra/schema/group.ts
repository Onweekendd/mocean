/**
 * Response Schemas
 * 用于 Router 的响应类型验证
 */
import { GroupSchema } from "generated/schemas/models/index";
import { z } from "zod";

// 基础 Group Response Schema（不含 models）
export const GroupResponseSchema = GroupSchema.pick({
  id: true,
  name: true,
  providerId: true,
  isDefault: true,
  createdAt: true,
  updatedAt: true
});

// Groups 列表 Response Schema（不含 models）
export const GroupsResponseSchema = z.array(GroupResponseSchema);

// 带 models 数组的 Group Response Schema
export const GroupWithModelsResponseSchema = GroupSchema.pick({
  id: true,
  name: true,
  providerId: true,
  isDefault: true,
  createdAt: true,
  updatedAt: true
}).extend({
  models: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      owned_by: z.string().nullable(),
      description: z.string().nullable(),
      isSystem: z.boolean(),
      contextLength: z.number().int().nullable(),
      supportsAttachments: z.boolean(),
      supportsTools: z.boolean(),
      supportsReasoning: z.boolean(),
      supportsImage: z.boolean(),
      supportsAudio: z.boolean(),
      supportsVideo: z.boolean(),
      supportsEmbedding: z.boolean(),
      inputPricePerMillion: z.number().nullable(),
      outputPricePerMillion: z.number().nullable(),
      createdAt: z.date(),
      updatedAt: z.date()
    })
  ),
  _count: z
    .object({
      models: z.number()
    })
    .optional()
});

/**
 * 分组相关的zod校验schemas
 */
// 基于 GroupSchema 扩展自定义验证
export const createGroupSchema = GroupSchema.pick({
  name: true,
  providerId: true
}).extend({
  name: z.string().min(1, "分组名称不能为空"),
  providerId: z.string().min(1, "提供商ID不能为空")
});

export const updateGroupSchema = GroupSchema.pick({
  name: true
})
  .partial()
  .extend({
    name: z.string().min(1, "分组名称不能为空").optional()
  });

export const idParamSchema = z.object({
  id: z.string().min(1, "分组ID不能为空")
});

export const providerParamSchema = z.object({
  providerId: z.string().min(1, "提供商ID不能为空")
});

// zod类型推导
export type CreateGroupInput = z.infer<typeof createGroupSchema>;
export type UpdateGroupInput = z.infer<typeof updateGroupSchema>;
