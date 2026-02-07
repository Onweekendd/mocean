import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const MCPResourceOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.MCPResourceOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPResourceOrderByRelationAggregateInput>;
export const MCPResourceOrderByRelationAggregateInputObjectZodSchema = makeSchema();
