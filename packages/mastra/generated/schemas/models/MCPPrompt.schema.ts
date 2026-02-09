// @ts-nocheck - Circular imports resolved with runtime require()
import * as z from 'zod';
// Circular import removed: import { MCPServerSchema } from './MCPServer.schema';

export const MCPPromptSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullish(),
  arguments: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
  server: z.lazy(() => {
      const mod = require('./MCPServer.schema');
      return mod.MCPServerSchema;
    }),
  serverId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type MCPPromptType = z.infer<typeof MCPPromptSchema>;
