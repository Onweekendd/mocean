/**
 * Response Schemas
 * 用于 Router 的响应类型验证
 */
import {
  GroupSchema,
  ModelSchema,
  ProviderSchema
} from "generated/schemas/models/index";
import { z } from "zod";

// 基础 Provider Response Schema（不含关联关系）
export const ProviderResponseSchema = ProviderSchema.pick({
  id: true,
  type: true,
  name: true,
  apiKey: true,
  apiHost: true,
  apiVersion: true,
  enabled: true,
  isSystem: true,
  isAuthed: true,
  notes: true,
  isGateway: true,
  modelCount: true,
  docsUrl: true,
  createdAt: true,
  updatedAt: true
});

// 带 models 数组的 Provider Response Schema
export const FullProviderSchema = ProviderSchema.pick({
  id: true,
  type: true,
  name: true,
  apiKey: true,
  apiHost: true,
  apiVersion: true,
  enabled: true,
  isSystem: true,
  isAuthed: true,
  notes: true,
  isGateway: true,
  modelCount: true,
  docsUrl: true,
  createdAt: true,
  updatedAt: true
}).extend({
  groups: z.array(
    GroupSchema.extend({
      models: z.array(ModelSchema.partial())
    })
  ),
  _count: z
    .object({
      models: z.number()
    })
    .optional()
});

export const ProvidersResponseSchema = z.array(ProviderResponseSchema);

// Providers 列表 Response Schema（含 models）
export const ProvidersWithModelsResponseSchema = z.array(FullProviderSchema);

/**
 * URL 验证辅助函数
 */
const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// 基于 ProviderSchema 扩展自定义验证
export const createProviderSchema = ProviderSchema.pick({
  type: true,
  name: true,
  apiKey: true,
  apiHost: true,
  apiVersion: true,
  enabled: true,
  isSystem: true,
  isAuthed: true,
  notes: true
}).extend({
  name: z.string().min(1, "提供商名称不能为空"),
  apiKey: z.string().min(1, "API密钥不能为空"),
  apiHost: z.string().refine((val) => isValidUrl(val), {
    message: "API地址格式不正确"
  }),
  enabled: z.boolean().optional().default(true),
  isSystem: z.boolean().optional().default(false)
});

export const updateProviderSchema = ProviderSchema.pick({
  type: true,
  name: true,
  apiKey: true,
  apiHost: true,
  apiVersion: true,
  enabled: true,
  isSystem: true,
  isAuthed: true,
  notes: true
})
  .partial()
  .extend({
    name: z.string().min(1, "提供商名称不能为空").optional(),
    apiHost: z
      .string()
      .refine((val) => !val || isValidUrl(val), {
        message: "API地址格式不正确"
      })
      .optional(),
    id: z.string().min(1, "提供商ID不能为空")
  });

// zod类型推导
export type CreateProviderInput = z.infer<typeof createProviderSchema>;
export type UpdateProviderInput = z.infer<typeof updateProviderSchema>;
