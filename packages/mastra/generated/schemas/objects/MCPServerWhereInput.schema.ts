import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { MCPToolListRelationFilterObjectSchema as MCPToolListRelationFilterObjectSchema } from './MCPToolListRelationFilter.schema';
import { MCPPromptListRelationFilterObjectSchema as MCPPromptListRelationFilterObjectSchema } from './MCPPromptListRelationFilter.schema';
import { MCPAssistantServerListRelationFilterObjectSchema as MCPAssistantServerListRelationFilterObjectSchema } from './MCPAssistantServerListRelationFilter.schema';
import { MCPAgentServerListRelationFilterObjectSchema as MCPAgentServerListRelationFilterObjectSchema } from './MCPAgentServerListRelationFilter.schema';
import { MCPResourceListRelationFilterObjectSchema as MCPResourceListRelationFilterObjectSchema } from './MCPResourceListRelationFilter.schema';
import { MCPConfigSampleNullableScalarRelationFilterObjectSchema as MCPConfigSampleNullableScalarRelationFilterObjectSchema } from './MCPConfigSampleNullableScalarRelationFilter.schema';
import { MCPConfigSampleWhereInputObjectSchema as MCPConfigSampleWhereInputObjectSchema } from './MCPConfigSampleWhereInput.schema'

const mcpserverwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MCPServerWhereInputObjectSchema), z.lazy(() => MCPServerWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MCPServerWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MCPServerWhereInputObjectSchema), z.lazy(() => MCPServerWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  baseUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  command: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  registryUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  argsJson: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  env: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  isActive: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  disabledToolsJson: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  configSample: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  headers: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  searchKey: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  provider: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  providerUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  logoUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  tagsJson: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  timeout: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  tools: z.lazy(() => MCPToolListRelationFilterObjectSchema).optional(),
  prompts: z.lazy(() => MCPPromptListRelationFilterObjectSchema).optional(),
  assistants: z.lazy(() => MCPAssistantServerListRelationFilterObjectSchema).optional(),
  agents: z.lazy(() => MCPAgentServerListRelationFilterObjectSchema).optional(),
  resources: z.lazy(() => MCPResourceListRelationFilterObjectSchema).optional(),
  configSampleRelation: z.union([z.lazy(() => MCPConfigSampleNullableScalarRelationFilterObjectSchema), z.lazy(() => MCPConfigSampleWhereInputObjectSchema)]).optional()
}).strict();
export const MCPServerWhereInputObjectSchema: z.ZodType<Prisma.MCPServerWhereInput> = mcpserverwhereinputSchema as unknown as z.ZodType<Prisma.MCPServerWhereInput>;
export const MCPServerWhereInputObjectZodSchema = mcpserverwhereinputSchema;
