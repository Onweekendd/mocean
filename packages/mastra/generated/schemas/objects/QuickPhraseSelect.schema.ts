import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  content: z.boolean().optional(),
  order: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const QuickPhraseSelectObjectSchema: z.ZodType<Prisma.QuickPhraseSelect> = makeSchema() as unknown as z.ZodType<Prisma.QuickPhraseSelect>;
export const QuickPhraseSelectObjectZodSchema = makeSchema();
