import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantCreateNestedOneWithoutMcpServersInputObjectSchema as AssistantCreateNestedOneWithoutMcpServersInputObjectSchema } from './AssistantCreateNestedOneWithoutMcpServersInput.schema'

const makeSchema = () => z.object({
  assistant: z.lazy(() => AssistantCreateNestedOneWithoutMcpServersInputObjectSchema)
}).strict();
export const MCPAssistantServerCreateWithoutMcpServerInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerCreateWithoutMcpServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerCreateWithoutMcpServerInput>;
export const MCPAssistantServerCreateWithoutMcpServerInputObjectZodSchema = makeSchema();
