import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPResourceSelectObjectSchema as MCPResourceSelectObjectSchema } from './objects/MCPResourceSelect.schema';
import { MCPResourceIncludeObjectSchema as MCPResourceIncludeObjectSchema } from './objects/MCPResourceInclude.schema';
import { MCPResourceUpdateInputObjectSchema as MCPResourceUpdateInputObjectSchema } from './objects/MCPResourceUpdateInput.schema';
import { MCPResourceUncheckedUpdateInputObjectSchema as MCPResourceUncheckedUpdateInputObjectSchema } from './objects/MCPResourceUncheckedUpdateInput.schema';
import { MCPResourceWhereUniqueInputObjectSchema as MCPResourceWhereUniqueInputObjectSchema } from './objects/MCPResourceWhereUniqueInput.schema';

export const MCPResourceUpdateOneSchema: z.ZodType<Prisma.MCPResourceUpdateArgs> = z.object({ select: MCPResourceSelectObjectSchema.optional(), include: MCPResourceIncludeObjectSchema.optional(), data: z.union([MCPResourceUpdateInputObjectSchema, MCPResourceUncheckedUpdateInputObjectSchema]), where: MCPResourceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MCPResourceUpdateArgs>;

export const MCPResourceUpdateOneZodSchema = z.object({ select: MCPResourceSelectObjectSchema.optional(), include: MCPResourceIncludeObjectSchema.optional(), data: z.union([MCPResourceUpdateInputObjectSchema, MCPResourceUncheckedUpdateInputObjectSchema]), where: MCPResourceWhereUniqueInputObjectSchema }).strict();