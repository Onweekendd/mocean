import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPToolSelectObjectSchema as MCPToolSelectObjectSchema } from './objects/MCPToolSelect.schema';
import { MCPToolIncludeObjectSchema as MCPToolIncludeObjectSchema } from './objects/MCPToolInclude.schema';
import { MCPToolWhereUniqueInputObjectSchema as MCPToolWhereUniqueInputObjectSchema } from './objects/MCPToolWhereUniqueInput.schema';

export const MCPToolFindUniqueOrThrowSchema: z.ZodType<Prisma.MCPToolFindUniqueOrThrowArgs> = z.object({ select: MCPToolSelectObjectSchema.optional(), include: MCPToolIncludeObjectSchema.optional(), where: MCPToolWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MCPToolFindUniqueOrThrowArgs>;

export const MCPToolFindUniqueOrThrowZodSchema = z.object({ select: MCPToolSelectObjectSchema.optional(), include: MCPToolIncludeObjectSchema.optional(), where: MCPToolWhereUniqueInputObjectSchema }).strict();