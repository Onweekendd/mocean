import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AssistantOrderByWithRelationInputObjectSchema as AssistantOrderByWithRelationInputObjectSchema } from './AssistantOrderByWithRelationInput.schema';
import { AgentOrderByWithRelationInputObjectSchema as AgentOrderByWithRelationInputObjectSchema } from './AgentOrderByWithRelationInput.schema';
import { ModelOrderByWithRelationInputObjectSchema as ModelOrderByWithRelationInputObjectSchema } from './ModelOrderByWithRelationInput.schema'

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
  assistant: z.lazy(() => AssistantOrderByWithRelationInputObjectSchema).optional(),
  agent: z.lazy(() => AgentOrderByWithRelationInputObjectSchema).optional(),
  defaultModel: z.lazy(() => ModelOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const AssistantSettingsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AssistantSettingsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantSettingsOrderByWithRelationInput>;
export const AssistantSettingsOrderByWithRelationInputObjectZodSchema = makeSchema();
