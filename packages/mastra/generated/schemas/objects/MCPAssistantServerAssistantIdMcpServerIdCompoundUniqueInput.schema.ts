import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  assistantId: z.string(),
  mcpServerId: z.string()
}).strict();
export const MCPAssistantServerAssistantIdMcpServerIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerAssistantIdMcpServerIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerAssistantIdMcpServerIdCompoundUniqueInput>;
export const MCPAssistantServerAssistantIdMcpServerIdCompoundUniqueInputObjectZodSchema = makeSchema();
