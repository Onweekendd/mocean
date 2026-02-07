import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './ModelWhereInput.schema';
import { ModelUpdateWithoutKnowledgeBasesInputObjectSchema as ModelUpdateWithoutKnowledgeBasesInputObjectSchema } from './ModelUpdateWithoutKnowledgeBasesInput.schema';
import { ModelUncheckedUpdateWithoutKnowledgeBasesInputObjectSchema as ModelUncheckedUpdateWithoutKnowledgeBasesInputObjectSchema } from './ModelUncheckedUpdateWithoutKnowledgeBasesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ModelUpdateWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => ModelUncheckedUpdateWithoutKnowledgeBasesInputObjectSchema)])
}).strict();
export const ModelUpdateToOneWithWhereWithoutKnowledgeBasesInputObjectSchema: z.ZodType<Prisma.ModelUpdateToOneWithWhereWithoutKnowledgeBasesInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpdateToOneWithWhereWithoutKnowledgeBasesInput>;
export const ModelUpdateToOneWithWhereWithoutKnowledgeBasesInputObjectZodSchema = makeSchema();
