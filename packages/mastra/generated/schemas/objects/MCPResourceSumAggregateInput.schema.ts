import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  size: z.literal(true).optional()
}).strict();
export const MCPResourceSumAggregateInputObjectSchema: z.ZodType<Prisma.MCPResourceSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MCPResourceSumAggregateInputType>;
export const MCPResourceSumAggregateInputObjectZodSchema = makeSchema();
