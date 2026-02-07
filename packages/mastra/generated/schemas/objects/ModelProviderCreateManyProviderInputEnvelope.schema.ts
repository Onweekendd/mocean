import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelProviderCreateManyProviderInputObjectSchema as ModelProviderCreateManyProviderInputObjectSchema } from './ModelProviderCreateManyProviderInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ModelProviderCreateManyProviderInputObjectSchema), z.lazy(() => ModelProviderCreateManyProviderInputObjectSchema).array()])
}).strict();
export const ModelProviderCreateManyProviderInputEnvelopeObjectSchema: z.ZodType<Prisma.ModelProviderCreateManyProviderInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ModelProviderCreateManyProviderInputEnvelope>;
export const ModelProviderCreateManyProviderInputEnvelopeObjectZodSchema = makeSchema();
