import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  contextCount: z.literal(true).optional(),
  temperature: z.literal(true).optional(),
  topP: z.literal(true).optional(),
  maxTokens: z.literal(true).optional(),
  enableMaxTokens: z.literal(true).optional(),
  streamOutput: z.literal(true).optional(),
  hideMessages: z.literal(true).optional(),
  customParameters: z.literal(true).optional(),
  reasoning_effort: z.literal(true).optional(),
  qwenThinkMode: z.literal(true).optional(),
  toolUseMode: z.literal(true).optional(),
  assistantId: z.literal(true).optional(),
  agentId: z.literal(true).optional(),
  defaultModelId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const AssistantSettingsCountAggregateInputObjectSchema: z.ZodType<Prisma.AssistantSettingsCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AssistantSettingsCountAggregateInputType>;
export const AssistantSettingsCountAggregateInputObjectZodSchema = makeSchema();
