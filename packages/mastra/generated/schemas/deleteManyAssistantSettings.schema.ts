import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AssistantSettingsWhereInputObjectSchema as AssistantSettingsWhereInputObjectSchema } from './objects/AssistantSettingsWhereInput.schema';

export const AssistantSettingsDeleteManySchema: z.ZodType<Prisma.AssistantSettingsDeleteManyArgs> = z.object({ where: AssistantSettingsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AssistantSettingsDeleteManyArgs>;

export const AssistantSettingsDeleteManyZodSchema = z.object({ where: AssistantSettingsWhereInputObjectSchema.optional() }).strict();