import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPToolOrderByWithRelationInputObjectSchema as MCPToolOrderByWithRelationInputObjectSchema } from './objects/MCPToolOrderByWithRelationInput.schema';
import { MCPToolWhereInputObjectSchema as MCPToolWhereInputObjectSchema } from './objects/MCPToolWhereInput.schema';
import { MCPToolWhereUniqueInputObjectSchema as MCPToolWhereUniqueInputObjectSchema } from './objects/MCPToolWhereUniqueInput.schema';
import { MCPToolCountAggregateInputObjectSchema as MCPToolCountAggregateInputObjectSchema } from './objects/MCPToolCountAggregateInput.schema';

export const MCPToolCountSchema: z.ZodType<Prisma.MCPToolCountArgs> = z.object({ orderBy: z.union([MCPToolOrderByWithRelationInputObjectSchema, MCPToolOrderByWithRelationInputObjectSchema.array()]).optional(), where: MCPToolWhereInputObjectSchema.optional(), cursor: MCPToolWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MCPToolCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.MCPToolCountArgs>;

export const MCPToolCountZodSchema = z.object({ orderBy: z.union([MCPToolOrderByWithRelationInputObjectSchema, MCPToolOrderByWithRelationInputObjectSchema.array()]).optional(), where: MCPToolWhereInputObjectSchema.optional(), cursor: MCPToolWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MCPToolCountAggregateInputObjectSchema ]).optional() }).strict();