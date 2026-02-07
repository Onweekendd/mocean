import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ModelCountOrderByAggregateInputObjectSchema as ModelCountOrderByAggregateInputObjectSchema } from './ModelCountOrderByAggregateInput.schema';
import { ModelAvgOrderByAggregateInputObjectSchema as ModelAvgOrderByAggregateInputObjectSchema } from './ModelAvgOrderByAggregateInput.schema';
import { ModelMaxOrderByAggregateInputObjectSchema as ModelMaxOrderByAggregateInputObjectSchema } from './ModelMaxOrderByAggregateInput.schema';
import { ModelMinOrderByAggregateInputObjectSchema as ModelMinOrderByAggregateInputObjectSchema } from './ModelMinOrderByAggregateInput.schema';
import { ModelSumOrderByAggregateInputObjectSchema as ModelSumOrderByAggregateInputObjectSchema } from './ModelSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  owned_by: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isSystem: SortOrderSchema.optional(),
  contextLength: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  supportsAttachments: SortOrderSchema.optional(),
  supportsTools: SortOrderSchema.optional(),
  supportsReasoning: SortOrderSchema.optional(),
  supportsImage: SortOrderSchema.optional(),
  supportsAudio: SortOrderSchema.optional(),
  supportsVideo: SortOrderSchema.optional(),
  supportsEmbedding: SortOrderSchema.optional(),
  inputPricePerMillion: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  outputPricePerMillion: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => ModelCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ModelAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ModelMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ModelMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ModelSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ModelOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ModelOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelOrderByWithAggregationInput>;
export const ModelOrderByWithAggregationInputObjectZodSchema = makeSchema();
