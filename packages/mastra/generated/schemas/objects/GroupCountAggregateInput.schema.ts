import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  providerId: z.literal(true).optional(),
  isDefault: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const GroupCountAggregateInputObjectSchema: z.ZodType<Prisma.GroupCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GroupCountAggregateInputType>;
export const GroupCountAggregateInputObjectZodSchema = makeSchema();
