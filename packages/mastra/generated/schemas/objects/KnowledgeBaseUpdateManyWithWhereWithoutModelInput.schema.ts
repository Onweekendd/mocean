import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseScalarWhereInputObjectSchema as KnowledgeBaseScalarWhereInputObjectSchema } from './KnowledgeBaseScalarWhereInput.schema';
import { KnowledgeBaseUpdateManyMutationInputObjectSchema as KnowledgeBaseUpdateManyMutationInputObjectSchema } from './KnowledgeBaseUpdateManyMutationInput.schema';
import { KnowledgeBaseUncheckedUpdateManyWithoutModelInputObjectSchema as KnowledgeBaseUncheckedUpdateManyWithoutModelInputObjectSchema } from './KnowledgeBaseUncheckedUpdateManyWithoutModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => KnowledgeBaseScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => KnowledgeBaseUpdateManyMutationInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedUpdateManyWithoutModelInputObjectSchema)])
}).strict();
export const KnowledgeBaseUpdateManyWithWhereWithoutModelInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseUpdateManyWithWhereWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseUpdateManyWithWhereWithoutModelInput>;
export const KnowledgeBaseUpdateManyWithWhereWithoutModelInputObjectZodSchema = makeSchema();
