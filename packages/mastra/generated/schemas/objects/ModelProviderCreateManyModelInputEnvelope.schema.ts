import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelProviderCreateManyModelInputObjectSchema as ModelProviderCreateManyModelInputObjectSchema } from './ModelProviderCreateManyModelInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ModelProviderCreateManyModelInputObjectSchema), z.lazy(() => ModelProviderCreateManyModelInputObjectSchema).array()])
}).strict();
export const ModelProviderCreateManyModelInputEnvelopeObjectSchema: z.ZodType<Prisma.ModelProviderCreateManyModelInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ModelProviderCreateManyModelInputEnvelope>;
export const ModelProviderCreateManyModelInputEnvelopeObjectZodSchema = makeSchema();
