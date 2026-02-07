import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  description: z.literal(true).optional(),
  arguments: z.literal(true).optional(),
  serverId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const MCPPromptCountAggregateInputObjectSchema: z.ZodType<Prisma.MCPPromptCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MCPPromptCountAggregateInputType>;
export const MCPPromptCountAggregateInputObjectZodSchema = makeSchema();
