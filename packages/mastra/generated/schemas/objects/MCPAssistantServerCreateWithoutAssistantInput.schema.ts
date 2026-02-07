import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerCreateNestedOneWithoutAssistantsInputObjectSchema as MCPServerCreateNestedOneWithoutAssistantsInputObjectSchema } from './MCPServerCreateNestedOneWithoutAssistantsInput.schema'

const makeSchema = () => z.object({
  mcpServer: z.lazy(() => MCPServerCreateNestedOneWithoutAssistantsInputObjectSchema)
}).strict();
export const MCPAssistantServerCreateWithoutAssistantInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerCreateWithoutAssistantInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerCreateWithoutAssistantInput>;
export const MCPAssistantServerCreateWithoutAssistantInputObjectZodSchema = makeSchema();
