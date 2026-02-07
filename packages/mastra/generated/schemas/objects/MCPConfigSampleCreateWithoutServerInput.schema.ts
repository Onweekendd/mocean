import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  command: z.string(),
  argsJson: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  env: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional()
}).strict();
export const MCPConfigSampleCreateWithoutServerInputObjectSchema: z.ZodType<Prisma.MCPConfigSampleCreateWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPConfigSampleCreateWithoutServerInput>;
export const MCPConfigSampleCreateWithoutServerInputObjectZodSchema = makeSchema();
