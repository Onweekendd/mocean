import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPPromptSelectObjectSchema as MCPPromptSelectObjectSchema } from './MCPPromptSelect.schema';
import { MCPPromptIncludeObjectSchema as MCPPromptIncludeObjectSchema } from './MCPPromptInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MCPPromptSelectObjectSchema).optional(),
  include: z.lazy(() => MCPPromptIncludeObjectSchema).optional()
}).strict();
export const MCPPromptArgsObjectSchema = makeSchema();
export const MCPPromptArgsObjectZodSchema = makeSchema();
