import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicKnowledgeBaseWhereInputObjectSchema as TopicKnowledgeBaseWhereInputObjectSchema } from './TopicKnowledgeBaseWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopicKnowledgeBaseWhereInputObjectSchema).optional()
}).strict();
export const TopicCountOutputTypeCountKnowledgeBasesArgsObjectSchema = makeSchema();
export const TopicCountOutputTypeCountKnowledgeBasesArgsObjectZodSchema = makeSchema();
