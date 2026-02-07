import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantArgsObjectSchema as AssistantArgsObjectSchema } from './AssistantArgs.schema';
import { MCPServerArgsObjectSchema as MCPServerArgsObjectSchema } from './MCPServerArgs.schema'

const makeSchema = () => z.object({
  assistant: z.union([z.boolean(), z.lazy(() => AssistantArgsObjectSchema)]).optional(),
  mcpServer: z.union([z.boolean(), z.lazy(() => MCPServerArgsObjectSchema)]).optional()
}).strict();
export const MCPAssistantServerIncludeObjectSchema: z.ZodType<Prisma.MCPAssistantServerInclude> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerInclude>;
export const MCPAssistantServerIncludeObjectZodSchema = makeSchema();
