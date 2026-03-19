import { MCPServerFullSchema } from "generated/schemas/composed";
import { MCPServerSchema } from "generated/schemas/models/MCPServer.schema";
import { MCPToolSchema } from "generated/schemas/models/MCPTool.schema";
import { z } from "zod";

// ==================== Response Schemas ====================

/** MCP 服务器列表（基础，无关联） */
export const McpServerListSchema = z.array(MCPServerSchema);

/** MCP 服务器详情（含 tools/prompts/resources，不含 assistants） */
export const McpServerDetailSchema = MCPServerFullSchema.omit({
  assistants: true
});

/** MCP 工具响应 */
export const McpToolResponseSchema = MCPToolSchema;

// ==================== Request Schemas ====================

/** 创建 MCP 服务器 */
export const createMcpServerSchema = MCPServerSchema.pick({
  name: true,
  type: true,
  description: true,
  baseUrl: true,
  command: true,
  registryUrl: true,
  argsJson: true,
  env: true,
  isActive: true,
  headers: true,
  tagsJson: true,
  timeout: true,
  logoUrl: true,
  provider: true,
  providerUrl: true
}).extend({
  name: z.string().min(1, "名称不能为空"),
  isActive: z.boolean().optional().default(true)
});

/** 更新 MCP 服务器（所有字段可选） */
export const updateMcpServerSchema = createMcpServerSchema.partial();

// ==================== Param Schemas ====================

export const mcpServerIdParamSchema = z.object({
  id: z.string().min(1, "ID 不能为空")
});

export const mcpToolToggleParamSchema = z.object({
  id: z.string().min(1, "ID 不能为空"),
  toolName: z.string().min(1, "工具名称不能为空")
});

// ==================== Type Exports ====================

export type CreateMcpServerInput = z.infer<typeof createMcpServerSchema>;
export type UpdateMcpServerInput = z.infer<typeof updateMcpServerSchema>;
