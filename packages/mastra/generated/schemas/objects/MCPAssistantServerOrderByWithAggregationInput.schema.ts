import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MCPAssistantServerCountOrderByAggregateInputObjectSchema as MCPAssistantServerCountOrderByAggregateInputObjectSchema } from './MCPAssistantServerCountOrderByAggregateInput.schema';
import { MCPAssistantServerMaxOrderByAggregateInputObjectSchema as MCPAssistantServerMaxOrderByAggregateInputObjectSchema } from './MCPAssistantServerMaxOrderByAggregateInput.schema';
import { MCPAssistantServerMinOrderByAggregateInputObjectSchema as MCPAssistantServerMinOrderByAggregateInputObjectSchema } from './MCPAssistantServerMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  assistantId: SortOrderSchema.optional(),
  mcpServerId: SortOrderSchema.optional(),
  _count: z.lazy(() => MCPAssistantServerCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => MCPAssistantServerMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => MCPAssistantServerMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const MCPAssistantServerOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerOrderByWithAggregationInput>;
export const MCPAssistantServerOrderByWithAggregationInputObjectZodSchema = makeSchema();
