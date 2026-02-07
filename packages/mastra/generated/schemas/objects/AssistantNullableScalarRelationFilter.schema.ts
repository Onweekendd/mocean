import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantWhereInputObjectSchema as AssistantWhereInputObjectSchema } from './AssistantWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => AssistantWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => AssistantWhereInputObjectSchema).optional().nullable()
}).strict();
export const AssistantNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.AssistantNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AssistantNullableScalarRelationFilter>;
export const AssistantNullableScalarRelationFilterObjectZodSchema = makeSchema();
