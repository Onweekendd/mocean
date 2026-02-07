import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  mcpServerId: z.string()
}).strict();
export const MCPAssistantServerCreateManyAssistantInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerCreateManyAssistantInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerCreateManyAssistantInput>;
export const MCPAssistantServerCreateManyAssistantInputObjectZodSchema = makeSchema();
