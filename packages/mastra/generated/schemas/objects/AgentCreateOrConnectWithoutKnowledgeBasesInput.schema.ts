import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AgentWhereUniqueInputObjectSchema as AgentWhereUniqueInputObjectSchema } from './AgentWhereUniqueInput.schema';
import { AgentCreateWithoutKnowledgeBasesInputObjectSchema as AgentCreateWithoutKnowledgeBasesInputObjectSchema } from './AgentCreateWithoutKnowledgeBasesInput.schema';
import { AgentUncheckedCreateWithoutKnowledgeBasesInputObjectSchema as AgentUncheckedCreateWithoutKnowledgeBasesInputObjectSchema } from './AgentUncheckedCreateWithoutKnowledgeBasesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AgentCreateWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => AgentUncheckedCreateWithoutKnowledgeBasesInputObjectSchema)])
}).strict();
export const AgentCreateOrConnectWithoutKnowledgeBasesInputObjectSchema: z.ZodType<Prisma.AgentCreateOrConnectWithoutKnowledgeBasesInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentCreateOrConnectWithoutKnowledgeBasesInput>;
export const AgentCreateOrConnectWithoutKnowledgeBasesInputObjectZodSchema = makeSchema();
