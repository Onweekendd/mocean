import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPAgentServerSelectObjectSchema as MCPAgentServerSelectObjectSchema } from './objects/MCPAgentServerSelect.schema';
import { MCPAgentServerIncludeObjectSchema as MCPAgentServerIncludeObjectSchema } from './objects/MCPAgentServerInclude.schema';
import { MCPAgentServerWhereUniqueInputObjectSchema as MCPAgentServerWhereUniqueInputObjectSchema } from './objects/MCPAgentServerWhereUniqueInput.schema';

export const MCPAgentServerFindUniqueSchema: z.ZodType<Prisma.MCPAgentServerFindUniqueArgs> = z.object({ select: MCPAgentServerSelectObjectSchema.optional(), include: MCPAgentServerIncludeObjectSchema.optional(), where: MCPAgentServerWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MCPAgentServerFindUniqueArgs>;

export const MCPAgentServerFindUniqueZodSchema = z.object({ select: MCPAgentServerSelectObjectSchema.optional(), include: MCPAgentServerIncludeObjectSchema.optional(), where: MCPAgentServerWhereUniqueInputObjectSchema }).strict();