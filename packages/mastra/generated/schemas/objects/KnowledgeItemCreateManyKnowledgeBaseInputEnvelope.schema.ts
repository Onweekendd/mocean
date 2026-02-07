import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeItemCreateManyKnowledgeBaseInputObjectSchema as KnowledgeItemCreateManyKnowledgeBaseInputObjectSchema } from './KnowledgeItemCreateManyKnowledgeBaseInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => KnowledgeItemCreateManyKnowledgeBaseInputObjectSchema), z.lazy(() => KnowledgeItemCreateManyKnowledgeBaseInputObjectSchema).array()])
}).strict();
export const KnowledgeItemCreateManyKnowledgeBaseInputEnvelopeObjectSchema: z.ZodType<Prisma.KnowledgeItemCreateManyKnowledgeBaseInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeItemCreateManyKnowledgeBaseInputEnvelope>;
export const KnowledgeItemCreateManyKnowledgeBaseInputEnvelopeObjectZodSchema = makeSchema();
