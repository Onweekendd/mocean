import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelProviderSelectObjectSchema as ModelProviderSelectObjectSchema } from './ModelProviderSelect.schema';
import { ModelProviderIncludeObjectSchema as ModelProviderIncludeObjectSchema } from './ModelProviderInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ModelProviderSelectObjectSchema).optional(),
  include: z.lazy(() => ModelProviderIncludeObjectSchema).optional()
}).strict();
export const ModelProviderArgsObjectSchema = makeSchema();
export const ModelProviderArgsObjectZodSchema = makeSchema();
