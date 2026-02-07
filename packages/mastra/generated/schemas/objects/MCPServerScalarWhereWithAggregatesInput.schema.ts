import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { JsonNullableWithAggregatesFilterObjectSchema as JsonNullableWithAggregatesFilterObjectSchema } from './JsonNullableWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const mcpserverscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => MCPServerScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MCPServerScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MCPServerScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MCPServerScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MCPServerScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  baseUrl: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  command: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  registryUrl: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  argsJson: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  env: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  isActive: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  disabledToolsJson: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  configSample: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  headers: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  searchKey: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  provider: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  providerUrl: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  logoUrl: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  tagsJson: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  timeout: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const MCPServerScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.MCPServerScalarWhereWithAggregatesInput> = mcpserverscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.MCPServerScalarWhereWithAggregatesInput>;
export const MCPServerScalarWhereWithAggregatesInputObjectZodSchema = mcpserverscalarwherewithaggregatesinputSchema;
