/**
 * Response Schemas
 * 用于 Router 的响应类型验证
 */
import { GroupFullSchema } from "generated/schemas/composed";
import { GroupSchema } from "generated/schemas/models/index";
import { z } from "zod";

// Groups 列表 Response Schema（不含 models）
export const SimleGroupsArraySchema = z.array(GroupSchema);

// 带 models 数组的 Group Response Schema
export const GroupWithModelsResponseSchema = GroupFullSchema.omit({
  provider: true
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
