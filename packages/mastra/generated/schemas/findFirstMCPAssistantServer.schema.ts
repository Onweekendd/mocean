import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPAssistantServerIncludeObjectSchema as MCPAssistantServerIncludeObjectSchema } from './objects/MCPAssistantServerInclude.schema';
import { MCPAssistantServerOrderByWithRelationInputObjectSchema as MCPAssistantServerOrderByWithRelationInputObjectSchema } from './objects/MCPAssistantServerOrderByWithRelationInput.schema';
import { MCPAssistantServerWhereInputObjectSchema as MCPAssistantServerWhereInputObjectSchema } from './objects/MCPAssistantServerWhereInput.schema';
import { MCPAssistantServerWhereUniqueInputObjectSchema as MCPAssistantServerWhereUniqueInputObjectSchema } from './objects/MCPAssistantServerWhereUniqueInput.schema';
import { MCPAssistantServerScalarFieldEnumSchema } from './enums/MCPAssistantServerScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MCPAssistantServerFindFirstSelectSchema: z.ZodType<Prisma.MCPAssistantServerSelect> = z.object({
    assistant: z.boolean().optional(),
    assistantId: z.boolean().optional(),
    mcpServer: z.boolean().optional(),
    mcpServerId: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.MCPAssistantServerSelect>;

export const MCPAssistantServerFindFirstSelectZodSchema = z.object({
    assistant: z.boolean().optional(),
    assistantId: z.boolean().optional(),
    mcpServer: z.boolean().optional(),
    mcpServerId: z.boolean().optional()
  }).strict();

export const MCPAssistantServerFindFirstSchema: z.ZodType<Prisma.MCPAssistantServerFindFirstArgs> = z.object({ select: MCPAssistantServerFindFirstSelectSchema.optional(), include: z.lazy(() => MCPAssistantServerIncludeObjectSchema.optional()), orderBy: z.union([MCPAssistantServerOrderByWithRelationInputObjectSchema, MCPAssistantServerOrderByWithRelationInputObjectSchema.array()]).optional(), where: MCPAssistantServerWhereInputObjectSchema.optional(), cursor: MCPAssistantServerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MCPAssistantServerScalarFieldEnumSchema, MCPAssistantServerScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.MCPAssistantServerFindFirstArgs>;

export const MCPAssistantServerFindFirstZodSchema = z.object({ select: MCPAssistantServerFindFirstSelectSchema.optional(), include: z.lazy(() => MCPAssistantServerIncludeObjectSchema.optional()), orderBy: z.union([MCPAssistantServerOrderByWithRelationInputObjectSchema, MCPAssistantServerOrderByWithRelationInputObjectSchema.array()]).optional(), where: MCPAssistantServerWhereInputObjectSchema.optional(), cursor: MCPAssistantServerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MCPAssistantServerScalarFieldEnumSchema, MCPAssistantServerScalarFieldEnumSchema.array()]).optional() }).strict();