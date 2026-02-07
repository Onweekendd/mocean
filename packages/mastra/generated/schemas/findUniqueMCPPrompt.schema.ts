import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPPromptSelectObjectSchema as MCPPromptSelectObjectSchema } from './objects/MCPPromptSelect.schema';
import { MCPPromptIncludeObjectSchema as MCPPromptIncludeObjectSchema } from './objects/MCPPromptInclude.schema';
import { MCPPromptWhereUniqueInputObjectSchema as MCPPromptWhereUniqueInputObjectSchema } from './objects/MCPPromptWhereUniqueInput.schema';

export const MCPPromptFindUniqueSchema: z.ZodType<Prisma.MCPPromptFindUniqueArgs> = z.object({ select: MCPPromptSelectObjectSchema.optional(), include: MCPPromptIncludeObjectSchema.optional(), where: MCPPromptWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MCPPromptFindUniqueArgs>;

export const MCPPromptFindUniqueZodSchema = z.object({ select: MCPPromptSelectObjectSchema.optional(), include: MCPPromptIncludeObjectSchema.optional(), where: MCPPromptWhereUniqueInputObjectSchema }).strict();