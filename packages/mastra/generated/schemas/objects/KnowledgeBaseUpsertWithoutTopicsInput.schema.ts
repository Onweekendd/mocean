import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseUpdateWithoutTopicsInputObjectSchema as KnowledgeBaseUpdateWithoutTopicsInputObjectSchema } from './KnowledgeBaseUpdateWithoutTopicsInput.schema';
import { KnowledgeBaseUncheckedUpdateWithoutTopicsInputObjectSchema as KnowledgeBaseUncheckedUpdateWithoutTopicsInputObjectSchema } from './KnowledgeBaseUncheckedUpdateWithoutTopicsInput.schema';
import { KnowledgeBaseCreateWithoutTopicsInputObjectSchema as KnowledgeBaseCreateWithoutTopicsInputObjectSchema } from './KnowledgeBaseCreateWithoutTopicsInput.schema';
import { KnowledgeBaseUncheckedCreateWithoutTopicsInputObjectSchema as KnowledgeBaseUncheckedCreateWithoutTopicsInputObjectSchema } from './KnowledgeBaseUncheckedCreateWithoutTopicsInput.schema';
import { KnowledgeBaseWhereInputObjectSchema as KnowledgeBaseWhereInputObjectSchema } from './KnowledgeBaseWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => KnowledgeBaseUpdateWithoutTopicsInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedUpdateWithoutTopicsInputObjectSchema)]),
  create: z.union([z.lazy(() => KnowledgeBaseCreateWithoutTopicsInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedCreateWithoutTopicsInputObjectSchema)]),
  where: z.lazy(() => KnowledgeBaseWhereInputObjectSchema).optional()
}).strict();
export const KnowledgeBaseUpsertWithoutTopicsInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseUpsertWithoutTopicsInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseUpsertWithoutTopicsInput>;
export const KnowledgeBaseUpsertWithoutTopicsInputObjectZodSchema = makeSchema();
