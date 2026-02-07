import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { MCPPromptUncheckedUpdateManyWithoutServerNestedInputObjectSchema as MCPPromptUncheckedUpdateManyWithoutServerNestedInputObjectSchema } from './MCPPromptUncheckedUpdateManyWithoutServerNestedInput.schema';
import { MCPAssistantServerUncheckedUpdateManyWithoutMcpServerNestedInputObjectSchema as MCPAssistantServerUncheckedUpdateManyWithoutMcpServerNestedInputObjectSchema } from './MCPAssistantServerUncheckedUpdateManyWithoutMcpServerNestedInput.schema';
import { MCPAgentServerUncheckedUpdateManyWithoutMcpServerNestedInputObjectSchema as MCPAgentServerUncheckedUpdateManyWithoutMcpServerNestedInputObjectSchema } from './MCPAgentServerUncheckedUpdateManyWithoutMcpServerNestedInput.schema';
import { MCPResourceUncheckedUpdateManyWithoutServerNestedInputObjectSchema as MCPResourceUncheckedUpdateManyWithoutServerNestedInputObjectSchema } from './MCPResourceUncheckedUpdateManyWithoutServerNestedInput.schema';
import { MCPConfigSampleUncheckedUpdateOneWithoutServerNestedInputObjectSchema as MCPConfigSampleUncheckedUpdateOneWithoutServerNestedInputObjectSchema } from './MCPConfigSampleUncheckedUpdateOneWithoutServerNestedInput.schema'

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
  prompts: z.lazy(() => MCPPromptUncheckedUpdateManyWithoutServerNestedInputObjectSchema).optional(),
  assistants: z.lazy(() => MCPAssistantServerUncheckedUpdateManyWithoutMcpServerNestedInputObjectSchema).optional(),
  agents: z.lazy(() => MCPAgentServerUncheckedUpdateManyWithoutMcpServerNestedInputObjectSchema).optional(),
  resources: z.lazy(() => MCPResourceUncheckedUpdateManyWithoutServerNestedInputObjectSchema).optional(),
  configSampleRelation: z.lazy(() => MCPConfigSampleUncheckedUpdateOneWithoutServerNestedInputObjectSchema).optional()
}).strict();
export const MCPServerUncheckedUpdateWithoutToolsInputObjectSchema: z.ZodType<Prisma.MCPServerUncheckedUpdateWithoutToolsInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerUncheckedUpdateWithoutToolsInput>;
export const MCPServerUncheckedUpdateWithoutToolsInputObjectZodSchema = makeSchema();
