import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelCreateWithoutKnowledgeBasesInputObjectSchema as ModelCreateWithoutKnowledgeBasesInputObjectSchema } from './ModelCreateWithoutKnowledgeBasesInput.schema';
import { ModelUncheckedCreateWithoutKnowledgeBasesInputObjectSchema as ModelUncheckedCreateWithoutKnowledgeBasesInputObjectSchema } from './ModelUncheckedCreateWithoutKnowledgeBasesInput.schema';
import { ModelCreateOrConnectWithoutKnowledgeBasesInputObjectSchema as ModelCreateOrConnectWithoutKnowledgeBasesInputObjectSchema } from './ModelCreateOrConnectWithoutKnowledgeBasesInput.schema';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelCreateWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutKnowledgeBasesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ModelCreateOrConnectWithoutKnowledgeBasesInputObjectSchema).optional(),
  connect: z.lazy(() => ModelWhereUniqueInputObjectSchema).optional()
}).strict();
export const ModelCreateNestedOneWithoutKnowledgeBasesInputObjectSchema: z.ZodType<Prisma.ModelCreateNestedOneWithoutKnowledgeBasesInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelCreateNestedOneWithoutKnowledgeBasesInput>;
export const ModelCreateNestedOneWithoutKnowledgeBasesInputObjectZodSchema = makeSchema();
