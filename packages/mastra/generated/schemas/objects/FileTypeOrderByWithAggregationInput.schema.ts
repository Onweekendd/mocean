import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { FileTypeCountOrderByAggregateInputObjectSchema as FileTypeCountOrderByAggregateInputObjectSchema } from './FileTypeCountOrderByAggregateInput.schema';
import { FileTypeAvgOrderByAggregateInputObjectSchema as FileTypeAvgOrderByAggregateInputObjectSchema } from './FileTypeAvgOrderByAggregateInput.schema';
import { FileTypeMaxOrderByAggregateInputObjectSchema as FileTypeMaxOrderByAggregateInputObjectSchema } from './FileTypeMaxOrderByAggregateInput.schema';
import { FileTypeMinOrderByAggregateInputObjectSchema as FileTypeMinOrderByAggregateInputObjectSchema } from './FileTypeMinOrderByAggregateInput.schema';
import { FileTypeSumOrderByAggregateInputObjectSchema as FileTypeSumOrderByAggregateInputObjectSchema } from './FileTypeSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  origin_name: SortOrderSchema.optional(),
  path: SortOrderSchema.optional(),
  size: SortOrderSchema.optional(),
  ext: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  count: SortOrderSchema.optional(),
  tokens: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: SortOrderSchema.optional(),
  _count: z.lazy(() => FileTypeCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => FileTypeAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => FileTypeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => FileTypeMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => FileTypeSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const FileTypeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.FileTypeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.FileTypeOrderByWithAggregationInput>;
export const FileTypeOrderByWithAggregationInputObjectZodSchema = makeSchema();
