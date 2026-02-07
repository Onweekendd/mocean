import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseWhereUniqueInputObjectSchema as KnowledgeBaseWhereUniqueInputObjectSchema } from './KnowledgeBaseWhereUniqueInput.schema';
import { KnowledgeBaseCreateWithoutAgentsInputObjectSchema as KnowledgeBaseCreateWithoutAgentsInputObjectSchema } from './KnowledgeBaseCreateWithoutAgentsInput.schema';
import { KnowledgeBaseUncheckedCreateWithoutAgentsInputObjectSchema as KnowledgeBaseUncheckedCreateWithoutAgentsInputObjectSchema } from './KnowledgeBaseUncheckedCreateWithoutAgentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => KnowledgeBaseCreateWithoutAgentsInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedCreateWithoutAgentsInputObjectSchema)])
}).strict();
export const KnowledgeBaseCreateOrConnectWithoutAgentsInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseCreateOrConnectWithoutAgentsInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseCreateOrConnectWithoutAgentsInput>;
export const KnowledgeBaseCreateOrConnectWithoutAgentsInputObjectZodSchema = makeSchema();
