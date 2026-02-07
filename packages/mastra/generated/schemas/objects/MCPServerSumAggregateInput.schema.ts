import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  timeout: z.literal(true).optional()
}).strict();
export const MCPServerSumAggregateInputObjectSchema: z.ZodType<Prisma.MCPServerSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerSumAggregateInputType>;
export const MCPServerSumAggregateInputObjectZodSchema = makeSchema();
