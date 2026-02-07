import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  modelCount: z.literal(true).optional()
}).strict();
export const ProviderSumAggregateInputObjectSchema: z.ZodType<Prisma.ProviderSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProviderSumAggregateInputType>;
export const ProviderSumAggregateInputObjectZodSchema = makeSchema();
