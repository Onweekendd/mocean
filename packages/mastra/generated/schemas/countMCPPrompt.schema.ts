import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPPromptOrderByWithRelationInputObjectSchema as MCPPromptOrderByWithRelationInputObjectSchema } from './objects/MCPPromptOrderByWithRelationInput.schema';
import { MCPPromptWhereInputObjectSchema as MCPPromptWhereInputObjectSchema } from './objects/MCPPromptWhereInput.schema';
import { MCPPromptWhereUniqueInputObjectSchema as MCPPromptWhereUniqueInputObjectSchema } from './objects/MCPPromptWhereUniqueInput.schema';
import { MCPPromptCountAggregateInputObjectSchema as MCPPromptCountAggregateInputObjectSchema } from './objects/MCPPromptCountAggregateInput.schema';

export const MCPPromptCountSchema: z.ZodType<Prisma.MCPPromptCountArgs> = z.object({ orderBy: z.union([MCPPromptOrderByWithRelationInputObjectSchema, MCPPromptOrderByWithRelationInputObjectSchema.array()]).optional(), where: MCPPromptWhereInputObjectSchema.optional(), cursor: MCPPromptWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MCPPromptCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.MCPPromptCountArgs>;

export const MCPPromptCountZodSchema = z.object({ orderBy: z.union([MCPPromptOrderByWithRelationInputObjectSchema, MCPPromptOrderByWithRelationInputObjectSchema.array()]).optional(), where: MCPPromptWhereInputObjectSchema.optional(), cursor: MCPPromptWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MCPPromptCountAggregateInputObjectSchema ]).optional() }).strict();