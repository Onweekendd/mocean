import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseWhereUniqueInputObjectSchema as KnowledgeBaseWhereUniqueInputObjectSchema } from './KnowledgeBaseWhereUniqueInput.schema';
import { KnowledgeBaseUpdateWithoutAssistantsInputObjectSchema as KnowledgeBaseUpdateWithoutAssistantsInputObjectSchema } from './KnowledgeBaseUpdateWithoutAssistantsInput.schema';
import { KnowledgeBaseUncheckedUpdateWithoutAssistantsInputObjectSchema as KnowledgeBaseUncheckedUpdateWithoutAssistantsInputObjectSchema } from './KnowledgeBaseUncheckedUpdateWithoutAssistantsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => KnowledgeBaseUpdateWithoutAssistantsInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedUpdateWithoutAssistantsInputObjectSchema)])
}).strict();
export const KnowledgeBaseUpdateWithWhereUniqueWithoutAssistantsInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseUpdateWithWhereUniqueWithoutAssistantsInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseUpdateWithWhereUniqueWithoutAssistantsInput>;
export const KnowledgeBaseUpdateWithWhereUniqueWithoutAssistantsInputObjectZodSchema = makeSchema();
