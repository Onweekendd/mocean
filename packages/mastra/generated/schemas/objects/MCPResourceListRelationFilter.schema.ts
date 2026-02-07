import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPResourceWhereInputObjectSchema as MCPResourceWhereInputObjectSchema } from './MCPResourceWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => MCPResourceWhereInputObjectSchema).optional(),
  some: z.lazy(() => MCPResourceWhereInputObjectSchema).optional(),
  none: z.lazy(() => MCPResourceWhereInputObjectSchema).optional()
}).strict();
export const MCPResourceListRelationFilterObjectSchema: z.ZodType<Prisma.MCPResourceListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MCPResourceListRelationFilter>;
export const MCPResourceListRelationFilterObjectZodSchema = makeSchema();
