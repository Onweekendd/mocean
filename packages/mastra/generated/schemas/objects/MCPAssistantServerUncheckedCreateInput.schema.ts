import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  assistantId: z.string(),
  mcpServerId: z.string()
}).strict();
export const MCPAssistantServerUncheckedCreateInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerUncheckedCreateInput>;
export const MCPAssistantServerUncheckedCreateInputObjectZodSchema = makeSchema();
