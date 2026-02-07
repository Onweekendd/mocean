import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TopicOrderByWithRelationInputObjectSchema as TopicOrderByWithRelationInputObjectSchema } from './TopicOrderByWithRelationInput.schema';
import { KnowledgeBaseOrderByWithRelationInputObjectSchema as KnowledgeBaseOrderByWithRelationInputObjectSchema } from './KnowledgeBaseOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  topicId: SortOrderSchema.optional(),
  knowledgeBaseId: SortOrderSchema.optional(),
  topic: z.lazy(() => TopicOrderByWithRelationInputObjectSchema).optional(),
  knowledgeBase: z.lazy(() => KnowledgeBaseOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const TopicKnowledgeBaseOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseOrderByWithRelationInput>;
export const TopicKnowledgeBaseOrderByWithRelationInputObjectZodSchema = makeSchema();
