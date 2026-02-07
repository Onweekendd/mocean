import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicKnowledgeBaseWhereUniqueInputObjectSchema as TopicKnowledgeBaseWhereUniqueInputObjectSchema } from './TopicKnowledgeBaseWhereUniqueInput.schema';
import { TopicKnowledgeBaseUpdateWithoutKnowledgeBaseInputObjectSchema as TopicKnowledgeBaseUpdateWithoutKnowledgeBaseInputObjectSchema } from './TopicKnowledgeBaseUpdateWithoutKnowledgeBaseInput.schema';
import { TopicKnowledgeBaseUncheckedUpdateWithoutKnowledgeBaseInputObjectSchema as TopicKnowledgeBaseUncheckedUpdateWithoutKnowledgeBaseInputObjectSchema } from './TopicKnowledgeBaseUncheckedUpdateWithoutKnowledgeBaseInput.schema';
import { TopicKnowledgeBaseCreateWithoutKnowledgeBaseInputObjectSchema as TopicKnowledgeBaseCreateWithoutKnowledgeBaseInputObjectSchema } from './TopicKnowledgeBaseCreateWithoutKnowledgeBaseInput.schema';
import { TopicKnowledgeBaseUncheckedCreateWithoutKnowledgeBaseInputObjectSchema as TopicKnowledgeBaseUncheckedCreateWithoutKnowledgeBaseInputObjectSchema } from './TopicKnowledgeBaseUncheckedCreateWithoutKnowledgeBaseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopicKnowledgeBaseWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TopicKnowledgeBaseUpdateWithoutKnowledgeBaseInputObjectSchema), z.lazy(() => TopicKnowledgeBaseUncheckedUpdateWithoutKnowledgeBaseInputObjectSchema)]),
  create: z.union([z.lazy(() => TopicKnowledgeBaseCreateWithoutKnowledgeBaseInputObjectSchema), z.lazy(() => TopicKnowledgeBaseUncheckedCreateWithoutKnowledgeBaseInputObjectSchema)])
}).strict();
export const TopicKnowledgeBaseUpsertWithWhereUniqueWithoutKnowledgeBaseInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseUpsertWithWhereUniqueWithoutKnowledgeBaseInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseUpsertWithWhereUniqueWithoutKnowledgeBaseInput>;
export const TopicKnowledgeBaseUpsertWithWhereUniqueWithoutKnowledgeBaseInputObjectZodSchema = makeSchema();
