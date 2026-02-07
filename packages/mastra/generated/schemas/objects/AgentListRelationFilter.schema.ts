import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AgentWhereInputObjectSchema as AgentWhereInputObjectSchema } from './AgentWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => AgentWhereInputObjectSchema).optional(),
  some: z.lazy(() => AgentWhereInputObjectSchema).optional(),
  none: z.lazy(() => AgentWhereInputObjectSchema).optional()
}).strict();
export const AgentListRelationFilterObjectSchema: z.ZodType<Prisma.AgentListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AgentListRelationFilter>;
export const AgentListRelationFilterObjectZodSchema = makeSchema();
