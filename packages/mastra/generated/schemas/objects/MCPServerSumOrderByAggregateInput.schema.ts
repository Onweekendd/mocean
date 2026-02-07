import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  timeout: SortOrderSchema.optional()
}).strict();
export const MCPServerSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MCPServerSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerSumOrderByAggregateInput>;
export const MCPServerSumOrderByAggregateInputObjectZodSchema = makeSchema();
