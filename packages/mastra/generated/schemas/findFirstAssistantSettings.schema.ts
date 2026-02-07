import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AssistantSettingsIncludeObjectSchema as AssistantSettingsIncludeObjectSchema } from './objects/AssistantSettingsInclude.schema';
import { AssistantSettingsOrderByWithRelationInputObjectSchema as AssistantSettingsOrderByWithRelationInputObjectSchema } from './objects/AssistantSettingsOrderByWithRelationInput.schema';
import { AssistantSettingsWhereInputObjectSchema as AssistantSettingsWhereInputObjectSchema } from './objects/AssistantSettingsWhereInput.schema';
import { AssistantSettingsWhereUniqueInputObjectSchema as AssistantSettingsWhereUniqueInputObjectSchema } from './objects/AssistantSettingsWhereUniqueInput.schema';
import { AssistantSettingsScalarFieldEnumSchema } from './enums/AssistantSettingsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AssistantSettingsFindFirstSelectSchema: z.ZodType<Prisma.AssistantSettingsSelect> = z.object({
    id: z.boolean().optional(),
    contextCount: z.boolean().optional(),
    temperature: z.boolean().optional(),
    topP: z.boolean().optional(),
    maxTokens: z.boolean().optional(),
    enableMaxTokens: z.boolean().optional(),
    streamOutput: z.boolean().optional(),
    hideMessages: z.boolean().optional(),
    customParameters: z.boolean().optional(),
    reasoning_effort: z.boolean().optional(),
    qwenThinkMode: z.boolean().optional(),
    toolUseMode: z.boolean().optional(),
    assistant: z.boolean().optional(),
    assistantId: z.boolean().optional(),
    agent: z.boolean().optional(),
    agentId: z.boolean().optional(),
    defaultModel: z.boolean().optional(),
    defaultModelId: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AssistantSettingsSelect>;

export const AssistantSettingsFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    contextCount: z.boolean().optional(),
    temperature: z.boolean().optional(),
    topP: z.boolean().optional(),
    maxTokens: z.boolean().optional(),
    enableMaxTokens: z.boolean().optional(),
    streamOutput: z.boolean().optional(),
    hideMessages: z.boolean().optional(),
    customParameters: z.boolean().optional(),
    reasoning_effort: z.boolean().optional(),
    qwenThinkMode: z.boolean().optional(),
    toolUseMode: z.boolean().optional(),
    assistant: z.boolean().optional(),
    assistantId: z.boolean().optional(),
    agent: z.boolean().optional(),
    agentId: z.boolean().optional(),
    defaultModel: z.boolean().optional(),
    defaultModelId: z.boolean().optional()
  }).strict();

export const AssistantSettingsFindFirstSchema: z.ZodType<Prisma.AssistantSettingsFindFirstArgs> = z.object({ select: AssistantSettingsFindFirstSelectSchema.optional(), include: z.lazy(() => AssistantSettingsIncludeObjectSchema.optional()), orderBy: z.union([AssistantSettingsOrderByWithRelationInputObjectSchema, AssistantSettingsOrderByWithRelationInputObjectSchema.array()]).optional(), where: AssistantSettingsWhereInputObjectSchema.optional(), cursor: AssistantSettingsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AssistantSettingsScalarFieldEnumSchema, AssistantSettingsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AssistantSettingsFindFirstArgs>;

export const AssistantSettingsFindFirstZodSchema = z.object({ select: AssistantSettingsFindFirstSelectSchema.optional(), include: z.lazy(() => AssistantSettingsIncludeObjectSchema.optional()), orderBy: z.union([AssistantSettingsOrderByWithRelationInputObjectSchema, AssistantSettingsOrderByWithRelationInputObjectSchema.array()]).optional(), where: AssistantSettingsWhereInputObjectSchema.optional(), cursor: AssistantSettingsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AssistantSettingsScalarFieldEnumSchema, AssistantSettingsScalarFieldEnumSchema.array()]).optional() }).strict();