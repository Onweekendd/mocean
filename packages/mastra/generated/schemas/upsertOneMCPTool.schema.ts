import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPToolSelectObjectSchema as MCPToolSelectObjectSchema } from './objects/MCPToolSelect.schema';
import { MCPToolIncludeObjectSchema as MCPToolIncludeObjectSchema } from './objects/MCPToolInclude.schema';
import { MCPToolWhereUniqueInputObjectSchema as MCPToolWhereUniqueInputObjectSchema } from './objects/MCPToolWhereUniqueInput.schema';
import { MCPToolCreateInputObjectSchema as MCPToolCreateInputObjectSchema } from './objects/MCPToolCreateInput.schema';
import { MCPToolUncheckedCreateInputObjectSchema as MCPToolUncheckedCreateInputObjectSchema } from './objects/MCPToolUncheckedCreateInput.schema';
import { MCPToolUpdateInputObjectSchema as MCPToolUpdateInputObjectSchema } from './objects/MCPToolUpdateInput.schema';
import { MCPToolUncheckedUpdateInputObjectSchema as MCPToolUncheckedUpdateInputObjectSchema } from './objects/MCPToolUncheckedUpdateInput.schema';

export const MCPToolUpsertOneSchema: z.ZodType<Prisma.MCPToolUpsertArgs> = z.object({ select: MCPToolSelectObjectSchema.optional(), include: MCPToolIncludeObjectSchema.optional(), where: MCPToolWhereUniqueInputObjectSchema, create: z.union([ MCPToolCreateInputObjectSchema, MCPToolUncheckedCreateInputObjectSchema ]), update: z.union([ MCPToolUpdateInputObjectSchema, MCPToolUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.MCPToolUpsertArgs>;

export const MCPToolUpsertOneZodSchema = z.object({ select: MCPToolSelectObjectSchema.optional(), include: MCPToolIncludeObjectSchema.optional(), where: MCPToolWhereUniqueInputObjectSchema, create: z.union([ MCPToolCreateInputObjectSchema, MCPToolUncheckedCreateInputObjectSchema ]), update: z.union([ MCPToolUpdateInputObjectSchema, MCPToolUncheckedUpdateInputObjectSchema ]) }).strict();