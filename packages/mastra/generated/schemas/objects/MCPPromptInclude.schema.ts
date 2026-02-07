import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerArgsObjectSchema as MCPServerArgsObjectSchema } from './MCPServerArgs.schema'

const makeSchema = () => z.object({
  server: z.union([z.boolean(), z.lazy(() => MCPServerArgsObjectSchema)]).optional()
}).strict();
export const MCPPromptIncludeObjectSchema: z.ZodType<Prisma.MCPPromptInclude> = makeSchema() as unknown as z.ZodType<Prisma.MCPPromptInclude>;
export const MCPPromptIncludeObjectZodSchema = makeSchema();
