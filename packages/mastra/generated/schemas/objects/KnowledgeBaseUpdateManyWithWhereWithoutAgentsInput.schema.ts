import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseScalarWhereInputObjectSchema as KnowledgeBaseScalarWhereInputObjectSchema } from './KnowledgeBaseScalarWhereInput.schema';
import { KnowledgeBaseUpdateManyMutationInputObjectSchema as KnowledgeBaseUpdateManyMutationInputObjectSchema } from './KnowledgeBaseUpdateManyMutationInput.schema';
import { KnowledgeBaseUncheckedUpdateManyWithoutAgentsInputObjectSchema as KnowledgeBaseUncheckedUpdateManyWithoutAgentsInputObjectSchema } from './KnowledgeBaseUncheckedUpdateManyWithoutAgentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => KnowledgeBaseScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => KnowledgeBaseUpdateManyMutationInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedUpdateManyWithoutAgentsInputObjectSchema)])
}).strict();
export const KnowledgeBaseUpdateManyWithWhereWithoutAgentsInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseUpdateManyWithWhereWithoutAgentsInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseUpdateManyWithWhereWithoutAgentsInput>;
export const KnowledgeBaseUpdateManyWithWhereWithoutAgentsInputObjectZodSchema = makeSchema();
