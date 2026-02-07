import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseWhereUniqueInputObjectSchema as KnowledgeBaseWhereUniqueInputObjectSchema } from './KnowledgeBaseWhereUniqueInput.schema';
import { KnowledgeBaseUpdateWithoutAgentsInputObjectSchema as KnowledgeBaseUpdateWithoutAgentsInputObjectSchema } from './KnowledgeBaseUpdateWithoutAgentsInput.schema';
import { KnowledgeBaseUncheckedUpdateWithoutAgentsInputObjectSchema as KnowledgeBaseUncheckedUpdateWithoutAgentsInputObjectSchema } from './KnowledgeBaseUncheckedUpdateWithoutAgentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => KnowledgeBaseUpdateWithoutAgentsInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedUpdateWithoutAgentsInputObjectSchema)])
}).strict();
export const KnowledgeBaseUpdateWithWhereUniqueWithoutAgentsInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseUpdateWithWhereUniqueWithoutAgentsInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseUpdateWithWhereUniqueWithoutAgentsInput>;
export const KnowledgeBaseUpdateWithWhereUniqueWithoutAgentsInputObjectZodSchema = makeSchema();
