import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { JsonFilterObjectSchema as JsonFilterObjectSchema } from './JsonFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { MCPServerScalarRelationFilterObjectSchema as MCPServerScalarRelationFilterObjectSchema } from './MCPServerScalarRelationFilter.schema';
import { MCPServerWhereInputObjectSchema as MCPServerWhereInputObjectSchema } from './MCPServerWhereInput.schema'

const mcptoolwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MCPToolWhereInputObjectSchema), z.lazy(() => MCPToolWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MCPToolWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MCPToolWhereInputObjectSchema), z.lazy(() => MCPToolWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  inputSchema: z.lazy(() => JsonFilterObjectSchema).optional(),
  serverId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  server: z.union([z.lazy(() => MCPServerScalarRelationFilterObjectSchema), z.lazy(() => MCPServerWhereInputObjectSchema)]).optional()
}).strict();
export const MCPToolWhereInputObjectSchema: z.ZodType<Prisma.MCPToolWhereInput> = mcptoolwhereinputSchema as unknown as z.ZodType<Prisma.MCPToolWhereInput>;
export const MCPToolWhereInputObjectZodSchema = mcptoolwhereinputSchema;
