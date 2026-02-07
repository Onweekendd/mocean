import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAssistantServerCreateManyAssistantInputObjectSchema as MCPAssistantServerCreateManyAssistantInputObjectSchema } from './MCPAssistantServerCreateManyAssistantInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MCPAssistantServerCreateManyAssistantInputObjectSchema), z.lazy(() => MCPAssistantServerCreateManyAssistantInputObjectSchema).array()])
}).strict();
export const MCPAssistantServerCreateManyAssistantInputEnvelopeObjectSchema: z.ZodType<Prisma.MCPAssistantServerCreateManyAssistantInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerCreateManyAssistantInputEnvelope>;
export const MCPAssistantServerCreateManyAssistantInputEnvelopeObjectZodSchema = makeSchema();
