import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAssistantServerWhereInputObjectSchema as MCPAssistantServerWhereInputObjectSchema } from './MCPAssistantServerWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => MCPAssistantServerWhereInputObjectSchema).optional(),
  some: z.lazy(() => MCPAssistantServerWhereInputObjectSchema).optional(),
  none: z.lazy(() => MCPAssistantServerWhereInputObjectSchema).optional()
}).strict();
export const MCPAssistantServerListRelationFilterObjectSchema: z.ZodType<Prisma.MCPAssistantServerListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerListRelationFilter>;
export const MCPAssistantServerListRelationFilterObjectZodSchema = makeSchema();
