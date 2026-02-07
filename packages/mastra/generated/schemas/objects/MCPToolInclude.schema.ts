import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerArgsObjectSchema as MCPServerArgsObjectSchema } from './MCPServerArgs.schema'

const makeSchema = () => z.object({
  server: z.union([z.boolean(), z.lazy(() => MCPServerArgsObjectSchema)]).optional()
}).strict();
export const MCPToolIncludeObjectSchema: z.ZodType<Prisma.MCPToolInclude> = makeSchema() as unknown as z.ZodType<Prisma.MCPToolInclude>;
export const MCPToolIncludeObjectZodSchema = makeSchema();
