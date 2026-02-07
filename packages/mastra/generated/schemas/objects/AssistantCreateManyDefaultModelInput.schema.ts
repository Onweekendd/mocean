import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeRecognitionSchema } from '../enums/KnowledgeRecognition.schema'

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
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const AssistantCreateManyDefaultModelInputObjectSchema: z.ZodType<Prisma.AssistantCreateManyDefaultModelInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantCreateManyDefaultModelInput>;
export const AssistantCreateManyDefaultModelInputObjectZodSchema = makeSchema();
