import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  command: z.string(),
  argsJson: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  env: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  serverId: z.string()
}).strict();
export const MCPConfigSampleCreateManyInputObjectSchema: z.ZodType<Prisma.MCPConfigSampleCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPConfigSampleCreateManyInput>;
export const MCPConfigSampleCreateManyInputObjectZodSchema = makeSchema();
