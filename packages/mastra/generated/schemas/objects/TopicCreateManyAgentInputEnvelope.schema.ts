import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicCreateManyAgentInputObjectSchema as TopicCreateManyAgentInputObjectSchema } from './TopicCreateManyAgentInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TopicCreateManyAgentInputObjectSchema), z.lazy(() => TopicCreateManyAgentInputObjectSchema).array()])
}).strict();
export const TopicCreateManyAgentInputEnvelopeObjectSchema: z.ZodType<Prisma.TopicCreateManyAgentInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TopicCreateManyAgentInputEnvelope>;
export const TopicCreateManyAgentInputEnvelopeObjectZodSchema = makeSchema();
