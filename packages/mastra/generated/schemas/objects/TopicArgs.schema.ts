import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicSelectObjectSchema as TopicSelectObjectSchema } from './TopicSelect.schema';
import { TopicIncludeObjectSchema as TopicIncludeObjectSchema } from './TopicInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TopicSelectObjectSchema).optional(),
  include: z.lazy(() => TopicIncludeObjectSchema).optional()
}).strict();
export const TopicArgsObjectSchema = makeSchema();
export const TopicArgsObjectZodSchema = makeSchema();
