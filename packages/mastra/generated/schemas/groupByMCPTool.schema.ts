import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPToolWhereInputObjectSchema as MCPToolWhereInputObjectSchema } from './objects/MCPToolWhereInput.schema';
import { MCPToolOrderByWithAggregationInputObjectSchema as MCPToolOrderByWithAggregationInputObjectSchema } from './objects/MCPToolOrderByWithAggregationInput.schema';
import { MCPToolScalarWhereWithAggregatesInputObjectSchema as MCPToolScalarWhereWithAggregatesInputObjectSchema } from './objects/MCPToolScalarWhereWithAggregatesInput.schema';
import { MCPToolScalarFieldEnumSchema } from './enums/MCPToolScalarFieldEnum.schema';
import { MCPToolCountAggregateInputObjectSchema as MCPToolCountAggregateInputObjectSchema } from './objects/MCPToolCountAggregateInput.schema';
import { MCPToolMinAggregateInputObjectSchema as MCPToolMinAggregateInputObjectSchema } from './objects/MCPToolMinAggregateInput.schema';
import { MCPToolMaxAggregateInputObjectSchema as MCPToolMaxAggregateInputObjectSchema } from './objects/MCPToolMaxAggregateInput.schema';

export const MCPToolGroupBySchema: z.ZodType<Prisma.MCPToolGroupByArgs> = z.object({ where: MCPToolWhereInputObjectSchema.optional(), orderBy: z.union([MCPToolOrderByWithAggregationInputObjectSchema, MCPToolOrderByWithAggregationInputObjectSchema.array()]).optional(), having: MCPToolScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(MCPToolScalarFieldEnumSchema), _count: z.union([ z.literal(true), MCPToolCountAggregateInputObjectSchema ]).optional(), _min: MCPToolMinAggregateInputObjectSchema.optional(), _max: MCPToolMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MCPToolGroupByArgs>;

export const MCPToolGroupByZodSchema = z.object({ where: MCPToolWhereInputObjectSchema.optional(), orderBy: z.union([MCPToolOrderByWithAggregationInputObjectSchema, MCPToolOrderByWithAggregationInputObjectSchema.array()]).optional(), having: MCPToolScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(MCPToolScalarFieldEnumSchema), _count: z.union([ z.literal(true), MCPToolCountAggregateInputObjectSchema ]).optional(), _min: MCPToolMinAggregateInputObjectSchema.optional(), _max: MCPToolMaxAggregateInputObjectSchema.optional() }).strict();