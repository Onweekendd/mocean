import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerUpdateOneRequiredWithoutAssistantsNestedInputObjectSchema as MCPServerUpdateOneRequiredWithoutAssistantsNestedInputObjectSchema } from './MCPServerUpdateOneRequiredWithoutAssistantsNestedInput.schema'

const makeSchema = () => z.object({
  mcpServer: z.lazy(() => MCPServerUpdateOneRequiredWithoutAssistantsNestedInputObjectSchema).optional()
}).strict();
export const MCPAssistantServerUpdateWithoutAssistantInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerUpdateWithoutAssistantInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerUpdateWithoutAssistantInput>;
export const MCPAssistantServerUpdateWithoutAssistantInputObjectZodSchema = makeSchema();
