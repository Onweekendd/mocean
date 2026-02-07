import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AgentWhereInputObjectSchema as AgentWhereInputObjectSchema } from './AgentWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => AgentWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => AgentWhereInputObjectSchema).optional()
}).strict();
export const AgentScalarRelationFilterObjectSchema: z.ZodType<Prisma.AgentScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AgentScalarRelationFilter>;
export const AgentScalarRelationFilterObjectZodSchema = makeSchema();
