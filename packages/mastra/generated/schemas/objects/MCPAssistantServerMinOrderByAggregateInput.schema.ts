import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  assistantId: SortOrderSchema.optional(),
  mcpServerId: SortOrderSchema.optional()
}).strict();
export const MCPAssistantServerMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerMinOrderByAggregateInput>;
export const MCPAssistantServerMinOrderByAggregateInputObjectZodSchema = makeSchema();
