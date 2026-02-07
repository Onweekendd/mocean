import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { MCPToolUpdateManyWithoutServerNestedInputObjectSchema as MCPToolUpdateManyWithoutServerNestedInputObjectSchema } from './MCPToolUpdateManyWithoutServerNestedInput.schema';
import { MCPPromptUpdateManyWithoutServerNestedInputObjectSchema as MCPPromptUpdateManyWithoutServerNestedInputObjectSchema } from './MCPPromptUpdateManyWithoutServerNestedInput.schema';
import { MCPAgentServerUpdateManyWithoutMcpServerNestedInputObjectSchema as MCPAgentServerUpdateManyWithoutMcpServerNestedInputObjectSchema } from './MCPAgentServerUpdateManyWithoutMcpServerNestedInput.schema';
import { MCPResourceUpdateManyWithoutServerNestedInputObjectSchema as MCPResourceUpdateManyWithoutServerNestedInputObjectSchema } from './MCPResourceUpdateManyWithoutServerNestedInput.schema';
import { MCPConfigSampleUpdateOneWithoutServerNestedInputObjectSchema as MCPConfigSampleUpdateOneWithoutServerNestedInputObjectSchema } from './MCPConfigSampleUpdateOneWithoutServerNestedInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  baseUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  command: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  registryUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  argsJson: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  env: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  isActive: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  disabledToolsJson: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  configSample: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  headers: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  searchKey: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  provider: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  providerUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  logoUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tagsJson: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  timeout: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  tools: z.lazy(() => MCPToolUpdateManyWithoutServerNestedInputObjectSchema).optional(),
  prompts: z.lazy(() => MCPPromptUpdateManyWithoutServerNestedInputObjectSchema).optional(),
  agents: z.lazy(() => MCPAgentServerUpdateManyWithoutMcpServerNestedInputObjectSchema).optional(),
  resources: z.lazy(() => MCPResourceUpdateManyWithoutServerNestedInputObjectSchema).optional(),
  configSampleRelation: z.lazy(() => MCPConfigSampleUpdateOneWithoutServerNestedInputObjectSchema).optional()
}).strict();
export const MCPServerUpdateWithoutAssistantsInputObjectSchema: z.ZodType<Prisma.MCPServerUpdateWithoutAssistantsInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerUpdateWithoutAssistantsInput>;
export const MCPServerUpdateWithoutAssistantsInputObjectZodSchema = makeSchema();
