import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AgentScalarWhereInputObjectSchema as AgentScalarWhereInputObjectSchema } from './AgentScalarWhereInput.schema';
import { AgentUpdateManyMutationInputObjectSchema as AgentUpdateManyMutationInputObjectSchema } from './AgentUpdateManyMutationInput.schema';
import { AgentUncheckedUpdateManyWithoutKnowledgeBasesInputObjectSchema as AgentUncheckedUpdateManyWithoutKnowledgeBasesInputObjectSchema } from './AgentUncheckedUpdateManyWithoutKnowledgeBasesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AgentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AgentUpdateManyMutationInputObjectSchema), z.lazy(() => AgentUncheckedUpdateManyWithoutKnowledgeBasesInputObjectSchema)])
}).strict();
export const AgentUpdateManyWithWhereWithoutKnowledgeBasesInputObjectSchema: z.ZodType<Prisma.AgentUpdateManyWithWhereWithoutKnowledgeBasesInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentUpdateManyWithWhereWithoutKnowledgeBasesInput>;
export const AgentUpdateManyWithWhereWithoutKnowledgeBasesInputObjectZodSchema = makeSchema();
