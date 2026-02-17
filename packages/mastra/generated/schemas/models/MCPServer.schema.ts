import * as z from 'zod';
import { MCPAgentServerSchema } from './MCPAgentServer.schema';
import { MCPAssistantServerSchema } from './MCPAssistantServer.schema';
import { MCPConfigSampleSchema } from './MCPConfigSample.schema';
import { MCPPromptSchema } from './MCPPrompt.schema';
import { MCPResourceSchema } from './MCPResource.schema';
import { MCPToolSchema } from './MCPTool.schema';

export const MCPServerSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string().nullish(),
  description: z.string().nullish(),
  baseUrl: z.string().nullish(),
  command: z.string().nullish(),
  registryUrl: z.string().nullish(),
  argsJson: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
  env: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
  isActive: z.boolean(),
  disabledToolsJson: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
  configSample: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
  headers: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
  searchKey: z.string().nullish(),
  provider: z.string().nullish(),
  providerUrl: z.string().nullish(),
  logoUrl: z.string().nullish(),
  tagsJson: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
  timeout: z.number().int().nullish(),
  tools: z.array(z.lazy(() => MCPToolSchema)),
  prompts: z.array(z.lazy(() => MCPPromptSchema)),
  assistants: z.array(z.lazy(() => MCPAssistantServerSchema)),
  agents: z.array(z.lazy(() => MCPAgentServerSchema)),
  resources: z.array(z.lazy(() => MCPResourceSchema)),
  configSampleRelation: z.lazy(() => MCPConfigSampleSchema).nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type MCPServerType = z.infer<typeof MCPServerSchema>;
