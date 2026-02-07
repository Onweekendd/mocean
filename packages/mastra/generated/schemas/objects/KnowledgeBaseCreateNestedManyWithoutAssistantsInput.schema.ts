import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseCreateWithoutAssistantsInputObjectSchema as KnowledgeBaseCreateWithoutAssistantsInputObjectSchema } from './KnowledgeBaseCreateWithoutAssistantsInput.schema';
import { KnowledgeBaseUncheckedCreateWithoutAssistantsInputObjectSchema as KnowledgeBaseUncheckedCreateWithoutAssistantsInputObjectSchema } from './KnowledgeBaseUncheckedCreateWithoutAssistantsInput.schema';
import { KnowledgeBaseCreateOrConnectWithoutAssistantsInputObjectSchema as KnowledgeBaseCreateOrConnectWithoutAssistantsInputObjectSchema } from './KnowledgeBaseCreateOrConnectWithoutAssistantsInput.schema';
import { KnowledgeBaseWhereUniqueInputObjectSchema as KnowledgeBaseWhereUniqueInputObjectSchema } from './KnowledgeBaseWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => KnowledgeBaseCreateWithoutAssistantsInputObjectSchema), z.lazy(() => KnowledgeBaseCreateWithoutAssistantsInputObjectSchema).array(), z.lazy(() => KnowledgeBaseUncheckedCreateWithoutAssistantsInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedCreateWithoutAssistantsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => KnowledgeBaseCreateOrConnectWithoutAssistantsInputObjectSchema), z.lazy(() => KnowledgeBaseCreateOrConnectWithoutAssistantsInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema), z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const KnowledgeBaseCreateNestedManyWithoutAssistantsInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseCreateNestedManyWithoutAssistantsInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseCreateNestedManyWithoutAssistantsInput>;
export const KnowledgeBaseCreateNestedManyWithoutAssistantsInputObjectZodSchema = makeSchema();
