import * as z from 'zod';
export const AgentFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  prompt: z.string(),
  type: z.string(),
  emoji: z.string().optional(),
  description: z.string().optional(),
  groupJson: z.unknown().optional(),
  enableWebSearch: z.boolean(),
  webSearchProviderId: z.string().optional(),
  enableGenerateImage: z.boolean(),
  knowledgeRecognition: z.unknown().optional(),
  settings: z.unknown().optional(),
  topics: z.array(z.unknown()),
  knowledgeBases: z.array(z.unknown()),
  mcpServers: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));