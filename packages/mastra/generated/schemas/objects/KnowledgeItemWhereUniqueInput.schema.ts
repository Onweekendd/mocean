import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const KnowledgeItemWhereUniqueInputObjectSchema: z.ZodType<Prisma.KnowledgeItemWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeItemWhereUniqueInput>;
export const KnowledgeItemWhereUniqueInputObjectZodSchema = makeSchema();
