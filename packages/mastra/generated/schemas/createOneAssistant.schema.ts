import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AssistantSelectObjectSchema as AssistantSelectObjectSchema } from './objects/AssistantSelect.schema';
import { AssistantIncludeObjectSchema as AssistantIncludeObjectSchema } from './objects/AssistantInclude.schema';
import { AssistantCreateInputObjectSchema as AssistantCreateInputObjectSchema } from './objects/AssistantCreateInput.schema';
import { AssistantUncheckedCreateInputObjectSchema as AssistantUncheckedCreateInputObjectSchema } from './objects/AssistantUncheckedCreateInput.schema';

export const AssistantCreateOneSchema: z.ZodType<Prisma.AssistantCreateArgs> = z.object({ select: AssistantSelectObjectSchema.optional(), include: AssistantIncludeObjectSchema.optional(), data: z.union([AssistantCreateInputObjectSchema, AssistantUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AssistantCreateArgs>;

export const AssistantCreateOneZodSchema = z.object({ select: AssistantSelectObjectSchema.optional(), include: AssistantIncludeObjectSchema.optional(), data: z.union([AssistantCreateInputObjectSchema, AssistantUncheckedCreateInputObjectSchema]) }).strict();