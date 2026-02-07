import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPResourceSelectObjectSchema as MCPResourceSelectObjectSchema } from './objects/MCPResourceSelect.schema';
import { MCPResourceIncludeObjectSchema as MCPResourceIncludeObjectSchema } from './objects/MCPResourceInclude.schema';
import { MCPResourceWhereUniqueInputObjectSchema as MCPResourceWhereUniqueInputObjectSchema } from './objects/MCPResourceWhereUniqueInput.schema';
import { MCPResourceCreateInputObjectSchema as MCPResourceCreateInputObjectSchema } from './objects/MCPResourceCreateInput.schema';
import { MCPResourceUncheckedCreateInputObjectSchema as MCPResourceUncheckedCreateInputObjectSchema } from './objects/MCPResourceUncheckedCreateInput.schema';
import { MCPResourceUpdateInputObjectSchema as MCPResourceUpdateInputObjectSchema } from './objects/MCPResourceUpdateInput.schema';
import { MCPResourceUncheckedUpdateInputObjectSchema as MCPResourceUncheckedUpdateInputObjectSchema } from './objects/MCPResourceUncheckedUpdateInput.schema';

export const MCPResourceUpsertOneSchema: z.ZodType<Prisma.MCPResourceUpsertArgs> = z.object({ select: MCPResourceSelectObjectSchema.optional(), include: MCPResourceIncludeObjectSchema.optional(), where: MCPResourceWhereUniqueInputObjectSchema, create: z.union([ MCPResourceCreateInputObjectSchema, MCPResourceUncheckedCreateInputObjectSchema ]), update: z.union([ MCPResourceUpdateInputObjectSchema, MCPResourceUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.MCPResourceUpsertArgs>;

export const MCPResourceUpsertOneZodSchema = z.object({ select: MCPResourceSelectObjectSchema.optional(), include: MCPResourceIncludeObjectSchema.optional(), where: MCPResourceWhereUniqueInputObjectSchema, create: z.union([ MCPResourceCreateInputObjectSchema, MCPResourceUncheckedCreateInputObjectSchema ]), update: z.union([ MCPResourceUpdateInputObjectSchema, MCPResourceUncheckedUpdateInputObjectSchema ]) }).strict();