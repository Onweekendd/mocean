import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicKnowledgeBaseWhereInputObjectSchema as TopicKnowledgeBaseWhereInputObjectSchema } from './TopicKnowledgeBaseWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => TopicKnowledgeBaseWhereInputObjectSchema).optional(),
  some: z.lazy(() => TopicKnowledgeBaseWhereInputObjectSchema).optional(),
  none: z.lazy(() => TopicKnowledgeBaseWhereInputObjectSchema).optional()
}).strict();
export const TopicKnowledgeBaseListRelationFilterObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseListRelationFilter>;
export const TopicKnowledgeBaseListRelationFilterObjectZodSchema = makeSchema();
