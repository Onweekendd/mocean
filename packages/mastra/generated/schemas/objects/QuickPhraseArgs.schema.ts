import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { QuickPhraseSelectObjectSchema as QuickPhraseSelectObjectSchema } from './QuickPhraseSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => QuickPhraseSelectObjectSchema).optional()
}).strict();
export const QuickPhraseArgsObjectSchema = makeSchema();
export const QuickPhraseArgsObjectZodSchema = makeSchema();
