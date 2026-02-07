import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPServerOrderByWithRelationInputObjectSchema as MCPServerOrderByWithRelationInputObjectSchema } from './objects/MCPServerOrderByWithRelationInput.schema';
import { MCPServerWhereInputObjectSchema as MCPServerWhereInputObjectSchema } from './objects/MCPServerWhereInput.schema';
import { MCPServerWhereUniqueInputObjectSchema as MCPServerWhereUniqueInputObjectSchema } from './objects/MCPServerWhereUniqueInput.schema';
import { MCPServerCountAggregateInputObjectSchema as MCPServerCountAggregateInputObjectSchema } from './objects/MCPServerCountAggregateInput.schema';

export const MCPServerCountSchema: z.ZodType<Prisma.MCPServerCountArgs> = z.object({ orderBy: z.union([MCPServerOrderByWithRelationInputObjectSchema, MCPServerOrderByWithRelationInputObjectSchema.array()]).optional(), where: MCPServerWhereInputObjectSchema.optional(), cursor: MCPServerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MCPServerCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.MCPServerCountArgs>;

export const MCPServerCountZodSchema = z.object({ orderBy: z.union([MCPServerOrderByWithRelationInputObjectSchema, MCPServerOrderByWithRelationInputObjectSchema.array()]).optional(), where: MCPServerWhereInputObjectSchema.optional(), cursor: MCPServerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MCPServerCountAggregateInputObjectSchema ]).optional() }).strict();