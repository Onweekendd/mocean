import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AssistantSettingsUpdateManyMutationInputObjectSchema as AssistantSettingsUpdateManyMutationInputObjectSchema } from './objects/AssistantSettingsUpdateManyMutationInput.schema';
import { AssistantSettingsWhereInputObjectSchema as AssistantSettingsWhereInputObjectSchema } from './objects/AssistantSettingsWhereInput.schema';

export const AssistantSettingsUpdateManySchema: z.ZodType<Prisma.AssistantSettingsUpdateManyArgs> = z.object({ data: AssistantSettingsUpdateManyMutationInputObjectSchema, where: AssistantSettingsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AssistantSettingsUpdateManyArgs>;

export const AssistantSettingsUpdateManyZodSchema = z.object({ data: AssistantSettingsUpdateManyMutationInputObjectSchema, where: AssistantSettingsWhereInputObjectSchema.optional() }).strict();