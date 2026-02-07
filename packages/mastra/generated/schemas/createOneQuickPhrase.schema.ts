import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { QuickPhraseSelectObjectSchema as QuickPhraseSelectObjectSchema } from './objects/QuickPhraseSelect.schema';
import { QuickPhraseCreateInputObjectSchema as QuickPhraseCreateInputObjectSchema } from './objects/QuickPhraseCreateInput.schema';
import { QuickPhraseUncheckedCreateInputObjectSchema as QuickPhraseUncheckedCreateInputObjectSchema } from './objects/QuickPhraseUncheckedCreateInput.schema';

export const QuickPhraseCreateOneSchema: z.ZodType<Prisma.QuickPhraseCreateArgs> = z.object({ select: QuickPhraseSelectObjectSchema.optional(),  data: z.union([QuickPhraseCreateInputObjectSchema, QuickPhraseUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.QuickPhraseCreateArgs>;

export const QuickPhraseCreateOneZodSchema = z.object({ select: QuickPhraseSelectObjectSchema.optional(),  data: z.union([QuickPhraseCreateInputObjectSchema, QuickPhraseUncheckedCreateInputObjectSchema]) }).strict();