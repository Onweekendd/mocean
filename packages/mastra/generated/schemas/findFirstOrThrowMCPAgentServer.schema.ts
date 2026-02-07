import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPAgentServerIncludeObjectSchema as MCPAgentServerIncludeObjectSchema } from './objects/MCPAgentServerInclude.schema';
import { MCPAgentServerOrderByWithRelationInputObjectSchema as MCPAgentServerOrderByWithRelationInputObjectSchema } from './objects/MCPAgentServerOrderByWithRelationInput.schema';
import { MCPAgentServerWhereInputObjectSchema as MCPAgentServerWhereInputObjectSchema } from './objects/MCPAgentServerWhereInput.schema';
import { MCPAgentServerWhereUniqueInputObjectSchema as MCPAgentServerWhereUniqueInputObjectSchema } from './objects/MCPAgentServerWhereUniqueInput.schema';
import { MCPAgentServerScalarFieldEnumSchema } from './enums/MCPAgentServerScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MCPAgentServerFindFirstOrThrowSelectSchema: z.ZodType<Prisma.MCPAgentServerSelect> = z.object({
    agent: z.boolean().optional(),
    agentId: z.boolean().optional(),
    mcpServer: z.boolean().optional(),
    mcpServerId: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.MCPAgentServerSelect>;

export const MCPAgentServerFindFirstOrThrowSelectZodSchema = z.object({
    agent: z.boolean().optional(),
    agentId: z.boolean().optional(),
    mcpServer: z.boolean().optional(),
    mcpServerId: z.boolean().optional()
  }).strict();

export const MCPAgentServerFindFirstOrThrowSchema: z.ZodType<Prisma.MCPAgentServerFindFirstOrThrowArgs> = z.object({ select: MCPAgentServerFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => MCPAgentServerIncludeObjectSchema.optional()), orderBy: z.union([MCPAgentServerOrderByWithRelationInputObjectSchema, MCPAgentServerOrderByWithRelationInputObjectSchema.array()]).optional(), where: MCPAgentServerWhereInputObjectSchema.optional(), cursor: MCPAgentServerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MCPAgentServerScalarFieldEnumSchema, MCPAgentServerScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.MCPAgentServerFindFirstOrThrowArgs>;

export const MCPAgentServerFindFirstOrThrowZodSchema = z.object({ select: MCPAgentServerFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => MCPAgentServerIncludeObjectSchema.optional()), orderBy: z.union([MCPAgentServerOrderByWithRelationInputObjectSchema, MCPAgentServerOrderByWithRelationInputObjectSchema.array()]).optional(), where: MCPAgentServerWhereInputObjectSchema.optional(), cursor: MCPAgentServerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MCPAgentServerScalarFieldEnumSchema, MCPAgentServerScalarFieldEnumSchema.array()]).optional() }).strict();