import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicKnowledgeBaseWhereUniqueInputObjectSchema as TopicKnowledgeBaseWhereUniqueInputObjectSchema } from './TopicKnowledgeBaseWhereUniqueInput.schema';
import { TopicKnowledgeBaseCreateWithoutKnowledgeBaseInputObjectSchema as TopicKnowledgeBaseCreateWithoutKnowledgeBaseInputObjectSchema } from './TopicKnowledgeBaseCreateWithoutKnowledgeBaseInput.schema';
import { TopicKnowledgeBaseUncheckedCreateWithoutKnowledgeBaseInputObjectSchema as TopicKnowledgeBaseUncheckedCreateWithoutKnowledgeBaseInputObjectSchema } from './TopicKnowledgeBaseUncheckedCreateWithoutKnowledgeBaseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopicKnowledgeBaseWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TopicKnowledgeBaseCreateWithoutKnowledgeBaseInputObjectSchema), z.lazy(() => TopicKnowledgeBaseUncheckedCreateWithoutKnowledgeBaseInputObjectSchema)])
}).strict();
export const TopicKnowledgeBaseCreateOrConnectWithoutKnowledgeBaseInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseCreateOrConnectWithoutKnowledgeBaseInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseCreateOrConnectWithoutKnowledgeBaseInput>;
export const TopicKnowledgeBaseCreateOrConnectWithoutKnowledgeBaseInputObjectZodSchema = makeSchema();
