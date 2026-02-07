import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProviderCountOrderByAggregateInputObjectSchema as ProviderCountOrderByAggregateInputObjectSchema } from './ProviderCountOrderByAggregateInput.schema';
import { ProviderAvgOrderByAggregateInputObjectSchema as ProviderAvgOrderByAggregateInputObjectSchema } from './ProviderAvgOrderByAggregateInput.schema';
import { ProviderMaxOrderByAggregateInputObjectSchema as ProviderMaxOrderByAggregateInputObjectSchema } from './ProviderMaxOrderByAggregateInput.schema';
import { ProviderMinOrderByAggregateInputObjectSchema as ProviderMinOrderByAggregateInputObjectSchema } from './ProviderMinOrderByAggregateInput.schema';
import { ProviderSumOrderByAggregateInputObjectSchema as ProviderSumOrderByAggregateInputObjectSchema } from './ProviderSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  apiKey: SortOrderSchema.optional(),
  apiHost: SortOrderSchema.optional(),
  apiVersion: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  enabled: SortOrderSchema.optional(),
  isSystem: SortOrderSchema.optional(),
  isAuthed: SortOrderSchema.optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isGateway: SortOrderSchema.optional(),
  modelCount: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  docsUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ProviderCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ProviderAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ProviderMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ProviderMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ProviderSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ProviderOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ProviderOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProviderOrderByWithAggregationInput>;
export const ProviderOrderByWithAggregationInputObjectZodSchema = makeSchema();
