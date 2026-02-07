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
  groupJson: SortOrderSchema.optional(),
  enableWebSearch: SortOrderSchema.optional(),
  webSearchProviderId: SortOrderSchema.optional(),
  enableGenerateImage: SortOrderSchema.optional(),
  knowledgeRecognition: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const AgentCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AgentCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentCountOrderByAggregateInput>;
export const AgentCountOrderByAggregateInputObjectZodSchema = makeSchema();
