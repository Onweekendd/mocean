import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AgentWhereUniqueInputObjectSchema as AgentWhereUniqueInputObjectSchema } from './AgentWhereUniqueInput.schema';
import { AgentUpdateWithoutKnowledgeBasesInputObjectSchema as AgentUpdateWithoutKnowledgeBasesInputObjectSchema } from './AgentUpdateWithoutKnowledgeBasesInput.schema';
import { AgentUncheckedUpdateWithoutKnowledgeBasesInputObjectSchema as AgentUncheckedUpdateWithoutKnowledgeBasesInputObjectSchema } from './AgentUncheckedUpdateWithoutKnowledgeBasesInput.schema';
import { AgentCreateWithoutKnowledgeBasesInputObjectSchema as AgentCreateWithoutKnowledgeBasesInputObjectSchema } from './AgentCreateWithoutKnowledgeBasesInput.schema';
import { AgentUncheckedCreateWithoutKnowledgeBasesInputObjectSchema as AgentUncheckedCreateWithoutKnowledgeBasesInputObjectSchema } from './AgentUncheckedCreateWithoutKnowledgeBasesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AgentUpdateWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => AgentUncheckedUpdateWithoutKnowledgeBasesInputObjectSchema)]),
  create: z.union([z.lazy(() => AgentCreateWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => AgentUncheckedCreateWithoutKnowledgeBasesInputObjectSchema)])
}).strict();
export const AgentUpsertWithWhereUniqueWithoutKnowledgeBasesInputObjectSchema: z.ZodType<Prisma.AgentUpsertWithWhereUniqueWithoutKnowledgeBasesInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentUpsertWithWhereUniqueWithoutKnowledgeBasesInput>;
export const AgentUpsertWithWhereUniqueWithoutKnowledgeBasesInputObjectZodSchema = makeSchema();
