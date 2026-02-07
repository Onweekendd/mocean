import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { JsonNullableWithAggregatesFilterObjectSchema as JsonNullableWithAggregatesFilterObjectSchema } from './JsonNullableWithAggregatesFilter.schema'

const mcpconfigsamplescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => MCPConfigSampleScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MCPConfigSampleScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MCPConfigSampleScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MCPConfigSampleScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MCPConfigSampleScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  command: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  argsJson: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  env: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  serverId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const MCPConfigSampleScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.MCPConfigSampleScalarWhereWithAggregatesInput> = mcpconfigsamplescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.MCPConfigSampleScalarWhereWithAggregatesInput>;
export const MCPConfigSampleScalarWhereWithAggregatesInputObjectZodSchema = mcpconfigsamplescalarwherewithaggregatesinputSchema;
