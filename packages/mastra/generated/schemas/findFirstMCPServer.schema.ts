import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPServerIncludeObjectSchema as MCPServerIncludeObjectSchema } from './objects/MCPServerInclude.schema';
import { MCPServerOrderByWithRelationInputObjectSchema as MCPServerOrderByWithRelationInputObjectSchema } from './objects/MCPServerOrderByWithRelationInput.schema';
import { MCPServerWhereInputObjectSchema as MCPServerWhereInputObjectSchema } from './objects/MCPServerWhereInput.schema';
import { MCPServerWhereUniqueInputObjectSchema as MCPServerWhereUniqueInputObjectSchema } from './objects/MCPServerWhereUniqueInput.schema';
import { MCPServerScalarFieldEnumSchema } from './enums/MCPServerScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MCPServerFindFirstSelectSchema: z.ZodType<Prisma.MCPServerSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    type: z.boolean().optional(),
    description: z.boolean().optional(),
    baseUrl: z.boolean().optional(),
    command: z.boolean().optional(),
    registryUrl: z.boolean().optional(),
    argsJson: z.boolean().optional(),
    env: z.boolean().optional(),
    isActive: z.boolean().optional(),
    disabledToolsJson: z.boolean().optional(),
    configSample: z.boolean().optional(),
    headers: z.boolean().optional(),
    searchKey: z.boolean().optional(),
    provider: z.boolean().optional(),
    providerUrl: z.boolean().optional(),
    logoUrl: z.boolean().optional(),
    tagsJson: z.boolean().optional(),
    timeout: z.boolean().optional(),
    tools: z.boolean().optional(),
    prompts: z.boolean().optional(),
    assistants: z.boolean().optional(),
    agents: z.boolean().optional(),
    resources: z.boolean().optional(),
    configSampleRelation: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.MCPServerSelect>;

export const MCPServerFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    type: z.boolean().optional(),
    description: z.boolean().optional(),
    baseUrl: z.boolean().optional(),
    command: z.boolean().optional(),
    registryUrl: z.boolean().optional(),
    argsJson: z.boolean().optional(),
    env: z.boolean().optional(),
    isActive: z.boolean().optional(),
    disabledToolsJson: z.boolean().optional(),
    configSample: z.boolean().optional(),
    headers: z.boolean().optional(),
    searchKey: z.boolean().optional(),
    provider: z.boolean().optional(),
    providerUrl: z.boolean().optional(),
    logoUrl: z.boolean().optional(),
    tagsJson: z.boolean().optional(),
    timeout: z.boolean().optional(),
    tools: z.boolean().optional(),
    prompts: z.boolean().optional(),
    assistants: z.boolean().optional(),
    agents: z.boolean().optional(),
    resources: z.boolean().optional(),
    configSampleRelation: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const MCPServerFindFirstSchema: z.ZodType<Prisma.MCPServerFindFirstArgs> = z.object({ select: MCPServerFindFirstSelectSchema.optional(), include: z.lazy(() => MCPServerIncludeObjectSchema.optional()), orderBy: z.union([MCPServerOrderByWithRelationInputObjectSchema, MCPServerOrderByWithRelationInputObjectSchema.array()]).optional(), where: MCPServerWhereInputObjectSchema.optional(), cursor: MCPServerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MCPServerScalarFieldEnumSchema, MCPServerScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.MCPServerFindFirstArgs>;

export const MCPServerFindFirstZodSchema = z.object({ select: MCPServerFindFirstSelectSchema.optional(), include: z.lazy(() => MCPServerIncludeObjectSchema.optional()), orderBy: z.union([MCPServerOrderByWithRelationInputObjectSchema, MCPServerOrderByWithRelationInputObjectSchema.array()]).optional(), where: MCPServerWhereInputObjectSchema.optional(), cursor: MCPServerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MCPServerScalarFieldEnumSchema, MCPServerScalarFieldEnumSchema.array()]).optional() }).strict();