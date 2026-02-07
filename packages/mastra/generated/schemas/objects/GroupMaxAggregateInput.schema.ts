import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  providerId: z.literal(true).optional(),
  isDefault: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const GroupMaxAggregateInputObjectSchema: z.ZodType<Prisma.GroupMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GroupMaxAggregateInputType>;
export const GroupMaxAggregateInputObjectZodSchema = makeSchema();
