import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPToolSelectObjectSchema as MCPToolSelectObjectSchema } from './MCPToolSelect.schema';
import { MCPToolIncludeObjectSchema as MCPToolIncludeObjectSchema } from './MCPToolInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MCPToolSelectObjectSchema).optional(),
  include: z.lazy(() => MCPToolIncludeObjectSchema).optional()
}).strict();
export const MCPToolArgsObjectSchema = makeSchema();
export const MCPToolArgsObjectZodSchema = makeSchema();
