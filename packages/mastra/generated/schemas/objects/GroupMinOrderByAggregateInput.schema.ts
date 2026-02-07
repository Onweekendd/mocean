import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  providerId: SortOrderSchema.optional(),
  isDefault: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const GroupMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GroupMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupMinOrderByAggregateInput>;
export const GroupMinOrderByAggregateInputObjectZodSchema = makeSchema();
