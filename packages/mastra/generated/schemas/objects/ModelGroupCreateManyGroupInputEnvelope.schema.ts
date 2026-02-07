import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelGroupCreateManyGroupInputObjectSchema as ModelGroupCreateManyGroupInputObjectSchema } from './ModelGroupCreateManyGroupInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ModelGroupCreateManyGroupInputObjectSchema), z.lazy(() => ModelGroupCreateManyGroupInputObjectSchema).array()])
}).strict();
export const ModelGroupCreateManyGroupInputEnvelopeObjectSchema: z.ZodType<Prisma.ModelGroupCreateManyGroupInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupCreateManyGroupInputEnvelope>;
export const ModelGroupCreateManyGroupInputEnvelopeObjectZodSchema = makeSchema();
