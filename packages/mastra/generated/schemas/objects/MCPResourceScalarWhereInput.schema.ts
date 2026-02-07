import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const mcpresourcescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MCPResourceScalarWhereInputObjectSchema), z.lazy(() => MCPResourceScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MCPResourceScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MCPResourceScalarWhereInputObjectSchema), z.lazy(() => MCPResourceScalarWhereInputObjectSchema).array()]).optional(),
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
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const MCPResourceScalarWhereInputObjectSchema: z.ZodType<Prisma.MCPResourceScalarWhereInput> = mcpresourcescalarwhereinputSchema as unknown as z.ZodType<Prisma.MCPResourceScalarWhereInput>;
export const MCPResourceScalarWhereInputObjectZodSchema = mcpresourcescalarwhereinputSchema;
