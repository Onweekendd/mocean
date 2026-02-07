import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  serverId: z.string().optional()
}).strict();
export const MCPConfigSampleWhereUniqueInputObjectSchema: z.ZodType<Prisma.MCPConfigSampleWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPConfigSampleWhereUniqueInput>;
export const MCPConfigSampleWhereUniqueInputObjectZodSchema = makeSchema();
