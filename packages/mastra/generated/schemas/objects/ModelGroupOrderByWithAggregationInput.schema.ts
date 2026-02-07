import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ModelGroupCountOrderByAggregateInputObjectSchema as ModelGroupCountOrderByAggregateInputObjectSchema } from './ModelGroupCountOrderByAggregateInput.schema';
import { ModelGroupMaxOrderByAggregateInputObjectSchema as ModelGroupMaxOrderByAggregateInputObjectSchema } from './ModelGroupMaxOrderByAggregateInput.schema';
import { ModelGroupMinOrderByAggregateInputObjectSchema as ModelGroupMinOrderByAggregateInputObjectSchema } from './ModelGroupMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  modelId: SortOrderSchema.optional(),
  groupId: SortOrderSchema.optional(),
  providerId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ModelGroupCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ModelGroupMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ModelGroupMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ModelGroupOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ModelGroupOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupOrderByWithAggregationInput>;
export const ModelGroupOrderByWithAggregationInputObjectZodSchema = makeSchema();
