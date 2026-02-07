import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPToolOrderByWithRelationInputObjectSchema as MCPToolOrderByWithRelationInputObjectSchema } from './objects/MCPToolOrderByWithRelationInput.schema';
import { MCPToolWhereInputObjectSchema as MCPToolWhereInputObjectSchema } from './objects/MCPToolWhereInput.schema';
import { MCPToolWhereUniqueInputObjectSchema as MCPToolWhereUniqueInputObjectSchema } from './objects/MCPToolWhereUniqueInput.schema';
import { MCPToolCountAggregateInputObjectSchema as MCPToolCountAggregateInputObjectSchema } from './objects/MCPToolCountAggregateInput.schema';
import { MCPToolMinAggregateInputObjectSchema as MCPToolMinAggregateInputObjectSchema } from './objects/MCPToolMinAggregateInput.schema';
import { MCPToolMaxAggregateInputObjectSchema as MCPToolMaxAggregateInputObjectSchema } from './objects/MCPToolMaxAggregateInput.schema';

export const MCPToolAggregateSchema: z.ZodType<Prisma.MCPToolAggregateArgs> = z.object({ orderBy: z.union([MCPToolOrderByWithRelationInputObjectSchema, MCPToolOrderByWithRelationInputObjectSchema.array()]).optional(), where: MCPToolWhereInputObjectSchema.optional(), cursor: MCPToolWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), MCPToolCountAggregateInputObjectSchema ]).optional(), _min: MCPToolMinAggregateInputObjectSchema.optional(), _max: MCPToolMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MCPToolAggregateArgs>;

export const MCPToolAggregateZodSchema = z.object({ orderBy: z.union([MCPToolOrderByWithRelationInputObjectSchema, MCPToolOrderByWithRelationInputObjectSchema.array()]).optional(), where: MCPToolWhereInputObjectSchema.optional(), cursor: MCPToolWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), MCPToolCountAggregateInputObjectSchema ]).optional(), _min: MCPToolMinAggregateInputObjectSchema.optional(), _max: MCPToolMaxAggregateInputObjectSchema.optional() }).strict();