import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MCPAgentServerCountOrderByAggregateInputObjectSchema as MCPAgentServerCountOrderByAggregateInputObjectSchema } from './MCPAgentServerCountOrderByAggregateInput.schema';
import { MCPAgentServerMaxOrderByAggregateInputObjectSchema as MCPAgentServerMaxOrderByAggregateInputObjectSchema } from './MCPAgentServerMaxOrderByAggregateInput.schema';
import { MCPAgentServerMinOrderByAggregateInputObjectSchema as MCPAgentServerMinOrderByAggregateInputObjectSchema } from './MCPAgentServerMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  agentId: SortOrderSchema.optional(),
  mcpServerId: SortOrderSchema.optional(),
  _count: z.lazy(() => MCPAgentServerCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => MCPAgentServerMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => MCPAgentServerMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const MCPAgentServerOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.MCPAgentServerOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerOrderByWithAggregationInput>;
export const MCPAgentServerOrderByWithAggregationInputObjectZodSchema = makeSchema();
