import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AgentCreateWithoutKnowledgeBasesInputObjectSchema as AgentCreateWithoutKnowledgeBasesInputObjectSchema } from './AgentCreateWithoutKnowledgeBasesInput.schema';
import { AgentUncheckedCreateWithoutKnowledgeBasesInputObjectSchema as AgentUncheckedCreateWithoutKnowledgeBasesInputObjectSchema } from './AgentUncheckedCreateWithoutKnowledgeBasesInput.schema';
import { AgentCreateOrConnectWithoutKnowledgeBasesInputObjectSchema as AgentCreateOrConnectWithoutKnowledgeBasesInputObjectSchema } from './AgentCreateOrConnectWithoutKnowledgeBasesInput.schema';
import { AgentWhereUniqueInputObjectSchema as AgentWhereUniqueInputObjectSchema } from './AgentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AgentCreateWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => AgentCreateWithoutKnowledgeBasesInputObjectSchema).array(), z.lazy(() => AgentUncheckedCreateWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => AgentUncheckedCreateWithoutKnowledgeBasesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AgentCreateOrConnectWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => AgentCreateOrConnectWithoutKnowledgeBasesInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AgentWhereUniqueInputObjectSchema), z.lazy(() => AgentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AgentCreateNestedManyWithoutKnowledgeBasesInputObjectSchema: z.ZodType<Prisma.AgentCreateNestedManyWithoutKnowledgeBasesInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentCreateNestedManyWithoutKnowledgeBasesInput>;
export const AgentCreateNestedManyWithoutKnowledgeBasesInputObjectZodSchema = makeSchema();
