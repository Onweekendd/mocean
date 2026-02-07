import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeItemWhereUniqueInputObjectSchema as KnowledgeItemWhereUniqueInputObjectSchema } from './KnowledgeItemWhereUniqueInput.schema';
import { KnowledgeItemCreateWithoutKnowledgeBaseInputObjectSchema as KnowledgeItemCreateWithoutKnowledgeBaseInputObjectSchema } from './KnowledgeItemCreateWithoutKnowledgeBaseInput.schema';
import { KnowledgeItemUncheckedCreateWithoutKnowledgeBaseInputObjectSchema as KnowledgeItemUncheckedCreateWithoutKnowledgeBaseInputObjectSchema } from './KnowledgeItemUncheckedCreateWithoutKnowledgeBaseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => KnowledgeItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => KnowledgeItemCreateWithoutKnowledgeBaseInputObjectSchema), z.lazy(() => KnowledgeItemUncheckedCreateWithoutKnowledgeBaseInputObjectSchema)])
}).strict();
export const KnowledgeItemCreateOrConnectWithoutKnowledgeBaseInputObjectSchema: z.ZodType<Prisma.KnowledgeItemCreateOrConnectWithoutKnowledgeBaseInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeItemCreateOrConnectWithoutKnowledgeBaseInput>;
export const KnowledgeItemCreateOrConnectWithoutKnowledgeBaseInputObjectZodSchema = makeSchema();
