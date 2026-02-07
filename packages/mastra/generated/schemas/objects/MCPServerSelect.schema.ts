import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPToolFindManySchema as MCPToolFindManySchema } from '../findManyMCPTool.schema';
import { MCPPromptFindManySchema as MCPPromptFindManySchema } from '../findManyMCPPrompt.schema';
import { MCPAssistantServerFindManySchema as MCPAssistantServerFindManySchema } from '../findManyMCPAssistantServer.schema';
import { MCPAgentServerFindManySchema as MCPAgentServerFindManySchema } from '../findManyMCPAgentServer.schema';
import { MCPResourceFindManySchema as MCPResourceFindManySchema } from '../findManyMCPResource.schema';
import { MCPConfigSampleArgsObjectSchema as MCPConfigSampleArgsObjectSchema } from './MCPConfigSampleArgs.schema';
import { MCPServerCountOutputTypeArgsObjectSchema as MCPServerCountOutputTypeArgsObjectSchema } from './MCPServerCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  type: z.boolean().optional(),
  description: z.boolean().optional(),
  baseUrl: z.boolean().optional(),
  command: z.boolean().optional(),
  registryUrl: z.boolean().optional(),
  argsJson: z.boolean().optional(),
  env: z.boolean().optional(),
  isActive: z.boolean().optional(),
  disabledToolsJson: z.boolean().optional(),
  configSample: z.boolean().optional(),
  headers: z.boolean().optional(),
  searchKey: z.boolean().optional(),
  provider: z.boolean().optional(),
  providerUrl: z.boolean().optional(),
  logoUrl: z.boolean().optional(),
  tagsJson: z.boolean().optional(),
  timeout: z.boolean().optional(),
  tools: z.union([z.boolean(), z.lazy(() => MCPToolFindManySchema)]).optional(),
  prompts: z.union([z.boolean(), z.lazy(() => MCPPromptFindManySchema)]).optional(),
  assistants: z.union([z.boolean(), z.lazy(() => MCPAssistantServerFindManySchema)]).optional(),
  agents: z.union([z.boolean(), z.lazy(() => MCPAgentServerFindManySchema)]).optional(),
  resources: z.union([z.boolean(), z.lazy(() => MCPResourceFindManySchema)]).optional(),
  configSampleRelation: z.union([z.boolean(), z.lazy(() => MCPConfigSampleArgsObjectSchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => MCPServerCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const MCPServerSelectObjectSchema: z.ZodType<Prisma.MCPServerSelect> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerSelect>;
export const MCPServerSelectObjectZodSchema = makeSchema();
