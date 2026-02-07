import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const mcpagentserverscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => MCPAgentServerScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MCPAgentServerScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MCPAgentServerScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MCPAgentServerScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MCPAgentServerScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  agentId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  mcpServerId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const MCPAgentServerScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.MCPAgentServerScalarWhereWithAggregatesInput> = mcpagentserverscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.MCPAgentServerScalarWhereWithAggregatesInput>;
export const MCPAgentServerScalarWhereWithAggregatesInputObjectZodSchema = mcpagentserverscalarwherewithaggregatesinputSchema;
