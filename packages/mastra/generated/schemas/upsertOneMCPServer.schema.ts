import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPServerSelectObjectSchema as MCPServerSelectObjectSchema } from './objects/MCPServerSelect.schema';
import { MCPServerIncludeObjectSchema as MCPServerIncludeObjectSchema } from './objects/MCPServerInclude.schema';
import { MCPServerWhereUniqueInputObjectSchema as MCPServerWhereUniqueInputObjectSchema } from './objects/MCPServerWhereUniqueInput.schema';
import { MCPServerCreateInputObjectSchema as MCPServerCreateInputObjectSchema } from './objects/MCPServerCreateInput.schema';
import { MCPServerUncheckedCreateInputObjectSchema as MCPServerUncheckedCreateInputObjectSchema } from './objects/MCPServerUncheckedCreateInput.schema';
import { MCPServerUpdateInputObjectSchema as MCPServerUpdateInputObjectSchema } from './objects/MCPServerUpdateInput.schema';
import { MCPServerUncheckedUpdateInputObjectSchema as MCPServerUncheckedUpdateInputObjectSchema } from './objects/MCPServerUncheckedUpdateInput.schema';

export const MCPServerUpsertOneSchema: z.ZodType<Prisma.MCPServerUpsertArgs> = z.object({ select: MCPServerSelectObjectSchema.optional(), include: MCPServerIncludeObjectSchema.optional(), where: MCPServerWhereUniqueInputObjectSchema, create: z.union([ MCPServerCreateInputObjectSchema, MCPServerUncheckedCreateInputObjectSchema ]), update: z.union([ MCPServerUpdateInputObjectSchema, MCPServerUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.MCPServerUpsertArgs>;

export const MCPServerUpsertOneZodSchema = z.object({ select: MCPServerSelectObjectSchema.optional(), include: MCPServerIncludeObjectSchema.optional(), where: MCPServerWhereUniqueInputObjectSchema, create: z.union([ MCPServerCreateInputObjectSchema, MCPServerUncheckedCreateInputObjectSchema ]), update: z.union([ MCPServerUpdateInputObjectSchema, MCPServerUncheckedUpdateInputObjectSchema ]) }).strict();