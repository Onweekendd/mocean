import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseCreateWithoutRerankModelInputObjectSchema as KnowledgeBaseCreateWithoutRerankModelInputObjectSchema } from './KnowledgeBaseCreateWithoutRerankModelInput.schema';
import { KnowledgeBaseUncheckedCreateWithoutRerankModelInputObjectSchema as KnowledgeBaseUncheckedCreateWithoutRerankModelInputObjectSchema } from './KnowledgeBaseUncheckedCreateWithoutRerankModelInput.schema';
import { KnowledgeBaseCreateOrConnectWithoutRerankModelInputObjectSchema as KnowledgeBaseCreateOrConnectWithoutRerankModelInputObjectSchema } from './KnowledgeBaseCreateOrConnectWithoutRerankModelInput.schema';
import { KnowledgeBaseUpsertWithWhereUniqueWithoutRerankModelInputObjectSchema as KnowledgeBaseUpsertWithWhereUniqueWithoutRerankModelInputObjectSchema } from './KnowledgeBaseUpsertWithWhereUniqueWithoutRerankModelInput.schema';
import { KnowledgeBaseCreateManyRerankModelInputEnvelopeObjectSchema as KnowledgeBaseCreateManyRerankModelInputEnvelopeObjectSchema } from './KnowledgeBaseCreateManyRerankModelInputEnvelope.schema';
import { KnowledgeBaseWhereUniqueInputObjectSchema as KnowledgeBaseWhereUniqueInputObjectSchema } from './KnowledgeBaseWhereUniqueInput.schema';
import { KnowledgeBaseUpdateWithWhereUniqueWithoutRerankModelInputObjectSchema as KnowledgeBaseUpdateWithWhereUniqueWithoutRerankModelInputObjectSchema } from './KnowledgeBaseUpdateWithWhereUniqueWithoutRerankModelInput.schema';
import { KnowledgeBaseUpdateManyWithWhereWithoutRerankModelInputObjectSchema as KnowledgeBaseUpdateManyWithWhereWithoutRerankModelInputObjectSchema } from './KnowledgeBaseUpdateManyWithWhereWithoutRerankModelInput.schema';
import { KnowledgeBaseScalarWhereInputObjectSchema as KnowledgeBaseScalarWhereInputObjectSchema } from './KnowledgeBaseScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => KnowledgeBaseCreateWithoutRerankModelInputObjectSchema), z.lazy(() => KnowledgeBaseCreateWithoutRerankModelInputObjectSchema).array(), z.lazy(() => KnowledgeBaseUncheckedCreateWithoutRerankModelInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedCreateWithoutRerankModelInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => KnowledgeBaseCreateOrConnectWithoutRerankModelInputObjectSchema), z.lazy(() => KnowledgeBaseCreateOrConnectWithoutRerankModelInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => KnowledgeBaseUpsertWithWhereUniqueWithoutRerankModelInputObjectSchema), z.lazy(() => KnowledgeBaseUpsertWithWhereUniqueWithoutRerankModelInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => KnowledgeBaseCreateManyRerankModelInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema), z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema), z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema), z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema), z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => KnowledgeBaseUpdateWithWhereUniqueWithoutRerankModelInputObjectSchema), z.lazy(() => KnowledgeBaseUpdateWithWhereUniqueWithoutRerankModelInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => KnowledgeBaseUpdateManyWithWhereWithoutRerankModelInputObjectSchema), z.lazy(() => KnowledgeBaseUpdateManyWithWhereWithoutRerankModelInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => KnowledgeBaseScalarWhereInputObjectSchema), z.lazy(() => KnowledgeBaseScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const KnowledgeBaseUncheckedUpdateManyWithoutRerankModelNestedInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseUncheckedUpdateManyWithoutRerankModelNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseUncheckedUpdateManyWithoutRerankModelNestedInput>;
export const KnowledgeBaseUncheckedUpdateManyWithoutRerankModelNestedInputObjectZodSchema = makeSchema();
