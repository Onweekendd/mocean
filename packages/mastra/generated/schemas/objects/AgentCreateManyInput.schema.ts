import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { KnowledgeRecognitionSchema } from '../enums/KnowledgeRecognition.schema'

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
  updatedAt: z.coerce.date().optional()
}).strict();
export const AgentCreateManyInputObjectSchema: z.ZodType<Prisma.AgentCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentCreateManyInput>;
export const AgentCreateManyInputObjectZodSchema = makeSchema();
