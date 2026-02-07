import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPToolSelectObjectSchema as MCPToolSelectObjectSchema } from './objects/MCPToolSelect.schema';
import { MCPToolIncludeObjectSchema as MCPToolIncludeObjectSchema } from './objects/MCPToolInclude.schema';
import { MCPToolCreateInputObjectSchema as MCPToolCreateInputObjectSchema } from './objects/MCPToolCreateInput.schema';
import { MCPToolUncheckedCreateInputObjectSchema as MCPToolUncheckedCreateInputObjectSchema } from './objects/MCPToolUncheckedCreateInput.schema';

export const MCPToolCreateOneSchema: z.ZodType<Prisma.MCPToolCreateArgs> = z.object({ select: MCPToolSelectObjectSchema.optional(), include: MCPToolIncludeObjectSchema.optional(), data: z.union([MCPToolCreateInputObjectSchema, MCPToolUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.MCPToolCreateArgs>;

export const MCPToolCreateOneZodSchema = z.object({ select: MCPToolSelectObjectSchema.optional(), include: MCPToolIncludeObjectSchema.optional(), data: z.union([MCPToolCreateInputObjectSchema, MCPToolUncheckedCreateInputObjectSchema]) }).strict();