import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPToolCreateManyServerInputObjectSchema as MCPToolCreateManyServerInputObjectSchema } from './MCPToolCreateManyServerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MCPToolCreateManyServerInputObjectSchema), z.lazy(() => MCPToolCreateManyServerInputObjectSchema).array()])
}).strict();
export const MCPToolCreateManyServerInputEnvelopeObjectSchema: z.ZodType<Prisma.MCPToolCreateManyServerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MCPToolCreateManyServerInputEnvelope>;
export const MCPToolCreateManyServerInputEnvelopeObjectZodSchema = makeSchema();
