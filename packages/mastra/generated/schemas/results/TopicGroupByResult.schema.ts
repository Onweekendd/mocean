import * as z from 'zod';
export const TopicGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  prompt: z.string(),
  pinned: z.boolean(),
  isNameManuallyEdited: z.boolean(),
  assistantId: z.string(),
  agentId: z.string(),
  modelId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    prompt: z.number(),
    pinned: z.number(),
    isNameManuallyEdited: z.number(),
    assistant: z.number(),
    assistantId: z.number(),
    agent: z.number(),
    agentId: z.number(),
    modelId: z.number(),
    model: z.number(),
    knowledgeBases: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    prompt: z.string().nullable(),
    assistantId: z.string().nullable(),
    agentId: z.string().nullable(),
    modelId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    prompt: z.string().nullable(),
    assistantId: z.string().nullable(),
    agentId: z.string().nullable(),
    modelId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));