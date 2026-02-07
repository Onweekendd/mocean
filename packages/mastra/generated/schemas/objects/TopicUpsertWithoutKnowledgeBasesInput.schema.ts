import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicUpdateWithoutKnowledgeBasesInputObjectSchema as TopicUpdateWithoutKnowledgeBasesInputObjectSchema } from './TopicUpdateWithoutKnowledgeBasesInput.schema';
import { TopicUncheckedUpdateWithoutKnowledgeBasesInputObjectSchema as TopicUncheckedUpdateWithoutKnowledgeBasesInputObjectSchema } from './TopicUncheckedUpdateWithoutKnowledgeBasesInput.schema';
import { TopicCreateWithoutKnowledgeBasesInputObjectSchema as TopicCreateWithoutKnowledgeBasesInputObjectSchema } from './TopicCreateWithoutKnowledgeBasesInput.schema';
import { TopicUncheckedCreateWithoutKnowledgeBasesInputObjectSchema as TopicUncheckedCreateWithoutKnowledgeBasesInputObjectSchema } from './TopicUncheckedCreateWithoutKnowledgeBasesInput.schema';
import { TopicWhereInputObjectSchema as TopicWhereInputObjectSchema } from './TopicWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TopicUpdateWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => TopicUncheckedUpdateWithoutKnowledgeBasesInputObjectSchema)]),
  create: z.union([z.lazy(() => TopicCreateWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => TopicUncheckedCreateWithoutKnowledgeBasesInputObjectSchema)]),
  where: z.lazy(() => TopicWhereInputObjectSchema).optional()
}).strict();
export const TopicUpsertWithoutKnowledgeBasesInputObjectSchema: z.ZodType<Prisma.TopicUpsertWithoutKnowledgeBasesInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicUpsertWithoutKnowledgeBasesInput>;
export const TopicUpsertWithoutKnowledgeBasesInputObjectZodSchema = makeSchema();
