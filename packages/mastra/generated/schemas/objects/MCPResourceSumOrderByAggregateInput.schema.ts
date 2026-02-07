import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  size: SortOrderSchema.optional()
}).strict();
export const MCPResourceSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MCPResourceSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPResourceSumOrderByAggregateInput>;
export const MCPResourceSumOrderByAggregateInputObjectZodSchema = makeSchema();
