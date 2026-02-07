import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  assistantId: z.string()
}).strict();
export const MCPAssistantServerCreateManyMcpServerInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerCreateManyMcpServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerCreateManyMcpServerInput>;
export const MCPAssistantServerCreateManyMcpServerInputObjectZodSchema = makeSchema();
