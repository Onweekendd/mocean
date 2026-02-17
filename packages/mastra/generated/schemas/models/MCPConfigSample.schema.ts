// @ts-nocheck - Circular imports resolved with schema registry
import * as z from 'zod';
import { _r } from './_registry';
// Circular import removed: import { MCPServerSchema } from './MCPServer.schema';

export const MCPConfigSampleSchema = z.object({
  id: z.string(),
  command: z.string(),
  argsJson: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
  env: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
  server: z.lazy(() => _r.MCPServerSchema),
  serverId: z.string(),
});

export type MCPConfigSampleType = z.infer<typeof MCPConfigSampleSchema>;

// Register to schema registry for circular reference resolution
_r.MCPConfigSampleSchema = MCPConfigSampleSchema;
