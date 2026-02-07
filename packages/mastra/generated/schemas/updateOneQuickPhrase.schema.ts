import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { QuickPhraseSelectObjectSchema as QuickPhraseSelectObjectSchema } from './objects/QuickPhraseSelect.schema';
import { QuickPhraseUpdateInputObjectSchema as QuickPhraseUpdateInputObjectSchema } from './objects/QuickPhraseUpdateInput.schema';
import { QuickPhraseUncheckedUpdateInputObjectSchema as QuickPhraseUncheckedUpdateInputObjectSchema } from './objects/QuickPhraseUncheckedUpdateInput.schema';
import { QuickPhraseWhereUniqueInputObjectSchema as QuickPhraseWhereUniqueInputObjectSchema } from './objects/QuickPhraseWhereUniqueInput.schema';

export const QuickPhraseUpdateOneSchema: z.ZodType<Prisma.QuickPhraseUpdateArgs> = z.object({ select: QuickPhraseSelectObjectSchema.optional(),  data: z.union([QuickPhraseUpdateInputObjectSchema, QuickPhraseUncheckedUpdateInputObjectSchema]), where: QuickPhraseWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.QuickPhraseUpdateArgs>;

export const QuickPhraseUpdateOneZodSchema = z.object({ select: QuickPhraseSelectObjectSchema.optional(),  data: z.union([QuickPhraseUpdateInputObjectSchema, QuickPhraseUncheckedUpdateInputObjectSchema]), where: QuickPhraseWhereUniqueInputObjectSchema }).strict();