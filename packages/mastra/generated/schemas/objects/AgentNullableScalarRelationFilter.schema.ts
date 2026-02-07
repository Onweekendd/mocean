import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AgentWhereInputObjectSchema as AgentWhereInputObjectSchema } from './AgentWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => AgentWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => AgentWhereInputObjectSchema).optional().nullable()
}).strict();
export const AgentNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.AgentNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AgentNullableScalarRelationFilter>;
export const AgentNullableScalarRelationFilterObjectZodSchema = makeSchema();
