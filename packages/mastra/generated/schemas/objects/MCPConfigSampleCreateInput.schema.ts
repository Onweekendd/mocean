import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { MCPServerCreateNestedOneWithoutConfigSampleRelationInputObjectSchema as MCPServerCreateNestedOneWithoutConfigSampleRelationInputObjectSchema } from './MCPServerCreateNestedOneWithoutConfigSampleRelationInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  command: z.string(),
  argsJson: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  env: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  server: z.lazy(() => MCPServerCreateNestedOneWithoutConfigSampleRelationInputObjectSchema)
}).strict();
export const MCPConfigSampleCreateInputObjectSchema: z.ZodType<Prisma.MCPConfigSampleCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPConfigSampleCreateInput>;
export const MCPConfigSampleCreateInputObjectZodSchema = makeSchema();
