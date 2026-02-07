import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { JsonWithAggregatesFilterObjectSchema as JsonWithAggregatesFilterObjectSchema } from './JsonWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const mcptoolscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => MCPToolScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MCPToolScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MCPToolScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MCPToolScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MCPToolScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  inputSchema: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  serverId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const MCPToolScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.MCPToolScalarWhereWithAggregatesInput> = mcptoolscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.MCPToolScalarWhereWithAggregatesInput>;
export const MCPToolScalarWhereWithAggregatesInputObjectZodSchema = mcptoolscalarwherewithaggregatesinputSchema;
