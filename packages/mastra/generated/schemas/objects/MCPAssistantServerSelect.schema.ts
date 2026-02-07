import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantArgsObjectSchema as AssistantArgsObjectSchema } from './AssistantArgs.schema';
import { MCPServerArgsObjectSchema as MCPServerArgsObjectSchema } from './MCPServerArgs.schema'

const makeSchema = () => z.object({
  assistant: z.union([z.boolean(), z.lazy(() => AssistantArgsObjectSchema)]).optional(),
  assistantId: z.boolean().optional(),
  mcpServer: z.union([z.boolean(), z.lazy(() => MCPServerArgsObjectSchema)]).optional(),
  mcpServerId: z.boolean().optional()
}).strict();
export const MCPAssistantServerSelectObjectSchema: z.ZodType<Prisma.MCPAssistantServerSelect> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerSelect>;
export const MCPAssistantServerSelectObjectZodSchema = makeSchema();
