import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPResourceWhereInputObjectSchema as MCPResourceWhereInputObjectSchema } from './objects/MCPResourceWhereInput.schema';

export const MCPResourceDeleteManySchema: z.ZodType<Prisma.MCPResourceDeleteManyArgs> = z.object({ where: MCPResourceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MCPResourceDeleteManyArgs>;

export const MCPResourceDeleteManyZodSchema = z.object({ where: MCPResourceWhereInputObjectSchema.optional() }).strict();