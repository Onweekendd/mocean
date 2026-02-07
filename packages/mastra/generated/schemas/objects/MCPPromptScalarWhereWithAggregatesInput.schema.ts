import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { JsonNullableWithAggregatesFilterObjectSchema as JsonNullableWithAggregatesFilterObjectSchema } from './JsonNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const mcppromptscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => MCPPromptScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MCPPromptScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MCPPromptScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MCPPromptScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MCPPromptScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  arguments: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  serverId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const MCPPromptScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.MCPPromptScalarWhereWithAggregatesInput> = mcppromptscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.MCPPromptScalarWhereWithAggregatesInput>;
export const MCPPromptScalarWhereWithAggregatesInputObjectZodSchema = mcppromptscalarwherewithaggregatesinputSchema;
