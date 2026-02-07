import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseWhereUniqueInputObjectSchema as KnowledgeBaseWhereUniqueInputObjectSchema } from './KnowledgeBaseWhereUniqueInput.schema';
import { KnowledgeBaseCreateWithoutRerankModelInputObjectSchema as KnowledgeBaseCreateWithoutRerankModelInputObjectSchema } from './KnowledgeBaseCreateWithoutRerankModelInput.schema';
import { KnowledgeBaseUncheckedCreateWithoutRerankModelInputObjectSchema as KnowledgeBaseUncheckedCreateWithoutRerankModelInputObjectSchema } from './KnowledgeBaseUncheckedCreateWithoutRerankModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => KnowledgeBaseCreateWithoutRerankModelInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedCreateWithoutRerankModelInputObjectSchema)])
}).strict();
export const KnowledgeBaseCreateOrConnectWithoutRerankModelInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseCreateOrConnectWithoutRerankModelInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseCreateOrConnectWithoutRerankModelInput>;
export const KnowledgeBaseCreateOrConnectWithoutRerankModelInputObjectZodSchema = makeSchema();
