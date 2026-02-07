import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  modelId: z.literal(true).optional(),
  groupId: z.literal(true).optional(),
  providerId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ModelGroupMaxAggregateInputObjectSchema: z.ZodType<Prisma.ModelGroupMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupMaxAggregateInputType>;
export const ModelGroupMaxAggregateInputObjectZodSchema = makeSchema();
