import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  contextLength: z.literal(true).optional(),
  inputPricePerMillion: z.literal(true).optional(),
  outputPricePerMillion: z.literal(true).optional()
}).strict();
export const ModelSumAggregateInputObjectSchema: z.ZodType<Prisma.ModelSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ModelSumAggregateInputType>;
export const ModelSumAggregateInputObjectZodSchema = makeSchema();
