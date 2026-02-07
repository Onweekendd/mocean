import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AgentCountOutputTypeCountTopicsArgsObjectSchema as AgentCountOutputTypeCountTopicsArgsObjectSchema } from './AgentCountOutputTypeCountTopicsArgs.schema';
import { AgentCountOutputTypeCountKnowledgeBasesArgsObjectSchema as AgentCountOutputTypeCountKnowledgeBasesArgsObjectSchema } from './AgentCountOutputTypeCountKnowledgeBasesArgs.schema';
import { AgentCountOutputTypeCountMcpServersArgsObjectSchema as AgentCountOutputTypeCountMcpServersArgsObjectSchema } from './AgentCountOutputTypeCountMcpServersArgs.schema'

const makeSchema = () => z.object({
  topics: z.union([z.boolean(), z.lazy(() => AgentCountOutputTypeCountTopicsArgsObjectSchema)]).optional(),
  knowledgeBases: z.union([z.boolean(), z.lazy(() => AgentCountOutputTypeCountKnowledgeBasesArgsObjectSchema)]).optional(),
  mcpServers: z.union([z.boolean(), z.lazy(() => AgentCountOutputTypeCountMcpServersArgsObjectSchema)]).optional()
}).strict();
export const AgentCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.AgentCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.AgentCountOutputTypeSelect>;
export const AgentCountOutputTypeSelectObjectZodSchema = makeSchema();
