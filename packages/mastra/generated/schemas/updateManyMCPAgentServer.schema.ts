import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPAgentServerUpdateManyMutationInputObjectSchema as MCPAgentServerUpdateManyMutationInputObjectSchema } from './objects/MCPAgentServerUpdateManyMutationInput.schema';
import { MCPAgentServerWhereInputObjectSchema as MCPAgentServerWhereInputObjectSchema } from './objects/MCPAgentServerWhereInput.schema';

export const MCPAgentServerUpdateManySchema: z.ZodType<Prisma.MCPAgentServerUpdateManyArgs> = z.object({ data: MCPAgentServerUpdateManyMutationInputObjectSchema, where: MCPAgentServerWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MCPAgentServerUpdateManyArgs>;

export const MCPAgentServerUpdateManyZodSchema = z.object({ data: MCPAgentServerUpdateManyMutationInputObjectSchema, where: MCPAgentServerWhereInputObjectSchema.optional() }).strict();