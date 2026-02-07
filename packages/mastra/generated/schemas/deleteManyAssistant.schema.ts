import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AssistantWhereInputObjectSchema as AssistantWhereInputObjectSchema } from './objects/AssistantWhereInput.schema';

export const AssistantDeleteManySchema: z.ZodType<Prisma.AssistantDeleteManyArgs> = z.object({ where: AssistantWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AssistantDeleteManyArgs>;

export const AssistantDeleteManyZodSchema = z.object({ where: AssistantWhereInputObjectSchema.optional() }).strict();