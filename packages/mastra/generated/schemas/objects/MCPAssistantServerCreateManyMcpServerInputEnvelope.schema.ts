import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAssistantServerCreateManyMcpServerInputObjectSchema as MCPAssistantServerCreateManyMcpServerInputObjectSchema } from './MCPAssistantServerCreateManyMcpServerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MCPAssistantServerCreateManyMcpServerInputObjectSchema), z.lazy(() => MCPAssistantServerCreateManyMcpServerInputObjectSchema).array()])
}).strict();
export const MCPAssistantServerCreateManyMcpServerInputEnvelopeObjectSchema: z.ZodType<Prisma.MCPAssistantServerCreateManyMcpServerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerCreateManyMcpServerInputEnvelope>;
export const MCPAssistantServerCreateManyMcpServerInputEnvelopeObjectZodSchema = makeSchema();
