import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPServerSelectObjectSchema as MCPServerSelectObjectSchema } from './objects/MCPServerSelect.schema';
import { MCPServerIncludeObjectSchema as MCPServerIncludeObjectSchema } from './objects/MCPServerInclude.schema';
import { MCPServerCreateInputObjectSchema as MCPServerCreateInputObjectSchema } from './objects/MCPServerCreateInput.schema';
import { MCPServerUncheckedCreateInputObjectSchema as MCPServerUncheckedCreateInputObjectSchema } from './objects/MCPServerUncheckedCreateInput.schema';

export const MCPServerCreateOneSchema: z.ZodType<Prisma.MCPServerCreateArgs> = z.object({ select: MCPServerSelectObjectSchema.optional(), include: MCPServerIncludeObjectSchema.optional(), data: z.union([MCPServerCreateInputObjectSchema, MCPServerUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.MCPServerCreateArgs>;

export const MCPServerCreateOneZodSchema = z.object({ select: MCPServerSelectObjectSchema.optional(), include: MCPServerIncludeObjectSchema.optional(), data: z.union([MCPServerCreateInputObjectSchema, MCPServerUncheckedCreateInputObjectSchema]) }).strict();