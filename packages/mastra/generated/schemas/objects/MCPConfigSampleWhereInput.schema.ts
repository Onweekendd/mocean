import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { MCPServerScalarRelationFilterObjectSchema as MCPServerScalarRelationFilterObjectSchema } from './MCPServerScalarRelationFilter.schema';
import { MCPServerWhereInputObjectSchema as MCPServerWhereInputObjectSchema } from './MCPServerWhereInput.schema'

const mcpconfigsamplewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MCPConfigSampleWhereInputObjectSchema), z.lazy(() => MCPConfigSampleWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MCPConfigSampleWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MCPConfigSampleWhereInputObjectSchema), z.lazy(() => MCPConfigSampleWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  command: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  argsJson: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  env: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  serverId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  server: z.union([z.lazy(() => MCPServerScalarRelationFilterObjectSchema), z.lazy(() => MCPServerWhereInputObjectSchema)]).optional()
}).strict();
export const MCPConfigSampleWhereInputObjectSchema: z.ZodType<Prisma.MCPConfigSampleWhereInput> = mcpconfigsamplewhereinputSchema as unknown as z.ZodType<Prisma.MCPConfigSampleWhereInput>;
export const MCPConfigSampleWhereInputObjectZodSchema = mcpconfigsamplewhereinputSchema;
