import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  assistantId: z.string(),
  mcpServerId: z.string()
}).strict();
export const MCPAssistantServerCreateManyInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerCreateManyInput>;
export const MCPAssistantServerCreateManyInputObjectZodSchema = makeSchema();
