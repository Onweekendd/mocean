import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const AssistantWhereUniqueInputObjectSchema: z.ZodType<Prisma.AssistantWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantWhereUniqueInput>;
export const AssistantWhereUniqueInputObjectZodSchema = makeSchema();
