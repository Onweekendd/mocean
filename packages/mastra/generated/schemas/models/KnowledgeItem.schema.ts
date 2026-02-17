// @ts-nocheck - Circular imports resolved with schema registry
import * as z from 'zod';
import { _r } from './_registry';
// Circular import removed: import { KnowledgeBaseSchema } from './KnowledgeBase.schema';

export const KnowledgeItemSchema = z.object({
  id: z.string(),
  uniqueId: z.string().nullish(),
  uniqueIdsJson: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
  type: z.string(),
  content: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10"),
  remark: z.string().nullish(),
  processingStatus: z.string().nullish(),
  processingProgress: z.number().nullish(),
  processingError: z.string().nullish(),
  retryCount: z.number().int().nullish(),
  knowledgeBase: z.lazy(() => _r.KnowledgeBaseSchema),
  baseId: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type KnowledgeItemType = z.infer<typeof KnowledgeItemSchema>;

// Register to schema registry for circular reference resolution
_r.KnowledgeItemSchema = KnowledgeItemSchema;
