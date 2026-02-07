import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  agentId: SortOrderSchema.optional(),
  mcpServerId: SortOrderSchema.optional()
}).strict();
export const MCPAgentServerCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MCPAgentServerCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerCountOrderByAggregateInput>;
export const MCPAgentServerCountOrderByAggregateInputObjectZodSchema = makeSchema();
