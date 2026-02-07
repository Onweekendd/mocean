import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerCountOutputTypeSelectObjectSchema as MCPServerCountOutputTypeSelectObjectSchema } from './MCPServerCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MCPServerCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const MCPServerCountOutputTypeArgsObjectSchema = makeSchema();
export const MCPServerCountOutputTypeArgsObjectZodSchema = makeSchema();
