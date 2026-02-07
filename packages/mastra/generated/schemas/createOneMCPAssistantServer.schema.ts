import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPAssistantServerSelectObjectSchema as MCPAssistantServerSelectObjectSchema } from './objects/MCPAssistantServerSelect.schema';
import { MCPAssistantServerIncludeObjectSchema as MCPAssistantServerIncludeObjectSchema } from './objects/MCPAssistantServerInclude.schema';
import { MCPAssistantServerCreateInputObjectSchema as MCPAssistantServerCreateInputObjectSchema } from './objects/MCPAssistantServerCreateInput.schema';
import { MCPAssistantServerUncheckedCreateInputObjectSchema as MCPAssistantServerUncheckedCreateInputObjectSchema } from './objects/MCPAssistantServerUncheckedCreateInput.schema';

export const MCPAssistantServerCreateOneSchema: z.ZodType<Prisma.MCPAssistantServerCreateArgs> = z.object({ select: MCPAssistantServerSelectObjectSchema.optional(), include: MCPAssistantServerIncludeObjectSchema.optional(), data: z.union([MCPAssistantServerCreateInputObjectSchema, MCPAssistantServerUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.MCPAssistantServerCreateArgs>;

export const MCPAssistantServerCreateOneZodSchema = z.object({ select: MCPAssistantServerSelectObjectSchema.optional(), include: MCPAssistantServerIncludeObjectSchema.optional(), data: z.union([MCPAssistantServerCreateInputObjectSchema, MCPAssistantServerUncheckedCreateInputObjectSchema]) }).strict();