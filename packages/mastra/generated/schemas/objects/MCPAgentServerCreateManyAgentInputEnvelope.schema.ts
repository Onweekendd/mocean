import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAgentServerCreateManyAgentInputObjectSchema as MCPAgentServerCreateManyAgentInputObjectSchema } from './MCPAgentServerCreateManyAgentInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MCPAgentServerCreateManyAgentInputObjectSchema), z.lazy(() => MCPAgentServerCreateManyAgentInputObjectSchema).array()])
}).strict();
export const MCPAgentServerCreateManyAgentInputEnvelopeObjectSchema: z.ZodType<Prisma.MCPAgentServerCreateManyAgentInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerCreateManyAgentInputEnvelope>;
export const MCPAgentServerCreateManyAgentInputEnvelopeObjectZodSchema = makeSchema();
