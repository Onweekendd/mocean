import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { MCPServerScalarRelationFilterObjectSchema as MCPServerScalarRelationFilterObjectSchema } from './MCPServerScalarRelationFilter.schema';
import { MCPServerWhereInputObjectSchema as MCPServerWhereInputObjectSchema } from './MCPServerWhereInput.schema'

const mcpresourcewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MCPResourceWhereInputObjectSchema), z.lazy(() => MCPResourceWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MCPResourceWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MCPResourceWhereInputObjectSchema), z.lazy(() => MCPResourceWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  uri: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  mimeType: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  size: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  text: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  blob: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  serverId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  server: z.union([z.lazy(() => MCPServerScalarRelationFilterObjectSchema), z.lazy(() => MCPServerWhereInputObjectSchema)]).optional()
}).strict();
export const MCPResourceWhereInputObjectSchema: z.ZodType<Prisma.MCPResourceWhereInput> = mcpresourcewhereinputSchema as unknown as z.ZodType<Prisma.MCPResourceWhereInput>;
export const MCPResourceWhereInputObjectZodSchema = mcpresourcewhereinputSchema;
