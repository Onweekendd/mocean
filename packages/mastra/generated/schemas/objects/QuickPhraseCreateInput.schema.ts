import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  content: z.string(),
  order: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const QuickPhraseCreateInputObjectSchema: z.ZodType<Prisma.QuickPhraseCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.QuickPhraseCreateInput>;
export const QuickPhraseCreateInputObjectZodSchema = makeSchema();
