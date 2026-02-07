import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantWhereInputObjectSchema as AssistantWhereInputObjectSchema } from './AssistantWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => AssistantWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => AssistantWhereInputObjectSchema).optional()
}).strict();
export const AssistantScalarRelationFilterObjectSchema: z.ZodType<Prisma.AssistantScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AssistantScalarRelationFilter>;
export const AssistantScalarRelationFilterObjectZodSchema = makeSchema();
