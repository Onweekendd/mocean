import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseWhereUniqueInputObjectSchema as KnowledgeBaseWhereUniqueInputObjectSchema } from './KnowledgeBaseWhereUniqueInput.schema';
import { KnowledgeBaseUpdateWithoutAssistantsInputObjectSchema as KnowledgeBaseUpdateWithoutAssistantsInputObjectSchema } from './KnowledgeBaseUpdateWithoutAssistantsInput.schema';
import { KnowledgeBaseUncheckedUpdateWithoutAssistantsInputObjectSchema as KnowledgeBaseUncheckedUpdateWithoutAssistantsInputObjectSchema } from './KnowledgeBaseUncheckedUpdateWithoutAssistantsInput.schema';
import { KnowledgeBaseCreateWithoutAssistantsInputObjectSchema as KnowledgeBaseCreateWithoutAssistantsInputObjectSchema } from './KnowledgeBaseCreateWithoutAssistantsInput.schema';
import { KnowledgeBaseUncheckedCreateWithoutAssistantsInputObjectSchema as KnowledgeBaseUncheckedCreateWithoutAssistantsInputObjectSchema } from './KnowledgeBaseUncheckedCreateWithoutAssistantsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => KnowledgeBaseUpdateWithoutAssistantsInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedUpdateWithoutAssistantsInputObjectSchema)]),
  create: z.union([z.lazy(() => KnowledgeBaseCreateWithoutAssistantsInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedCreateWithoutAssistantsInputObjectSchema)])
}).strict();
export const KnowledgeBaseUpsertWithWhereUniqueWithoutAssistantsInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseUpsertWithWhereUniqueWithoutAssistantsInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseUpsertWithWhereUniqueWithoutAssistantsInput>;
export const KnowledgeBaseUpsertWithWhereUniqueWithoutAssistantsInputObjectZodSchema = makeSchema();
