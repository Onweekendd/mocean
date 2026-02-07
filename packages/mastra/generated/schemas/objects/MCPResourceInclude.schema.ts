import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerArgsObjectSchema as MCPServerArgsObjectSchema } from './MCPServerArgs.schema'

const makeSchema = () => z.object({
  server: z.union([z.boolean(), z.lazy(() => MCPServerArgsObjectSchema)]).optional()
}).strict();
export const MCPResourceIncludeObjectSchema: z.ZodType<Prisma.MCPResourceInclude> = makeSchema() as unknown as z.ZodType<Prisma.MCPResourceInclude>;
export const MCPResourceIncludeObjectZodSchema = makeSchema();
