import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPToolSelectObjectSchema as MCPToolSelectObjectSchema } from './objects/MCPToolSelect.schema';
import { MCPToolIncludeObjectSchema as MCPToolIncludeObjectSchema } from './objects/MCPToolInclude.schema';
import { MCPToolWhereUniqueInputObjectSchema as MCPToolWhereUniqueInputObjectSchema } from './objects/MCPToolWhereUniqueInput.schema';

export const MCPToolDeleteOneSchema: z.ZodType<Prisma.MCPToolDeleteArgs> = z.object({ select: MCPToolSelectObjectSchema.optional(), include: MCPToolIncludeObjectSchema.optional(), where: MCPToolWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MCPToolDeleteArgs>;

export const MCPToolDeleteOneZodSchema = z.object({ select: MCPToolSelectObjectSchema.optional(), include: MCPToolIncludeObjectSchema.optional(), where: MCPToolWhereUniqueInputObjectSchema }).strict();