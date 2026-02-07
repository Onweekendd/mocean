import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  modelCount: z.literal(true).optional()
}).strict();
export const ProviderAvgAggregateInputObjectSchema: z.ZodType<Prisma.ProviderAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProviderAvgAggregateInputType>;
export const ProviderAvgAggregateInputObjectZodSchema = makeSchema();
