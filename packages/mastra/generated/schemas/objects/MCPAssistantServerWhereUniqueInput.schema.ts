import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAssistantServerAssistantIdMcpServerIdCompoundUniqueInputObjectSchema as MCPAssistantServerAssistantIdMcpServerIdCompoundUniqueInputObjectSchema } from './MCPAssistantServerAssistantIdMcpServerIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  assistantId_mcpServerId: z.lazy(() => MCPAssistantServerAssistantIdMcpServerIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const MCPAssistantServerWhereUniqueInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerWhereUniqueInput>;
export const MCPAssistantServerWhereUniqueInputObjectZodSchema = makeSchema();
