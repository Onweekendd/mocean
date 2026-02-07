import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MCPToolOrderByRelationAggregateInputObjectSchema as MCPToolOrderByRelationAggregateInputObjectSchema } from './MCPToolOrderByRelationAggregateInput.schema';
import { MCPPromptOrderByRelationAggregateInputObjectSchema as MCPPromptOrderByRelationAggregateInputObjectSchema } from './MCPPromptOrderByRelationAggregateInput.schema';
import { MCPAssistantServerOrderByRelationAggregateInputObjectSchema as MCPAssistantServerOrderByRelationAggregateInputObjectSchema } from './MCPAssistantServerOrderByRelationAggregateInput.schema';
import { MCPAgentServerOrderByRelationAggregateInputObjectSchema as MCPAgentServerOrderByRelationAggregateInputObjectSchema } from './MCPAgentServerOrderByRelationAggregateInput.schema';
import { MCPResourceOrderByRelationAggregateInputObjectSchema as MCPResourceOrderByRelationAggregateInputObjectSchema } from './MCPResourceOrderByRelationAggregateInput.schema';
import { MCPConfigSampleOrderByWithRelationInputObjectSchema as MCPConfigSampleOrderByWithRelationInputObjectSchema } from './MCPConfigSampleOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  type: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  baseUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  command: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  registryUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  argsJson: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  env: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isActive: SortOrderSchema.optional(),
  disabledToolsJson: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  configSample: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  headers: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  searchKey: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  provider: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  providerUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  logoUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tagsJson: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  timeout: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  tools: z.lazy(() => MCPToolOrderByRelationAggregateInputObjectSchema).optional(),
  prompts: z.lazy(() => MCPPromptOrderByRelationAggregateInputObjectSchema).optional(),
  assistants: z.lazy(() => MCPAssistantServerOrderByRelationAggregateInputObjectSchema).optional(),
  agents: z.lazy(() => MCPAgentServerOrderByRelationAggregateInputObjectSchema).optional(),
  resources: z.lazy(() => MCPResourceOrderByRelationAggregateInputObjectSchema).optional(),
  configSampleRelation: z.lazy(() => MCPConfigSampleOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const MCPServerOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.MCPServerOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerOrderByWithRelationInput>;
export const MCPServerOrderByWithRelationInputObjectZodSchema = makeSchema();
