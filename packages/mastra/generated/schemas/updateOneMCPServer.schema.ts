import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPServerSelectObjectSchema as MCPServerSelectObjectSchema } from './objects/MCPServerSelect.schema';
import { MCPServerIncludeObjectSchema as MCPServerIncludeObjectSchema } from './objects/MCPServerInclude.schema';
import { MCPServerUpdateInputObjectSchema as MCPServerUpdateInputObjectSchema } from './objects/MCPServerUpdateInput.schema';
import { MCPServerUncheckedUpdateInputObjectSchema as MCPServerUncheckedUpdateInputObjectSchema } from './objects/MCPServerUncheckedUpdateInput.schema';
import { MCPServerWhereUniqueInputObjectSchema as MCPServerWhereUniqueInputObjectSchema } from './objects/MCPServerWhereUniqueInput.schema';

export const MCPServerUpdateOneSchema: z.ZodType<Prisma.MCPServerUpdateArgs> = z.object({ select: MCPServerSelectObjectSchema.optional(), include: MCPServerIncludeObjectSchema.optional(), data: z.union([MCPServerUpdateInputObjectSchema, MCPServerUncheckedUpdateInputObjectSchema]), where: MCPServerWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MCPServerUpdateArgs>;

export const MCPServerUpdateOneZodSchema = z.object({ select: MCPServerSelectObjectSchema.optional(), include: MCPServerIncludeObjectSchema.optional(), data: z.union([MCPServerUpdateInputObjectSchema, MCPServerUncheckedUpdateInputObjectSchema]), where: MCPServerWhereUniqueInputObjectSchema }).strict();