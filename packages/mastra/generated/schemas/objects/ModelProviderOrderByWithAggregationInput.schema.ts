import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ModelProviderCountOrderByAggregateInputObjectSchema as ModelProviderCountOrderByAggregateInputObjectSchema } from './ModelProviderCountOrderByAggregateInput.schema';
import { ModelProviderMaxOrderByAggregateInputObjectSchema as ModelProviderMaxOrderByAggregateInputObjectSchema } from './ModelProviderMaxOrderByAggregateInput.schema';
import { ModelProviderMinOrderByAggregateInputObjectSchema as ModelProviderMinOrderByAggregateInputObjectSchema } from './ModelProviderMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  modelId: SortOrderSchema.optional(),
  providerId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ModelProviderCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ModelProviderMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ModelProviderMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ModelProviderOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ModelProviderOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelProviderOrderByWithAggregationInput>;
export const ModelProviderOrderByWithAggregationInputObjectZodSchema = makeSchema();
