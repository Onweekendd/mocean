import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TopicCountOrderByAggregateInputObjectSchema as TopicCountOrderByAggregateInputObjectSchema } from './TopicCountOrderByAggregateInput.schema';
import { TopicMaxOrderByAggregateInputObjectSchema as TopicMaxOrderByAggregateInputObjectSchema } from './TopicMaxOrderByAggregateInput.schema';
import { TopicMinOrderByAggregateInputObjectSchema as TopicMinOrderByAggregateInputObjectSchema } from './TopicMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  prompt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  pinned: SortOrderSchema.optional(),
  isNameManuallyEdited: SortOrderSchema.optional(),
  assistantId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  agentId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  modelId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => TopicCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TopicMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TopicMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TopicOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TopicOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicOrderByWithAggregationInput>;
export const TopicOrderByWithAggregationInputObjectZodSchema = makeSchema();
