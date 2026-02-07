import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { MCPPromptCreateNestedManyWithoutServerInputObjectSchema as MCPPromptCreateNestedManyWithoutServerInputObjectSchema } from './MCPPromptCreateNestedManyWithoutServerInput.schema';
import { MCPAssistantServerCreateNestedManyWithoutMcpServerInputObjectSchema as MCPAssistantServerCreateNestedManyWithoutMcpServerInputObjectSchema } from './MCPAssistantServerCreateNestedManyWithoutMcpServerInput.schema';
import { MCPAgentServerCreateNestedManyWithoutMcpServerInputObjectSchema as MCPAgentServerCreateNestedManyWithoutMcpServerInputObjectSchema } from './MCPAgentServerCreateNestedManyWithoutMcpServerInput.schema';
import { MCPResourceCreateNestedManyWithoutServerInputObjectSchema as MCPResourceCreateNestedManyWithoutServerInputObjectSchema } from './MCPResourceCreateNestedManyWithoutServerInput.schema';
import { MCPConfigSampleCreateNestedOneWithoutServerInputObjectSchema as MCPConfigSampleCreateNestedOneWithoutServerInputObjectSchema } from './MCPConfigSampleCreateNestedOneWithoutServerInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  baseUrl: z.string().optional().nullable(),
  command: z.string().optional().nullable(),
  registryUrl: z.string().optional().nullable(),
  argsJson: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  env: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  isActive: z.boolean().optional(),
  disabledToolsJson: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  configSample: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  headers: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  searchKey: z.string().optional().nullable(),
  provider: z.string().optional().nullable(),
  providerUrl: z.string().optional().nullable(),
  logoUrl: z.string().optional().nullable(),
  tagsJson: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  timeout: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  prompts: z.lazy(() => MCPPromptCreateNestedManyWithoutServerInputObjectSchema).optional(),
  assistants: z.lazy(() => MCPAssistantServerCreateNestedManyWithoutMcpServerInputObjectSchema).optional(),
  agents: z.lazy(() => MCPAgentServerCreateNestedManyWithoutMcpServerInputObjectSchema).optional(),
  resources: z.lazy(() => MCPResourceCreateNestedManyWithoutServerInputObjectSchema).optional(),
  configSampleRelation: z.lazy(() => MCPConfigSampleCreateNestedOneWithoutServerInputObjectSchema).optional()
}).strict();
export const MCPServerCreateWithoutToolsInputObjectSchema: z.ZodType<Prisma.MCPServerCreateWithoutToolsInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerCreateWithoutToolsInput>;
export const MCPServerCreateWithoutToolsInputObjectZodSchema = makeSchema();
