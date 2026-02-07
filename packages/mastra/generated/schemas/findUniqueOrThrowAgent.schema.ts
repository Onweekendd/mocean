import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AgentSelectObjectSchema as AgentSelectObjectSchema } from './objects/AgentSelect.schema';
import { AgentIncludeObjectSchema as AgentIncludeObjectSchema } from './objects/AgentInclude.schema';
import { AgentWhereUniqueInputObjectSchema as AgentWhereUniqueInputObjectSchema } from './objects/AgentWhereUniqueInput.schema';

export const AgentFindUniqueOrThrowSchema: z.ZodType<Prisma.AgentFindUniqueOrThrowArgs> = z.object({ select: AgentSelectObjectSchema.optional(), include: AgentIncludeObjectSchema.optional(), where: AgentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AgentFindUniqueOrThrowArgs>;

export const AgentFindUniqueOrThrowZodSchema = z.object({ select: AgentSelectObjectSchema.optional(), include: AgentIncludeObjectSchema.optional(), where: AgentWhereUniqueInputObjectSchema }).strict();