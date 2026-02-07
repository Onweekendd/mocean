import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPResourceCreateManyServerInputObjectSchema as MCPResourceCreateManyServerInputObjectSchema } from './MCPResourceCreateManyServerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MCPResourceCreateManyServerInputObjectSchema), z.lazy(() => MCPResourceCreateManyServerInputObjectSchema).array()])
}).strict();
export const MCPResourceCreateManyServerInputEnvelopeObjectSchema: z.ZodType<Prisma.MCPResourceCreateManyServerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MCPResourceCreateManyServerInputEnvelope>;
export const MCPResourceCreateManyServerInputEnvelopeObjectZodSchema = makeSchema();
