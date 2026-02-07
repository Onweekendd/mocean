import * as z from 'zod';
export const ModelAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    owned_by: z.number(),
    description: z.number(),
    isSystem: z.number(),
    contextLength: z.number(),
    supportsAttachments: z.number(),
    supportsTools: z.number(),
    supportsReasoning: z.number(),
    supportsImage: z.number(),
    supportsAudio: z.number(),
    supportsVideo: z.number(),
    supportsEmbedding: z.number(),
    inputPricePerMillion: z.number(),
    outputPricePerMillion: z.number(),
    modelGroups: z.number(),
    assistants: z.number(),
    defaultForAssistants: z.number(),
    knowledgeBases: z.number(),
    assistantSettings: z.number(),
    rerankFor: z.number(),
    Topic: z.number(),
    providers: z.number()
  }).optional(),
  _sum: z.object({
    contextLength: z.number().nullable(),
    inputPricePerMillion: z.number().nullable(),
    outputPricePerMillion: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    contextLength: z.number().nullable(),
    inputPricePerMillion: z.number().nullable(),
    outputPricePerMillion: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    owned_by: z.string().nullable(),
    description: z.string().nullable(),
    contextLength: z.number().int().nullable(),
    inputPricePerMillion: z.number().nullable(),
    outputPricePerMillion: z.number().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    owned_by: z.string().nullable(),
    description: z.string().nullable(),
    contextLength: z.number().int().nullable(),
    inputPricePerMillion: z.number().nullable(),
    outputPricePerMillion: z.number().nullable()
  }).nullable().optional()});