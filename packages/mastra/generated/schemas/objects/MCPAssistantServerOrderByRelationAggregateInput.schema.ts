import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const MCPAssistantServerOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerOrderByRelationAggregateInput>;
export const MCPAssistantServerOrderByRelationAggregateInputObjectZodSchema = makeSchema();
