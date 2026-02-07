import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeItemScalarWhereInputObjectSchema as KnowledgeItemScalarWhereInputObjectSchema } from './KnowledgeItemScalarWhereInput.schema';
import { KnowledgeItemUpdateManyMutationInputObjectSchema as KnowledgeItemUpdateManyMutationInputObjectSchema } from './KnowledgeItemUpdateManyMutationInput.schema';
import { KnowledgeItemUncheckedUpdateManyWithoutKnowledgeBaseInputObjectSchema as KnowledgeItemUncheckedUpdateManyWithoutKnowledgeBaseInputObjectSchema } from './KnowledgeItemUncheckedUpdateManyWithoutKnowledgeBaseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => KnowledgeItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => KnowledgeItemUpdateManyMutationInputObjectSchema), z.lazy(() => KnowledgeItemUncheckedUpdateManyWithoutKnowledgeBaseInputObjectSchema)])
}).strict();
export const KnowledgeItemUpdateManyWithWhereWithoutKnowledgeBaseInputObjectSchema: z.ZodType<Prisma.KnowledgeItemUpdateManyWithWhereWithoutKnowledgeBaseInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeItemUpdateManyWithWhereWithoutKnowledgeBaseInput>;
export const KnowledgeItemUpdateManyWithWhereWithoutKnowledgeBaseInputObjectZodSchema = makeSchema();
