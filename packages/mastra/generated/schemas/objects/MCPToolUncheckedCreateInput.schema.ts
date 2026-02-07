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
  createdAt: z.coerce.date().optional()
}).strict();
export const MCPToolUncheckedCreateInputObjectSchema: z.ZodType<Prisma.MCPToolUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPToolUncheckedCreateInput>;
export const MCPToolUncheckedCreateInputObjectZodSchema = makeSchema();
