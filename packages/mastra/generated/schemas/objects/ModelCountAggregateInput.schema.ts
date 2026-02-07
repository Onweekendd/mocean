import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  owned_by: z.literal(true).optional(),
  description: z.literal(true).optional(),
  isSystem: z.literal(true).optional(),
  contextLength: z.literal(true).optional(),
  supportsAttachments: z.literal(true).optional(),
  supportsTools: z.literal(true).optional(),
  supportsReasoning: z.literal(true).optional(),
  supportsImage: z.literal(true).optional(),
  supportsAudio: z.literal(true).optional(),
  supportsVideo: z.literal(true).optional(),
  supportsEmbedding: z.literal(true).optional(),
  inputPricePerMillion: z.literal(true).optional(),
  outputPricePerMillion: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ModelCountAggregateInputObjectSchema: z.ZodType<Prisma.ModelCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ModelCountAggregateInputType>;
export const ModelCountAggregateInputObjectZodSchema = makeSchema();
