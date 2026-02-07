import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AgentWhereUniqueInputObjectSchema as AgentWhereUniqueInputObjectSchema } from './AgentWhereUniqueInput.schema';
import { AgentUpdateWithoutKnowledgeBasesInputObjectSchema as AgentUpdateWithoutKnowledgeBasesInputObjectSchema } from './AgentUpdateWithoutKnowledgeBasesInput.schema';
import { AgentUncheckedUpdateWithoutKnowledgeBasesInputObjectSchema as AgentUncheckedUpdateWithoutKnowledgeBasesInputObjectSchema } from './AgentUncheckedUpdateWithoutKnowledgeBasesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AgentUpdateWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => AgentUncheckedUpdateWithoutKnowledgeBasesInputObjectSchema)])
}).strict();
export const AgentUpdateWithWhereUniqueWithoutKnowledgeBasesInputObjectSchema: z.ZodType<Prisma.AgentUpdateWithWhereUniqueWithoutKnowledgeBasesInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentUpdateWithWhereUniqueWithoutKnowledgeBasesInput>;
export const AgentUpdateWithWhereUniqueWithoutKnowledgeBasesInputObjectZodSchema = makeSchema();
