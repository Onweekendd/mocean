import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { KnowledgeBaseOrderByWithRelationInputObjectSchema as KnowledgeBaseOrderByWithRelationInputObjectSchema } from './KnowledgeBaseOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  uniqueId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  uniqueIdsJson: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  type: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  remark: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  processingStatus: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  processingProgress: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  processingError: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  retryCount: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  baseId: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  knowledgeBase: z.lazy(() => KnowledgeBaseOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const KnowledgeItemOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.KnowledgeItemOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeItemOrderByWithRelationInput>;
export const KnowledgeItemOrderByWithRelationInputObjectZodSchema = makeSchema();
