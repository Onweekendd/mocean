import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { GroupCountOutputTypeSelectObjectSchema as GroupCountOutputTypeSelectObjectSchema } from './GroupCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => GroupCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const GroupCountOutputTypeArgsObjectSchema = makeSchema();
export const GroupCountOutputTypeArgsObjectZodSchema = makeSchema();
