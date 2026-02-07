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
  agentId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  knowledgeBases: z.lazy(() => TopicKnowledgeBaseUncheckedCreateNestedManyWithoutTopicInputObjectSchema).optional()
}).strict();
export const TopicUncheckedCreateWithoutModelInputObjectSchema: z.ZodType<Prisma.TopicUncheckedCreateWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicUncheckedCreateWithoutModelInput>;
export const TopicUncheckedCreateWithoutModelInputObjectZodSchema = makeSchema();
