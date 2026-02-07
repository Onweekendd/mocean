import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  order: z.literal(true).optional()
}).strict();
export const QuickPhraseSumAggregateInputObjectSchema: z.ZodType<Prisma.QuickPhraseSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.QuickPhraseSumAggregateInputType>;
export const QuickPhraseSumAggregateInputObjectZodSchema = makeSchema();
