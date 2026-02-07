import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeItemWhereUniqueInputObjectSchema as KnowledgeItemWhereUniqueInputObjectSchema } from './KnowledgeItemWhereUniqueInput.schema';
import { KnowledgeItemUpdateWithoutKnowledgeBaseInputObjectSchema as KnowledgeItemUpdateWithoutKnowledgeBaseInputObjectSchema } from './KnowledgeItemUpdateWithoutKnowledgeBaseInput.schema';
import { KnowledgeItemUncheckedUpdateWithoutKnowledgeBaseInputObjectSchema as KnowledgeItemUncheckedUpdateWithoutKnowledgeBaseInputObjectSchema } from './KnowledgeItemUncheckedUpdateWithoutKnowledgeBaseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => KnowledgeItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => KnowledgeItemUpdateWithoutKnowledgeBaseInputObjectSchema), z.lazy(() => KnowledgeItemUncheckedUpdateWithoutKnowledgeBaseInputObjectSchema)])
}).strict();
export const KnowledgeItemUpdateWithWhereUniqueWithoutKnowledgeBaseInputObjectSchema: z.ZodType<Prisma.KnowledgeItemUpdateWithWhereUniqueWithoutKnowledgeBaseInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeItemUpdateWithWhereUniqueWithoutKnowledgeBaseInput>;
export const KnowledgeItemUpdateWithWhereUniqueWithoutKnowledgeBaseInputObjectZodSchema = makeSchema();
