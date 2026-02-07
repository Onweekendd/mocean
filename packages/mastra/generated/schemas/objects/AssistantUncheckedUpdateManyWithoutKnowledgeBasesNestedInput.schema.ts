import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantCreateWithoutKnowledgeBasesInputObjectSchema as AssistantCreateWithoutKnowledgeBasesInputObjectSchema } from './AssistantCreateWithoutKnowledgeBasesInput.schema';
import { AssistantUncheckedCreateWithoutKnowledgeBasesInputObjectSchema as AssistantUncheckedCreateWithoutKnowledgeBasesInputObjectSchema } from './AssistantUncheckedCreateWithoutKnowledgeBasesInput.schema';
import { AssistantCreateOrConnectWithoutKnowledgeBasesInputObjectSchema as AssistantCreateOrConnectWithoutKnowledgeBasesInputObjectSchema } from './AssistantCreateOrConnectWithoutKnowledgeBasesInput.schema';
import { AssistantUpsertWithWhereUniqueWithoutKnowledgeBasesInputObjectSchema as AssistantUpsertWithWhereUniqueWithoutKnowledgeBasesInputObjectSchema } from './AssistantUpsertWithWhereUniqueWithoutKnowledgeBasesInput.schema';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './AssistantWhereUniqueInput.schema';
import { AssistantUpdateWithWhereUniqueWithoutKnowledgeBasesInputObjectSchema as AssistantUpdateWithWhereUniqueWithoutKnowledgeBasesInputObjectSchema } from './AssistantUpdateWithWhereUniqueWithoutKnowledgeBasesInput.schema';
import { AssistantUpdateManyWithWhereWithoutKnowledgeBasesInputObjectSchema as AssistantUpdateManyWithWhereWithoutKnowledgeBasesInputObjectSchema } from './AssistantUpdateManyWithWhereWithoutKnowledgeBasesInput.schema';
import { AssistantScalarWhereInputObjectSchema as AssistantScalarWhereInputObjectSchema } from './AssistantScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AssistantCreateWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => AssistantCreateWithoutKnowledgeBasesInputObjectSchema).array(), z.lazy(() => AssistantUncheckedCreateWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => AssistantUncheckedCreateWithoutKnowledgeBasesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AssistantCreateOrConnectWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => AssistantCreateOrConnectWithoutKnowledgeBasesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AssistantUpsertWithWhereUniqueWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => AssistantUpsertWithWhereUniqueWithoutKnowledgeBasesInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => AssistantWhereUniqueInputObjectSchema), z.lazy(() => AssistantWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AssistantWhereUniqueInputObjectSchema), z.lazy(() => AssistantWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AssistantWhereUniqueInputObjectSchema), z.lazy(() => AssistantWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AssistantWhereUniqueInputObjectSchema), z.lazy(() => AssistantWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AssistantUpdateWithWhereUniqueWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => AssistantUpdateWithWhereUniqueWithoutKnowledgeBasesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AssistantUpdateManyWithWhereWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => AssistantUpdateManyWithWhereWithoutKnowledgeBasesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AssistantScalarWhereInputObjectSchema), z.lazy(() => AssistantScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AssistantUncheckedUpdateManyWithoutKnowledgeBasesNestedInputObjectSchema: z.ZodType<Prisma.AssistantUncheckedUpdateManyWithoutKnowledgeBasesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantUncheckedUpdateManyWithoutKnowledgeBasesNestedInput>;
export const AssistantUncheckedUpdateManyWithoutKnowledgeBasesNestedInputObjectZodSchema = makeSchema();
