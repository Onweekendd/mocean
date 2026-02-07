import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPPromptUpdateManyMutationInputObjectSchema as MCPPromptUpdateManyMutationInputObjectSchema } from './objects/MCPPromptUpdateManyMutationInput.schema';
import { MCPPromptWhereInputObjectSchema as MCPPromptWhereInputObjectSchema } from './objects/MCPPromptWhereInput.schema';

export const MCPPromptUpdateManySchema: z.ZodType<Prisma.MCPPromptUpdateManyArgs> = z.object({ data: MCPPromptUpdateManyMutationInputObjectSchema, where: MCPPromptWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MCPPromptUpdateManyArgs>;

export const MCPPromptUpdateManyZodSchema = z.object({ data: MCPPromptUpdateManyMutationInputObjectSchema, where: MCPPromptWhereInputObjectSchema.optional() }).strict();