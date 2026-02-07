import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  size: z.literal(true).optional(),
  count: z.literal(true).optional(),
  tokens: z.literal(true).optional()
}).strict();
export const FileTypeAvgAggregateInputObjectSchema: z.ZodType<Prisma.FileTypeAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FileTypeAvgAggregateInputType>;
export const FileTypeAvgAggregateInputObjectZodSchema = makeSchema();
