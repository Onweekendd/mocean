import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicCreateManyModelInputObjectSchema as TopicCreateManyModelInputObjectSchema } from './TopicCreateManyModelInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TopicCreateManyModelInputObjectSchema), z.lazy(() => TopicCreateManyModelInputObjectSchema).array()])
}).strict();
export const TopicCreateManyModelInputEnvelopeObjectSchema: z.ZodType<Prisma.TopicCreateManyModelInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TopicCreateManyModelInputEnvelope>;
export const TopicCreateManyModelInputEnvelopeObjectZodSchema = makeSchema();
