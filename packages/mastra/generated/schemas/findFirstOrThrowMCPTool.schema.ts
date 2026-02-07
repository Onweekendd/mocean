import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPToolIncludeObjectSchema as MCPToolIncludeObjectSchema } from './objects/MCPToolInclude.schema';
import { MCPToolOrderByWithRelationInputObjectSchema as MCPToolOrderByWithRelationInputObjectSchema } from './objects/MCPToolOrderByWithRelationInput.schema';
import { MCPToolWhereInputObjectSchema as MCPToolWhereInputObjectSchema } from './objects/MCPToolWhereInput.schema';
import { MCPToolWhereUniqueInputObjectSchema as MCPToolWhereUniqueInputObjectSchema } from './objects/MCPToolWhereUniqueInput.schema';
import { MCPToolScalarFieldEnumSchema } from './enums/MCPToolScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MCPToolFindFirstOrThrowSelectSchema: z.ZodType<Prisma.MCPToolSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    inputSchema: z.boolean().optional(),
    server: z.boolean().optional(),
    serverId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.MCPToolSelect>;

export const MCPToolFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    inputSchema: z.boolean().optional(),
    server: z.boolean().optional(),
    serverId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const MCPToolFindFirstOrThrowSchema: z.ZodType<Prisma.MCPToolFindFirstOrThrowArgs> = z.object({ select: MCPToolFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => MCPToolIncludeObjectSchema.optional()), orderBy: z.union([MCPToolOrderByWithRelationInputObjectSchema, MCPToolOrderByWithRelationInputObjectSchema.array()]).optional(), where: MCPToolWhereInputObjectSchema.optional(), cursor: MCPToolWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MCPToolScalarFieldEnumSchema, MCPToolScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.MCPToolFindFirstOrThrowArgs>;

export const MCPToolFindFirstOrThrowZodSchema = z.object({ select: MCPToolFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => MCPToolIncludeObjectSchema.optional()), orderBy: z.union([MCPToolOrderByWithRelationInputObjectSchema, MCPToolOrderByWithRelationInputObjectSchema.array()]).optional(), where: MCPToolWhereInputObjectSchema.optional(), cursor: MCPToolWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MCPToolScalarFieldEnumSchema, MCPToolScalarFieldEnumSchema.array()]).optional() }).strict();