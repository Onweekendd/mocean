import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseWhereUniqueInputObjectSchema as KnowledgeBaseWhereUniqueInputObjectSchema } from './KnowledgeBaseWhereUniqueInput.schema';
import { KnowledgeBaseUpdateWithoutModelInputObjectSchema as KnowledgeBaseUpdateWithoutModelInputObjectSchema } from './KnowledgeBaseUpdateWithoutModelInput.schema';
import { KnowledgeBaseUncheckedUpdateWithoutModelInputObjectSchema as KnowledgeBaseUncheckedUpdateWithoutModelInputObjectSchema } from './KnowledgeBaseUncheckedUpdateWithoutModelInput.schema';
import { KnowledgeBaseCreateWithoutModelInputObjectSchema as KnowledgeBaseCreateWithoutModelInputObjectSchema } from './KnowledgeBaseCreateWithoutModelInput.schema';
import { KnowledgeBaseUncheckedCreateWithoutModelInputObjectSchema as KnowledgeBaseUncheckedCreateWithoutModelInputObjectSchema } from './KnowledgeBaseUncheckedCreateWithoutModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => KnowledgeBaseUpdateWithoutModelInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedUpdateWithoutModelInputObjectSchema)]),
  create: z.union([z.lazy(() => KnowledgeBaseCreateWithoutModelInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedCreateWithoutModelInputObjectSchema)])
}).strict();
export const KnowledgeBaseUpsertWithWhereUniqueWithoutModelInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseUpsertWithWhereUniqueWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseUpsertWithWhereUniqueWithoutModelInput>;
export const KnowledgeBaseUpsertWithWhereUniqueWithoutModelInputObjectZodSchema = makeSchema();
