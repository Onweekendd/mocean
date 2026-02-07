import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  inputSchema: z.union([JsonNullValueInputSchema, jsonSchema]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const MCPToolUncheckedCreateWithoutServerInputObjectSchema: z.ZodType<Prisma.MCPToolUncheckedCreateWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPToolUncheckedCreateWithoutServerInput>;
export const MCPToolUncheckedCreateWithoutServerInputObjectZodSchema = makeSchema();
