import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  title: z.literal(true).optional(),
  content: z.literal(true).optional(),
  order: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const QuickPhraseMinAggregateInputObjectSchema: z.ZodType<Prisma.QuickPhraseMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.QuickPhraseMinAggregateInputType>;
export const QuickPhraseMinAggregateInputObjectZodSchema = makeSchema();
