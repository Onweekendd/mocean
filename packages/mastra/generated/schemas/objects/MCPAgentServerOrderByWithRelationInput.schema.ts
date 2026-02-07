import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AgentOrderByWithRelationInputObjectSchema as AgentOrderByWithRelationInputObjectSchema } from './AgentOrderByWithRelationInput.schema';
import { MCPServerOrderByWithRelationInputObjectSchema as MCPServerOrderByWithRelationInputObjectSchema } from './MCPServerOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  agentId: SortOrderSchema.optional(),
  mcpServerId: SortOrderSchema.optional(),
  agent: z.lazy(() => AgentOrderByWithRelationInputObjectSchema).optional(),
  mcpServer: z.lazy(() => MCPServerOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const MCPAgentServerOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.MCPAgentServerOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerOrderByWithRelationInput>;
export const MCPAgentServerOrderByWithRelationInputObjectZodSchema = makeSchema();
