import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseWhereUniqueInputObjectSchema as KnowledgeBaseWhereUniqueInputObjectSchema } from './KnowledgeBaseWhereUniqueInput.schema';
import { KnowledgeBaseUpdateWithoutModelInputObjectSchema as KnowledgeBaseUpdateWithoutModelInputObjectSchema } from './KnowledgeBaseUpdateWithoutModelInput.schema';
import { KnowledgeBaseUncheckedUpdateWithoutModelInputObjectSchema as KnowledgeBaseUncheckedUpdateWithoutModelInputObjectSchema } from './KnowledgeBaseUncheckedUpdateWithoutModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => KnowledgeBaseUpdateWithoutModelInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedUpdateWithoutModelInputObjectSchema)])
}).strict();
export const KnowledgeBaseUpdateWithWhereUniqueWithoutModelInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseUpdateWithWhereUniqueWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseUpdateWithWhereUniqueWithoutModelInput>;
export const KnowledgeBaseUpdateWithWhereUniqueWithoutModelInputObjectZodSchema = makeSchema();
