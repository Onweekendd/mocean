import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AgentUpdateManyMutationInputObjectSchema as AgentUpdateManyMutationInputObjectSchema } from './objects/AgentUpdateManyMutationInput.schema';
import { AgentWhereInputObjectSchema as AgentWhereInputObjectSchema } from './objects/AgentWhereInput.schema';

export const AgentUpdateManySchema: z.ZodType<Prisma.AgentUpdateManyArgs> = z.object({ data: AgentUpdateManyMutationInputObjectSchema, where: AgentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AgentUpdateManyArgs>;

export const AgentUpdateManyZodSchema = z.object({ data: AgentUpdateManyMutationInputObjectSchema, where: AgentWhereInputObjectSchema.optional() }).strict();