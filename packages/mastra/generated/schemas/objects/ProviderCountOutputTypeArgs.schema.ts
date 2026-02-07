import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderCountOutputTypeSelectObjectSchema as ProviderCountOutputTypeSelectObjectSchema } from './ProviderCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ProviderCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ProviderCountOutputTypeArgsObjectSchema = makeSchema();
export const ProviderCountOutputTypeArgsObjectZodSchema = makeSchema();
