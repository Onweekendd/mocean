import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { MCPServerUpdateOneRequiredWithoutConfigSampleRelationNestedInputObjectSchema as MCPServerUpdateOneRequiredWithoutConfigSampleRelationNestedInputObjectSchema } from './MCPServerUpdateOneRequiredWithoutConfigSampleRelationNestedInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  command: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  argsJson: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  env: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  server: z.lazy(() => MCPServerUpdateOneRequiredWithoutConfigSampleRelationNestedInputObjectSchema).optional()
}).strict();
export const MCPConfigSampleUpdateInputObjectSchema: z.ZodType<Prisma.MCPConfigSampleUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPConfigSampleUpdateInput>;
export const MCPConfigSampleUpdateInputObjectZodSchema = makeSchema();
