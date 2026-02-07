import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPAssistantServerSelectObjectSchema as MCPAssistantServerSelectObjectSchema } from './objects/MCPAssistantServerSelect.schema';
import { MCPAssistantServerIncludeObjectSchema as MCPAssistantServerIncludeObjectSchema } from './objects/MCPAssistantServerInclude.schema';
import { MCPAssistantServerUpdateInputObjectSchema as MCPAssistantServerUpdateInputObjectSchema } from './objects/MCPAssistantServerUpdateInput.schema';
import { MCPAssistantServerUncheckedUpdateInputObjectSchema as MCPAssistantServerUncheckedUpdateInputObjectSchema } from './objects/MCPAssistantServerUncheckedUpdateInput.schema';
import { MCPAssistantServerWhereUniqueInputObjectSchema as MCPAssistantServerWhereUniqueInputObjectSchema } from './objects/MCPAssistantServerWhereUniqueInput.schema';

export const MCPAssistantServerUpdateOneSchema: z.ZodType<Prisma.MCPAssistantServerUpdateArgs> = z.object({ select: MCPAssistantServerSelectObjectSchema.optional(), include: MCPAssistantServerIncludeObjectSchema.optional(), data: z.union([MCPAssistantServerUpdateInputObjectSchema, MCPAssistantServerUncheckedUpdateInputObjectSchema]), where: MCPAssistantServerWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MCPAssistantServerUpdateArgs>;

export const MCPAssistantServerUpdateOneZodSchema = z.object({ select: MCPAssistantServerSelectObjectSchema.optional(), include: MCPAssistantServerIncludeObjectSchema.optional(), data: z.union([MCPAssistantServerUpdateInputObjectSchema, MCPAssistantServerUncheckedUpdateInputObjectSchema]), where: MCPAssistantServerWhereUniqueInputObjectSchema }).strict();