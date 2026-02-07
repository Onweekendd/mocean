import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseCreateManyModelInputObjectSchema as KnowledgeBaseCreateManyModelInputObjectSchema } from './KnowledgeBaseCreateManyModelInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => KnowledgeBaseCreateManyModelInputObjectSchema), z.lazy(() => KnowledgeBaseCreateManyModelInputObjectSchema).array()])
}).strict();
export const KnowledgeBaseCreateManyModelInputEnvelopeObjectSchema: z.ZodType<Prisma.KnowledgeBaseCreateManyModelInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseCreateManyModelInputEnvelope>;
export const KnowledgeBaseCreateManyModelInputEnvelopeObjectZodSchema = makeSchema();
