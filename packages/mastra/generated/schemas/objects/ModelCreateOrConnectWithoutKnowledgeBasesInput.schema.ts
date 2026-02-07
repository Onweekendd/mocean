import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema';
import { ModelCreateWithoutKnowledgeBasesInputObjectSchema as ModelCreateWithoutKnowledgeBasesInputObjectSchema } from './ModelCreateWithoutKnowledgeBasesInput.schema';
import { ModelUncheckedCreateWithoutKnowledgeBasesInputObjectSchema as ModelUncheckedCreateWithoutKnowledgeBasesInputObjectSchema } from './ModelUncheckedCreateWithoutKnowledgeBasesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ModelCreateWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutKnowledgeBasesInputObjectSchema)])
}).strict();
export const ModelCreateOrConnectWithoutKnowledgeBasesInputObjectSchema: z.ZodType<Prisma.ModelCreateOrConnectWithoutKnowledgeBasesInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelCreateOrConnectWithoutKnowledgeBasesInput>;
export const ModelCreateOrConnectWithoutKnowledgeBasesInputObjectZodSchema = makeSchema();
