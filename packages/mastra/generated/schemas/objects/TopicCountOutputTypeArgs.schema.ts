import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicCountOutputTypeSelectObjectSchema as TopicCountOutputTypeSelectObjectSchema } from './TopicCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TopicCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const TopicCountOutputTypeArgsObjectSchema = makeSchema();
export const TopicCountOutputTypeArgsObjectZodSchema = makeSchema();
