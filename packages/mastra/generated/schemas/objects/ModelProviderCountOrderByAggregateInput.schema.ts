import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  modelId: SortOrderSchema.optional(),
  providerId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ModelProviderCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ModelProviderCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelProviderCountOrderByAggregateInput>;
export const ModelProviderCountOrderByAggregateInputObjectZodSchema = makeSchema();
