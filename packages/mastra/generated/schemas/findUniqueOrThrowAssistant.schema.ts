import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AssistantSelectObjectSchema as AssistantSelectObjectSchema } from './objects/AssistantSelect.schema';
import { AssistantIncludeObjectSchema as AssistantIncludeObjectSchema } from './objects/AssistantInclude.schema';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './objects/AssistantWhereUniqueInput.schema';

export const AssistantFindUniqueOrThrowSchema: z.ZodType<Prisma.AssistantFindUniqueOrThrowArgs> = z.object({ select: AssistantSelectObjectSchema.optional(), include: AssistantIncludeObjectSchema.optional(), where: AssistantWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AssistantFindUniqueOrThrowArgs>;

export const AssistantFindUniqueOrThrowZodSchema = z.object({ select: AssistantSelectObjectSchema.optional(), include: AssistantIncludeObjectSchema.optional(), where: AssistantWhereUniqueInputObjectSchema }).strict();