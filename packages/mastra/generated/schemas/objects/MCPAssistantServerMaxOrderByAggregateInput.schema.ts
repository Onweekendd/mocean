import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  assistantId: SortOrderSchema.optional(),
  mcpServerId: SortOrderSchema.optional()
}).strict();
export const MCPAssistantServerMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerMaxOrderByAggregateInput>;
export const MCPAssistantServerMaxOrderByAggregateInputObjectZodSchema = makeSchema();
