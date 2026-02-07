import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPPromptSelectObjectSchema as MCPPromptSelectObjectSchema } from './objects/MCPPromptSelect.schema';
import { MCPPromptIncludeObjectSchema as MCPPromptIncludeObjectSchema } from './objects/MCPPromptInclude.schema';
import { MCPPromptUpdateInputObjectSchema as MCPPromptUpdateInputObjectSchema } from './objects/MCPPromptUpdateInput.schema';
import { MCPPromptUncheckedUpdateInputObjectSchema as MCPPromptUncheckedUpdateInputObjectSchema } from './objects/MCPPromptUncheckedUpdateInput.schema';
import { MCPPromptWhereUniqueInputObjectSchema as MCPPromptWhereUniqueInputObjectSchema } from './objects/MCPPromptWhereUniqueInput.schema';

export const MCPPromptUpdateOneSchema: z.ZodType<Prisma.MCPPromptUpdateArgs> = z.object({ select: MCPPromptSelectObjectSchema.optional(), include: MCPPromptIncludeObjectSchema.optional(), data: z.union([MCPPromptUpdateInputObjectSchema, MCPPromptUncheckedUpdateInputObjectSchema]), where: MCPPromptWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MCPPromptUpdateArgs>;

export const MCPPromptUpdateOneZodSchema = z.object({ select: MCPPromptSelectObjectSchema.optional(), include: MCPPromptIncludeObjectSchema.optional(), data: z.union([MCPPromptUpdateInputObjectSchema, MCPPromptUncheckedUpdateInputObjectSchema]), where: MCPPromptWhereUniqueInputObjectSchema }).strict();