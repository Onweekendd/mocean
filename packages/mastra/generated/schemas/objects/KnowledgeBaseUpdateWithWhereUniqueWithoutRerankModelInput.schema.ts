import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseWhereUniqueInputObjectSchema as KnowledgeBaseWhereUniqueInputObjectSchema } from './KnowledgeBaseWhereUniqueInput.schema';
import { KnowledgeBaseUpdateWithoutRerankModelInputObjectSchema as KnowledgeBaseUpdateWithoutRerankModelInputObjectSchema } from './KnowledgeBaseUpdateWithoutRerankModelInput.schema';
import { KnowledgeBaseUncheckedUpdateWithoutRerankModelInputObjectSchema as KnowledgeBaseUncheckedUpdateWithoutRerankModelInputObjectSchema } from './KnowledgeBaseUncheckedUpdateWithoutRerankModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => KnowledgeBaseUpdateWithoutRerankModelInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedUpdateWithoutRerankModelInputObjectSchema)])
}).strict();
export const KnowledgeBaseUpdateWithWhereUniqueWithoutRerankModelInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseUpdateWithWhereUniqueWithoutRerankModelInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseUpdateWithWhereUniqueWithoutRerankModelInput>;
export const KnowledgeBaseUpdateWithWhereUniqueWithoutRerankModelInputObjectZodSchema = makeSchema();
