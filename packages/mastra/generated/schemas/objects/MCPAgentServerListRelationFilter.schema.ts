import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAgentServerWhereInputObjectSchema as MCPAgentServerWhereInputObjectSchema } from './MCPAgentServerWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => MCPAgentServerWhereInputObjectSchema).optional(),
  some: z.lazy(() => MCPAgentServerWhereInputObjectSchema).optional(),
  none: z.lazy(() => MCPAgentServerWhereInputObjectSchema).optional()
}).strict();
export const MCPAgentServerListRelationFilterObjectSchema: z.ZodType<Prisma.MCPAgentServerListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerListRelationFilter>;
export const MCPAgentServerListRelationFilterObjectZodSchema = makeSchema();
