import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeItemCreateWithoutKnowledgeBaseInputObjectSchema as KnowledgeItemCreateWithoutKnowledgeBaseInputObjectSchema } from './KnowledgeItemCreateWithoutKnowledgeBaseInput.schema';
import { KnowledgeItemUncheckedCreateWithoutKnowledgeBaseInputObjectSchema as KnowledgeItemUncheckedCreateWithoutKnowledgeBaseInputObjectSchema } from './KnowledgeItemUncheckedCreateWithoutKnowledgeBaseInput.schema';
import { KnowledgeItemCreateOrConnectWithoutKnowledgeBaseInputObjectSchema as KnowledgeItemCreateOrConnectWithoutKnowledgeBaseInputObjectSchema } from './KnowledgeItemCreateOrConnectWithoutKnowledgeBaseInput.schema';
import { KnowledgeItemCreateManyKnowledgeBaseInputEnvelopeObjectSchema as KnowledgeItemCreateManyKnowledgeBaseInputEnvelopeObjectSchema } from './KnowledgeItemCreateManyKnowledgeBaseInputEnvelope.schema';
import { KnowledgeItemWhereUniqueInputObjectSchema as KnowledgeItemWhereUniqueInputObjectSchema } from './KnowledgeItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => KnowledgeItemCreateWithoutKnowledgeBaseInputObjectSchema), z.lazy(() => KnowledgeItemCreateWithoutKnowledgeBaseInputObjectSchema).array(), z.lazy(() => KnowledgeItemUncheckedCreateWithoutKnowledgeBaseInputObjectSchema), z.lazy(() => KnowledgeItemUncheckedCreateWithoutKnowledgeBaseInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => KnowledgeItemCreateOrConnectWithoutKnowledgeBaseInputObjectSchema), z.lazy(() => KnowledgeItemCreateOrConnectWithoutKnowledgeBaseInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => KnowledgeItemCreateManyKnowledgeBaseInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => KnowledgeItemWhereUniqueInputObjectSchema), z.lazy(() => KnowledgeItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const KnowledgeItemCreateNestedManyWithoutKnowledgeBaseInputObjectSchema: z.ZodType<Prisma.KnowledgeItemCreateNestedManyWithoutKnowledgeBaseInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeItemCreateNestedManyWithoutKnowledgeBaseInput>;
export const KnowledgeItemCreateNestedManyWithoutKnowledgeBaseInputObjectZodSchema = makeSchema();
