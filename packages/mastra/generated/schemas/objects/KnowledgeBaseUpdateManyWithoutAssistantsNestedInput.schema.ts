import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseCreateWithoutAssistantsInputObjectSchema as KnowledgeBaseCreateWithoutAssistantsInputObjectSchema } from './KnowledgeBaseCreateWithoutAssistantsInput.schema';
import { KnowledgeBaseUncheckedCreateWithoutAssistantsInputObjectSchema as KnowledgeBaseUncheckedCreateWithoutAssistantsInputObjectSchema } from './KnowledgeBaseUncheckedCreateWithoutAssistantsInput.schema';
import { KnowledgeBaseCreateOrConnectWithoutAssistantsInputObjectSchema as KnowledgeBaseCreateOrConnectWithoutAssistantsInputObjectSchema } from './KnowledgeBaseCreateOrConnectWithoutAssistantsInput.schema';
import { KnowledgeBaseUpsertWithWhereUniqueWithoutAssistantsInputObjectSchema as KnowledgeBaseUpsertWithWhereUniqueWithoutAssistantsInputObjectSchema } from './KnowledgeBaseUpsertWithWhereUniqueWithoutAssistantsInput.schema';
import { KnowledgeBaseWhereUniqueInputObjectSchema as KnowledgeBaseWhereUniqueInputObjectSchema } from './KnowledgeBaseWhereUniqueInput.schema';
import { KnowledgeBaseUpdateWithWhereUniqueWithoutAssistantsInputObjectSchema as KnowledgeBaseUpdateWithWhereUniqueWithoutAssistantsInputObjectSchema } from './KnowledgeBaseUpdateWithWhereUniqueWithoutAssistantsInput.schema';
import { KnowledgeBaseUpdateManyWithWhereWithoutAssistantsInputObjectSchema as KnowledgeBaseUpdateManyWithWhereWithoutAssistantsInputObjectSchema } from './KnowledgeBaseUpdateManyWithWhereWithoutAssistantsInput.schema';
import { KnowledgeBaseScalarWhereInputObjectSchema as KnowledgeBaseScalarWhereInputObjectSchema } from './KnowledgeBaseScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => KnowledgeBaseCreateWithoutAssistantsInputObjectSchema), z.lazy(() => KnowledgeBaseCreateWithoutAssistantsInputObjectSchema).array(), z.lazy(() => KnowledgeBaseUncheckedCreateWithoutAssistantsInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedCreateWithoutAssistantsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => KnowledgeBaseCreateOrConnectWithoutAssistantsInputObjectSchema), z.lazy(() => KnowledgeBaseCreateOrConnectWithoutAssistantsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => KnowledgeBaseUpsertWithWhereUniqueWithoutAssistantsInputObjectSchema), z.lazy(() => KnowledgeBaseUpsertWithWhereUniqueWithoutAssistantsInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema), z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema), z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema), z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema), z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => KnowledgeBaseUpdateWithWhereUniqueWithoutAssistantsInputObjectSchema), z.lazy(() => KnowledgeBaseUpdateWithWhereUniqueWithoutAssistantsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => KnowledgeBaseUpdateManyWithWhereWithoutAssistantsInputObjectSchema), z.lazy(() => KnowledgeBaseUpdateManyWithWhereWithoutAssistantsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => KnowledgeBaseScalarWhereInputObjectSchema), z.lazy(() => KnowledgeBaseScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const KnowledgeBaseUpdateManyWithoutAssistantsNestedInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseUpdateManyWithoutAssistantsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseUpdateManyWithoutAssistantsNestedInput>;
export const KnowledgeBaseUpdateManyWithoutAssistantsNestedInputObjectZodSchema = makeSchema();
