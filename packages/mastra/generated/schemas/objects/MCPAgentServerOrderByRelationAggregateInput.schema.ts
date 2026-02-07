import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const MCPAgentServerOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.MCPAgentServerOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerOrderByRelationAggregateInput>;
export const MCPAgentServerOrderByRelationAggregateInputObjectZodSchema = makeSchema();
