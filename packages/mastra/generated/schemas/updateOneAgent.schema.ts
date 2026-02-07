import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AgentSelectObjectSchema as AgentSelectObjectSchema } from './objects/AgentSelect.schema';
import { AgentIncludeObjectSchema as AgentIncludeObjectSchema } from './objects/AgentInclude.schema';
import { AgentUpdateInputObjectSchema as AgentUpdateInputObjectSchema } from './objects/AgentUpdateInput.schema';
import { AgentUncheckedUpdateInputObjectSchema as AgentUncheckedUpdateInputObjectSchema } from './objects/AgentUncheckedUpdateInput.schema';
import { AgentWhereUniqueInputObjectSchema as AgentWhereUniqueInputObjectSchema } from './objects/AgentWhereUniqueInput.schema';

export const AgentUpdateOneSchema: z.ZodType<Prisma.AgentUpdateArgs> = z.object({ select: AgentSelectObjectSchema.optional(), include: AgentIncludeObjectSchema.optional(), data: z.union([AgentUpdateInputObjectSchema, AgentUncheckedUpdateInputObjectSchema]), where: AgentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AgentUpdateArgs>;

export const AgentUpdateOneZodSchema = z.object({ select: AgentSelectObjectSchema.optional(), include: AgentIncludeObjectSchema.optional(), data: z.union([AgentUpdateInputObjectSchema, AgentUncheckedUpdateInputObjectSchema]), where: AgentWhereUniqueInputObjectSchema }).strict();