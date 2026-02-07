import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const MCPPromptOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.MCPPromptOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPPromptOrderByRelationAggregateInput>;
export const MCPPromptOrderByRelationAggregateInputObjectZodSchema = makeSchema();
