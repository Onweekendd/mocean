import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantArgsObjectSchema as AssistantArgsObjectSchema } from './AssistantArgs.schema';
import { AgentArgsObjectSchema as AgentArgsObjectSchema } from './AgentArgs.schema';
import { ModelArgsObjectSchema as ModelArgsObjectSchema } from './ModelArgs.schema'

const makeSchema = () => z.object({
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
  assistant: z.union([z.boolean(), z.lazy(() => AssistantArgsObjectSchema)]).optional(),
  assistantId: z.boolean().optional(),
  agent: z.union([z.boolean(), z.lazy(() => AgentArgsObjectSchema)]).optional(),
  agentId: z.boolean().optional(),
  defaultModel: z.union([z.boolean(), z.lazy(() => ModelArgsObjectSchema)]).optional(),
  defaultModelId: z.boolean().optional()
}).strict();
export const AssistantSettingsSelectObjectSchema: z.ZodType<Prisma.AssistantSettingsSelect> = makeSchema() as unknown as z.ZodType<Prisma.AssistantSettingsSelect>;
export const AssistantSettingsSelectObjectZodSchema = makeSchema();
