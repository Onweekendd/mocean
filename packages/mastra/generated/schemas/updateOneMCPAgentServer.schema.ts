import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPAgentServerSelectObjectSchema as MCPAgentServerSelectObjectSchema } from './objects/MCPAgentServerSelect.schema';
import { MCPAgentServerIncludeObjectSchema as MCPAgentServerIncludeObjectSchema } from './objects/MCPAgentServerInclude.schema';
import { MCPAgentServerUpdateInputObjectSchema as MCPAgentServerUpdateInputObjectSchema } from './objects/MCPAgentServerUpdateInput.schema';
import { MCPAgentServerUncheckedUpdateInputObjectSchema as MCPAgentServerUncheckedUpdateInputObjectSchema } from './objects/MCPAgentServerUncheckedUpdateInput.schema';
import { MCPAgentServerWhereUniqueInputObjectSchema as MCPAgentServerWhereUniqueInputObjectSchema } from './objects/MCPAgentServerWhereUniqueInput.schema';

export const MCPAgentServerUpdateOneSchema: z.ZodType<Prisma.MCPAgentServerUpdateArgs> = z.object({ select: MCPAgentServerSelectObjectSchema.optional(), include: MCPAgentServerIncludeObjectSchema.optional(), data: z.union([MCPAgentServerUpdateInputObjectSchema, MCPAgentServerUncheckedUpdateInputObjectSchema]), where: MCPAgentServerWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MCPAgentServerUpdateArgs>;

export const MCPAgentServerUpdateOneZodSchema = z.object({ select: MCPAgentServerSelectObjectSchema.optional(), include: MCPAgentServerIncludeObjectSchema.optional(), data: z.union([MCPAgentServerUpdateInputObjectSchema, MCPAgentServerUncheckedUpdateInputObjectSchema]), where: MCPAgentServerWhereUniqueInputObjectSchema }).strict();