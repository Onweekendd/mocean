import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPPromptOrderByWithRelationInputObjectSchema as MCPPromptOrderByWithRelationInputObjectSchema } from './objects/MCPPromptOrderByWithRelationInput.schema';
import { MCPPromptWhereInputObjectSchema as MCPPromptWhereInputObjectSchema } from './objects/MCPPromptWhereInput.schema';
import { MCPPromptWhereUniqueInputObjectSchema as MCPPromptWhereUniqueInputObjectSchema } from './objects/MCPPromptWhereUniqueInput.schema';
import { MCPPromptCountAggregateInputObjectSchema as MCPPromptCountAggregateInputObjectSchema } from './objects/MCPPromptCountAggregateInput.schema';
import { MCPPromptMinAggregateInputObjectSchema as MCPPromptMinAggregateInputObjectSchema } from './objects/MCPPromptMinAggregateInput.schema';
import { MCPPromptMaxAggregateInputObjectSchema as MCPPromptMaxAggregateInputObjectSchema } from './objects/MCPPromptMaxAggregateInput.schema';

export const MCPPromptAggregateSchema: z.ZodType<Prisma.MCPPromptAggregateArgs> = z.object({ orderBy: z.union([MCPPromptOrderByWithRelationInputObjectSchema, MCPPromptOrderByWithRelationInputObjectSchema.array()]).optional(), where: MCPPromptWhereInputObjectSchema.optional(), cursor: MCPPromptWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), MCPPromptCountAggregateInputObjectSchema ]).optional(), _min: MCPPromptMinAggregateInputObjectSchema.optional(), _max: MCPPromptMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MCPPromptAggregateArgs>;

export const MCPPromptAggregateZodSchema = z.object({ orderBy: z.union([MCPPromptOrderByWithRelationInputObjectSchema, MCPPromptOrderByWithRelationInputObjectSchema.array()]).optional(), where: MCPPromptWhereInputObjectSchema.optional(), cursor: MCPPromptWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), MCPPromptCountAggregateInputObjectSchema ]).optional(), _min: MCPPromptMinAggregateInputObjectSchema.optional(), _max: MCPPromptMaxAggregateInputObjectSchema.optional() }).strict();