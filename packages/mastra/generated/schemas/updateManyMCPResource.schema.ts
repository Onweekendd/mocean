import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPResourceUpdateManyMutationInputObjectSchema as MCPResourceUpdateManyMutationInputObjectSchema } from './objects/MCPResourceUpdateManyMutationInput.schema';
import { MCPResourceWhereInputObjectSchema as MCPResourceWhereInputObjectSchema } from './objects/MCPResourceWhereInput.schema';

export const MCPResourceUpdateManySchema: z.ZodType<Prisma.MCPResourceUpdateManyArgs> = z.object({ data: MCPResourceUpdateManyMutationInputObjectSchema, where: MCPResourceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MCPResourceUpdateManyArgs>;

export const MCPResourceUpdateManyZodSchema = z.object({ data: MCPResourceUpdateManyMutationInputObjectSchema, where: MCPResourceWhereInputObjectSchema.optional() }).strict();