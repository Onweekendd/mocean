import * as z from 'zod';
export const ModelFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  name: z.string(),
  owned_by: z.string().optional(),
  description: z.string().optional(),
  isSystem: z.boolean(),
  contextLength: z.number().int().optional(),
  supportsAttachments: z.boolean(),
  supportsTools: z.boolean(),
  supportsReasoning: z.boolean(),
  supportsImage: z.boolean(),
  supportsAudio: z.boolean(),
  supportsVideo: z.boolean(),
  supportsEmbedding: z.boolean(),
  inputPricePerMillion: z.number().optional(),
  outputPricePerMillion: z.number().optional(),
  modelGroups: z.array(z.unknown()),
  assistants: z.array(z.unknown()),
  defaultForAssistants: z.array(z.unknown()),
  knowledgeBases: z.array(z.unknown()),
  assistantSettings: z.array(z.unknown()),
  rerankFor: z.array(z.unknown()),
  Topic: z.array(z.unknown()),
  providers: z.array(z.unknown())
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});