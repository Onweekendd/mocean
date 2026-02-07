import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicCreateWithoutKnowledgeBasesInputObjectSchema as TopicCreateWithoutKnowledgeBasesInputObjectSchema } from './TopicCreateWithoutKnowledgeBasesInput.schema';
import { TopicUncheckedCreateWithoutKnowledgeBasesInputObjectSchema as TopicUncheckedCreateWithoutKnowledgeBasesInputObjectSchema } from './TopicUncheckedCreateWithoutKnowledgeBasesInput.schema';
import { TopicCreateOrConnectWithoutKnowledgeBasesInputObjectSchema as TopicCreateOrConnectWithoutKnowledgeBasesInputObjectSchema } from './TopicCreateOrConnectWithoutKnowledgeBasesInput.schema';
import { TopicWhereUniqueInputObjectSchema as TopicWhereUniqueInputObjectSchema } from './TopicWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TopicCreateWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => TopicUncheckedCreateWithoutKnowledgeBasesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TopicCreateOrConnectWithoutKnowledgeBasesInputObjectSchema).optional(),
  connect: z.lazy(() => TopicWhereUniqueInputObjectSchema).optional()
}).strict();
export const TopicCreateNestedOneWithoutKnowledgeBasesInputObjectSchema: z.ZodType<Prisma.TopicCreateNestedOneWithoutKnowledgeBasesInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicCreateNestedOneWithoutKnowledgeBasesInput>;
export const TopicCreateNestedOneWithoutKnowledgeBasesInputObjectZodSchema = makeSchema();
