import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerSelectObjectSchema as MCPServerSelectObjectSchema } from './MCPServerSelect.schema';
import { MCPServerIncludeObjectSchema as MCPServerIncludeObjectSchema } from './MCPServerInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MCPServerSelectObjectSchema).optional(),
  include: z.lazy(() => MCPServerIncludeObjectSchema).optional()
}).strict();
export const MCPServerArgsObjectSchema = makeSchema();
export const MCPServerArgsObjectZodSchema = makeSchema();
