import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { MCPServerScalarRelationFilterObjectSchema as MCPServerScalarRelationFilterObjectSchema } from './MCPServerScalarRelationFilter.schema';
import { MCPServerWhereInputObjectSchema as MCPServerWhereInputObjectSchema } from './MCPServerWhereInput.schema'

const mcppromptwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MCPPromptWhereInputObjectSchema), z.lazy(() => MCPPromptWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MCPPromptWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MCPPromptWhereInputObjectSchema), z.lazy(() => MCPPromptWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  arguments: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  serverId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  server: z.union([z.lazy(() => MCPServerScalarRelationFilterObjectSchema), z.lazy(() => MCPServerWhereInputObjectSchema)]).optional()
}).strict();
export const MCPPromptWhereInputObjectSchema: z.ZodType<Prisma.MCPPromptWhereInput> = mcppromptwhereinputSchema as unknown as z.ZodType<Prisma.MCPPromptWhereInput>;
export const MCPPromptWhereInputObjectZodSchema = mcppromptwhereinputSchema;
