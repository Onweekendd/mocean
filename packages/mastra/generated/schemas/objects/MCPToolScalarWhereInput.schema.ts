import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { JsonFilterObjectSchema as JsonFilterObjectSchema } from './JsonFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const mcptoolscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MCPToolScalarWhereInputObjectSchema), z.lazy(() => MCPToolScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MCPToolScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MCPToolScalarWhereInputObjectSchema), z.lazy(() => MCPToolScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  inputSchema: z.lazy(() => JsonFilterObjectSchema).optional(),
  serverId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const MCPToolScalarWhereInputObjectSchema: z.ZodType<Prisma.MCPToolScalarWhereInput> = mcptoolscalarwhereinputSchema as unknown as z.ZodType<Prisma.MCPToolScalarWhereInput>;
export const MCPToolScalarWhereInputObjectZodSchema = mcptoolscalarwhereinputSchema;
