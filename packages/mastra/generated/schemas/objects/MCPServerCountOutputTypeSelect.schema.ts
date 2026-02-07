import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerCountOutputTypeCountToolsArgsObjectSchema as MCPServerCountOutputTypeCountToolsArgsObjectSchema } from './MCPServerCountOutputTypeCountToolsArgs.schema';
import { MCPServerCountOutputTypeCountPromptsArgsObjectSchema as MCPServerCountOutputTypeCountPromptsArgsObjectSchema } from './MCPServerCountOutputTypeCountPromptsArgs.schema';
import { MCPServerCountOutputTypeCountAssistantsArgsObjectSchema as MCPServerCountOutputTypeCountAssistantsArgsObjectSchema } from './MCPServerCountOutputTypeCountAssistantsArgs.schema';
import { MCPServerCountOutputTypeCountAgentsArgsObjectSchema as MCPServerCountOutputTypeCountAgentsArgsObjectSchema } from './MCPServerCountOutputTypeCountAgentsArgs.schema';
import { MCPServerCountOutputTypeCountResourcesArgsObjectSchema as MCPServerCountOutputTypeCountResourcesArgsObjectSchema } from './MCPServerCountOutputTypeCountResourcesArgs.schema'

const makeSchema = () => z.object({
  tools: z.union([z.boolean(), z.lazy(() => MCPServerCountOutputTypeCountToolsArgsObjectSchema)]).optional(),
  prompts: z.union([z.boolean(), z.lazy(() => MCPServerCountOutputTypeCountPromptsArgsObjectSchema)]).optional(),
  assistants: z.union([z.boolean(), z.lazy(() => MCPServerCountOutputTypeCountAssistantsArgsObjectSchema)]).optional(),
  agents: z.union([z.boolean(), z.lazy(() => MCPServerCountOutputTypeCountAgentsArgsObjectSchema)]).optional(),
  resources: z.union([z.boolean(), z.lazy(() => MCPServerCountOutputTypeCountResourcesArgsObjectSchema)]).optional()
}).strict();
export const MCPServerCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.MCPServerCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerCountOutputTypeSelect>;
export const MCPServerCountOutputTypeSelectObjectZodSchema = makeSchema();
