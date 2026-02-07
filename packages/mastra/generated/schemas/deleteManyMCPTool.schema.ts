import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPToolWhereInputObjectSchema as MCPToolWhereInputObjectSchema } from './objects/MCPToolWhereInput.schema';

export const MCPToolDeleteManySchema: z.ZodType<Prisma.MCPToolDeleteManyArgs> = z.object({ where: MCPToolWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MCPToolDeleteManyArgs>;

export const MCPToolDeleteManyZodSchema = z.object({ where: MCPToolWhereInputObjectSchema.optional() }).strict();