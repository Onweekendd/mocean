import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const mcpassistantserverscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MCPAssistantServerScalarWhereInputObjectSchema), z.lazy(() => MCPAssistantServerScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MCPAssistantServerScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MCPAssistantServerScalarWhereInputObjectSchema), z.lazy(() => MCPAssistantServerScalarWhereInputObjectSchema).array()]).optional(),
  assistantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  mcpServerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const MCPAssistantServerScalarWhereInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerScalarWhereInput> = mcpassistantserverscalarwhereinputSchema as unknown as z.ZodType<Prisma.MCPAssistantServerScalarWhereInput>;
export const MCPAssistantServerScalarWhereInputObjectZodSchema = mcpassistantserverscalarwhereinputSchema;
