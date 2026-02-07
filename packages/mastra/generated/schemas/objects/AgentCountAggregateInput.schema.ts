import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  prompt: z.literal(true).optional(),
  type: z.literal(true).optional(),
  emoji: z.literal(true).optional(),
  description: z.literal(true).optional(),
  groupJson: z.literal(true).optional(),
  enableWebSearch: z.literal(true).optional(),
  webSearchProviderId: z.literal(true).optional(),
  enableGenerateImage: z.literal(true).optional(),
  knowledgeRecognition: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const AgentCountAggregateInputObjectSchema: z.ZodType<Prisma.AgentCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AgentCountAggregateInputType>;
export const AgentCountAggregateInputObjectZodSchema = makeSchema();
