import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPServerUpdateManyMutationInputObjectSchema as MCPServerUpdateManyMutationInputObjectSchema } from './objects/MCPServerUpdateManyMutationInput.schema';
import { MCPServerWhereInputObjectSchema as MCPServerWhereInputObjectSchema } from './objects/MCPServerWhereInput.schema';

export const MCPServerUpdateManySchema: z.ZodType<Prisma.MCPServerUpdateManyArgs> = z.object({ data: MCPServerUpdateManyMutationInputObjectSchema, where: MCPServerWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MCPServerUpdateManyArgs>;

export const MCPServerUpdateManyZodSchema = z.object({ data: MCPServerUpdateManyMutationInputObjectSchema, where: MCPServerWhereInputObjectSchema.optional() }).strict();