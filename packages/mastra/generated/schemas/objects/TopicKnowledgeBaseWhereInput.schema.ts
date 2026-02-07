import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { TopicScalarRelationFilterObjectSchema as TopicScalarRelationFilterObjectSchema } from './TopicScalarRelationFilter.schema';
import { TopicWhereInputObjectSchema as TopicWhereInputObjectSchema } from './TopicWhereInput.schema';
import { KnowledgeBaseScalarRelationFilterObjectSchema as KnowledgeBaseScalarRelationFilterObjectSchema } from './KnowledgeBaseScalarRelationFilter.schema';
import { KnowledgeBaseWhereInputObjectSchema as KnowledgeBaseWhereInputObjectSchema } from './KnowledgeBaseWhereInput.schema'

const topicknowledgebasewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TopicKnowledgeBaseWhereInputObjectSchema), z.lazy(() => TopicKnowledgeBaseWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TopicKnowledgeBaseWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TopicKnowledgeBaseWhereInputObjectSchema), z.lazy(() => TopicKnowledgeBaseWhereInputObjectSchema).array()]).optional(),
  topicId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  knowledgeBaseId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  topic: z.union([z.lazy(() => TopicScalarRelationFilterObjectSchema), z.lazy(() => TopicWhereInputObjectSchema)]).optional(),
  knowledgeBase: z.union([z.lazy(() => KnowledgeBaseScalarRelationFilterObjectSchema), z.lazy(() => KnowledgeBaseWhereInputObjectSchema)]).optional()
}).strict();
export const TopicKnowledgeBaseWhereInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseWhereInput> = topicknowledgebasewhereinputSchema as unknown as z.ZodType<Prisma.TopicKnowledgeBaseWhereInput>;
export const TopicKnowledgeBaseWhereInputObjectZodSchema = topicknowledgebasewhereinputSchema;
