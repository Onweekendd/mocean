import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AssistantSelectObjectSchema as AssistantSelectObjectSchema } from './objects/AssistantSelect.schema';
import { AssistantIncludeObjectSchema as AssistantIncludeObjectSchema } from './objects/AssistantInclude.schema';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './objects/AssistantWhereUniqueInput.schema';

export const AssistantDeleteOneSchema: z.ZodType<Prisma.AssistantDeleteArgs> = z.object({ select: AssistantSelectObjectSchema.optional(), include: AssistantIncludeObjectSchema.optional(), where: AssistantWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AssistantDeleteArgs>;

export const AssistantDeleteOneZodSchema = z.object({ select: AssistantSelectObjectSchema.optional(), include: AssistantIncludeObjectSchema.optional(), where: AssistantWhereUniqueInputObjectSchema }).strict();