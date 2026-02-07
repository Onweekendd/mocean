import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantCreateNestedOneWithoutMcpServersInputObjectSchema as AssistantCreateNestedOneWithoutMcpServersInputObjectSchema } from './AssistantCreateNestedOneWithoutMcpServersInput.schema';
import { MCPServerCreateNestedOneWithoutAssistantsInputObjectSchema as MCPServerCreateNestedOneWithoutAssistantsInputObjectSchema } from './MCPServerCreateNestedOneWithoutAssistantsInput.schema'

const makeSchema = () => z.object({
  assistant: z.lazy(() => AssistantCreateNestedOneWithoutMcpServersInputObjectSchema),
  mcpServer: z.lazy(() => MCPServerCreateNestedOneWithoutAssistantsInputObjectSchema)
}).strict();
export const MCPAssistantServerCreateInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerCreateInput>;
export const MCPAssistantServerCreateInputObjectZodSchema = makeSchema();
