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
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  prompt: z.boolean().optional(),
  type: z.boolean().optional(),
  emoji: z.boolean().optional(),
  description: z.boolean().optional(),
  enableWebSearch: z.boolean().optional(),
  webSearchProviderId: z.boolean().optional(),
  enableGenerateImage: z.boolean().optional(),
  knowledgeRecognition: z.boolean().optional(),
  model: z.union([z.boolean(), z.lazy(() => ModelArgsObjectSchema)]).optional(),
  modelId: z.boolean().optional(),
  provider: z.union([z.boolean(), z.lazy(() => ProviderArgsObjectSchema)]).optional(),
  providerId: z.boolean().optional(),
  defaultModel: z.union([z.boolean(), z.lazy(() => ModelArgsObjectSchema)]).optional(),
  defaultModelId: z.boolean().optional(),
  settings: z.union([z.boolean(), z.lazy(() => AssistantSettingsArgsObjectSchema)]).optional(),
  topics: z.union([z.boolean(), z.lazy(() => TopicFindManySchema)]).optional(),
  knowledgeBases: z.union([z.boolean(), z.lazy(() => KnowledgeBaseFindManySchema)]).optional(),
  mcpServers: z.union([z.boolean(), z.lazy(() => MCPAssistantServerFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => AssistantCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const AssistantSelectObjectSchema: z.ZodType<Prisma.AssistantSelect> = makeSchema() as unknown as z.ZodType<Prisma.AssistantSelect>;
export const AssistantSelectObjectZodSchema = makeSchema();
