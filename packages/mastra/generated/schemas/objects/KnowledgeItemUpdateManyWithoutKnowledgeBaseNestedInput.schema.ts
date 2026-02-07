import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeItemCreateWithoutKnowledgeBaseInputObjectSchema as KnowledgeItemCreateWithoutKnowledgeBaseInputObjectSchema } from './KnowledgeItemCreateWithoutKnowledgeBaseInput.schema';
import { KnowledgeItemUncheckedCreateWithoutKnowledgeBaseInputObjectSchema as KnowledgeItemUncheckedCreateWithoutKnowledgeBaseInputObjectSchema } from './KnowledgeItemUncheckedCreateWithoutKnowledgeBaseInput.schema';
import { KnowledgeItemCreateOrConnectWithoutKnowledgeBaseInputObjectSchema as KnowledgeItemCreateOrConnectWithoutKnowledgeBaseInputObjectSchema } from './KnowledgeItemCreateOrConnectWithoutKnowledgeBaseInput.schema';
import { KnowledgeItemUpsertWithWhereUniqueWithoutKnowledgeBaseInputObjectSchema as KnowledgeItemUpsertWithWhereUniqueWithoutKnowledgeBaseInputObjectSchema } from './KnowledgeItemUpsertWithWhereUniqueWithoutKnowledgeBaseInput.schema';
import { KnowledgeItemCreateManyKnowledgeBaseInputEnvelopeObjectSchema as KnowledgeItemCreateManyKnowledgeBaseInputEnvelopeObjectSchema } from './KnowledgeItemCreateManyKnowledgeBaseInputEnvelope.schema';
import { KnowledgeItemWhereUniqueInputObjectSchema as KnowledgeItemWhereUniqueInputObjectSchema } from './KnowledgeItemWhereUniqueInput.schema';
import { KnowledgeItemUpdateWithWhereUniqueWithoutKnowledgeBaseInputObjectSchema as KnowledgeItemUpdateWithWhereUniqueWithoutKnowledgeBaseInputObjectSchema } from './KnowledgeItemUpdateWithWhereUniqueWithoutKnowledgeBaseInput.schema';
import { KnowledgeItemUpdateManyWithWhereWithoutKnowledgeBaseInputObjectSchema as KnowledgeItemUpdateManyWithWhereWithoutKnowledgeBaseInputObjectSchema } from './KnowledgeItemUpdateManyWithWhereWithoutKnowledgeBaseInput.schema';
import { KnowledgeItemScalarWhereInputObjectSchema as KnowledgeItemScalarWhereInputObjectSchema } from './KnowledgeItemScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => KnowledgeItemCreateWithoutKnowledgeBaseInputObjectSchema), z.lazy(() => KnowledgeItemCreateWithoutKnowledgeBaseInputObjectSchema).array(), z.lazy(() => KnowledgeItemUncheckedCreateWithoutKnowledgeBaseInputObjectSchema), z.lazy(() => KnowledgeItemUncheckedCreateWithoutKnowledgeBaseInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => KnowledgeItemCreateOrConnectWithoutKnowledgeBaseInputObjectSchema), z.lazy(() => KnowledgeItemCreateOrConnectWithoutKnowledgeBaseInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => KnowledgeItemUpsertWithWhereUniqueWithoutKnowledgeBaseInputObjectSchema), z.lazy(() => KnowledgeItemUpsertWithWhereUniqueWithoutKnowledgeBaseInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => KnowledgeItemCreateManyKnowledgeBaseInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => KnowledgeItemWhereUniqueInputObjectSchema), z.lazy(() => KnowledgeItemWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => KnowledgeItemWhereUniqueInputObjectSchema), z.lazy(() => KnowledgeItemWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => KnowledgeItemWhereUniqueInputObjectSchema), z.lazy(() => KnowledgeItemWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => KnowledgeItemWhereUniqueInputObjectSchema), z.lazy(() => KnowledgeItemWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => KnowledgeItemUpdateWithWhereUniqueWithoutKnowledgeBaseInputObjectSchema), z.lazy(() => KnowledgeItemUpdateWithWhereUniqueWithoutKnowledgeBaseInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => KnowledgeItemUpdateManyWithWhereWithoutKnowledgeBaseInputObjectSchema), z.lazy(() => KnowledgeItemUpdateManyWithWhereWithoutKnowledgeBaseInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => KnowledgeItemScalarWhereInputObjectSchema), z.lazy(() => KnowledgeItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const KnowledgeItemUpdateManyWithoutKnowledgeBaseNestedInputObjectSchema: z.ZodType<Prisma.KnowledgeItemUpdateManyWithoutKnowledgeBaseNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeItemUpdateManyWithoutKnowledgeBaseNestedInput>;
export const KnowledgeItemUpdateManyWithoutKnowledgeBaseNestedInputObjectZodSchema = makeSchema();
