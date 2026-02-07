import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  assistantId: z.string()
}).strict();
export const MCPAssistantServerUncheckedCreateWithoutMcpServerInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerUncheckedCreateWithoutMcpServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerUncheckedCreateWithoutMcpServerInput>;
export const MCPAssistantServerUncheckedCreateWithoutMcpServerInputObjectZodSchema = makeSchema();
