import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  timeout: SortOrderSchema.optional()
}).strict();
export const MCPServerAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MCPServerAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerAvgOrderByAggregateInput>;
export const MCPServerAvgOrderByAggregateInputObjectZodSchema = makeSchema();
