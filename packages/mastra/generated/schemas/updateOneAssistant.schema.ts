import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AssistantSelectObjectSchema as AssistantSelectObjectSchema } from './objects/AssistantSelect.schema';
import { AssistantIncludeObjectSchema as AssistantIncludeObjectSchema } from './objects/AssistantInclude.schema';
import { AssistantUpdateInputObjectSchema as AssistantUpdateInputObjectSchema } from './objects/AssistantUpdateInput.schema';
import { AssistantUncheckedUpdateInputObjectSchema as AssistantUncheckedUpdateInputObjectSchema } from './objects/AssistantUncheckedUpdateInput.schema';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './objects/AssistantWhereUniqueInput.schema';

export const AssistantUpdateOneSchema: z.ZodType<Prisma.AssistantUpdateArgs> = z.object({ select: AssistantSelectObjectSchema.optional(), include: AssistantIncludeObjectSchema.optional(), data: z.union([AssistantUpdateInputObjectSchema, AssistantUncheckedUpdateInputObjectSchema]), where: AssistantWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AssistantUpdateArgs>;

export const AssistantUpdateOneZodSchema = z.object({ select: AssistantSelectObjectSchema.optional(), include: AssistantIncludeObjectSchema.optional(), data: z.union([AssistantUpdateInputObjectSchema, AssistantUncheckedUpdateInputObjectSchema]), where: AssistantWhereUniqueInputObjectSchema }).strict();