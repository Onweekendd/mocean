import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeRecognitionSchema } from '../enums/KnowledgeRecognition.schema';
import { ProviderCreateNestedOneWithoutAssistantInputObjectSchema as ProviderCreateNestedOneWithoutAssistantInputObjectSchema } from './ProviderCreateNestedOneWithoutAssistantInput.schema';
import { ModelCreateNestedOneWithoutDefaultForAssistantsInputObjectSchema as ModelCreateNestedOneWithoutDefaultForAssistantsInputObjectSchema } from './ModelCreateNestedOneWithoutDefaultForAssistantsInput.schema';
import { AssistantSettingsCreateNestedOneWithoutAssistantInputObjectSchema as AssistantSettingsCreateNestedOneWithoutAssistantInputObjectSchema } from './AssistantSettingsCreateNestedOneWithoutAssistantInput.schema';
import { TopicCreateNestedManyWithoutAssistantInputObjectSchema as TopicCreateNestedManyWithoutAssistantInputObjectSchema } from './TopicCreateNestedManyWithoutAssistantInput.schema';
import { KnowledgeBaseCreateNestedManyWithoutAssistantsInputObjectSchema as KnowledgeBaseCreateNestedManyWithoutAssistantsInputObjectSchema } from './KnowledgeBaseCreateNestedManyWithoutAssistantsInput.schema';
import { MCPAssistantServerCreateNestedManyWithoutAssistantInputObjectSchema as MCPAssistantServerCreateNestedManyWithoutAssistantInputObjectSchema } from './MCPAssistantServerCreateNestedManyWithoutAssistantInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  prompt: z.string(),
  type: z.string().optional(),
  emoji: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  enableWebSearch: z.boolean().optional(),
  webSearchProviderId: z.string().optional().nullable(),
  enableGenerateImage: z.boolean().optional(),
  knowledgeRecognition: KnowledgeRecognitionSchema.optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  provider: z.lazy(() => ProviderCreateNestedOneWithoutAssistantInputObjectSchema).optional(),
  defaultModel: z.lazy(() => ModelCreateNestedOneWithoutDefaultForAssistantsInputObjectSchema).optional(),
  settings: z.lazy(() => AssistantSettingsCreateNestedOneWithoutAssistantInputObjectSchema).optional(),
  topics: z.lazy(() => TopicCreateNestedManyWithoutAssistantInputObjectSchema).optional(),
  knowledgeBases: z.lazy(() => KnowledgeBaseCreateNestedManyWithoutAssistantsInputObjectSchema).optional(),
  mcpServers: z.lazy(() => MCPAssistantServerCreateNestedManyWithoutAssistantInputObjectSchema).optional()
}).strict();
export const AssistantCreateWithoutModelInputObjectSchema: z.ZodType<Prisma.AssistantCreateWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantCreateWithoutModelInput>;
export const AssistantCreateWithoutModelInputObjectZodSchema = makeSchema();
