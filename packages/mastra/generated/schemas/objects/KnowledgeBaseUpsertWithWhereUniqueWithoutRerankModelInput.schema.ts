import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseWhereUniqueInputObjectSchema as KnowledgeBaseWhereUniqueInputObjectSchema } from './KnowledgeBaseWhereUniqueInput.schema';
import { KnowledgeBaseUpdateWithoutRerankModelInputObjectSchema as KnowledgeBaseUpdateWithoutRerankModelInputObjectSchema } from './KnowledgeBaseUpdateWithoutRerankModelInput.schema';
import { KnowledgeBaseUncheckedUpdateWithoutRerankModelInputObjectSchema as KnowledgeBaseUncheckedUpdateWithoutRerankModelInputObjectSchema } from './KnowledgeBaseUncheckedUpdateWithoutRerankModelInput.schema';
import { KnowledgeBaseCreateWithoutRerankModelInputObjectSchema as KnowledgeBaseCreateWithoutRerankModelInputObjectSchema } from './KnowledgeBaseCreateWithoutRerankModelInput.schema';
import { KnowledgeBaseUncheckedCreateWithoutRerankModelInputObjectSchema as KnowledgeBaseUncheckedCreateWithoutRerankModelInputObjectSchema } from './KnowledgeBaseUncheckedCreateWithoutRerankModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => KnowledgeBaseUpdateWithoutRerankModelInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedUpdateWithoutRerankModelInputObjectSchema)]),
  create: z.union([z.lazy(() => KnowledgeBaseCreateWithoutRerankModelInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedCreateWithoutRerankModelInputObjectSchema)])
}).strict();
export const KnowledgeBaseUpsertWithWhereUniqueWithoutRerankModelInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseUpsertWithWhereUniqueWithoutRerankModelInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseUpsertWithWhereUniqueWithoutRerankModelInput>;
export const KnowledgeBaseUpsertWithWhereUniqueWithoutRerankModelInputObjectZodSchema = makeSchema();
