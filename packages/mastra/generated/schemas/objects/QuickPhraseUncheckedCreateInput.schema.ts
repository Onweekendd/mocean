import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  content: z.string(),
  order: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const QuickPhraseUncheckedCreateInputObjectSchema: z.ZodType<Prisma.QuickPhraseUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.QuickPhraseUncheckedCreateInput>;
export const QuickPhraseUncheckedCreateInputObjectZodSchema = makeSchema();
