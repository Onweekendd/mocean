import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAgentServerWhereInputObjectSchema as MCPAgentServerWhereInputObjectSchema } from './MCPAgentServerWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPAgentServerWhereInputObjectSchema).optional()
}).strict();
export const AgentCountOutputTypeCountMcpServersArgsObjectSchema = makeSchema();
export const AgentCountOutputTypeCountMcpServersArgsObjectZodSchema = makeSchema();
