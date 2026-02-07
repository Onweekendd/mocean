import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPConfigSampleIncludeObjectSchema as MCPConfigSampleIncludeObjectSchema } from './objects/MCPConfigSampleInclude.schema';
import { MCPConfigSampleOrderByWithRelationInputObjectSchema as MCPConfigSampleOrderByWithRelationInputObjectSchema } from './objects/MCPConfigSampleOrderByWithRelationInput.schema';
import { MCPConfigSampleWhereInputObjectSchema as MCPConfigSampleWhereInputObjectSchema } from './objects/MCPConfigSampleWhereInput.schema';
import { MCPConfigSampleWhereUniqueInputObjectSchema as MCPConfigSampleWhereUniqueInputObjectSchema } from './objects/MCPConfigSampleWhereUniqueInput.schema';
import { MCPConfigSampleScalarFieldEnumSchema } from './enums/MCPConfigSampleScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MCPConfigSampleFindManySelectSchema: z.ZodType<Prisma.MCPConfigSampleSelect> = z.object({
    id: z.boolean().optional(),
    command: z.boolean().optional(),
    argsJson: z.boolean().optional(),
    env: z.boolean().optional(),
    server: z.boolean().optional(),
    serverId: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.MCPConfigSampleSelect>;

export const MCPConfigSampleFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    command: z.boolean().optional(),
    argsJson: z.boolean().optional(),
    env: z.boolean().optional(),
    server: z.boolean().optional(),
    serverId: z.boolean().optional()
  }).strict();

export const MCPConfigSampleFindManySchema: z.ZodType<Prisma.MCPConfigSampleFindManyArgs> = z.object({ select: MCPConfigSampleFindManySelectSchema.optional(), include: z.lazy(() => MCPConfigSampleIncludeObjectSchema.optional()), orderBy: z.union([MCPConfigSampleOrderByWithRelationInputObjectSchema, MCPConfigSampleOrderByWithRelationInputObjectSchema.array()]).optional(), where: MCPConfigSampleWhereInputObjectSchema.optional(), cursor: MCPConfigSampleWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MCPConfigSampleScalarFieldEnumSchema, MCPConfigSampleScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.MCPConfigSampleFindManyArgs>;

export const MCPConfigSampleFindManyZodSchema = z.object({ select: MCPConfigSampleFindManySelectSchema.optional(), include: z.lazy(() => MCPConfigSampleIncludeObjectSchema.optional()), orderBy: z.union([MCPConfigSampleOrderByWithRelationInputObjectSchema, MCPConfigSampleOrderByWithRelationInputObjectSchema.array()]).optional(), where: MCPConfigSampleWhereInputObjectSchema.optional(), cursor: MCPConfigSampleWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MCPConfigSampleScalarFieldEnumSchema, MCPConfigSampleScalarFieldEnumSchema.array()]).optional() }).strict();