import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicKnowledgeBaseCreateManyTopicInputObjectSchema as TopicKnowledgeBaseCreateManyTopicInputObjectSchema } from './TopicKnowledgeBaseCreateManyTopicInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TopicKnowledgeBaseCreateManyTopicInputObjectSchema), z.lazy(() => TopicKnowledgeBaseCreateManyTopicInputObjectSchema).array()])
}).strict();
export const TopicKnowledgeBaseCreateManyTopicInputEnvelopeObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseCreateManyTopicInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseCreateManyTopicInputEnvelope>;
export const TopicKnowledgeBaseCreateManyTopicInputEnvelopeObjectZodSchema = makeSchema();
