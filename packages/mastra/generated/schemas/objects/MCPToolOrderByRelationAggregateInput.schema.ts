import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const MCPToolOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.MCPToolOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPToolOrderByRelationAggregateInput>;
export const MCPToolOrderByRelationAggregateInputObjectZodSchema = makeSchema();
