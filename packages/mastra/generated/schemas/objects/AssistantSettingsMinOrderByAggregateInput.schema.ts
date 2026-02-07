import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  contextCount: SortOrderSchema.optional(),
  temperature: SortOrderSchema.optional(),
  topP: SortOrderSchema.optional(),
  maxTokens: SortOrderSchema.optional(),
  enableMaxTokens: SortOrderSchema.optional(),
  streamOutput: SortOrderSchema.optional(),
  hideMessages: SortOrderSchema.optional(),
  reasoning_effort: SortOrderSchema.optional(),
  qwenThinkMode: SortOrderSchema.optional(),
  toolUseMode: SortOrderSchema.optional(),
  assistantId: SortOrderSchema.optional(),
  agentId: SortOrderSchema.optional(),
  defaultModelId: SortOrderSchema.optional()
}).strict();
export const AssistantSettingsMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AssistantSettingsMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantSettingsMinOrderByAggregateInput>;
export const AssistantSettingsMinOrderByAggregateInputObjectZodSchema = makeSchema();
