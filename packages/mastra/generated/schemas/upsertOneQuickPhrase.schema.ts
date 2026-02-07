import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { QuickPhraseSelectObjectSchema as QuickPhraseSelectObjectSchema } from './objects/QuickPhraseSelect.schema';
import { QuickPhraseWhereUniqueInputObjectSchema as QuickPhraseWhereUniqueInputObjectSchema } from './objects/QuickPhraseWhereUniqueInput.schema';
import { QuickPhraseCreateInputObjectSchema as QuickPhraseCreateInputObjectSchema } from './objects/QuickPhraseCreateInput.schema';
import { QuickPhraseUncheckedCreateInputObjectSchema as QuickPhraseUncheckedCreateInputObjectSchema } from './objects/QuickPhraseUncheckedCreateInput.schema';
import { QuickPhraseUpdateInputObjectSchema as QuickPhraseUpdateInputObjectSchema } from './objects/QuickPhraseUpdateInput.schema';
import { QuickPhraseUncheckedUpdateInputObjectSchema as QuickPhraseUncheckedUpdateInputObjectSchema } from './objects/QuickPhraseUncheckedUpdateInput.schema';

export const QuickPhraseUpsertOneSchema: z.ZodType<Prisma.QuickPhraseUpsertArgs> = z.object({ select: QuickPhraseSelectObjectSchema.optional(),  where: QuickPhraseWhereUniqueInputObjectSchema, create: z.union([ QuickPhraseCreateInputObjectSchema, QuickPhraseUncheckedCreateInputObjectSchema ]), update: z.union([ QuickPhraseUpdateInputObjectSchema, QuickPhraseUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.QuickPhraseUpsertArgs>;

export const QuickPhraseUpsertOneZodSchema = z.object({ select: QuickPhraseSelectObjectSchema.optional(),  where: QuickPhraseWhereUniqueInputObjectSchema, create: z.union([ QuickPhraseCreateInputObjectSchema, QuickPhraseUncheckedCreateInputObjectSchema ]), update: z.union([ QuickPhraseUpdateInputObjectSchema, QuickPhraseUncheckedUpdateInputObjectSchema ]) }).strict();