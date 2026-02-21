/**
 * Response Schemas
 * 用于 Router 的响应类型验证
 */
import {
  GroupFullSchema,
  ProviderFullSchema
} from "generated/schemas/composed";
import { ProviderSchema } from "generated/schemas/models/index";
import { z } from "zod";

/**
 * 简单的 Provider 列表 Schema
 * 不包含关联的 groups 和 models
 */
export const SimpleProvidersArraySchema = z.array(ProviderSchema);

/**
 * Provider 层级结构 Schema
 * Provider -> Group -> Model 三层嵌套结构
 * 不包含 Assistant 关联
 */
export const ProviderHierarchySchema = ProviderFullSchema.omit({
  Assistant: true
}).extend({
  groups: z.array(GroupFullSchema.omit({ provider: true }))
});

/**
 * Provider 层级结构数组 Schema
 * 用于返回多个 Provider 的完整层级数据
 */
export const ProviderHierarchyArraySchema = z.array(ProviderHierarchySchema);

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

// 响应类型
export type SimpleProvider = z.infer<typeof SimpleProvidersArraySchema>[number];
export type SimpleProviderArray = z.infer<typeof SimpleProvidersArraySchema>;
export type ProviderHierarchy = z.infer<typeof ProviderHierarchySchema>;
export type ProviderHierarchyArray = z.infer<
  typeof ProviderHierarchyArraySchema
>;
