import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AgentCountOrderByAggregateInputObjectSchema as AgentCountOrderByAggregateInputObjectSchema } from './AgentCountOrderByAggregateInput.schema';
import { AgentMaxOrderByAggregateInputObjectSchema as AgentMaxOrderByAggregateInputObjectSchema } from './AgentMaxOrderByAggregateInput.schema';
import { AgentMinOrderByAggregateInputObjectSchema as AgentMinOrderByAggregateInputObjectSchema } from './AgentMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  prompt: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  emoji: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  groupJson: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  enableWebSearch: SortOrderSchema.optional(),
  webSearchProviderId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  enableGenerateImage: SortOrderSchema.optional(),
  knowledgeRecognition: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => AgentCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AgentMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AgentMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AgentOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AgentOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentOrderByWithAggregationInput>;
export const AgentOrderByWithAggregationInputObjectZodSchema = makeSchema();
