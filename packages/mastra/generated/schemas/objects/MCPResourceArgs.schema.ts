import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPResourceSelectObjectSchema as MCPResourceSelectObjectSchema } from './MCPResourceSelect.schema';
import { MCPResourceIncludeObjectSchema as MCPResourceIncludeObjectSchema } from './MCPResourceInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MCPResourceSelectObjectSchema).optional(),
  include: z.lazy(() => MCPResourceIncludeObjectSchema).optional()
}).strict();
export const MCPResourceArgsObjectSchema = makeSchema();
export const MCPResourceArgsObjectZodSchema = makeSchema();
