import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantCreateManyDefaultModelInputObjectSchema as AssistantCreateManyDefaultModelInputObjectSchema } from './AssistantCreateManyDefaultModelInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AssistantCreateManyDefaultModelInputObjectSchema), z.lazy(() => AssistantCreateManyDefaultModelInputObjectSchema).array()])
}).strict();
export const AssistantCreateManyDefaultModelInputEnvelopeObjectSchema: z.ZodType<Prisma.AssistantCreateManyDefaultModelInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AssistantCreateManyDefaultModelInputEnvelope>;
export const AssistantCreateManyDefaultModelInputEnvelopeObjectZodSchema = makeSchema();
