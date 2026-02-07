import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAgentServerCreateManyMcpServerInputObjectSchema as MCPAgentServerCreateManyMcpServerInputObjectSchema } from './MCPAgentServerCreateManyMcpServerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MCPAgentServerCreateManyMcpServerInputObjectSchema), z.lazy(() => MCPAgentServerCreateManyMcpServerInputObjectSchema).array()])
}).strict();
export const MCPAgentServerCreateManyMcpServerInputEnvelopeObjectSchema: z.ZodType<Prisma.MCPAgentServerCreateManyMcpServerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerCreateManyMcpServerInputEnvelope>;
export const MCPAgentServerCreateManyMcpServerInputEnvelopeObjectZodSchema = makeSchema();
