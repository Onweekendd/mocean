import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AssistantSettingsSelectObjectSchema as AssistantSettingsSelectObjectSchema } from './objects/AssistantSettingsSelect.schema';
import { AssistantSettingsIncludeObjectSchema as AssistantSettingsIncludeObjectSchema } from './objects/AssistantSettingsInclude.schema';
import { AssistantSettingsUpdateInputObjectSchema as AssistantSettingsUpdateInputObjectSchema } from './objects/AssistantSettingsUpdateInput.schema';
import { AssistantSettingsUncheckedUpdateInputObjectSchema as AssistantSettingsUncheckedUpdateInputObjectSchema } from './objects/AssistantSettingsUncheckedUpdateInput.schema';
import { AssistantSettingsWhereUniqueInputObjectSchema as AssistantSettingsWhereUniqueInputObjectSchema } from './objects/AssistantSettingsWhereUniqueInput.schema';

export const AssistantSettingsUpdateOneSchema: z.ZodType<Prisma.AssistantSettingsUpdateArgs> = z.object({ select: AssistantSettingsSelectObjectSchema.optional(), include: AssistantSettingsIncludeObjectSchema.optional(), data: z.union([AssistantSettingsUpdateInputObjectSchema, AssistantSettingsUncheckedUpdateInputObjectSchema]), where: AssistantSettingsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AssistantSettingsUpdateArgs>;

export const AssistantSettingsUpdateOneZodSchema = z.object({ select: AssistantSettingsSelectObjectSchema.optional(), include: AssistantSettingsIncludeObjectSchema.optional(), data: z.union([AssistantSettingsUpdateInputObjectSchema, AssistantSettingsUncheckedUpdateInputObjectSchema]), where: AssistantSettingsWhereUniqueInputObjectSchema }).strict();