import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { QuickPhraseCreateManyInputObjectSchema as QuickPhraseCreateManyInputObjectSchema } from './objects/QuickPhraseCreateManyInput.schema';

export const QuickPhraseCreateManySchema: z.ZodType<Prisma.QuickPhraseCreateManyArgs> = z.object({ data: z.union([ QuickPhraseCreateManyInputObjectSchema, z.array(QuickPhraseCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.QuickPhraseCreateManyArgs>;

export const QuickPhraseCreateManyZodSchema = z.object({ data: z.union([ QuickPhraseCreateManyInputObjectSchema, z.array(QuickPhraseCreateManyInputObjectSchema) ]),  }).strict();