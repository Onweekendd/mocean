import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPResourceOrderByWithRelationInputObjectSchema as MCPResourceOrderByWithRelationInputObjectSchema } from './objects/MCPResourceOrderByWithRelationInput.schema';
import { MCPResourceWhereInputObjectSchema as MCPResourceWhereInputObjectSchema } from './objects/MCPResourceWhereInput.schema';
import { MCPResourceWhereUniqueInputObjectSchema as MCPResourceWhereUniqueInputObjectSchema } from './objects/MCPResourceWhereUniqueInput.schema';
import { MCPResourceCountAggregateInputObjectSchema as MCPResourceCountAggregateInputObjectSchema } from './objects/MCPResourceCountAggregateInput.schema';

export const MCPResourceCountSchema: z.ZodType<Prisma.MCPResourceCountArgs> = z.object({ orderBy: z.union([MCPResourceOrderByWithRelationInputObjectSchema, MCPResourceOrderByWithRelationInputObjectSchema.array()]).optional(), where: MCPResourceWhereInputObjectSchema.optional(), cursor: MCPResourceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MCPResourceCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.MCPResourceCountArgs>;

export const MCPResourceCountZodSchema = z.object({ orderBy: z.union([MCPResourceOrderByWithRelationInputObjectSchema, MCPResourceOrderByWithRelationInputObjectSchema.array()]).optional(), where: MCPResourceWhereInputObjectSchema.optional(), cursor: MCPResourceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MCPResourceCountAggregateInputObjectSchema ]).optional() }).strict();