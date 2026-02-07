import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  origin_name: z.literal(true).optional(),
  path: z.literal(true).optional(),
  size: z.literal(true).optional(),
  ext: z.literal(true).optional(),
  type: z.literal(true).optional(),
  count: z.literal(true).optional(),
  tokens: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const FileTypeCountAggregateInputObjectSchema: z.ZodType<Prisma.FileTypeCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FileTypeCountAggregateInputType>;
export const FileTypeCountAggregateInputObjectZodSchema = makeSchema();
