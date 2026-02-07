import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { MCPServerCreateNestedOneWithoutToolsInputObjectSchema as MCPServerCreateNestedOneWithoutToolsInputObjectSchema } from './MCPServerCreateNestedOneWithoutToolsInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  inputSchema: z.union([JsonNullValueInputSchema, jsonSchema]),
  createdAt: z.coerce.date().optional(),
  server: z.lazy(() => MCPServerCreateNestedOneWithoutToolsInputObjectSchema)
}).strict();
export const MCPToolCreateInputObjectSchema: z.ZodType<Prisma.MCPToolCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPToolCreateInput>;
export const MCPToolCreateInputObjectZodSchema = makeSchema();
