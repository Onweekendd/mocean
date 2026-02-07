import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelArgsObjectSchema as ModelArgsObjectSchema } from './ModelArgs.schema';
import { ProviderArgsObjectSchema as ProviderArgsObjectSchema } from './ProviderArgs.schema';
import { AssistantSettingsArgsObjectSchema as AssistantSettingsArgsObjectSchema } from './AssistantSettingsArgs.schema';
import { TopicFindManySchema as TopicFindManySchema } from '../findManyTopic.schema';
import { KnowledgeBaseFindManySchema as KnowledgeBaseFindManySchema } from '../findManyKnowledgeBase.schema';
import { MCPAssistantServerFindManySchema as MCPAssistantServerFindManySchema } from '../findManyMCPAssistantServer.schema';
import { AssistantCountOutputTypeArgsObjectSchema as AssistantCountOutputTypeArgsObjectSchema } from './AssistantCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  model: z.union([z.boolean(), z.lazy(() => ModelArgsObjectSchema)]).optional(),
  provider: z.union([z.boolean(), z.lazy(() => ProviderArgsObjectSchema)]).optional(),
  defaultModel: z.union([z.boolean(), z.lazy(() => ModelArgsObjectSchema)]).optional(),
  settings: z.union([z.boolean(), z.lazy(() => AssistantSettingsArgsObjectSchema)]).optional(),
  topics: z.union([z.boolean(), z.lazy(() => TopicFindManySchema)]).optional(),
  knowledgeBases: z.union([z.boolean(), z.lazy(() => KnowledgeBaseFindManySchema)]).optional(),
  mcpServers: z.union([z.boolean(), z.lazy(() => MCPAssistantServerFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => AssistantCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const AssistantIncludeObjectSchema: z.ZodType<Prisma.AssistantInclude> = makeSchema() as unknown as z.ZodType<Prisma.AssistantInclude>;
export const AssistantIncludeObjectZodSchema = makeSchema();
