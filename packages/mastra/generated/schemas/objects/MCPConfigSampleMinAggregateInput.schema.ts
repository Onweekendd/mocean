import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  command: z.literal(true).optional(),
  serverId: z.literal(true).optional()
}).strict();
export const MCPConfigSampleMinAggregateInputObjectSchema: z.ZodType<Prisma.MCPConfigSampleMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MCPConfigSampleMinAggregateInputType>;
export const MCPConfigSampleMinAggregateInputObjectZodSchema = makeSchema();
