import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerArgsObjectSchema as MCPServerArgsObjectSchema } from './MCPServerArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  command: z.boolean().optional(),
  argsJson: z.boolean().optional(),
  env: z.boolean().optional(),
  server: z.union([z.boolean(), z.lazy(() => MCPServerArgsObjectSchema)]).optional(),
  serverId: z.boolean().optional()
}).strict();
export const MCPConfigSampleSelectObjectSchema: z.ZodType<Prisma.MCPConfigSampleSelect> = makeSchema() as unknown as z.ZodType<Prisma.MCPConfigSampleSelect>;
export const MCPConfigSampleSelectObjectZodSchema = makeSchema();
