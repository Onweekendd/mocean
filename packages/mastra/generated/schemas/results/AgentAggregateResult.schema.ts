import * as z from 'zod';
export const AgentAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    prompt: z.number(),
    type: z.number(),
    emoji: z.number(),
    description: z.number(),
    groupJson: z.number(),
    enableWebSearch: z.number(),
    webSearchProviderId: z.number(),
    enableGenerateImage: z.number(),
    knowledgeRecognition: z.number(),
    settings: z.number(),
    topics: z.number(),
    knowledgeBases: z.number(),
    mcpServers: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    prompt: z.string().nullable(),
    type: z.string().nullable(),
    emoji: z.string().nullable(),
    description: z.string().nullable(),
    webSearchProviderId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    prompt: z.string().nullable(),
    type: z.string().nullable(),
    emoji: z.string().nullable(),
    description: z.string().nullable(),
    webSearchProviderId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});