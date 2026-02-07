import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AgentSelectObjectSchema as AgentSelectObjectSchema } from './AgentSelect.schema';
import { AgentIncludeObjectSchema as AgentIncludeObjectSchema } from './AgentInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AgentSelectObjectSchema).optional(),
  include: z.lazy(() => AgentIncludeObjectSchema).optional()
}).strict();
export const AgentArgsObjectSchema = makeSchema();
export const AgentArgsObjectZodSchema = makeSchema();
