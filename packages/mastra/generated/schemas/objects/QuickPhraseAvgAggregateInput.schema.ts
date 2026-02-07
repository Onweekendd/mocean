import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  order: z.literal(true).optional()
}).strict();
export const QuickPhraseAvgAggregateInputObjectSchema: z.ZodType<Prisma.QuickPhraseAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.QuickPhraseAvgAggregateInputType>;
export const QuickPhraseAvgAggregateInputObjectZodSchema = makeSchema();
