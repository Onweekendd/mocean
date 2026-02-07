import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelGroupCreateManyModelInputObjectSchema as ModelGroupCreateManyModelInputObjectSchema } from './ModelGroupCreateManyModelInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ModelGroupCreateManyModelInputObjectSchema), z.lazy(() => ModelGroupCreateManyModelInputObjectSchema).array()])
}).strict();
export const ModelGroupCreateManyModelInputEnvelopeObjectSchema: z.ZodType<Prisma.ModelGroupCreateManyModelInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupCreateManyModelInputEnvelope>;
export const ModelGroupCreateManyModelInputEnvelopeObjectZodSchema = makeSchema();
