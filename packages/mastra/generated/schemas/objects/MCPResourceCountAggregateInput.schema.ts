import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  uri: z.literal(true).optional(),
  name: z.literal(true).optional(),
  description: z.literal(true).optional(),
  mimeType: z.literal(true).optional(),
  size: z.literal(true).optional(),
  text: z.literal(true).optional(),
  blob: z.literal(true).optional(),
  serverId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const MCPResourceCountAggregateInputObjectSchema: z.ZodType<Prisma.MCPResourceCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MCPResourceCountAggregateInputType>;
export const MCPResourceCountAggregateInputObjectZodSchema = makeSchema();
