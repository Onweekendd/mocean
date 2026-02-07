import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseWhereUniqueInputObjectSchema as KnowledgeBaseWhereUniqueInputObjectSchema } from './KnowledgeBaseWhereUniqueInput.schema';
import { KnowledgeBaseUpdateWithoutAgentsInputObjectSchema as KnowledgeBaseUpdateWithoutAgentsInputObjectSchema } from './KnowledgeBaseUpdateWithoutAgentsInput.schema';
import { KnowledgeBaseUncheckedUpdateWithoutAgentsInputObjectSchema as KnowledgeBaseUncheckedUpdateWithoutAgentsInputObjectSchema } from './KnowledgeBaseUncheckedUpdateWithoutAgentsInput.schema';
import { KnowledgeBaseCreateWithoutAgentsInputObjectSchema as KnowledgeBaseCreateWithoutAgentsInputObjectSchema } from './KnowledgeBaseCreateWithoutAgentsInput.schema';
import { KnowledgeBaseUncheckedCreateWithoutAgentsInputObjectSchema as KnowledgeBaseUncheckedCreateWithoutAgentsInputObjectSchema } from './KnowledgeBaseUncheckedCreateWithoutAgentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => KnowledgeBaseUpdateWithoutAgentsInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedUpdateWithoutAgentsInputObjectSchema)]),
  create: z.union([z.lazy(() => KnowledgeBaseCreateWithoutAgentsInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedCreateWithoutAgentsInputObjectSchema)])
}).strict();
export const KnowledgeBaseUpsertWithWhereUniqueWithoutAgentsInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseUpsertWithWhereUniqueWithoutAgentsInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseUpsertWithWhereUniqueWithoutAgentsInput>;
export const KnowledgeBaseUpsertWithWhereUniqueWithoutAgentsInputObjectZodSchema = makeSchema();
