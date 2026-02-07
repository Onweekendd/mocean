import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerArgsObjectSchema as MCPServerArgsObjectSchema } from './MCPServerArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  uri: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  mimeType: z.boolean().optional(),
  size: z.boolean().optional(),
  text: z.boolean().optional(),
  blob: z.boolean().optional(),
  server: z.union([z.boolean(), z.lazy(() => MCPServerArgsObjectSchema)]).optional(),
  serverId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const MCPResourceSelectObjectSchema: z.ZodType<Prisma.MCPResourceSelect> = makeSchema() as unknown as z.ZodType<Prisma.MCPResourceSelect>;
export const MCPResourceSelectObjectZodSchema = makeSchema();
