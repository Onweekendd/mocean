import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseCreateWithoutAgentsInputObjectSchema as KnowledgeBaseCreateWithoutAgentsInputObjectSchema } from './KnowledgeBaseCreateWithoutAgentsInput.schema';
import { KnowledgeBaseUncheckedCreateWithoutAgentsInputObjectSchema as KnowledgeBaseUncheckedCreateWithoutAgentsInputObjectSchema } from './KnowledgeBaseUncheckedCreateWithoutAgentsInput.schema';
import { KnowledgeBaseCreateOrConnectWithoutAgentsInputObjectSchema as KnowledgeBaseCreateOrConnectWithoutAgentsInputObjectSchema } from './KnowledgeBaseCreateOrConnectWithoutAgentsInput.schema';
import { KnowledgeBaseUpsertWithWhereUniqueWithoutAgentsInputObjectSchema as KnowledgeBaseUpsertWithWhereUniqueWithoutAgentsInputObjectSchema } from './KnowledgeBaseUpsertWithWhereUniqueWithoutAgentsInput.schema';
import { KnowledgeBaseWhereUniqueInputObjectSchema as KnowledgeBaseWhereUniqueInputObjectSchema } from './KnowledgeBaseWhereUniqueInput.schema';
import { KnowledgeBaseUpdateWithWhereUniqueWithoutAgentsInputObjectSchema as KnowledgeBaseUpdateWithWhereUniqueWithoutAgentsInputObjectSchema } from './KnowledgeBaseUpdateWithWhereUniqueWithoutAgentsInput.schema';
import { KnowledgeBaseUpdateManyWithWhereWithoutAgentsInputObjectSchema as KnowledgeBaseUpdateManyWithWhereWithoutAgentsInputObjectSchema } from './KnowledgeBaseUpdateManyWithWhereWithoutAgentsInput.schema';
import { KnowledgeBaseScalarWhereInputObjectSchema as KnowledgeBaseScalarWhereInputObjectSchema } from './KnowledgeBaseScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => KnowledgeBaseCreateWithoutAgentsInputObjectSchema), z.lazy(() => KnowledgeBaseCreateWithoutAgentsInputObjectSchema).array(), z.lazy(() => KnowledgeBaseUncheckedCreateWithoutAgentsInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedCreateWithoutAgentsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => KnowledgeBaseCreateOrConnectWithoutAgentsInputObjectSchema), z.lazy(() => KnowledgeBaseCreateOrConnectWithoutAgentsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => KnowledgeBaseUpsertWithWhereUniqueWithoutAgentsInputObjectSchema), z.lazy(() => KnowledgeBaseUpsertWithWhereUniqueWithoutAgentsInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema), z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema), z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema), z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema), z.lazy(() => KnowledgeBaseWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => KnowledgeBaseUpdateWithWhereUniqueWithoutAgentsInputObjectSchema), z.lazy(() => KnowledgeBaseUpdateWithWhereUniqueWithoutAgentsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => KnowledgeBaseUpdateManyWithWhereWithoutAgentsInputObjectSchema), z.lazy(() => KnowledgeBaseUpdateManyWithWhereWithoutAgentsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => KnowledgeBaseScalarWhereInputObjectSchema), z.lazy(() => KnowledgeBaseScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const KnowledgeBaseUpdateManyWithoutAgentsNestedInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseUpdateManyWithoutAgentsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseUpdateManyWithoutAgentsNestedInput>;
export const KnowledgeBaseUpdateManyWithoutAgentsNestedInputObjectZodSchema = makeSchema();
