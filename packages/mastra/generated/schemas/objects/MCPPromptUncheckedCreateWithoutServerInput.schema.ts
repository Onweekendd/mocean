import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  arguments: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const MCPPromptUncheckedCreateWithoutServerInputObjectSchema: z.ZodType<Prisma.MCPPromptUncheckedCreateWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPPromptUncheckedCreateWithoutServerInput>;
export const MCPPromptUncheckedCreateWithoutServerInputObjectZodSchema = makeSchema();
