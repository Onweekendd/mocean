import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPAssistantServerSelectObjectSchema as MCPAssistantServerSelectObjectSchema } from './objects/MCPAssistantServerSelect.schema';
import { MCPAssistantServerIncludeObjectSchema as MCPAssistantServerIncludeObjectSchema } from './objects/MCPAssistantServerInclude.schema';
import { MCPAssistantServerWhereUniqueInputObjectSchema as MCPAssistantServerWhereUniqueInputObjectSchema } from './objects/MCPAssistantServerWhereUniqueInput.schema';
import { MCPAssistantServerCreateInputObjectSchema as MCPAssistantServerCreateInputObjectSchema } from './objects/MCPAssistantServerCreateInput.schema';
import { MCPAssistantServerUncheckedCreateInputObjectSchema as MCPAssistantServerUncheckedCreateInputObjectSchema } from './objects/MCPAssistantServerUncheckedCreateInput.schema';
import { MCPAssistantServerUpdateInputObjectSchema as MCPAssistantServerUpdateInputObjectSchema } from './objects/MCPAssistantServerUpdateInput.schema';
import { MCPAssistantServerUncheckedUpdateInputObjectSchema as MCPAssistantServerUncheckedUpdateInputObjectSchema } from './objects/MCPAssistantServerUncheckedUpdateInput.schema';

export const MCPAssistantServerUpsertOneSchema: z.ZodType<Prisma.MCPAssistantServerUpsertArgs> = z.object({ select: MCPAssistantServerSelectObjectSchema.optional(), include: MCPAssistantServerIncludeObjectSchema.optional(), where: MCPAssistantServerWhereUniqueInputObjectSchema, create: z.union([ MCPAssistantServerCreateInputObjectSchema, MCPAssistantServerUncheckedCreateInputObjectSchema ]), update: z.union([ MCPAssistantServerUpdateInputObjectSchema, MCPAssistantServerUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.MCPAssistantServerUpsertArgs>;

export const MCPAssistantServerUpsertOneZodSchema = z.object({ select: MCPAssistantServerSelectObjectSchema.optional(), include: MCPAssistantServerIncludeObjectSchema.optional(), where: MCPAssistantServerWhereUniqueInputObjectSchema, create: z.union([ MCPAssistantServerCreateInputObjectSchema, MCPAssistantServerUncheckedCreateInputObjectSchema ]), update: z.union([ MCPAssistantServerUpdateInputObjectSchema, MCPAssistantServerUncheckedUpdateInputObjectSchema ]) }).strict();