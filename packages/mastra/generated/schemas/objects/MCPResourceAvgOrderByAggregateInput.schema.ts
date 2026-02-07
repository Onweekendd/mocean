import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  size: SortOrderSchema.optional()
}).strict();
export const MCPResourceAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MCPResourceAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPResourceAvgOrderByAggregateInput>;
export const MCPResourceAvgOrderByAggregateInputObjectZodSchema = makeSchema();
