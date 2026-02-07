import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicWhereUniqueInputObjectSchema as TopicWhereUniqueInputObjectSchema } from './TopicWhereUniqueInput.schema';
import { TopicCreateWithoutKnowledgeBasesInputObjectSchema as TopicCreateWithoutKnowledgeBasesInputObjectSchema } from './TopicCreateWithoutKnowledgeBasesInput.schema';
import { TopicUncheckedCreateWithoutKnowledgeBasesInputObjectSchema as TopicUncheckedCreateWithoutKnowledgeBasesInputObjectSchema } from './TopicUncheckedCreateWithoutKnowledgeBasesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopicWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TopicCreateWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => TopicUncheckedCreateWithoutKnowledgeBasesInputObjectSchema)])
}).strict();
export const TopicCreateOrConnectWithoutKnowledgeBasesInputObjectSchema: z.ZodType<Prisma.TopicCreateOrConnectWithoutKnowledgeBasesInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicCreateOrConnectWithoutKnowledgeBasesInput>;
export const TopicCreateOrConnectWithoutKnowledgeBasesInputObjectZodSchema = makeSchema();
