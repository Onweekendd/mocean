import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  size: z.literal(true).optional(),
  count: z.literal(true).optional(),
  tokens: z.literal(true).optional()
}).strict();
export const FileTypeSumAggregateInputObjectSchema: z.ZodType<Prisma.FileTypeSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FileTypeSumAggregateInputType>;
export const FileTypeSumAggregateInputObjectZodSchema = makeSchema();
