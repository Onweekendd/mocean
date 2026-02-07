import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantCountOutputTypeCountTopicsArgsObjectSchema as AssistantCountOutputTypeCountTopicsArgsObjectSchema } from './AssistantCountOutputTypeCountTopicsArgs.schema';
import { AssistantCountOutputTypeCountKnowledgeBasesArgsObjectSchema as AssistantCountOutputTypeCountKnowledgeBasesArgsObjectSchema } from './AssistantCountOutputTypeCountKnowledgeBasesArgs.schema';
import { AssistantCountOutputTypeCountMcpServersArgsObjectSchema as AssistantCountOutputTypeCountMcpServersArgsObjectSchema } from './AssistantCountOutputTypeCountMcpServersArgs.schema'

const makeSchema = () => z.object({
  topics: z.union([z.boolean(), z.lazy(() => AssistantCountOutputTypeCountTopicsArgsObjectSchema)]).optional(),
  knowledgeBases: z.union([z.boolean(), z.lazy(() => AssistantCountOutputTypeCountKnowledgeBasesArgsObjectSchema)]).optional(),
  mcpServers: z.union([z.boolean(), z.lazy(() => AssistantCountOutputTypeCountMcpServersArgsObjectSchema)]).optional()
}).strict();
export const AssistantCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.AssistantCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.AssistantCountOutputTypeSelect>;
export const AssistantCountOutputTypeSelectObjectZodSchema = makeSchema();
