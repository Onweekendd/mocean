import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeRecognitionSchema } from '../enums/KnowledgeRecognition.schema';
import { TopicUncheckedCreateNestedManyWithoutAssistantInputObjectSchema as TopicUncheckedCreateNestedManyWithoutAssistantInputObjectSchema } from './TopicUncheckedCreateNestedManyWithoutAssistantInput.schema';
import { KnowledgeBaseUncheckedCreateNestedManyWithoutAssistantsInputObjectSchema as KnowledgeBaseUncheckedCreateNestedManyWithoutAssistantsInputObjectSchema } from './KnowledgeBaseUncheckedCreateNestedManyWithoutAssistantsInput.schema';
import { MCPAssistantServerUncheckedCreateNestedManyWithoutAssistantInputObjectSchema as MCPAssistantServerUncheckedCreateNestedManyWithoutAssistantInputObjectSchema } from './MCPAssistantServerUncheckedCreateNestedManyWithoutAssistantInput.schema'

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
  modelId: z.string().optional().nullable(),
  providerId: z.string().optional().nullable(),
  defaultModelId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  topics: z.lazy(() => TopicUncheckedCreateNestedManyWithoutAssistantInputObjectSchema).optional(),
  knowledgeBases: z.lazy(() => KnowledgeBaseUncheckedCreateNestedManyWithoutAssistantsInputObjectSchema).optional(),
  mcpServers: z.lazy(() => MCPAssistantServerUncheckedCreateNestedManyWithoutAssistantInputObjectSchema).optional()
}).strict();
export const AssistantUncheckedCreateWithoutSettingsInputObjectSchema: z.ZodType<Prisma.AssistantUncheckedCreateWithoutSettingsInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantUncheckedCreateWithoutSettingsInput>;
export const AssistantUncheckedCreateWithoutSettingsInputObjectZodSchema = makeSchema();
