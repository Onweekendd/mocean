import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantScalarWhereInputObjectSchema as AssistantScalarWhereInputObjectSchema } from './AssistantScalarWhereInput.schema';
import { AssistantUpdateManyMutationInputObjectSchema as AssistantUpdateManyMutationInputObjectSchema } from './AssistantUpdateManyMutationInput.schema';
import { AssistantUncheckedUpdateManyWithoutKnowledgeBasesInputObjectSchema as AssistantUncheckedUpdateManyWithoutKnowledgeBasesInputObjectSchema } from './AssistantUncheckedUpdateManyWithoutKnowledgeBasesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AssistantScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AssistantUpdateManyMutationInputObjectSchema), z.lazy(() => AssistantUncheckedUpdateManyWithoutKnowledgeBasesInputObjectSchema)])
}).strict();
export const AssistantUpdateManyWithWhereWithoutKnowledgeBasesInputObjectSchema: z.ZodType<Prisma.AssistantUpdateManyWithWhereWithoutKnowledgeBasesInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantUpdateManyWithWhereWithoutKnowledgeBasesInput>;
export const AssistantUpdateManyWithWhereWithoutKnowledgeBasesInputObjectZodSchema = makeSchema();
