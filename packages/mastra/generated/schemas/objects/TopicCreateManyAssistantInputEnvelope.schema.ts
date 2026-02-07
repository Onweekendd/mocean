import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicCreateManyAssistantInputObjectSchema as TopicCreateManyAssistantInputObjectSchema } from './TopicCreateManyAssistantInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TopicCreateManyAssistantInputObjectSchema), z.lazy(() => TopicCreateManyAssistantInputObjectSchema).array()])
}).strict();
export const TopicCreateManyAssistantInputEnvelopeObjectSchema: z.ZodType<Prisma.TopicCreateManyAssistantInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TopicCreateManyAssistantInputEnvelope>;
export const TopicCreateManyAssistantInputEnvelopeObjectZodSchema = makeSchema();
