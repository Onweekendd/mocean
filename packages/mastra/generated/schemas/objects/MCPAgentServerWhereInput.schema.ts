import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { AgentScalarRelationFilterObjectSchema as AgentScalarRelationFilterObjectSchema } from './AgentScalarRelationFilter.schema';
import { AgentWhereInputObjectSchema as AgentWhereInputObjectSchema } from './AgentWhereInput.schema';
import { MCPServerScalarRelationFilterObjectSchema as MCPServerScalarRelationFilterObjectSchema } from './MCPServerScalarRelationFilter.schema';
import { MCPServerWhereInputObjectSchema as MCPServerWhereInputObjectSchema } from './MCPServerWhereInput.schema'

const mcpagentserverwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MCPAgentServerWhereInputObjectSchema), z.lazy(() => MCPAgentServerWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MCPAgentServerWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MCPAgentServerWhereInputObjectSchema), z.lazy(() => MCPAgentServerWhereInputObjectSchema).array()]).optional(),
  agentId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  mcpServerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  agent: z.union([z.lazy(() => AgentScalarRelationFilterObjectSchema), z.lazy(() => AgentWhereInputObjectSchema)]).optional(),
  mcpServer: z.union([z.lazy(() => MCPServerScalarRelationFilterObjectSchema), z.lazy(() => MCPServerWhereInputObjectSchema)]).optional()
}).strict();
export const MCPAgentServerWhereInputObjectSchema: z.ZodType<Prisma.MCPAgentServerWhereInput> = mcpagentserverwhereinputSchema as unknown as z.ZodType<Prisma.MCPAgentServerWhereInput>;
export const MCPAgentServerWhereInputObjectZodSchema = mcpagentserverwhereinputSchema;
