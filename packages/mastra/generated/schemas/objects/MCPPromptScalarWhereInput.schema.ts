import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const mcppromptscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MCPPromptScalarWhereInputObjectSchema), z.lazy(() => MCPPromptScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MCPPromptScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MCPPromptScalarWhereInputObjectSchema), z.lazy(() => MCPPromptScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  arguments: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  serverId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const MCPPromptScalarWhereInputObjectSchema: z.ZodType<Prisma.MCPPromptScalarWhereInput> = mcppromptscalarwhereinputSchema as unknown as z.ZodType<Prisma.MCPPromptScalarWhereInput>;
export const MCPPromptScalarWhereInputObjectZodSchema = mcppromptscalarwhereinputSchema;
