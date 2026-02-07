import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPResourceIncludeObjectSchema as MCPResourceIncludeObjectSchema } from './objects/MCPResourceInclude.schema';
import { MCPResourceOrderByWithRelationInputObjectSchema as MCPResourceOrderByWithRelationInputObjectSchema } from './objects/MCPResourceOrderByWithRelationInput.schema';
import { MCPResourceWhereInputObjectSchema as MCPResourceWhereInputObjectSchema } from './objects/MCPResourceWhereInput.schema';
import { MCPResourceWhereUniqueInputObjectSchema as MCPResourceWhereUniqueInputObjectSchema } from './objects/MCPResourceWhereUniqueInput.schema';
import { MCPResourceScalarFieldEnumSchema } from './enums/MCPResourceScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MCPResourceFindFirstOrThrowSelectSchema: z.ZodType<Prisma.MCPResourceSelect> = z.object({
    id: z.boolean().optional(),
    uri: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    mimeType: z.boolean().optional(),
    size: z.boolean().optional(),
    text: z.boolean().optional(),
    blob: z.boolean().optional(),
    server: z.boolean().optional(),
    serverId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.MCPResourceSelect>;

export const MCPResourceFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    uri: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    mimeType: z.boolean().optional(),
    size: z.boolean().optional(),
    text: z.boolean().optional(),
    blob: z.boolean().optional(),
    server: z.boolean().optional(),
    serverId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const MCPResourceFindFirstOrThrowSchema: z.ZodType<Prisma.MCPResourceFindFirstOrThrowArgs> = z.object({ select: MCPResourceFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => MCPResourceIncludeObjectSchema.optional()), orderBy: z.union([MCPResourceOrderByWithRelationInputObjectSchema, MCPResourceOrderByWithRelationInputObjectSchema.array()]).optional(), where: MCPResourceWhereInputObjectSchema.optional(), cursor: MCPResourceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MCPResourceScalarFieldEnumSchema, MCPResourceScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.MCPResourceFindFirstOrThrowArgs>;

export const MCPResourceFindFirstOrThrowZodSchema = z.object({ select: MCPResourceFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => MCPResourceIncludeObjectSchema.optional()), orderBy: z.union([MCPResourceOrderByWithRelationInputObjectSchema, MCPResourceOrderByWithRelationInputObjectSchema.array()]).optional(), where: MCPResourceWhereInputObjectSchema.optional(), cursor: MCPResourceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MCPResourceScalarFieldEnumSchema, MCPResourceScalarFieldEnumSchema.array()]).optional() }).strict();