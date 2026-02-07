import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelSelectObjectSchema as ModelSelectObjectSchema } from './ModelSelect.schema';
import { ModelIncludeObjectSchema as ModelIncludeObjectSchema } from './ModelInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ModelSelectObjectSchema).optional(),
  include: z.lazy(() => ModelIncludeObjectSchema).optional()
}).strict();
export const ModelArgsObjectSchema = makeSchema();
export const ModelArgsObjectZodSchema = makeSchema();
