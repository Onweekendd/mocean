import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantCountOutputTypeSelectObjectSchema as AssistantCountOutputTypeSelectObjectSchema } from './AssistantCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AssistantCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const AssistantCountOutputTypeArgsObjectSchema = makeSchema();
export const AssistantCountOutputTypeArgsObjectZodSchema = makeSchema();
