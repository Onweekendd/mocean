import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerUpdateOneRequiredWithoutAgentsNestedInputObjectSchema as MCPServerUpdateOneRequiredWithoutAgentsNestedInputObjectSchema } from './MCPServerUpdateOneRequiredWithoutAgentsNestedInput.schema'

const makeSchema = () => z.object({
  mcpServer: z.lazy(() => MCPServerUpdateOneRequiredWithoutAgentsNestedInputObjectSchema).optional()
}).strict();
export const MCPAgentServerUpdateWithoutAgentInputObjectSchema: z.ZodType<Prisma.MCPAgentServerUpdateWithoutAgentInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerUpdateWithoutAgentInput>;
export const MCPAgentServerUpdateWithoutAgentInputObjectZodSchema = makeSchema();
