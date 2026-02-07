import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPAssistantServerWhereInputObjectSchema as MCPAssistantServerWhereInputObjectSchema } from './objects/MCPAssistantServerWhereInput.schema';

export const MCPAssistantServerDeleteManySchema: z.ZodType<Prisma.MCPAssistantServerDeleteManyArgs> = z.object({ where: MCPAssistantServerWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MCPAssistantServerDeleteManyArgs>;

export const MCPAssistantServerDeleteManyZodSchema = z.object({ where: MCPAssistantServerWhereInputObjectSchema.optional() }).strict();