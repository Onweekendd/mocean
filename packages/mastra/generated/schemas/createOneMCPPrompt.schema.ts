import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPPromptSelectObjectSchema as MCPPromptSelectObjectSchema } from './objects/MCPPromptSelect.schema';
import { MCPPromptIncludeObjectSchema as MCPPromptIncludeObjectSchema } from './objects/MCPPromptInclude.schema';
import { MCPPromptCreateInputObjectSchema as MCPPromptCreateInputObjectSchema } from './objects/MCPPromptCreateInput.schema';
import { MCPPromptUncheckedCreateInputObjectSchema as MCPPromptUncheckedCreateInputObjectSchema } from './objects/MCPPromptUncheckedCreateInput.schema';

export const MCPPromptCreateOneSchema: z.ZodType<Prisma.MCPPromptCreateArgs> = z.object({ select: MCPPromptSelectObjectSchema.optional(), include: MCPPromptIncludeObjectSchema.optional(), data: z.union([MCPPromptCreateInputObjectSchema, MCPPromptUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.MCPPromptCreateArgs>;

export const MCPPromptCreateOneZodSchema = z.object({ select: MCPPromptSelectObjectSchema.optional(), include: MCPPromptIncludeObjectSchema.optional(), data: z.union([MCPPromptCreateInputObjectSchema, MCPPromptUncheckedCreateInputObjectSchema]) }).strict();