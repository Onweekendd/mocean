import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicKnowledgeBaseUncheckedCreateNestedManyWithoutTopicInputObjectSchema as TopicKnowledgeBaseUncheckedCreateNestedManyWithoutTopicInputObjectSchema } from './TopicKnowledgeBaseUncheckedCreateNestedManyWithoutTopicInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  prompt: z.string().optional().nullable(),
  pinned: z.boolean().optional(),
  isNameManuallyEdited: z.boolean().optional(),
  assistantId: z.string().optional().nullable(),
  modelId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  knowledgeBases: z.lazy(() => TopicKnowledgeBaseUncheckedCreateNestedManyWithoutTopicInputObjectSchema).optional()
}).strict();
export const TopicUncheckedCreateWithoutAgentInputObjectSchema: z.ZodType<Prisma.TopicUncheckedCreateWithoutAgentInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicUncheckedCreateWithoutAgentInput>;
export const TopicUncheckedCreateWithoutAgentInputObjectZodSchema = makeSchema();
