import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  command: z.literal(true).optional(),
  serverId: z.literal(true).optional()
}).strict();
export const MCPConfigSampleMaxAggregateInputObjectSchema: z.ZodType<Prisma.MCPConfigSampleMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MCPConfigSampleMaxAggregateInputType>;
export const MCPConfigSampleMaxAggregateInputObjectZodSchema = makeSchema();
