import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AssistantCountOrderByAggregateInputObjectSchema as AssistantCountOrderByAggregateInputObjectSchema } from './AssistantCountOrderByAggregateInput.schema';
import { AssistantMaxOrderByAggregateInputObjectSchema as AssistantMaxOrderByAggregateInputObjectSchema } from './AssistantMaxOrderByAggregateInput.schema';
import { AssistantMinOrderByAggregateInputObjectSchema as AssistantMinOrderByAggregateInputObjectSchema } from './AssistantMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  prompt: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  emoji: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  enableWebSearch: SortOrderSchema.optional(),
  webSearchProviderId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  enableGenerateImage: SortOrderSchema.optional(),
  knowledgeRecognition: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  modelId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  providerId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  defaultModelId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => AssistantCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AssistantMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AssistantMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AssistantOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AssistantOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantOrderByWithAggregationInput>;
export const AssistantOrderByWithAggregationInputObjectZodSchema = makeSchema();
