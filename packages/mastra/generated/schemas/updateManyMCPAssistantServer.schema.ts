import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPAssistantServerUpdateManyMutationInputObjectSchema as MCPAssistantServerUpdateManyMutationInputObjectSchema } from './objects/MCPAssistantServerUpdateManyMutationInput.schema';
import { MCPAssistantServerWhereInputObjectSchema as MCPAssistantServerWhereInputObjectSchema } from './objects/MCPAssistantServerWhereInput.schema';

export const MCPAssistantServerUpdateManySchema: z.ZodType<Prisma.MCPAssistantServerUpdateManyArgs> = z.object({ data: MCPAssistantServerUpdateManyMutationInputObjectSchema, where: MCPAssistantServerWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MCPAssistantServerUpdateManyArgs>;

export const MCPAssistantServerUpdateManyZodSchema = z.object({ data: MCPAssistantServerUpdateManyMutationInputObjectSchema, where: MCPAssistantServerWhereInputObjectSchema.optional() }).strict();