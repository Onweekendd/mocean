import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelGroupSelectObjectSchema as ModelGroupSelectObjectSchema } from './ModelGroupSelect.schema';
import { ModelGroupIncludeObjectSchema as ModelGroupIncludeObjectSchema } from './ModelGroupInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ModelGroupSelectObjectSchema).optional(),
  include: z.lazy(() => ModelGroupIncludeObjectSchema).optional()
}).strict();
export const ModelGroupArgsObjectSchema = makeSchema();
export const ModelGroupArgsObjectZodSchema = makeSchema();
