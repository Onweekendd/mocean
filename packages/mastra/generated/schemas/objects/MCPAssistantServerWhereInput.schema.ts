import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { AssistantScalarRelationFilterObjectSchema as AssistantScalarRelationFilterObjectSchema } from './AssistantScalarRelationFilter.schema';
import { AssistantWhereInputObjectSchema as AssistantWhereInputObjectSchema } from './AssistantWhereInput.schema';
import { MCPServerScalarRelationFilterObjectSchema as MCPServerScalarRelationFilterObjectSchema } from './MCPServerScalarRelationFilter.schema';
import { MCPServerWhereInputObjectSchema as MCPServerWhereInputObjectSchema } from './MCPServerWhereInput.schema'

const mcpassistantserverwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MCPAssistantServerWhereInputObjectSchema), z.lazy(() => MCPAssistantServerWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MCPAssistantServerWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MCPAssistantServerWhereInputObjectSchema), z.lazy(() => MCPAssistantServerWhereInputObjectSchema).array()]).optional(),
  assistantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  mcpServerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  assistant: z.union([z.lazy(() => AssistantScalarRelationFilterObjectSchema), z.lazy(() => AssistantWhereInputObjectSchema)]).optional(),
  mcpServer: z.union([z.lazy(() => MCPServerScalarRelationFilterObjectSchema), z.lazy(() => MCPServerWhereInputObjectSchema)]).optional()
}).strict();
export const MCPAssistantServerWhereInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerWhereInput> = mcpassistantserverwhereinputSchema as unknown as z.ZodType<Prisma.MCPAssistantServerWhereInput>;
export const MCPAssistantServerWhereInputObjectZodSchema = mcpassistantserverwhereinputSchema;
