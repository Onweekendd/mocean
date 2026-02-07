import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPToolUpdateManyMutationInputObjectSchema as MCPToolUpdateManyMutationInputObjectSchema } from './objects/MCPToolUpdateManyMutationInput.schema';
import { MCPToolWhereInputObjectSchema as MCPToolWhereInputObjectSchema } from './objects/MCPToolWhereInput.schema';

export const MCPToolUpdateManySchema: z.ZodType<Prisma.MCPToolUpdateManyArgs> = z.object({ data: MCPToolUpdateManyMutationInputObjectSchema, where: MCPToolWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MCPToolUpdateManyArgs>;

export const MCPToolUpdateManyZodSchema = z.object({ data: MCPToolUpdateManyMutationInputObjectSchema, where: MCPToolWhereInputObjectSchema.optional() }).strict();