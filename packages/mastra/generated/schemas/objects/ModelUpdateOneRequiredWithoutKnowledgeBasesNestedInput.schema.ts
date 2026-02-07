import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelCreateWithoutKnowledgeBasesInputObjectSchema as ModelCreateWithoutKnowledgeBasesInputObjectSchema } from './ModelCreateWithoutKnowledgeBasesInput.schema';
import { ModelUncheckedCreateWithoutKnowledgeBasesInputObjectSchema as ModelUncheckedCreateWithoutKnowledgeBasesInputObjectSchema } from './ModelUncheckedCreateWithoutKnowledgeBasesInput.schema';
import { ModelCreateOrConnectWithoutKnowledgeBasesInputObjectSchema as ModelCreateOrConnectWithoutKnowledgeBasesInputObjectSchema } from './ModelCreateOrConnectWithoutKnowledgeBasesInput.schema';
import { ModelUpsertWithoutKnowledgeBasesInputObjectSchema as ModelUpsertWithoutKnowledgeBasesInputObjectSchema } from './ModelUpsertWithoutKnowledgeBasesInput.schema';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema';
import { ModelUpdateToOneWithWhereWithoutKnowledgeBasesInputObjectSchema as ModelUpdateToOneWithWhereWithoutKnowledgeBasesInputObjectSchema } from './ModelUpdateToOneWithWhereWithoutKnowledgeBasesInput.schema';
import { ModelUpdateWithoutKnowledgeBasesInputObjectSchema as ModelUpdateWithoutKnowledgeBasesInputObjectSchema } from './ModelUpdateWithoutKnowledgeBasesInput.schema';
import { ModelUncheckedUpdateWithoutKnowledgeBasesInputObjectSchema as ModelUncheckedUpdateWithoutKnowledgeBasesInputObjectSchema } from './ModelUncheckedUpdateWithoutKnowledgeBasesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelCreateWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutKnowledgeBasesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ModelCreateOrConnectWithoutKnowledgeBasesInputObjectSchema).optional(),
  upsert: z.lazy(() => ModelUpsertWithoutKnowledgeBasesInputObjectSchema).optional(),
  connect: z.lazy(() => ModelWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ModelUpdateToOneWithWhereWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => ModelUpdateWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => ModelUncheckedUpdateWithoutKnowledgeBasesInputObjectSchema)]).optional()
}).strict();
export const ModelUpdateOneRequiredWithoutKnowledgeBasesNestedInputObjectSchema: z.ZodType<Prisma.ModelUpdateOneRequiredWithoutKnowledgeBasesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpdateOneRequiredWithoutKnowledgeBasesNestedInput>;
export const ModelUpdateOneRequiredWithoutKnowledgeBasesNestedInputObjectZodSchema = makeSchema();
