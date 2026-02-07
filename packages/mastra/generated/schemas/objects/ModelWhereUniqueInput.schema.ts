import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const ModelWhereUniqueInputObjectSchema: z.ZodType<Prisma.ModelWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelWhereUniqueInput>;
export const ModelWhereUniqueInputObjectZodSchema = makeSchema();
