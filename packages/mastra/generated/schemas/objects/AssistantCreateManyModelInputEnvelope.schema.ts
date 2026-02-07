import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantCreateManyModelInputObjectSchema as AssistantCreateManyModelInputObjectSchema } from './AssistantCreateManyModelInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AssistantCreateManyModelInputObjectSchema), z.lazy(() => AssistantCreateManyModelInputObjectSchema).array()])
}).strict();
export const AssistantCreateManyModelInputEnvelopeObjectSchema: z.ZodType<Prisma.AssistantCreateManyModelInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AssistantCreateManyModelInputEnvelope>;
export const AssistantCreateManyModelInputEnvelopeObjectZodSchema = makeSchema();
