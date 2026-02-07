import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AgentSelectObjectSchema as AgentSelectObjectSchema } from './objects/AgentSelect.schema';
import { AgentIncludeObjectSchema as AgentIncludeObjectSchema } from './objects/AgentInclude.schema';
import { AgentWhereUniqueInputObjectSchema as AgentWhereUniqueInputObjectSchema } from './objects/AgentWhereUniqueInput.schema';
import { AgentCreateInputObjectSchema as AgentCreateInputObjectSchema } from './objects/AgentCreateInput.schema';
import { AgentUncheckedCreateInputObjectSchema as AgentUncheckedCreateInputObjectSchema } from './objects/AgentUncheckedCreateInput.schema';
import { AgentUpdateInputObjectSchema as AgentUpdateInputObjectSchema } from './objects/AgentUpdateInput.schema';
import { AgentUncheckedUpdateInputObjectSchema as AgentUncheckedUpdateInputObjectSchema } from './objects/AgentUncheckedUpdateInput.schema';

export const AgentUpsertOneSchema: z.ZodType<Prisma.AgentUpsertArgs> = z.object({ select: AgentSelectObjectSchema.optional(), include: AgentIncludeObjectSchema.optional(), where: AgentWhereUniqueInputObjectSchema, create: z.union([ AgentCreateInputObjectSchema, AgentUncheckedCreateInputObjectSchema ]), update: z.union([ AgentUpdateInputObjectSchema, AgentUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AgentUpsertArgs>;

export const AgentUpsertOneZodSchema = z.object({ select: AgentSelectObjectSchema.optional(), include: AgentIncludeObjectSchema.optional(), where: AgentWhereUniqueInputObjectSchema, create: z.union([ AgentCreateInputObjectSchema, AgentUncheckedCreateInputObjectSchema ]), update: z.union([ AgentUpdateInputObjectSchema, AgentUncheckedUpdateInputObjectSchema ]) }).strict();