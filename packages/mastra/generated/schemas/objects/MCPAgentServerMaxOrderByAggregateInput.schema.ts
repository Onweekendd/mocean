import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  agentId: SortOrderSchema.optional(),
  mcpServerId: SortOrderSchema.optional()
}).strict();
export const MCPAgentServerMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MCPAgentServerMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerMaxOrderByAggregateInput>;
export const MCPAgentServerMaxOrderByAggregateInputObjectZodSchema = makeSchema();
