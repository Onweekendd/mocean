import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  size: SortOrderSchema.optional(),
  count: SortOrderSchema.optional(),
  tokens: SortOrderSchema.optional()
}).strict();
export const FileTypeSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FileTypeSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FileTypeSumOrderByAggregateInput>;
export const FileTypeSumOrderByAggregateInputObjectZodSchema = makeSchema();
