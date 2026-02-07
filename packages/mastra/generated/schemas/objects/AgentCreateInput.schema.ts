import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { KnowledgeRecognitionSchema } from '../enums/KnowledgeRecognition.schema';
import { AssistantSettingsCreateNestedOneWithoutAgentInputObjectSchema as AssistantSettingsCreateNestedOneWithoutAgentInputObjectSchema } from './AssistantSettingsCreateNestedOneWithoutAgentInput.schema';
import { TopicCreateNestedManyWithoutAgentInputObjectSchema as TopicCreateNestedManyWithoutAgentInputObjectSchema } from './TopicCreateNestedManyWithoutAgentInput.schema';
import { KnowledgeBaseCreateNestedManyWithoutAgentsInputObjectSchema as KnowledgeBaseCreateNestedManyWithoutAgentsInputObjectSchema } from './KnowledgeBaseCreateNestedManyWithoutAgentsInput.schema';
import { MCPAgentServerCreateNestedManyWithoutAgentInputObjectSchema as MCPAgentServerCreateNestedManyWithoutAgentInputObjectSchema } from './MCPAgentServerCreateNestedManyWithoutAgentInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  prompt: z.string(),
  type: z.string().optional(),
  emoji: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  groupJson: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  enableWebSearch: z.boolean().optional(),
  webSearchProviderId: z.string().optional().nullable(),
  enableGenerateImage: z.boolean().optional(),
  knowledgeRecognition: KnowledgeRecognitionSchema.optional().nullable(),
  createdAt: z.coerce.date().optional(),
  settings: z.lazy(() => AssistantSettingsCreateNestedOneWithoutAgentInputObjectSchema).optional(),
  topics: z.lazy(() => TopicCreateNestedManyWithoutAgentInputObjectSchema).optional(),
  knowledgeBases: z.lazy(() => KnowledgeBaseCreateNestedManyWithoutAgentsInputObjectSchema).optional(),
  mcpServers: z.lazy(() => MCPAgentServerCreateNestedManyWithoutAgentInputObjectSchema).optional()
}).strict();
export const AgentCreateInputObjectSchema: z.ZodType<Prisma.AgentCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentCreateInput>;
export const AgentCreateInputObjectZodSchema = makeSchema();
