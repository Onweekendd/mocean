import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantSettingsCreateManyDefaultModelInputObjectSchema as AssistantSettingsCreateManyDefaultModelInputObjectSchema } from './AssistantSettingsCreateManyDefaultModelInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AssistantSettingsCreateManyDefaultModelInputObjectSchema), z.lazy(() => AssistantSettingsCreateManyDefaultModelInputObjectSchema).array()])
}).strict();
export const AssistantSettingsCreateManyDefaultModelInputEnvelopeObjectSchema: z.ZodType<Prisma.AssistantSettingsCreateManyDefaultModelInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AssistantSettingsCreateManyDefaultModelInputEnvelope>;
export const AssistantSettingsCreateManyDefaultModelInputEnvelopeObjectZodSchema = makeSchema();
