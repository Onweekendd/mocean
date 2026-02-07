import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantUpdateOneRequiredWithoutMcpServersNestedInputObjectSchema as AssistantUpdateOneRequiredWithoutMcpServersNestedInputObjectSchema } from './AssistantUpdateOneRequiredWithoutMcpServersNestedInput.schema';
import { MCPServerUpdateOneRequiredWithoutAssistantsNestedInputObjectSchema as MCPServerUpdateOneRequiredWithoutAssistantsNestedInputObjectSchema } from './MCPServerUpdateOneRequiredWithoutAssistantsNestedInput.schema'

const makeSchema = () => z.object({
  assistant: z.lazy(() => AssistantUpdateOneRequiredWithoutMcpServersNestedInputObjectSchema).optional(),
  mcpServer: z.lazy(() => MCPServerUpdateOneRequiredWithoutAssistantsNestedInputObjectSchema).optional()
}).strict();
export const MCPAssistantServerUpdateInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerUpdateInput>;
export const MCPAssistantServerUpdateInputObjectZodSchema = makeSchema();
