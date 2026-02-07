import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  contextCount: z.number().int(),
  temperature: z.number(),
  topP: z.number(),
  maxTokens: z.number().int().optional().nullable(),
  enableMaxTokens: z.boolean().optional(),
  streamOutput: z.boolean().optional(),
  hideMessages: z.boolean().optional(),
  customParameters: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  reasoning_effort: z.string().optional().nullable(),
  qwenThinkMode: z.boolean().optional().nullable(),
  toolUseMode: z.string().optional().nullable(),
  agentId: z.string().optional().nullable(),
  defaultModelId: z.string().optional().nullable()
}).strict();
export const AssistantSettingsUncheckedCreateWithoutAssistantInputObjectSchema: z.ZodType<Prisma.AssistantSettingsUncheckedCreateWithoutAssistantInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantSettingsUncheckedCreateWithoutAssistantInput>;
export const AssistantSettingsUncheckedCreateWithoutAssistantInputObjectZodSchema = makeSchema();
