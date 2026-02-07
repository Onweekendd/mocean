import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderSelectObjectSchema as ProviderSelectObjectSchema } from './ProviderSelect.schema';
import { ProviderIncludeObjectSchema as ProviderIncludeObjectSchema } from './ProviderInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ProviderSelectObjectSchema).optional(),
  include: z.lazy(() => ProviderIncludeObjectSchema).optional()
}).strict();
export const ProviderArgsObjectSchema = makeSchema();
export const ProviderArgsObjectZodSchema = makeSchema();
