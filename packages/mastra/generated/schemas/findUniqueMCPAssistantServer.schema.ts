import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPAssistantServerSelectObjectSchema as MCPAssistantServerSelectObjectSchema } from './objects/MCPAssistantServerSelect.schema';
import { MCPAssistantServerIncludeObjectSchema as MCPAssistantServerIncludeObjectSchema } from './objects/MCPAssistantServerInclude.schema';
import { MCPAssistantServerWhereUniqueInputObjectSchema as MCPAssistantServerWhereUniqueInputObjectSchema } from './objects/MCPAssistantServerWhereUniqueInput.schema';

export const MCPAssistantServerFindUniqueSchema: z.ZodType<Prisma.MCPAssistantServerFindUniqueArgs> = z.object({ select: MCPAssistantServerSelectObjectSchema.optional(), include: MCPAssistantServerIncludeObjectSchema.optional(), where: MCPAssistantServerWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MCPAssistantServerFindUniqueArgs>;

export const MCPAssistantServerFindUniqueZodSchema = z.object({ select: MCPAssistantServerSelectObjectSchema.optional(), include: MCPAssistantServerIncludeObjectSchema.optional(), where: MCPAssistantServerWhereUniqueInputObjectSchema }).strict();