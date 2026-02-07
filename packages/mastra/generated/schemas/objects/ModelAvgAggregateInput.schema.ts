import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  contextLength: z.literal(true).optional(),
  inputPricePerMillion: z.literal(true).optional(),
  outputPricePerMillion: z.literal(true).optional()
}).strict();
export const ModelAvgAggregateInputObjectSchema: z.ZodType<Prisma.ModelAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ModelAvgAggregateInputType>;
export const ModelAvgAggregateInputObjectZodSchema = makeSchema();
