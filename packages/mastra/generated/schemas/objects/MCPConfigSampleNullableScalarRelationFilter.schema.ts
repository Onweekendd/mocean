import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPConfigSampleWhereInputObjectSchema as MCPConfigSampleWhereInputObjectSchema } from './MCPConfigSampleWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => MCPConfigSampleWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => MCPConfigSampleWhereInputObjectSchema).optional().nullable()
}).strict();
export const MCPConfigSampleNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.MCPConfigSampleNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MCPConfigSampleNullableScalarRelationFilter>;
export const MCPConfigSampleNullableScalarRelationFilterObjectZodSchema = makeSchema();
