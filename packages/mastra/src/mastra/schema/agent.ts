/**
 * Response Schemas
 * 用于 Router 的响应类型验证
 */
import { AgentSchema } from "generated/schemas/models";
import z from "zod";

// 基础 Agent Response Schema（不含关联关系）
export const AgentResponseSchema = AgentSchema.pick({
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
  groupJson: true,
  createdAt: true,
  updatedAt: true
});

// Agents 列表 Response Schema
export const AgentsResponseSchema = z.array(AgentResponseSchema);

// 带 settings 的 Agent Response Schema
export const AgentWithSettingsResponseSchema = AgentSchema.pick({
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
  groupJson: true,
  createdAt: true,
  updatedAt: true
}).extend({
  settings: z.array(
    z.object({
      id: z.string(),
      agentId: z.string(),
      key: z.string(),
      value: z.string(),
      createdAt: z.date(),
      updatedAt: z.date()
    })
  )
});

/**
 * 代理相关的zod校验schemas
 */

// 基于 AgentSchema 扩展自定义验证
export const createAgentSchema = AgentSchema.pick({
  name: true,
  prompt: true,
  type: true,
  emoji: true,
  description: true,
  enableWebSearch: true,
  webSearchProviderId: true,
  enableGenerateImage: true,
  knowledgeRecognition: true
}).extend({
  name: z.string().min(1, "代理名称不能为空"),
  prompt: z.string().min(1, "提示词不能为空"),
  type: z.string().optional().default("agent"),
  enableWebSearch: z.boolean().optional().default(false),
  enableGenerateImage: z.boolean().optional().default(false),
  groupJson: z.string().nullable().optional() // 存储 String[]
});

export const updateAgentSchema = AgentSchema.pick({
  name: true,
  prompt: true,
  type: true,
  emoji: true,
  description: true,
  enableWebSearch: true,
  webSearchProviderId: true,
  enableGenerateImage: true,
  knowledgeRecognition: true
})
  .partial()
  .extend({
    groupJson: z.string().nullable().optional() // 存储 String[]
  });

export const idParamSchema = z.object({
  id: z.string().min(1, "代理ID不能为空")
});

export const groupParamSchema = z.object({
  group: z.string().min(1, "分组不能为空")
});

// zod类型推导

export type CreateAgentInput = z.infer<typeof createAgentSchema>;

export type UpdateAgentInput = z.infer<typeof updateAgentSchema>;
