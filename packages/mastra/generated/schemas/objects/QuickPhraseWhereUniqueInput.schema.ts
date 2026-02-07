import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const QuickPhraseWhereUniqueInputObjectSchema: z.ZodType<Prisma.QuickPhraseWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.QuickPhraseWhereUniqueInput>;
export const QuickPhraseWhereUniqueInputObjectZodSchema = makeSchema();
