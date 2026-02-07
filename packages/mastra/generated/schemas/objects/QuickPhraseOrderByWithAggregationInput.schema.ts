import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { QuickPhraseCountOrderByAggregateInputObjectSchema as QuickPhraseCountOrderByAggregateInputObjectSchema } from './QuickPhraseCountOrderByAggregateInput.schema';
import { QuickPhraseAvgOrderByAggregateInputObjectSchema as QuickPhraseAvgOrderByAggregateInputObjectSchema } from './QuickPhraseAvgOrderByAggregateInput.schema';
import { QuickPhraseMaxOrderByAggregateInputObjectSchema as QuickPhraseMaxOrderByAggregateInputObjectSchema } from './QuickPhraseMaxOrderByAggregateInput.schema';
import { QuickPhraseMinOrderByAggregateInputObjectSchema as QuickPhraseMinOrderByAggregateInputObjectSchema } from './QuickPhraseMinOrderByAggregateInput.schema';
import { QuickPhraseSumOrderByAggregateInputObjectSchema as QuickPhraseSumOrderByAggregateInputObjectSchema } from './QuickPhraseSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  order: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => QuickPhraseCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => QuickPhraseAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => QuickPhraseMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => QuickPhraseMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => QuickPhraseSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const QuickPhraseOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.QuickPhraseOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.QuickPhraseOrderByWithAggregationInput>;
export const QuickPhraseOrderByWithAggregationInputObjectZodSchema = makeSchema();
