import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AssistantSettingsSelectObjectSchema as AssistantSettingsSelectObjectSchema } from './objects/AssistantSettingsSelect.schema';
import { AssistantSettingsIncludeObjectSchema as AssistantSettingsIncludeObjectSchema } from './objects/AssistantSettingsInclude.schema';
import { AssistantSettingsWhereUniqueInputObjectSchema as AssistantSettingsWhereUniqueInputObjectSchema } from './objects/AssistantSettingsWhereUniqueInput.schema';

export const AssistantSettingsDeleteOneSchema: z.ZodType<Prisma.AssistantSettingsDeleteArgs> = z.object({ select: AssistantSettingsSelectObjectSchema.optional(), include: AssistantSettingsIncludeObjectSchema.optional(), where: AssistantSettingsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AssistantSettingsDeleteArgs>;

export const AssistantSettingsDeleteOneZodSchema = z.object({ select: AssistantSettingsSelectObjectSchema.optional(), include: AssistantSettingsIncludeObjectSchema.optional(), where: AssistantSettingsWhereUniqueInputObjectSchema }).strict();