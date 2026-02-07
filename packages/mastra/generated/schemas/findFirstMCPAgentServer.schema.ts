import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPAgentServerIncludeObjectSchema as MCPAgentServerIncludeObjectSchema } from './objects/MCPAgentServerInclude.schema';
import { MCPAgentServerOrderByWithRelationInputObjectSchema as MCPAgentServerOrderByWithRelationInputObjectSchema } from './objects/MCPAgentServerOrderByWithRelationInput.schema';
import { MCPAgentServerWhereInputObjectSchema as MCPAgentServerWhereInputObjectSchema } from './objects/MCPAgentServerWhereInput.schema';
import { MCPAgentServerWhereUniqueInputObjectSchema as MCPAgentServerWhereUniqueInputObjectSchema } from './objects/MCPAgentServerWhereUniqueInput.schema';
import { MCPAgentServerScalarFieldEnumSchema } from './enums/MCPAgentServerScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MCPAgentServerFindFirstSelectSchema: z.ZodType<Prisma.MCPAgentServerSelect> = z.object({
    agent: z.boolean().optional(),
    agentId: z.boolean().optional(),
    mcpServer: z.boolean().optional(),
    mcpServerId: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.MCPAgentServerSelect>;

export const MCPAgentServerFindFirstSelectZodSchema = z.object({
    agent: z.boolean().optional(),
    agentId: z.boolean().optional(),
    mcpServer: z.boolean().optional(),
    mcpServerId: z.boolean().optional()
  }).strict();

export const MCPAgentServerFindFirstSchema: z.ZodType<Prisma.MCPAgentServerFindFirstArgs> = z.object({ select: MCPAgentServerFindFirstSelectSchema.optional(), include: z.lazy(() => MCPAgentServerIncludeObjectSchema.optional()), orderBy: z.union([MCPAgentServerOrderByWithRelationInputObjectSchema, MCPAgentServerOrderByWithRelationInputObjectSchema.array()]).optional(), where: MCPAgentServerWhereInputObjectSchema.optional(), cursor: MCPAgentServerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MCPAgentServerScalarFieldEnumSchema, MCPAgentServerScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.MCPAgentServerFindFirstArgs>;

export const MCPAgentServerFindFirstZodSchema = z.object({ select: MCPAgentServerFindFirstSelectSchema.optional(), include: z.lazy(() => MCPAgentServerIncludeObjectSchema.optional()), orderBy: z.union([MCPAgentServerOrderByWithRelationInputObjectSchema, MCPAgentServerOrderByWithRelationInputObjectSchema.array()]).optional(), where: MCPAgentServerWhereInputObjectSchema.optional(), cursor: MCPAgentServerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MCPAgentServerScalarFieldEnumSchema, MCPAgentServerScalarFieldEnumSchema.array()]).optional() }).strict();