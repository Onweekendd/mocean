import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerArgsObjectSchema as MCPServerArgsObjectSchema } from './MCPServerArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  inputSchema: z.boolean().optional(),
  server: z.union([z.boolean(), z.lazy(() => MCPServerArgsObjectSchema)]).optional(),
  serverId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const MCPToolSelectObjectSchema: z.ZodType<Prisma.MCPToolSelect> = makeSchema() as unknown as z.ZodType<Prisma.MCPToolSelect>;
export const MCPToolSelectObjectZodSchema = makeSchema();
