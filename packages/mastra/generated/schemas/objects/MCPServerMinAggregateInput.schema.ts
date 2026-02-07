import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  type: z.literal(true).optional(),
  description: z.literal(true).optional(),
  baseUrl: z.literal(true).optional(),
  command: z.literal(true).optional(),
  registryUrl: z.literal(true).optional(),
  isActive: z.literal(true).optional(),
  searchKey: z.literal(true).optional(),
  provider: z.literal(true).optional(),
  providerUrl: z.literal(true).optional(),
  logoUrl: z.literal(true).optional(),
  timeout: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const MCPServerMinAggregateInputObjectSchema: z.ZodType<Prisma.MCPServerMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerMinAggregateInputType>;
export const MCPServerMinAggregateInputObjectZodSchema = makeSchema();
