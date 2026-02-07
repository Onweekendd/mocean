import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  origin_name: SortOrderSchema.optional(),
  path: SortOrderSchema.optional(),
  size: SortOrderSchema.optional(),
  ext: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  count: SortOrderSchema.optional(),
  tokens: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const FileTypeMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FileTypeMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FileTypeMinOrderByAggregateInput>;
export const FileTypeMinOrderByAggregateInputObjectZodSchema = makeSchema();
