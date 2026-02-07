import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicCountOutputTypeCountKnowledgeBasesArgsObjectSchema as TopicCountOutputTypeCountKnowledgeBasesArgsObjectSchema } from './TopicCountOutputTypeCountKnowledgeBasesArgs.schema'

const makeSchema = () => z.object({
  knowledgeBases: z.union([z.boolean(), z.lazy(() => TopicCountOutputTypeCountKnowledgeBasesArgsObjectSchema)]).optional()
}).strict();
export const TopicCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TopicCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TopicCountOutputTypeSelect>;
export const TopicCountOutputTypeSelectObjectZodSchema = makeSchema();
