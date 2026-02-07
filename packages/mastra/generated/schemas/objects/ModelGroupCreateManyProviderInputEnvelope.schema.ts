import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelGroupCreateManyProviderInputObjectSchema as ModelGroupCreateManyProviderInputObjectSchema } from './ModelGroupCreateManyProviderInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ModelGroupCreateManyProviderInputObjectSchema), z.lazy(() => ModelGroupCreateManyProviderInputObjectSchema).array()])
}).strict();
export const ModelGroupCreateManyProviderInputEnvelopeObjectSchema: z.ZodType<Prisma.ModelGroupCreateManyProviderInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupCreateManyProviderInputEnvelope>;
export const ModelGroupCreateManyProviderInputEnvelopeObjectZodSchema = makeSchema();
