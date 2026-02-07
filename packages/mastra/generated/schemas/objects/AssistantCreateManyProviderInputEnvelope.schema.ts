import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantCreateManyProviderInputObjectSchema as AssistantCreateManyProviderInputObjectSchema } from './AssistantCreateManyProviderInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AssistantCreateManyProviderInputObjectSchema), z.lazy(() => AssistantCreateManyProviderInputObjectSchema).array()])
}).strict();
export const AssistantCreateManyProviderInputEnvelopeObjectSchema: z.ZodType<Prisma.AssistantCreateManyProviderInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AssistantCreateManyProviderInputEnvelope>;
export const AssistantCreateManyProviderInputEnvelopeObjectZodSchema = makeSchema();
