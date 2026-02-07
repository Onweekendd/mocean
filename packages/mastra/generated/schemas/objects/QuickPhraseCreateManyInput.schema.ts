import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  content: z.string(),
  order: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const QuickPhraseCreateManyInputObjectSchema: z.ZodType<Prisma.QuickPhraseCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.QuickPhraseCreateManyInput>;
export const QuickPhraseCreateManyInputObjectZodSchema = makeSchema();
