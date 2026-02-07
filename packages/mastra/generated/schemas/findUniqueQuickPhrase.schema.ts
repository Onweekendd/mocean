import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { QuickPhraseSelectObjectSchema as QuickPhraseSelectObjectSchema } from './objects/QuickPhraseSelect.schema';
import { QuickPhraseWhereUniqueInputObjectSchema as QuickPhraseWhereUniqueInputObjectSchema } from './objects/QuickPhraseWhereUniqueInput.schema';

export const QuickPhraseFindUniqueSchema: z.ZodType<Prisma.QuickPhraseFindUniqueArgs> = z.object({ select: QuickPhraseSelectObjectSchema.optional(),  where: QuickPhraseWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.QuickPhraseFindUniqueArgs>;

export const QuickPhraseFindUniqueZodSchema = z.object({ select: QuickPhraseSelectObjectSchema.optional(),  where: QuickPhraseWhereUniqueInputObjectSchema }).strict();