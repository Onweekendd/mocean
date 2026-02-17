// @ts-nocheck - Circular imports resolved with schema registry
import * as z from 'zod';
import { _r } from './_registry';
// Circular import removed: import { MCPAgentServerSchema } from './MCPAgentServer.schema';
// Circular import removed: import { MCPAssistantServerSchema } from './MCPAssistantServer.schema';
// Circular import removed: import { MCPConfigSampleSchema } from './MCPConfigSample.schema';
// Circular import removed: import { MCPPromptSchema } from './MCPPrompt.schema';
// Circular import removed: import { MCPResourceSchema } from './MCPResource.schema';
// Circular import removed: import { MCPToolSchema } from './MCPTool.schema';

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
  tools: z.array(z.lazy(() => _r.MCPToolSchema)),
  prompts: z.array(z.lazy(() => _r.MCPPromptSchema)),
  assistants: z.array(z.lazy(() => _r.MCPAssistantServerSchema)),
  agents: z.array(z.lazy(() => _r.MCPAgentServerSchema)),
  resources: z.array(z.lazy(() => _r.MCPResourceSchema)),
  configSampleRelation: z.lazy(() => _r.MCPConfigSampleSchema).nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type MCPServerType = z.infer<typeof MCPServerSchema>;

// Register to schema registry for circular reference resolution
_r.MCPServerSchema = MCPServerSchema;
