import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  inputSchema: z.union([JsonNullValueInputSchema, jsonSchema]),
  serverId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const MCPToolCreateManyInputObjectSchema: z.ZodType<Prisma.MCPToolCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPToolCreateManyInput>;
export const MCPToolCreateManyInputObjectZodSchema = makeSchema();
