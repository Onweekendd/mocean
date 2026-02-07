import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  prompt: z.string().optional().nullable(),
  pinned: z.boolean().optional(),
  isNameManuallyEdited: z.boolean().optional(),
  agentId: z.string().optional().nullable(),
  modelId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const TopicCreateManyAssistantInputObjectSchema: z.ZodType<Prisma.TopicCreateManyAssistantInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicCreateManyAssistantInput>;
export const TopicCreateManyAssistantInputObjectZodSchema = makeSchema();
