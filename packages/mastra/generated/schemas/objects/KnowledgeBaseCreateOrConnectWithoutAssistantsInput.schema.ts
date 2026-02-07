import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseWhereUniqueInputObjectSchema as KnowledgeBaseWhereUniqueInputObjectSchema } from './KnowledgeBaseWhereUniqueInput.schema';
import { KnowledgeBaseCreateWithoutAssistantsInputObjectSchema as KnowledgeBaseCreateWithoutAssistantsInputObjectSchema } from './KnowledgeBaseCreateWithoutAssistantsInput.schema';
import { KnowledgeBaseUncheckedCreateWithoutAssistantsInputObjectSchema as KnowledgeBaseUncheckedCreateWithoutAssistantsInputObjectSchema } from './KnowledgeBaseUncheckedCreateWithoutAssistantsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => KnowledgeBaseCreateWithoutAssistantsInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedCreateWithoutAssistantsInputObjectSchema)])
}).strict();
export const KnowledgeBaseCreateOrConnectWithoutAssistantsInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseCreateOrConnectWithoutAssistantsInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseCreateOrConnectWithoutAssistantsInput>;
export const KnowledgeBaseCreateOrConnectWithoutAssistantsInputObjectZodSchema = makeSchema();
