import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPPromptCreateManyServerInputObjectSchema as MCPPromptCreateManyServerInputObjectSchema } from './MCPPromptCreateManyServerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MCPPromptCreateManyServerInputObjectSchema), z.lazy(() => MCPPromptCreateManyServerInputObjectSchema).array()])
}).strict();
export const MCPPromptCreateManyServerInputEnvelopeObjectSchema: z.ZodType<Prisma.MCPPromptCreateManyServerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MCPPromptCreateManyServerInputEnvelope>;
export const MCPPromptCreateManyServerInputEnvelopeObjectZodSchema = makeSchema();
