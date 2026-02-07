import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPPromptSelectObjectSchema as MCPPromptSelectObjectSchema } from './objects/MCPPromptSelect.schema';
import { MCPPromptIncludeObjectSchema as MCPPromptIncludeObjectSchema } from './objects/MCPPromptInclude.schema';
import { MCPPromptWhereUniqueInputObjectSchema as MCPPromptWhereUniqueInputObjectSchema } from './objects/MCPPromptWhereUniqueInput.schema';

export const MCPPromptFindUniqueOrThrowSchema: z.ZodType<Prisma.MCPPromptFindUniqueOrThrowArgs> = z.object({ select: MCPPromptSelectObjectSchema.optional(), include: MCPPromptIncludeObjectSchema.optional(), where: MCPPromptWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MCPPromptFindUniqueOrThrowArgs>;

export const MCPPromptFindUniqueOrThrowZodSchema = z.object({ select: MCPPromptSelectObjectSchema.optional(), include: MCPPromptIncludeObjectSchema.optional(), where: MCPPromptWhereUniqueInputObjectSchema }).strict();