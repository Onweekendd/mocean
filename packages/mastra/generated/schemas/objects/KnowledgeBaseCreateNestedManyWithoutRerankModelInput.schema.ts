import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseCreateWithoutRerankModelInputObjectSchema as KnowledgeBaseCreateWithoutRerankModelInputObjectSchema } from './KnowledgeBaseCreateWithoutRerankModelInput.schema';
import { KnowledgeBaseUncheckedCreateWithoutRerankModelInputObjectSchema as KnowledgeBaseUncheckedCreateWithoutRerankModelInputObjectSchema } from './KnowledgeBaseUncheckedCreateWithoutRerankModelInput.schema';
import { KnowledgeBaseCreateOrConnectWithoutRerankModelInputObjectSchema as KnowledgeBaseCreateOrConnectWithoutRerankModelInputObjectSchema } from './KnowledgeBaseCreateOrConnectWithoutRerankModelInput.schema';
import { KnowledgeBaseCreateManyRerankModelInputEnvelopeObjectSchema as KnowledgeBaseCreateManyRerankModelInputEnvelopeObjectSchema } from './KnowledgeBaseCreateManyRerankModelInputEnvelope.schema';
import { KnowledgeBaseWhereUniqueInputObjectSchema as KnowledgeBaseWhereUniqueInputObjectSchema } from './KnowledgeBaseWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => KnowledgeBaseCreateWithoutRerankModelInputObjectSchema), z.lazy(() => KnowledgeBaseCreateWithoutRerankModelInputObjectSchema).array(), z.lazy(() => KnowledgeBaseUncheckedCreateWithoutRerankModelInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedCreateWithoutRerankModelInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => KnowledgeBaseCreateOrConnectWithoutRerankModelInputObjectSchema), z.lazy(() => KnowledgeBaseCreateOrConnectWithoutRerankModelInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => KnowledgeBaseCreateManyRerankModelInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema), z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const KnowledgeBaseCreateNestedManyWithoutRerankModelInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseCreateNestedManyWithoutRerankModelInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseCreateNestedManyWithoutRerankModelInput>;
export const KnowledgeBaseCreateNestedManyWithoutRerankModelInputObjectZodSchema = makeSchema();
