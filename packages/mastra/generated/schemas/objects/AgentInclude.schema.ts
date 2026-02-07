import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantSettingsArgsObjectSchema as AssistantSettingsArgsObjectSchema } from './AssistantSettingsArgs.schema';
import { TopicFindManySchema as TopicFindManySchema } from '../findManyTopic.schema';
import { KnowledgeBaseFindManySchema as KnowledgeBaseFindManySchema } from '../findManyKnowledgeBase.schema';
import { MCPAgentServerFindManySchema as MCPAgentServerFindManySchema } from '../findManyMCPAgentServer.schema';
import { AgentCountOutputTypeArgsObjectSchema as AgentCountOutputTypeArgsObjectSchema } from './AgentCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  settings: z.union([z.boolean(), z.lazy(() => AssistantSettingsArgsObjectSchema)]).optional(),
  topics: z.union([z.boolean(), z.lazy(() => TopicFindManySchema)]).optional(),
  knowledgeBases: z.union([z.boolean(), z.lazy(() => KnowledgeBaseFindManySchema)]).optional(),
  mcpServers: z.union([z.boolean(), z.lazy(() => MCPAgentServerFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => AgentCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const AgentIncludeObjectSchema: z.ZodType<Prisma.AgentInclude> = makeSchema() as unknown as z.ZodType<Prisma.AgentInclude>;
export const AgentIncludeObjectZodSchema = makeSchema();
