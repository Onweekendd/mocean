import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  prompt: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  emoji: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  enableWebSearch: SortOrderSchema.optional(),
  webSearchProviderId: SortOrderSchema.optional(),
  enableGenerateImage: SortOrderSchema.optional(),
  knowledgeRecognition: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const AgentMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AgentMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentMaxOrderByAggregateInput>;
export const AgentMaxOrderByAggregateInputObjectZodSchema = makeSchema();
