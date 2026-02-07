import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseScalarWhereInputObjectSchema as KnowledgeBaseScalarWhereInputObjectSchema } from './KnowledgeBaseScalarWhereInput.schema';
import { KnowledgeBaseUpdateManyMutationInputObjectSchema as KnowledgeBaseUpdateManyMutationInputObjectSchema } from './KnowledgeBaseUpdateManyMutationInput.schema';
import { KnowledgeBaseUncheckedUpdateManyWithoutAssistantsInputObjectSchema as KnowledgeBaseUncheckedUpdateManyWithoutAssistantsInputObjectSchema } from './KnowledgeBaseUncheckedUpdateManyWithoutAssistantsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => KnowledgeBaseScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => KnowledgeBaseUpdateManyMutationInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedUpdateManyWithoutAssistantsInputObjectSchema)])
}).strict();
export const KnowledgeBaseUpdateManyWithWhereWithoutAssistantsInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseUpdateManyWithWhereWithoutAssistantsInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseUpdateManyWithWhereWithoutAssistantsInput>;
export const KnowledgeBaseUpdateManyWithWhereWithoutAssistantsInputObjectZodSchema = makeSchema();
