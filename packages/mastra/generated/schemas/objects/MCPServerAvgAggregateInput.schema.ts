import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  timeout: z.literal(true).optional()
}).strict();
export const MCPServerAvgAggregateInputObjectSchema: z.ZodType<Prisma.MCPServerAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerAvgAggregateInputType>;
export const MCPServerAvgAggregateInputObjectZodSchema = makeSchema();
