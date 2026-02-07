import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const mcpagentserverscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MCPAgentServerScalarWhereInputObjectSchema), z.lazy(() => MCPAgentServerScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MCPAgentServerScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MCPAgentServerScalarWhereInputObjectSchema), z.lazy(() => MCPAgentServerScalarWhereInputObjectSchema).array()]).optional(),
  agentId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  mcpServerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const MCPAgentServerScalarWhereInputObjectSchema: z.ZodType<Prisma.MCPAgentServerScalarWhereInput> = mcpagentserverscalarwhereinputSchema as unknown as z.ZodType<Prisma.MCPAgentServerScalarWhereInput>;
export const MCPAgentServerScalarWhereInputObjectZodSchema = mcpagentserverscalarwhereinputSchema;
