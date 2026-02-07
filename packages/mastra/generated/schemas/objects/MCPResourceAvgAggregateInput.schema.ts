import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  size: z.literal(true).optional()
}).strict();
export const MCPResourceAvgAggregateInputObjectSchema: z.ZodType<Prisma.MCPResourceAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MCPResourceAvgAggregateInputType>;
export const MCPResourceAvgAggregateInputObjectZodSchema = makeSchema();
