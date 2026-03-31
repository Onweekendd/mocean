/**
 * Response Schemas
 * 用于 Router 的响应类型验证
 */
import { AgentFullSchema } from "generated/schemas/composed";
import { AgentGroupSchema, AgentSchema } from "generated/schemas/models";
import z from "zod";

// 基础 Agent Response Schema（不含关联关系）
export const AgentResponseSchema = AgentSchema.pick({
  id: true,
  name: true,
  prompt: true,
  type: true,
  emoji: true,
  description: true,
  createdAt: true,
  updatedAt: true
});

// Agents 列表 Response Schema
export const AgentsResponseSchema = z.array(AgentResponseSchema);

// 带 settings 的 Agent Response Schema
export const AgentWithSettingsResponseSchema = AgentFullSchema;

/**
 * 代理相关的zod校验schemas
 */

// 基于 AgentSchema 扩展自定义验证
export const createAgentSchema = AgentSchema.pick({
  name: true,
  prompt: true,
  type: true,
  emoji: true,
  description: true
}).extend({
  name: z.string().min(1, "代理名称不能为空"),
  prompt: z.string().min(1, "提示词不能为空"),
  type: z.string().optional().default("agent")
});

export const updateAgentSchema = AgentSchema.pick({
  name: true,
  prompt: true,
  type: true,
  emoji: true,
  description: true
}).partial();

export const idParamSchema = z.object({
  id: z.string().min(1, "代理ID不能为空")
});

export const groupParamSchema = z.object({
  group: z.string().min(1, "分组不能为空")
});

// Agent 分组列表 Response Schema - 返回分组对象数组
export const AgentGroupsResponseSchema = z.array(AgentGroupSchema);

// AgentGroup 单项 Response Schema
export const AgentGroupResponseSchema = AgentGroupSchema;

// AgentGroup 创建 Schema
export const createAgentGroupSchema = AgentGroupSchema.pick({
  name: true,
  label: true
}).extend({
  name: z.string().min(1, "分组名称不能为空"),
  label: z.string().min(1, "分组标签不能为空")
});

// AgentGroup 更新 Schema
export const updateAgentGroupSchema = AgentGroupSchema.pick({
  name: true,
  label: true
}).partial();

// Agent-Group 关系操作 Schema
export const agentGroupRelationSchema = z.object({
  agentId: z.string().min(1, "智能体ID不能为空"),
  groupId: z.string().min(1, "分组ID不能为空")
});

// zod类型推导
export type CreateAgentInput = z.infer<typeof createAgentSchema>;
export type UpdateAgentInput = z.infer<typeof updateAgentSchema>;
export type CreateAgentGroupInput = z.infer<typeof createAgentGroupSchema>;
export type UpdateAgentGroupInput = z.infer<typeof updateAgentGroupSchema>;
