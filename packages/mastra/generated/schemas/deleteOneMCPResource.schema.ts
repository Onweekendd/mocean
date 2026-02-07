import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPResourceSelectObjectSchema as MCPResourceSelectObjectSchema } from './objects/MCPResourceSelect.schema';
import { MCPResourceIncludeObjectSchema as MCPResourceIncludeObjectSchema } from './objects/MCPResourceInclude.schema';
import { MCPResourceWhereUniqueInputObjectSchema as MCPResourceWhereUniqueInputObjectSchema } from './objects/MCPResourceWhereUniqueInput.schema';

export const MCPResourceDeleteOneSchema: z.ZodType<Prisma.MCPResourceDeleteArgs> = z.object({ select: MCPResourceSelectObjectSchema.optional(), include: MCPResourceIncludeObjectSchema.optional(), where: MCPResourceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MCPResourceDeleteArgs>;

export const MCPResourceDeleteOneZodSchema = z.object({ select: MCPResourceSelectObjectSchema.optional(), include: MCPResourceIncludeObjectSchema.optional(), where: MCPResourceWhereUniqueInputObjectSchema }).strict();