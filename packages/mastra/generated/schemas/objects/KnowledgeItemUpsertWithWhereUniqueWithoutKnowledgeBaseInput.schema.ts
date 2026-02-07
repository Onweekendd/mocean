import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeItemWhereUniqueInputObjectSchema as KnowledgeItemWhereUniqueInputObjectSchema } from './KnowledgeItemWhereUniqueInput.schema';
import { KnowledgeItemUpdateWithoutKnowledgeBaseInputObjectSchema as KnowledgeItemUpdateWithoutKnowledgeBaseInputObjectSchema } from './KnowledgeItemUpdateWithoutKnowledgeBaseInput.schema';
import { KnowledgeItemUncheckedUpdateWithoutKnowledgeBaseInputObjectSchema as KnowledgeItemUncheckedUpdateWithoutKnowledgeBaseInputObjectSchema } from './KnowledgeItemUncheckedUpdateWithoutKnowledgeBaseInput.schema';
import { KnowledgeItemCreateWithoutKnowledgeBaseInputObjectSchema as KnowledgeItemCreateWithoutKnowledgeBaseInputObjectSchema } from './KnowledgeItemCreateWithoutKnowledgeBaseInput.schema';
import { KnowledgeItemUncheckedCreateWithoutKnowledgeBaseInputObjectSchema as KnowledgeItemUncheckedCreateWithoutKnowledgeBaseInputObjectSchema } from './KnowledgeItemUncheckedCreateWithoutKnowledgeBaseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => KnowledgeItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => KnowledgeItemUpdateWithoutKnowledgeBaseInputObjectSchema), z.lazy(() => KnowledgeItemUncheckedUpdateWithoutKnowledgeBaseInputObjectSchema)]),
  create: z.union([z.lazy(() => KnowledgeItemCreateWithoutKnowledgeBaseInputObjectSchema), z.lazy(() => KnowledgeItemUncheckedCreateWithoutKnowledgeBaseInputObjectSchema)])
}).strict();
export const KnowledgeItemUpsertWithWhereUniqueWithoutKnowledgeBaseInputObjectSchema: z.ZodType<Prisma.KnowledgeItemUpsertWithWhereUniqueWithoutKnowledgeBaseInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeItemUpsertWithWhereUniqueWithoutKnowledgeBaseInput>;
export const KnowledgeItemUpsertWithWhereUniqueWithoutKnowledgeBaseInputObjectZodSchema = makeSchema();
