import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { KnowledgeRecognitionSchema } from '../enums/KnowledgeRecognition.schema';
import { AssistantSettingsCreateNestedOneWithoutAgentInputObjectSchema as AssistantSettingsCreateNestedOneWithoutAgentInputObjectSchema } from './AssistantSettingsCreateNestedOneWithoutAgentInput.schema';
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
  updatedAt: z.coerce.date().optional(),
  settings: z.lazy(() => AssistantSettingsCreateNestedOneWithoutAgentInputObjectSchema).optional(),
  knowledgeBases: z.lazy(() => KnowledgeBaseCreateNestedManyWithoutAgentsInputObjectSchema).optional(),
  mcpServers: z.lazy(() => MCPAgentServerCreateNestedManyWithoutAgentInputObjectSchema).optional()
}).strict();
export const AgentCreateWithoutTopicsInputObjectSchema: z.ZodType<Prisma.AgentCreateWithoutTopicsInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentCreateWithoutTopicsInput>;
export const AgentCreateWithoutTopicsInputObjectZodSchema = makeSchema();
