import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerCreateNestedOneWithoutAgentsInputObjectSchema as MCPServerCreateNestedOneWithoutAgentsInputObjectSchema } from './MCPServerCreateNestedOneWithoutAgentsInput.schema'

const makeSchema = () => z.object({
  mcpServer: z.lazy(() => MCPServerCreateNestedOneWithoutAgentsInputObjectSchema)
}).strict();
export const MCPAgentServerCreateWithoutAgentInputObjectSchema: z.ZodType<Prisma.MCPAgentServerCreateWithoutAgentInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerCreateWithoutAgentInput>;
export const MCPAgentServerCreateWithoutAgentInputObjectZodSchema = makeSchema();
