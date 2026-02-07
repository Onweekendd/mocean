import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AssistantSelectObjectSchema as AssistantSelectObjectSchema } from './objects/AssistantSelect.schema';
import { AssistantIncludeObjectSchema as AssistantIncludeObjectSchema } from './objects/AssistantInclude.schema';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './objects/AssistantWhereUniqueInput.schema';
import { AssistantCreateInputObjectSchema as AssistantCreateInputObjectSchema } from './objects/AssistantCreateInput.schema';
import { AssistantUncheckedCreateInputObjectSchema as AssistantUncheckedCreateInputObjectSchema } from './objects/AssistantUncheckedCreateInput.schema';
import { AssistantUpdateInputObjectSchema as AssistantUpdateInputObjectSchema } from './objects/AssistantUpdateInput.schema';
import { AssistantUncheckedUpdateInputObjectSchema as AssistantUncheckedUpdateInputObjectSchema } from './objects/AssistantUncheckedUpdateInput.schema';

export const AssistantUpsertOneSchema: z.ZodType<Prisma.AssistantUpsertArgs> = z.object({ select: AssistantSelectObjectSchema.optional(), include: AssistantIncludeObjectSchema.optional(), where: AssistantWhereUniqueInputObjectSchema, create: z.union([ AssistantCreateInputObjectSchema, AssistantUncheckedCreateInputObjectSchema ]), update: z.union([ AssistantUpdateInputObjectSchema, AssistantUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AssistantUpsertArgs>;

export const AssistantUpsertOneZodSchema = z.object({ select: AssistantSelectObjectSchema.optional(), include: AssistantIncludeObjectSchema.optional(), where: AssistantWhereUniqueInputObjectSchema, create: z.union([ AssistantCreateInputObjectSchema, AssistantUncheckedCreateInputObjectSchema ]), update: z.union([ AssistantUpdateInputObjectSchema, AssistantUncheckedUpdateInputObjectSchema ]) }).strict();