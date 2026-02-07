import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  prompt: SortOrderSchema.optional(),
  pinned: SortOrderSchema.optional(),
  isNameManuallyEdited: SortOrderSchema.optional(),
  assistantId: SortOrderSchema.optional(),
  agentId: SortOrderSchema.optional(),
  modelId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const TopicMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TopicMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicMinOrderByAggregateInput>;
export const TopicMinOrderByAggregateInputObjectZodSchema = makeSchema();
