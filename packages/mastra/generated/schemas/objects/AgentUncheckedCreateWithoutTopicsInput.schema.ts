import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { KnowledgeRecognitionSchema } from '../enums/KnowledgeRecognition.schema';
import { AssistantSettingsUncheckedCreateNestedOneWithoutAgentInputObjectSchema as AssistantSettingsUncheckedCreateNestedOneWithoutAgentInputObjectSchema } from './AssistantSettingsUncheckedCreateNestedOneWithoutAgentInput.schema';
import { KnowledgeBaseUncheckedCreateNestedManyWithoutAgentsInputObjectSchema as KnowledgeBaseUncheckedCreateNestedManyWithoutAgentsInputObjectSchema } from './KnowledgeBaseUncheckedCreateNestedManyWithoutAgentsInput.schema';
import { MCPAgentServerUncheckedCreateNestedManyWithoutAgentInputObjectSchema as MCPAgentServerUncheckedCreateNestedManyWithoutAgentInputObjectSchema } from './MCPAgentServerUncheckedCreateNestedManyWithoutAgentInput.schema'

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
  settings: z.lazy(() => AssistantSettingsUncheckedCreateNestedOneWithoutAgentInputObjectSchema).optional(),
  knowledgeBases: z.lazy(() => KnowledgeBaseUncheckedCreateNestedManyWithoutAgentsInputObjectSchema).optional(),
  mcpServers: z.lazy(() => MCPAgentServerUncheckedCreateNestedManyWithoutAgentInputObjectSchema).optional()
}).strict();
export const AgentUncheckedCreateWithoutTopicsInputObjectSchema: z.ZodType<Prisma.AgentUncheckedCreateWithoutTopicsInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentUncheckedCreateWithoutTopicsInput>;
export const AgentUncheckedCreateWithoutTopicsInputObjectZodSchema = makeSchema();
