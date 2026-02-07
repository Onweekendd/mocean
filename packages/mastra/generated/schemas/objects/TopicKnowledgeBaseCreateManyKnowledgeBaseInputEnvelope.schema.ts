import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicKnowledgeBaseCreateManyKnowledgeBaseInputObjectSchema as TopicKnowledgeBaseCreateManyKnowledgeBaseInputObjectSchema } from './TopicKnowledgeBaseCreateManyKnowledgeBaseInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TopicKnowledgeBaseCreateManyKnowledgeBaseInputObjectSchema), z.lazy(() => TopicKnowledgeBaseCreateManyKnowledgeBaseInputObjectSchema).array()])
}).strict();
export const TopicKnowledgeBaseCreateManyKnowledgeBaseInputEnvelopeObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseCreateManyKnowledgeBaseInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseCreateManyKnowledgeBaseInputEnvelope>;
export const TopicKnowledgeBaseCreateManyKnowledgeBaseInputEnvelopeObjectZodSchema = makeSchema();
