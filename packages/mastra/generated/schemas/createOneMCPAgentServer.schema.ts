import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { MCPAgentServerSelectObjectSchema as MCPAgentServerSelectObjectSchema } from './objects/MCPAgentServerSelect.schema';
import { MCPAgentServerIncludeObjectSchema as MCPAgentServerIncludeObjectSchema } from './objects/MCPAgentServerInclude.schema';
import { MCPAgentServerCreateInputObjectSchema as MCPAgentServerCreateInputObjectSchema } from './objects/MCPAgentServerCreateInput.schema';
import { MCPAgentServerUncheckedCreateInputObjectSchema as MCPAgentServerUncheckedCreateInputObjectSchema } from './objects/MCPAgentServerUncheckedCreateInput.schema';

export const MCPAgentServerCreateOneSchema: z.ZodType<Prisma.MCPAgentServerCreateArgs> = z.object({ select: MCPAgentServerSelectObjectSchema.optional(), include: MCPAgentServerIncludeObjectSchema.optional(), data: z.union([MCPAgentServerCreateInputObjectSchema, MCPAgentServerUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.MCPAgentServerCreateArgs>;

export const MCPAgentServerCreateOneZodSchema = z.object({ select: MCPAgentServerSelectObjectSchema.optional(), include: MCPAgentServerIncludeObjectSchema.optional(), data: z.union([MCPAgentServerCreateInputObjectSchema, MCPAgentServerUncheckedCreateInputObjectSchema]) }).strict();