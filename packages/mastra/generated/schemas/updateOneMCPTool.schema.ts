import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPToolSelectObjectSchema as MCPToolSelectObjectSchema } from './objects/MCPToolSelect.schema';
import { MCPToolIncludeObjectSchema as MCPToolIncludeObjectSchema } from './objects/MCPToolInclude.schema';
import { MCPToolUpdateInputObjectSchema as MCPToolUpdateInputObjectSchema } from './objects/MCPToolUpdateInput.schema';
import { MCPToolUncheckedUpdateInputObjectSchema as MCPToolUncheckedUpdateInputObjectSchema } from './objects/MCPToolUncheckedUpdateInput.schema';
import { MCPToolWhereUniqueInputObjectSchema as MCPToolWhereUniqueInputObjectSchema } from './objects/MCPToolWhereUniqueInput.schema';

export const MCPToolUpdateOneSchema: z.ZodType<Prisma.MCPToolUpdateArgs> = z.object({ select: MCPToolSelectObjectSchema.optional(), include: MCPToolIncludeObjectSchema.optional(), data: z.union([MCPToolUpdateInputObjectSchema, MCPToolUncheckedUpdateInputObjectSchema]), where: MCPToolWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MCPToolUpdateArgs>;

export const MCPToolUpdateOneZodSchema = z.object({ select: MCPToolSelectObjectSchema.optional(), include: MCPToolIncludeObjectSchema.optional(), data: z.union([MCPToolUpdateInputObjectSchema, MCPToolUncheckedUpdateInputObjectSchema]), where: MCPToolWhereUniqueInputObjectSchema }).strict();