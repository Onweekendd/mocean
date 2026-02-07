import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicWhereInputObjectSchema as TopicWhereInputObjectSchema } from './TopicWhereInput.schema';
import { TopicUpdateWithoutKnowledgeBasesInputObjectSchema as TopicUpdateWithoutKnowledgeBasesInputObjectSchema } from './TopicUpdateWithoutKnowledgeBasesInput.schema';
import { TopicUncheckedUpdateWithoutKnowledgeBasesInputObjectSchema as TopicUncheckedUpdateWithoutKnowledgeBasesInputObjectSchema } from './TopicUncheckedUpdateWithoutKnowledgeBasesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopicWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TopicUpdateWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => TopicUncheckedUpdateWithoutKnowledgeBasesInputObjectSchema)])
}).strict();
export const TopicUpdateToOneWithWhereWithoutKnowledgeBasesInputObjectSchema: z.ZodType<Prisma.TopicUpdateToOneWithWhereWithoutKnowledgeBasesInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicUpdateToOneWithWhereWithoutKnowledgeBasesInput>;
export const TopicUpdateToOneWithWhereWithoutKnowledgeBasesInputObjectZodSchema = makeSchema();
