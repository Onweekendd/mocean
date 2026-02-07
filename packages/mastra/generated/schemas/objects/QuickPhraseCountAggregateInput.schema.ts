import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  title: z.literal(true).optional(),
  content: z.literal(true).optional(),
  order: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const QuickPhraseCountAggregateInputObjectSchema: z.ZodType<Prisma.QuickPhraseCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.QuickPhraseCountAggregateInputType>;
export const QuickPhraseCountAggregateInputObjectZodSchema = makeSchema();
