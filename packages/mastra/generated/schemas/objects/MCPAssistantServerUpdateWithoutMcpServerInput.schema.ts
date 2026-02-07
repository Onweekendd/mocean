import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantUpdateOneRequiredWithoutMcpServersNestedInputObjectSchema as AssistantUpdateOneRequiredWithoutMcpServersNestedInputObjectSchema } from './AssistantUpdateOneRequiredWithoutMcpServersNestedInput.schema'

const makeSchema = () => z.object({
  assistant: z.lazy(() => AssistantUpdateOneRequiredWithoutMcpServersNestedInputObjectSchema).optional()
}).strict();
export const MCPAssistantServerUpdateWithoutMcpServerInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerUpdateWithoutMcpServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerUpdateWithoutMcpServerInput>;
export const MCPAssistantServerUpdateWithoutMcpServerInputObjectZodSchema = makeSchema();
