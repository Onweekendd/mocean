import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  assistantId: SortOrderSchema.optional(),
  mcpServerId: SortOrderSchema.optional()
}).strict();
export const MCPAssistantServerCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerCountOrderByAggregateInput>;
export const MCPAssistantServerCountOrderByAggregateInputObjectZodSchema = makeSchema();
