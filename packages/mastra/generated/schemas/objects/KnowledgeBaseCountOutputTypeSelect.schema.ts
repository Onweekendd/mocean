import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseCountOutputTypeCountAssistantsArgsObjectSchema as KnowledgeBaseCountOutputTypeCountAssistantsArgsObjectSchema } from './KnowledgeBaseCountOutputTypeCountAssistantsArgs.schema';
import { KnowledgeBaseCountOutputTypeCountAgentsArgsObjectSchema as KnowledgeBaseCountOutputTypeCountAgentsArgsObjectSchema } from './KnowledgeBaseCountOutputTypeCountAgentsArgs.schema';
import { KnowledgeBaseCountOutputTypeCountItemsArgsObjectSchema as KnowledgeBaseCountOutputTypeCountItemsArgsObjectSchema } from './KnowledgeBaseCountOutputTypeCountItemsArgs.schema';
import { KnowledgeBaseCountOutputTypeCountTopicsArgsObjectSchema as KnowledgeBaseCountOutputTypeCountTopicsArgsObjectSchema } from './KnowledgeBaseCountOutputTypeCountTopicsArgs.schema'

const makeSchema = () => z.object({
  assistants: z.union([z.boolean(), z.lazy(() => KnowledgeBaseCountOutputTypeCountAssistantsArgsObjectSchema)]).optional(),
  agents: z.union([z.boolean(), z.lazy(() => KnowledgeBaseCountOutputTypeCountAgentsArgsObjectSchema)]).optional(),
  items: z.union([z.boolean(), z.lazy(() => KnowledgeBaseCountOutputTypeCountItemsArgsObjectSchema)]).optional(),
  topics: z.union([z.boolean(), z.lazy(() => KnowledgeBaseCountOutputTypeCountTopicsArgsObjectSchema)]).optional()
}).strict();
export const KnowledgeBaseCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.KnowledgeBaseCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseCountOutputTypeSelect>;
export const KnowledgeBaseCountOutputTypeSelectObjectZodSchema = makeSchema();
