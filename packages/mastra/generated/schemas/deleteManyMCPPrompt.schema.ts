import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPPromptWhereInputObjectSchema as MCPPromptWhereInputObjectSchema } from './objects/MCPPromptWhereInput.schema';

export const MCPPromptDeleteManySchema: z.ZodType<Prisma.MCPPromptDeleteManyArgs> = z.object({ where: MCPPromptWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MCPPromptDeleteManyArgs>;

export const MCPPromptDeleteManyZodSchema = z.object({ where: MCPPromptWhereInputObjectSchema.optional() }).strict();