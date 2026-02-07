import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AgentSelectObjectSchema as AgentSelectObjectSchema } from './objects/AgentSelect.schema';
import { AgentIncludeObjectSchema as AgentIncludeObjectSchema } from './objects/AgentInclude.schema';
import { AgentCreateInputObjectSchema as AgentCreateInputObjectSchema } from './objects/AgentCreateInput.schema';
import { AgentUncheckedCreateInputObjectSchema as AgentUncheckedCreateInputObjectSchema } from './objects/AgentUncheckedCreateInput.schema';

export const AgentCreateOneSchema: z.ZodType<Prisma.AgentCreateArgs> = z.object({ select: AgentSelectObjectSchema.optional(), include: AgentIncludeObjectSchema.optional(), data: z.union([AgentCreateInputObjectSchema, AgentUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AgentCreateArgs>;

export const AgentCreateOneZodSchema = z.object({ select: AgentSelectObjectSchema.optional(), include: AgentIncludeObjectSchema.optional(), data: z.union([AgentCreateInputObjectSchema, AgentUncheckedCreateInputObjectSchema]) }).strict();