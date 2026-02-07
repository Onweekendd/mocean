import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPAgentServerSelectObjectSchema as MCPAgentServerSelectObjectSchema } from './objects/MCPAgentServerSelect.schema';
import { MCPAgentServerIncludeObjectSchema as MCPAgentServerIncludeObjectSchema } from './objects/MCPAgentServerInclude.schema';
import { MCPAgentServerWhereUniqueInputObjectSchema as MCPAgentServerWhereUniqueInputObjectSchema } from './objects/MCPAgentServerWhereUniqueInput.schema';
import { MCPAgentServerCreateInputObjectSchema as MCPAgentServerCreateInputObjectSchema } from './objects/MCPAgentServerCreateInput.schema';
import { MCPAgentServerUncheckedCreateInputObjectSchema as MCPAgentServerUncheckedCreateInputObjectSchema } from './objects/MCPAgentServerUncheckedCreateInput.schema';
import { MCPAgentServerUpdateInputObjectSchema as MCPAgentServerUpdateInputObjectSchema } from './objects/MCPAgentServerUpdateInput.schema';
import { MCPAgentServerUncheckedUpdateInputObjectSchema as MCPAgentServerUncheckedUpdateInputObjectSchema } from './objects/MCPAgentServerUncheckedUpdateInput.schema';

export const MCPAgentServerUpsertOneSchema: z.ZodType<Prisma.MCPAgentServerUpsertArgs> = z.object({ select: MCPAgentServerSelectObjectSchema.optional(), include: MCPAgentServerIncludeObjectSchema.optional(), where: MCPAgentServerWhereUniqueInputObjectSchema, create: z.union([ MCPAgentServerCreateInputObjectSchema, MCPAgentServerUncheckedCreateInputObjectSchema ]), update: z.union([ MCPAgentServerUpdateInputObjectSchema, MCPAgentServerUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.MCPAgentServerUpsertArgs>;

export const MCPAgentServerUpsertOneZodSchema = z.object({ select: MCPAgentServerSelectObjectSchema.optional(), include: MCPAgentServerIncludeObjectSchema.optional(), where: MCPAgentServerWhereUniqueInputObjectSchema, create: z.union([ MCPAgentServerCreateInputObjectSchema, MCPAgentServerUncheckedCreateInputObjectSchema ]), update: z.union([ MCPAgentServerUpdateInputObjectSchema, MCPAgentServerUncheckedUpdateInputObjectSchema ]) }).strict();