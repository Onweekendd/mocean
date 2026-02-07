import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  command: z.literal(true).optional(),
  argsJson: z.literal(true).optional(),
  env: z.literal(true).optional(),
  serverId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const MCPConfigSampleCountAggregateInputObjectSchema: z.ZodType<Prisma.MCPConfigSampleCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MCPConfigSampleCountAggregateInputType>;
export const MCPConfigSampleCountAggregateInputObjectZodSchema = makeSchema();
