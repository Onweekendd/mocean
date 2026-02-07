import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const topicknowledgebasescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TopicKnowledgeBaseScalarWhereInputObjectSchema), z.lazy(() => TopicKnowledgeBaseScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TopicKnowledgeBaseScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TopicKnowledgeBaseScalarWhereInputObjectSchema), z.lazy(() => TopicKnowledgeBaseScalarWhereInputObjectSchema).array()]).optional(),
  topicId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  knowledgeBaseId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const TopicKnowledgeBaseScalarWhereInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseScalarWhereInput> = topicknowledgebasescalarwhereinputSchema as unknown as z.ZodType<Prisma.TopicKnowledgeBaseScalarWhereInput>;
export const TopicKnowledgeBaseScalarWhereInputObjectZodSchema = topicknowledgebasescalarwhereinputSchema;
