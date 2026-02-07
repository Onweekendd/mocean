import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AgentCountOutputTypeSelectObjectSchema as AgentCountOutputTypeSelectObjectSchema } from './AgentCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AgentCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const AgentCountOutputTypeArgsObjectSchema = makeSchema();
export const AgentCountOutputTypeArgsObjectZodSchema = makeSchema();
