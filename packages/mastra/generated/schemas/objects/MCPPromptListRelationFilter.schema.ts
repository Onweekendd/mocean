import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPPromptWhereInputObjectSchema as MCPPromptWhereInputObjectSchema } from './MCPPromptWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => MCPPromptWhereInputObjectSchema).optional(),
  some: z.lazy(() => MCPPromptWhereInputObjectSchema).optional(),
  none: z.lazy(() => MCPPromptWhereInputObjectSchema).optional()
}).strict();
export const MCPPromptListRelationFilterObjectSchema: z.ZodType<Prisma.MCPPromptListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MCPPromptListRelationFilter>;
export const MCPPromptListRelationFilterObjectZodSchema = makeSchema();
