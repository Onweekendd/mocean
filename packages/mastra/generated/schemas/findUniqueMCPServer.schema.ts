import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPServerSelectObjectSchema as MCPServerSelectObjectSchema } from './objects/MCPServerSelect.schema';
import { MCPServerIncludeObjectSchema as MCPServerIncludeObjectSchema } from './objects/MCPServerInclude.schema';
import { MCPServerWhereUniqueInputObjectSchema as MCPServerWhereUniqueInputObjectSchema } from './objects/MCPServerWhereUniqueInput.schema';

export const MCPServerFindUniqueSchema: z.ZodType<Prisma.MCPServerFindUniqueArgs> = z.object({ select: MCPServerSelectObjectSchema.optional(), include: MCPServerIncludeObjectSchema.optional(), where: MCPServerWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MCPServerFindUniqueArgs>;

export const MCPServerFindUniqueZodSchema = z.object({ select: MCPServerSelectObjectSchema.optional(), include: MCPServerIncludeObjectSchema.optional(), where: MCPServerWhereUniqueInputObjectSchema }).strict();