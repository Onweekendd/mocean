import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AssistantSettingsSelectObjectSchema as AssistantSettingsSelectObjectSchema } from './objects/AssistantSettingsSelect.schema';
import { AssistantSettingsIncludeObjectSchema as AssistantSettingsIncludeObjectSchema } from './objects/AssistantSettingsInclude.schema';
import { AssistantSettingsWhereUniqueInputObjectSchema as AssistantSettingsWhereUniqueInputObjectSchema } from './objects/AssistantSettingsWhereUniqueInput.schema';
import { AssistantSettingsCreateInputObjectSchema as AssistantSettingsCreateInputObjectSchema } from './objects/AssistantSettingsCreateInput.schema';
import { AssistantSettingsUncheckedCreateInputObjectSchema as AssistantSettingsUncheckedCreateInputObjectSchema } from './objects/AssistantSettingsUncheckedCreateInput.schema';
import { AssistantSettingsUpdateInputObjectSchema as AssistantSettingsUpdateInputObjectSchema } from './objects/AssistantSettingsUpdateInput.schema';
import { AssistantSettingsUncheckedUpdateInputObjectSchema as AssistantSettingsUncheckedUpdateInputObjectSchema } from './objects/AssistantSettingsUncheckedUpdateInput.schema';

export const AssistantSettingsUpsertOneSchema: z.ZodType<Prisma.AssistantSettingsUpsertArgs> = z.object({ select: AssistantSettingsSelectObjectSchema.optional(), include: AssistantSettingsIncludeObjectSchema.optional(), where: AssistantSettingsWhereUniqueInputObjectSchema, create: z.union([ AssistantSettingsCreateInputObjectSchema, AssistantSettingsUncheckedCreateInputObjectSchema ]), update: z.union([ AssistantSettingsUpdateInputObjectSchema, AssistantSettingsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AssistantSettingsUpsertArgs>;

export const AssistantSettingsUpsertOneZodSchema = z.object({ select: AssistantSettingsSelectObjectSchema.optional(), include: AssistantSettingsIncludeObjectSchema.optional(), where: AssistantSettingsWhereUniqueInputObjectSchema, create: z.union([ AssistantSettingsCreateInputObjectSchema, AssistantSettingsUncheckedCreateInputObjectSchema ]), update: z.union([ AssistantSettingsUpdateInputObjectSchema, AssistantSettingsUncheckedUpdateInputObjectSchema ]) }).strict();