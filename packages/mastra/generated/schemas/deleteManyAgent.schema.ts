import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AgentWhereInputObjectSchema as AgentWhereInputObjectSchema } from './objects/AgentWhereInput.schema';

export const AgentDeleteManySchema: z.ZodType<Prisma.AgentDeleteManyArgs> = z.object({ where: AgentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AgentDeleteManyArgs>;

export const AgentDeleteManyZodSchema = z.object({ where: AgentWhereInputObjectSchema.optional() }).strict();