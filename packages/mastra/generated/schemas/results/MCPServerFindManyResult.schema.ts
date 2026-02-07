import * as z from 'zod';
export const MCPServerFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  name: z.string(),
  type: z.string().optional(),
  description: z.string().optional(),
  baseUrl: z.string().optional(),
  command: z.string().optional(),
  registryUrl: z.string().optional(),
  argsJson: z.unknown().optional(),
  env: z.unknown().optional(),
  isActive: z.boolean(),
  disabledToolsJson: z.unknown().optional(),
  configSample: z.unknown().optional(),
  headers: z.unknown().optional(),
  searchKey: z.string().optional(),
  provider: z.string().optional(),
  providerUrl: z.string().optional(),
  logoUrl: z.string().optional(),
  tagsJson: z.unknown().optional(),
  timeout: z.number().int().optional(),
  tools: z.array(z.unknown()),
  prompts: z.array(z.unknown()),
  assistants: z.array(z.unknown()),
  agents: z.array(z.unknown()),
  resources: z.array(z.unknown()),
  configSampleRelation: z.unknown().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
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