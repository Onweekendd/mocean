import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AssistantSettingsCountOrderByAggregateInputObjectSchema as AssistantSettingsCountOrderByAggregateInputObjectSchema } from './AssistantSettingsCountOrderByAggregateInput.schema';
import { AssistantSettingsAvgOrderByAggregateInputObjectSchema as AssistantSettingsAvgOrderByAggregateInputObjectSchema } from './AssistantSettingsAvgOrderByAggregateInput.schema';
import { AssistantSettingsMaxOrderByAggregateInputObjectSchema as AssistantSettingsMaxOrderByAggregateInputObjectSchema } from './AssistantSettingsMaxOrderByAggregateInput.schema';
import { AssistantSettingsMinOrderByAggregateInputObjectSchema as AssistantSettingsMinOrderByAggregateInputObjectSchema } from './AssistantSettingsMinOrderByAggregateInput.schema';
import { AssistantSettingsSumOrderByAggregateInputObjectSchema as AssistantSettingsSumOrderByAggregateInputObjectSchema } from './AssistantSettingsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  contextCount: SortOrderSchema.optional(),
  temperature: SortOrderSchema.optional(),
  topP: SortOrderSchema.optional(),
  maxTokens: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  enableMaxTokens: SortOrderSchema.optional(),
  streamOutput: SortOrderSchema.optional(),
  hideMessages: SortOrderSchema.optional(),
  customParameters: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  reasoning_effort: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  qwenThinkMode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  toolUseMode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  assistantId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  agentId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  defaultModelId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => AssistantSettingsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => AssistantSettingsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AssistantSettingsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AssistantSettingsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => AssistantSettingsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AssistantSettingsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AssistantSettingsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantSettingsOrderByWithAggregationInput>;
export const AssistantSettingsOrderByWithAggregationInputObjectZodSchema = makeSchema();
