import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPServerWhereInputObjectSchema as MCPServerWhereInputObjectSchema } from './objects/MCPServerWhereInput.schema';

export const MCPServerDeleteManySchema: z.ZodType<Prisma.MCPServerDeleteManyArgs> = z.object({ where: MCPServerWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MCPServerDeleteManyArgs>;

export const MCPServerDeleteManyZodSchema = z.object({ where: MCPServerWhereInputObjectSchema.optional() }).strict();