import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPPromptIncludeObjectSchema as MCPPromptIncludeObjectSchema } from './objects/MCPPromptInclude.schema';
import { MCPPromptOrderByWithRelationInputObjectSchema as MCPPromptOrderByWithRelationInputObjectSchema } from './objects/MCPPromptOrderByWithRelationInput.schema';
import { MCPPromptWhereInputObjectSchema as MCPPromptWhereInputObjectSchema } from './objects/MCPPromptWhereInput.schema';
import { MCPPromptWhereUniqueInputObjectSchema as MCPPromptWhereUniqueInputObjectSchema } from './objects/MCPPromptWhereUniqueInput.schema';
import { MCPPromptScalarFieldEnumSchema } from './enums/MCPPromptScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MCPPromptFindFirstSelectSchema: z.ZodType<Prisma.MCPPromptSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    arguments: z.boolean().optional(),
    server: z.boolean().optional(),
    serverId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.MCPPromptSelect>;

export const MCPPromptFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    arguments: z.boolean().optional(),
    server: z.boolean().optional(),
    serverId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const MCPPromptFindFirstSchema: z.ZodType<Prisma.MCPPromptFindFirstArgs> = z.object({ select: MCPPromptFindFirstSelectSchema.optional(), include: z.lazy(() => MCPPromptIncludeObjectSchema.optional()), orderBy: z.union([MCPPromptOrderByWithRelationInputObjectSchema, MCPPromptOrderByWithRelationInputObjectSchema.array()]).optional(), where: MCPPromptWhereInputObjectSchema.optional(), cursor: MCPPromptWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MCPPromptScalarFieldEnumSchema, MCPPromptScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.MCPPromptFindFirstArgs>;

export const MCPPromptFindFirstZodSchema = z.object({ select: MCPPromptFindFirstSelectSchema.optional(), include: z.lazy(() => MCPPromptIncludeObjectSchema.optional()), orderBy: z.union([MCPPromptOrderByWithRelationInputObjectSchema, MCPPromptOrderByWithRelationInputObjectSchema.array()]).optional(), where: MCPPromptWhereInputObjectSchema.optional(), cursor: MCPPromptWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MCPPromptScalarFieldEnumSchema, MCPPromptScalarFieldEnumSchema.array()]).optional() }).strict();