import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const KnowledgeBaseWhereUniqueInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseWhereUniqueInput>;
export const KnowledgeBaseWhereUniqueInputObjectZodSchema = makeSchema();
