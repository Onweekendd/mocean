import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  mcpServerId: z.string()
}).strict();
export const MCPAssistantServerUncheckedCreateWithoutAssistantInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerUncheckedCreateWithoutAssistantInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerUncheckedCreateWithoutAssistantInput>;
export const MCPAssistantServerUncheckedCreateWithoutAssistantInputObjectZodSchema = makeSchema();
