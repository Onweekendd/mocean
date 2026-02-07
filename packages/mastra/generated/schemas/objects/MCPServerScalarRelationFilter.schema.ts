import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerWhereInputObjectSchema as MCPServerWhereInputObjectSchema } from './MCPServerWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => MCPServerWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => MCPServerWhereInputObjectSchema).optional()
}).strict();
export const MCPServerScalarRelationFilterObjectSchema: z.ZodType<Prisma.MCPServerScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerScalarRelationFilter>;
export const MCPServerScalarRelationFilterObjectZodSchema = makeSchema();
