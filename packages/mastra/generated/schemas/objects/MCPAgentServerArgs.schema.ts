import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAgentServerSelectObjectSchema as MCPAgentServerSelectObjectSchema } from './MCPAgentServerSelect.schema';
import { MCPAgentServerIncludeObjectSchema as MCPAgentServerIncludeObjectSchema } from './MCPAgentServerInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MCPAgentServerSelectObjectSchema).optional(),
  include: z.lazy(() => MCPAgentServerIncludeObjectSchema).optional()
}).strict();
export const MCPAgentServerArgsObjectSchema = makeSchema();
export const MCPAgentServerArgsObjectZodSchema = makeSchema();
