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
export const ModelGroupMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ModelGroupMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupMinOrderByAggregateInput>;
export const ModelGroupMinOrderByAggregateInputObjectZodSchema = makeSchema();
