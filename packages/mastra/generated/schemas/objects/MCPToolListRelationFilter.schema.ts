import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPToolWhereInputObjectSchema as MCPToolWhereInputObjectSchema } from './MCPToolWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => MCPToolWhereInputObjectSchema).optional(),
  some: z.lazy(() => MCPToolWhereInputObjectSchema).optional(),
  none: z.lazy(() => MCPToolWhereInputObjectSchema).optional()
}).strict();
export const MCPToolListRelationFilterObjectSchema: z.ZodType<Prisma.MCPToolListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MCPToolListRelationFilter>;
export const MCPToolListRelationFilterObjectZodSchema = makeSchema();
