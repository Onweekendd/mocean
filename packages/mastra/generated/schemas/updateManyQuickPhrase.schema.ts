import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { QuickPhraseUpdateManyMutationInputObjectSchema as QuickPhraseUpdateManyMutationInputObjectSchema } from './objects/QuickPhraseUpdateManyMutationInput.schema';
import { QuickPhraseWhereInputObjectSchema as QuickPhraseWhereInputObjectSchema } from './objects/QuickPhraseWhereInput.schema';

export const QuickPhraseUpdateManySchema: z.ZodType<Prisma.QuickPhraseUpdateManyArgs> = z.object({ data: QuickPhraseUpdateManyMutationInputObjectSchema, where: QuickPhraseWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.QuickPhraseUpdateManyArgs>;

export const QuickPhraseUpdateManyZodSchema = z.object({ data: QuickPhraseUpdateManyMutationInputObjectSchema, where: QuickPhraseWhereInputObjectSchema.optional() }).strict();