import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPAgentServerOrderByWithRelationInputObjectSchema as MCPAgentServerOrderByWithRelationInputObjectSchema } from './objects/MCPAgentServerOrderByWithRelationInput.schema';
import { MCPAgentServerWhereInputObjectSchema as MCPAgentServerWhereInputObjectSchema } from './objects/MCPAgentServerWhereInput.schema';
import { MCPAgentServerWhereUniqueInputObjectSchema as MCPAgentServerWhereUniqueInputObjectSchema } from './objects/MCPAgentServerWhereUniqueInput.schema';
import { MCPAgentServerCountAggregateInputObjectSchema as MCPAgentServerCountAggregateInputObjectSchema } from './objects/MCPAgentServerCountAggregateInput.schema';

export const MCPAgentServerCountSchema: z.ZodType<Prisma.MCPAgentServerCountArgs> = z.object({ orderBy: z.union([MCPAgentServerOrderByWithRelationInputObjectSchema, MCPAgentServerOrderByWithRelationInputObjectSchema.array()]).optional(), where: MCPAgentServerWhereInputObjectSchema.optional(), cursor: MCPAgentServerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MCPAgentServerCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.MCPAgentServerCountArgs>;

export const MCPAgentServerCountZodSchema = z.object({ orderBy: z.union([MCPAgentServerOrderByWithRelationInputObjectSchema, MCPAgentServerOrderByWithRelationInputObjectSchema.array()]).optional(), where: MCPAgentServerWhereInputObjectSchema.optional(), cursor: MCPAgentServerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MCPAgentServerCountAggregateInputObjectSchema ]).optional() }).strict();