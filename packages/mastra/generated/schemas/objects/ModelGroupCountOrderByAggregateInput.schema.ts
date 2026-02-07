import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  modelId: SortOrderSchema.optional(),
  groupId: SortOrderSchema.optional(),
  providerId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ModelGroupCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ModelGroupCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupCountOrderByAggregateInput>;
export const ModelGroupCountOrderByAggregateInputObjectZodSchema = makeSchema();
