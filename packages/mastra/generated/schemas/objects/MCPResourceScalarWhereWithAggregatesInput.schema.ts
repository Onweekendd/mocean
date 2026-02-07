import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const mcpresourcescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => MCPResourceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MCPResourceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MCPResourceScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MCPResourceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MCPResourceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  uri: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  mimeType: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  size: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  text: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  blob: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  serverId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const MCPResourceScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.MCPResourceScalarWhereWithAggregatesInput> = mcpresourcescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.MCPResourceScalarWhereWithAggregatesInput>;
export const MCPResourceScalarWhereWithAggregatesInputObjectZodSchema = mcpresourcescalarwherewithaggregatesinputSchema;
