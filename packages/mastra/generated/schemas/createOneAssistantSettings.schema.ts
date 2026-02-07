import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AssistantSettingsSelectObjectSchema as AssistantSettingsSelectObjectSchema } from './objects/AssistantSettingsSelect.schema';
import { AssistantSettingsIncludeObjectSchema as AssistantSettingsIncludeObjectSchema } from './objects/AssistantSettingsInclude.schema';
import { AssistantSettingsCreateInputObjectSchema as AssistantSettingsCreateInputObjectSchema } from './objects/AssistantSettingsCreateInput.schema';
import { AssistantSettingsUncheckedCreateInputObjectSchema as AssistantSettingsUncheckedCreateInputObjectSchema } from './objects/AssistantSettingsUncheckedCreateInput.schema';

export const AssistantSettingsCreateOneSchema: z.ZodType<Prisma.AssistantSettingsCreateArgs> = z.object({ select: AssistantSettingsSelectObjectSchema.optional(), include: AssistantSettingsIncludeObjectSchema.optional(), data: z.union([AssistantSettingsCreateInputObjectSchema, AssistantSettingsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AssistantSettingsCreateArgs>;

export const AssistantSettingsCreateOneZodSchema = z.object({ select: AssistantSettingsSelectObjectSchema.optional(), include: AssistantSettingsIncludeObjectSchema.optional(), data: z.union([AssistantSettingsCreateInputObjectSchema, AssistantSettingsUncheckedCreateInputObjectSchema]) }).strict();