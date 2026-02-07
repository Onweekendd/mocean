import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPResourceSelectObjectSchema as MCPResourceSelectObjectSchema } from './objects/MCPResourceSelect.schema';
import { MCPResourceIncludeObjectSchema as MCPResourceIncludeObjectSchema } from './objects/MCPResourceInclude.schema';
import { MCPResourceCreateInputObjectSchema as MCPResourceCreateInputObjectSchema } from './objects/MCPResourceCreateInput.schema';
import { MCPResourceUncheckedCreateInputObjectSchema as MCPResourceUncheckedCreateInputObjectSchema } from './objects/MCPResourceUncheckedCreateInput.schema';

export const MCPResourceCreateOneSchema: z.ZodType<Prisma.MCPResourceCreateArgs> = z.object({ select: MCPResourceSelectObjectSchema.optional(), include: MCPResourceIncludeObjectSchema.optional(), data: z.union([MCPResourceCreateInputObjectSchema, MCPResourceUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.MCPResourceCreateArgs>;

export const MCPResourceCreateOneZodSchema = z.object({ select: MCPResourceSelectObjectSchema.optional(), include: MCPResourceIncludeObjectSchema.optional(), data: z.union([MCPResourceCreateInputObjectSchema, MCPResourceUncheckedCreateInputObjectSchema]) }).strict();