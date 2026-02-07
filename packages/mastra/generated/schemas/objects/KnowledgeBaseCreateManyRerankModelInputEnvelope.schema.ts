import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseCreateManyRerankModelInputObjectSchema as KnowledgeBaseCreateManyRerankModelInputObjectSchema } from './KnowledgeBaseCreateManyRerankModelInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => KnowledgeBaseCreateManyRerankModelInputObjectSchema), z.lazy(() => KnowledgeBaseCreateManyRerankModelInputObjectSchema).array()])
}).strict();
export const KnowledgeBaseCreateManyRerankModelInputEnvelopeObjectSchema: z.ZodType<Prisma.KnowledgeBaseCreateManyRerankModelInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseCreateManyRerankModelInputEnvelope>;
export const KnowledgeBaseCreateManyRerankModelInputEnvelopeObjectZodSchema = makeSchema();
