import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { AssistantCreateNestedOneWithoutSettingsInputObjectSchema as AssistantCreateNestedOneWithoutSettingsInputObjectSchema } from './AssistantCreateNestedOneWithoutSettingsInput.schema';
import { ModelCreateNestedOneWithoutAssistantSettingsInputObjectSchema as ModelCreateNestedOneWithoutAssistantSettingsInputObjectSchema } from './ModelCreateNestedOneWithoutAssistantSettingsInput.schema'

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
  assistant: z.lazy(() => AssistantCreateNestedOneWithoutSettingsInputObjectSchema).optional(),
  defaultModel: z.lazy(() => ModelCreateNestedOneWithoutAssistantSettingsInputObjectSchema).optional()
}).strict();
export const AssistantSettingsCreateWithoutAgentInputObjectSchema: z.ZodType<Prisma.AssistantSettingsCreateWithoutAgentInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantSettingsCreateWithoutAgentInput>;
export const AssistantSettingsCreateWithoutAgentInputObjectZodSchema = makeSchema();
