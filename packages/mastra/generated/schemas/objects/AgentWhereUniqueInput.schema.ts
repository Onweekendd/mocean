import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const AgentWhereUniqueInputObjectSchema: z.ZodType<Prisma.AgentWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentWhereUniqueInput>;
export const AgentWhereUniqueInputObjectZodSchema = makeSchema();
