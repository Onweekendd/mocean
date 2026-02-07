import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelUpdateWithoutKnowledgeBasesInputObjectSchema as ModelUpdateWithoutKnowledgeBasesInputObjectSchema } from './ModelUpdateWithoutKnowledgeBasesInput.schema';
import { ModelUncheckedUpdateWithoutKnowledgeBasesInputObjectSchema as ModelUncheckedUpdateWithoutKnowledgeBasesInputObjectSchema } from './ModelUncheckedUpdateWithoutKnowledgeBasesInput.schema';
import { ModelCreateWithoutKnowledgeBasesInputObjectSchema as ModelCreateWithoutKnowledgeBasesInputObjectSchema } from './ModelCreateWithoutKnowledgeBasesInput.schema';
import { ModelUncheckedCreateWithoutKnowledgeBasesInputObjectSchema as ModelUncheckedCreateWithoutKnowledgeBasesInputObjectSchema } from './ModelUncheckedCreateWithoutKnowledgeBasesInput.schema';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './ModelWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ModelUpdateWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => ModelUncheckedUpdateWithoutKnowledgeBasesInputObjectSchema)]),
  create: z.union([z.lazy(() => ModelCreateWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutKnowledgeBasesInputObjectSchema)]),
  where: z.lazy(() => ModelWhereInputObjectSchema).optional()
}).strict();
export const ModelUpsertWithoutKnowledgeBasesInputObjectSchema: z.ZodType<Prisma.ModelUpsertWithoutKnowledgeBasesInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpsertWithoutKnowledgeBasesInput>;
export const ModelUpsertWithoutKnowledgeBasesInputObjectZodSchema = makeSchema();
