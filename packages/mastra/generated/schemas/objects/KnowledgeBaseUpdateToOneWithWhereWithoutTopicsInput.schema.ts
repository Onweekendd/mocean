import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseWhereInputObjectSchema as KnowledgeBaseWhereInputObjectSchema } from './KnowledgeBaseWhereInput.schema';
import { KnowledgeBaseUpdateWithoutTopicsInputObjectSchema as KnowledgeBaseUpdateWithoutTopicsInputObjectSchema } from './KnowledgeBaseUpdateWithoutTopicsInput.schema';
import { KnowledgeBaseUncheckedUpdateWithoutTopicsInputObjectSchema as KnowledgeBaseUncheckedUpdateWithoutTopicsInputObjectSchema } from './KnowledgeBaseUncheckedUpdateWithoutTopicsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => KnowledgeBaseWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => KnowledgeBaseUpdateWithoutTopicsInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedUpdateWithoutTopicsInputObjectSchema)])
}).strict();
export const KnowledgeBaseUpdateToOneWithWhereWithoutTopicsInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseUpdateToOneWithWhereWithoutTopicsInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseUpdateToOneWithWhereWithoutTopicsInput>;
export const KnowledgeBaseUpdateToOneWithWhereWithoutTopicsInputObjectZodSchema = makeSchema();
