import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantSettingsArgsObjectSchema as AssistantSettingsArgsObjectSchema } from './AssistantSettingsArgs.schema';
import { TopicFindManySchema as TopicFindManySchema } from '../findManyTopic.schema';
import { KnowledgeBaseFindManySchema as KnowledgeBaseFindManySchema } from '../findManyKnowledgeBase.schema';
import { MCPAgentServerFindManySchema as MCPAgentServerFindManySchema } from '../findManyMCPAgentServer.schema';
import { AgentCountOutputTypeArgsObjectSchema as AgentCountOutputTypeArgsObjectSchema } from './AgentCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  prompt: z.boolean().optional(),
  type: z.boolean().optional(),
  emoji: z.boolean().optional(),
  description: z.boolean().optional(),
  groupJson: z.boolean().optional(),
  enableWebSearch: z.boolean().optional(),
  webSearchProviderId: z.boolean().optional(),
  enableGenerateImage: z.boolean().optional(),
  knowledgeRecognition: z.boolean().optional(),
  settings: z.union([z.boolean(), z.lazy(() => AssistantSettingsArgsObjectSchema)]).optional(),
  topics: z.union([z.boolean(), z.lazy(() => TopicFindManySchema)]).optional(),
  knowledgeBases: z.union([z.boolean(), z.lazy(() => KnowledgeBaseFindManySchema)]).optional(),
  mcpServers: z.union([z.boolean(), z.lazy(() => MCPAgentServerFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => AgentCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const AgentSelectObjectSchema: z.ZodType<Prisma.AgentSelect> = makeSchema() as unknown as z.ZodType<Prisma.AgentSelect>;
export const AgentSelectObjectZodSchema = makeSchema();
