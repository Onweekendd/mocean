import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { GroupCreateManyProviderInputObjectSchema as GroupCreateManyProviderInputObjectSchema } from './GroupCreateManyProviderInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => GroupCreateManyProviderInputObjectSchema), z.lazy(() => GroupCreateManyProviderInputObjectSchema).array()])
}).strict();
export const GroupCreateManyProviderInputEnvelopeObjectSchema: z.ZodType<Prisma.GroupCreateManyProviderInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.GroupCreateManyProviderInputEnvelope>;
export const GroupCreateManyProviderInputEnvelopeObjectZodSchema = makeSchema();
