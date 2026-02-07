import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseArgsObjectSchema as KnowledgeBaseArgsObjectSchema } from './KnowledgeBaseArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  uniqueId: z.boolean().optional(),
  uniqueIdsJson: z.boolean().optional(),
  type: z.boolean().optional(),
  content: z.boolean().optional(),
  remark: z.boolean().optional(),
  processingStatus: z.boolean().optional(),
  processingProgress: z.boolean().optional(),
  processingError: z.boolean().optional(),
  retryCount: z.boolean().optional(),
  knowledgeBase: z.union([z.boolean(), z.lazy(() => KnowledgeBaseArgsObjectSchema)]).optional(),
  baseId: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional()
}).strict();
export const KnowledgeItemSelectObjectSchema: z.ZodType<Prisma.KnowledgeItemSelect> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeItemSelect>;
export const KnowledgeItemSelectObjectZodSchema = makeSchema();
