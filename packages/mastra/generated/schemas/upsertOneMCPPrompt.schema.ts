import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPPromptSelectObjectSchema as MCPPromptSelectObjectSchema } from './objects/MCPPromptSelect.schema';
import { MCPPromptIncludeObjectSchema as MCPPromptIncludeObjectSchema } from './objects/MCPPromptInclude.schema';
import { MCPPromptWhereUniqueInputObjectSchema as MCPPromptWhereUniqueInputObjectSchema } from './objects/MCPPromptWhereUniqueInput.schema';
import { MCPPromptCreateInputObjectSchema as MCPPromptCreateInputObjectSchema } from './objects/MCPPromptCreateInput.schema';
import { MCPPromptUncheckedCreateInputObjectSchema as MCPPromptUncheckedCreateInputObjectSchema } from './objects/MCPPromptUncheckedCreateInput.schema';
import { MCPPromptUpdateInputObjectSchema as MCPPromptUpdateInputObjectSchema } from './objects/MCPPromptUpdateInput.schema';
import { MCPPromptUncheckedUpdateInputObjectSchema as MCPPromptUncheckedUpdateInputObjectSchema } from './objects/MCPPromptUncheckedUpdateInput.schema';

export const MCPPromptUpsertOneSchema: z.ZodType<Prisma.MCPPromptUpsertArgs> = z.object({ select: MCPPromptSelectObjectSchema.optional(), include: MCPPromptIncludeObjectSchema.optional(), where: MCPPromptWhereUniqueInputObjectSchema, create: z.union([ MCPPromptCreateInputObjectSchema, MCPPromptUncheckedCreateInputObjectSchema ]), update: z.union([ MCPPromptUpdateInputObjectSchema, MCPPromptUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.MCPPromptUpsertArgs>;

export const MCPPromptUpsertOneZodSchema = z.object({ select: MCPPromptSelectObjectSchema.optional(), include: MCPPromptIncludeObjectSchema.optional(), where: MCPPromptWhereUniqueInputObjectSchema, create: z.union([ MCPPromptCreateInputObjectSchema, MCPPromptUncheckedCreateInputObjectSchema ]), update: z.union([ MCPPromptUpdateInputObjectSchema, MCPPromptUncheckedUpdateInputObjectSchema ]) }).strict();