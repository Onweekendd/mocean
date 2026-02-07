import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseCreateWithoutModelInputObjectSchema as KnowledgeBaseCreateWithoutModelInputObjectSchema } from './KnowledgeBaseCreateWithoutModelInput.schema';
import { KnowledgeBaseUncheckedCreateWithoutModelInputObjectSchema as KnowledgeBaseUncheckedCreateWithoutModelInputObjectSchema } from './KnowledgeBaseUncheckedCreateWithoutModelInput.schema';
import { KnowledgeBaseCreateOrConnectWithoutModelInputObjectSchema as KnowledgeBaseCreateOrConnectWithoutModelInputObjectSchema } from './KnowledgeBaseCreateOrConnectWithoutModelInput.schema';
import { KnowledgeBaseUpsertWithWhereUniqueWithoutModelInputObjectSchema as KnowledgeBaseUpsertWithWhereUniqueWithoutModelInputObjectSchema } from './KnowledgeBaseUpsertWithWhereUniqueWithoutModelInput.schema';
import { KnowledgeBaseCreateManyModelInputEnvelopeObjectSchema as KnowledgeBaseCreateManyModelInputEnvelopeObjectSchema } from './KnowledgeBaseCreateManyModelInputEnvelope.schema';
import { KnowledgeBaseWhereUniqueInputObjectSchema as KnowledgeBaseWhereUniqueInputObjectSchema } from './KnowledgeBaseWhereUniqueInput.schema';
import { KnowledgeBaseUpdateWithWhereUniqueWithoutModelInputObjectSchema as KnowledgeBaseUpdateWithWhereUniqueWithoutModelInputObjectSchema } from './KnowledgeBaseUpdateWithWhereUniqueWithoutModelInput.schema';
import { KnowledgeBaseUpdateManyWithWhereWithoutModelInputObjectSchema as KnowledgeBaseUpdateManyWithWhereWithoutModelInputObjectSchema } from './KnowledgeBaseUpdateManyWithWhereWithoutModelInput.schema';
import { KnowledgeBaseScalarWhereInputObjectSchema as KnowledgeBaseScalarWhereInputObjectSchema } from './KnowledgeBaseScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => KnowledgeBaseCreateWithoutModelInputObjectSchema), z.lazy(() => KnowledgeBaseCreateWithoutModelInputObjectSchema).array(), z.lazy(() => KnowledgeBaseUncheckedCreateWithoutModelInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedCreateWithoutModelInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => KnowledgeBaseCreateOrConnectWithoutModelInputObjectSchema), z.lazy(() => KnowledgeBaseCreateOrConnectWithoutModelInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => KnowledgeBaseUpsertWithWhereUniqueWithoutModelInputObjectSchema), z.lazy(() => KnowledgeBaseUpsertWithWhereUniqueWithoutModelInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => KnowledgeBaseCreateManyModelInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema), z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema), z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema), z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema), z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => KnowledgeBaseUpdateWithWhereUniqueWithoutModelInputObjectSchema), z.lazy(() => KnowledgeBaseUpdateWithWhereUniqueWithoutModelInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => KnowledgeBaseUpdateManyWithWhereWithoutModelInputObjectSchema), z.lazy(() => KnowledgeBaseUpdateManyWithWhereWithoutModelInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => KnowledgeBaseScalarWhereInputObjectSchema), z.lazy(() => KnowledgeBaseScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const KnowledgeBaseUncheckedUpdateManyWithoutModelNestedInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseUncheckedUpdateManyWithoutModelNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseUncheckedUpdateManyWithoutModelNestedInput>;
export const KnowledgeBaseUncheckedUpdateManyWithoutModelNestedInputObjectZodSchema = makeSchema();
