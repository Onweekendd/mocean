import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AgentCreateWithoutKnowledgeBasesInputObjectSchema as AgentCreateWithoutKnowledgeBasesInputObjectSchema } from './AgentCreateWithoutKnowledgeBasesInput.schema';
import { AgentUncheckedCreateWithoutKnowledgeBasesInputObjectSchema as AgentUncheckedCreateWithoutKnowledgeBasesInputObjectSchema } from './AgentUncheckedCreateWithoutKnowledgeBasesInput.schema';
import { AgentCreateOrConnectWithoutKnowledgeBasesInputObjectSchema as AgentCreateOrConnectWithoutKnowledgeBasesInputObjectSchema } from './AgentCreateOrConnectWithoutKnowledgeBasesInput.schema';
import { AgentUpsertWithWhereUniqueWithoutKnowledgeBasesInputObjectSchema as AgentUpsertWithWhereUniqueWithoutKnowledgeBasesInputObjectSchema } from './AgentUpsertWithWhereUniqueWithoutKnowledgeBasesInput.schema';
import { AgentWhereUniqueInputObjectSchema as AgentWhereUniqueInputObjectSchema } from './AgentWhereUniqueInput.schema';
import { AgentUpdateWithWhereUniqueWithoutKnowledgeBasesInputObjectSchema as AgentUpdateWithWhereUniqueWithoutKnowledgeBasesInputObjectSchema } from './AgentUpdateWithWhereUniqueWithoutKnowledgeBasesInput.schema';
import { AgentUpdateManyWithWhereWithoutKnowledgeBasesInputObjectSchema as AgentUpdateManyWithWhereWithoutKnowledgeBasesInputObjectSchema } from './AgentUpdateManyWithWhereWithoutKnowledgeBasesInput.schema';
import { AgentScalarWhereInputObjectSchema as AgentScalarWhereInputObjectSchema } from './AgentScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgentCreateWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => AgentCreateWithoutKnowledgeBasesInputObjectSchema).array(), z.lazy(() => AgentUncheckedCreateWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => AgentUncheckedCreateWithoutKnowledgeBasesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AgentCreateOrConnectWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => AgentCreateOrConnectWithoutKnowledgeBasesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AgentUpsertWithWhereUniqueWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => AgentUpsertWithWhereUniqueWithoutKnowledgeBasesInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => AgentWhereUniqueInputObjectSchema), z.lazy(() => AgentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AgentWhereUniqueInputObjectSchema), z.lazy(() => AgentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AgentWhereUniqueInputObjectSchema), z.lazy(() => AgentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AgentWhereUniqueInputObjectSchema), z.lazy(() => AgentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AgentUpdateWithWhereUniqueWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => AgentUpdateWithWhereUniqueWithoutKnowledgeBasesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AgentUpdateManyWithWhereWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => AgentUpdateManyWithWhereWithoutKnowledgeBasesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AgentScalarWhereInputObjectSchema), z.lazy(() => AgentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AgentUncheckedUpdateManyWithoutKnowledgeBasesNestedInputObjectSchema: z.ZodType<Prisma.AgentUncheckedUpdateManyWithoutKnowledgeBasesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentUncheckedUpdateManyWithoutKnowledgeBasesNestedInput>;
export const AgentUncheckedUpdateManyWithoutKnowledgeBasesNestedInputObjectZodSchema = makeSchema();
