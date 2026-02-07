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
  tools: z.union([z.boolean(), z.lazy(() => MCPToolFindManySchema)]).optional(),
  prompts: z.union([z.boolean(), z.lazy(() => MCPPromptFindManySchema)]).optional(),
  assistants: z.union([z.boolean(), z.lazy(() => MCPAssistantServerFindManySchema)]).optional(),
  agents: z.union([z.boolean(), z.lazy(() => MCPAgentServerFindManySchema)]).optional(),
  resources: z.union([z.boolean(), z.lazy(() => MCPResourceFindManySchema)]).optional(),
  configSampleRelation: z.union([z.boolean(), z.lazy(() => MCPConfigSampleArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => MCPServerCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const MCPServerIncludeObjectSchema: z.ZodType<Prisma.MCPServerInclude> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerInclude>;
export const MCPServerIncludeObjectZodSchema = makeSchema();
