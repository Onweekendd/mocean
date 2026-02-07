import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantSelectObjectSchema as AssistantSelectObjectSchema } from './AssistantSelect.schema';
import { AssistantIncludeObjectSchema as AssistantIncludeObjectSchema } from './AssistantInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AssistantSelectObjectSchema).optional(),
  include: z.lazy(() => AssistantIncludeObjectSchema).optional()
}).strict();
export const AssistantArgsObjectSchema = makeSchema();
export const AssistantArgsObjectZodSchema = makeSchema();
