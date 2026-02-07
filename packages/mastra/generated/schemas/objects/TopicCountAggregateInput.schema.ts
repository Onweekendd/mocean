import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  prompt: z.literal(true).optional(),
  pinned: z.literal(true).optional(),
  isNameManuallyEdited: z.literal(true).optional(),
  assistantId: z.literal(true).optional(),
  agentId: z.literal(true).optional(),
  modelId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TopicCountAggregateInputObjectSchema: z.ZodType<Prisma.TopicCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TopicCountAggregateInputType>;
export const TopicCountAggregateInputObjectZodSchema = makeSchema();
