import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPAgentServerWhereInputObjectSchema as MCPAgentServerWhereInputObjectSchema } from './objects/MCPAgentServerWhereInput.schema';

export const MCPAgentServerDeleteManySchema: z.ZodType<Prisma.MCPAgentServerDeleteManyArgs> = z.object({ where: MCPAgentServerWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MCPAgentServerDeleteManyArgs>;

export const MCPAgentServerDeleteManyZodSchema = z.object({ where: MCPAgentServerWhereInputObjectSchema.optional() }).strict();