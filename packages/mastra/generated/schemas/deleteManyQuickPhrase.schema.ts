import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { QuickPhraseWhereInputObjectSchema as QuickPhraseWhereInputObjectSchema } from './objects/QuickPhraseWhereInput.schema';

export const QuickPhraseDeleteManySchema: z.ZodType<Prisma.QuickPhraseDeleteManyArgs> = z.object({ where: QuickPhraseWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.QuickPhraseDeleteManyArgs>;

export const QuickPhraseDeleteManyZodSchema = z.object({ where: QuickPhraseWhereInputObjectSchema.optional() }).strict();