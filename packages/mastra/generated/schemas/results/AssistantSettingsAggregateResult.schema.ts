import * as z from 'zod';
export const AssistantSettingsAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    contextCount: z.number(),
    temperature: z.number(),
    topP: z.number(),
    maxTokens: z.number(),
    enableMaxTokens: z.number(),
    streamOutput: z.number(),
    hideMessages: z.number(),
    customParameters: z.number(),
    reasoning_effort: z.number(),
    qwenThinkMode: z.number(),
    toolUseMode: z.number(),
    assistant: z.number(),
    assistantId: z.number(),
    agent: z.number(),
    agentId: z.number(),
    defaultModel: z.number(),
    defaultModelId: z.number()
  }).optional(),
  _sum: z.object({
    contextCount: z.number().nullable(),
    temperature: z.number().nullable(),
    topP: z.number().nullable(),
    maxTokens: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    contextCount: z.number().nullable(),
    temperature: z.number().nullable(),
    topP: z.number().nullable(),
    maxTokens: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    contextCount: z.number().int().nullable(),
    temperature: z.number().nullable(),
    topP: z.number().nullable(),
    maxTokens: z.number().int().nullable(),
    reasoning_effort: z.string().nullable(),
    toolUseMode: z.string().nullable(),
    assistantId: z.string().nullable(),
    agentId: z.string().nullable(),
    defaultModelId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    contextCount: z.number().int().nullable(),
    temperature: z.number().nullable(),
    topP: z.number().nullable(),
    maxTokens: z.number().int().nullable(),
    reasoning_effort: z.string().nullable(),
    toolUseMode: z.string().nullable(),
    assistantId: z.string().nullable(),
    agentId: z.string().nullable(),
    defaultModelId: z.string().nullable()
  }).nullable().optional()});