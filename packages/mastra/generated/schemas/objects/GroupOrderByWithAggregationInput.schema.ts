import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { GroupCountOrderByAggregateInputObjectSchema as GroupCountOrderByAggregateInputObjectSchema } from './GroupCountOrderByAggregateInput.schema';
import { GroupMaxOrderByAggregateInputObjectSchema as GroupMaxOrderByAggregateInputObjectSchema } from './GroupMaxOrderByAggregateInput.schema';
import { GroupMinOrderByAggregateInputObjectSchema as GroupMinOrderByAggregateInputObjectSchema } from './GroupMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  providerId: SortOrderSchema.optional(),
  isDefault: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => GroupCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => GroupMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => GroupMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const GroupOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.GroupOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupOrderByWithAggregationInput>;
export const GroupOrderByWithAggregationInputObjectZodSchema = makeSchema();
