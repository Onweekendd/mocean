import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const topicknowledgebasescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TopicKnowledgeBaseScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TopicKnowledgeBaseScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TopicKnowledgeBaseScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TopicKnowledgeBaseScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TopicKnowledgeBaseScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  topicId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  knowledgeBaseId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const TopicKnowledgeBaseScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseScalarWhereWithAggregatesInput> = topicknowledgebasescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TopicKnowledgeBaseScalarWhereWithAggregatesInput>;
export const TopicKnowledgeBaseScalarWhereWithAggregatesInputObjectZodSchema = topicknowledgebasescalarwherewithaggregatesinputSchema;
