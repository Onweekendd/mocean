import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './AssistantWhereUniqueInput.schema';
import { AssistantUpdateWithoutKnowledgeBasesInputObjectSchema as AssistantUpdateWithoutKnowledgeBasesInputObjectSchema } from './AssistantUpdateWithoutKnowledgeBasesInput.schema';
import { AssistantUncheckedUpdateWithoutKnowledgeBasesInputObjectSchema as AssistantUncheckedUpdateWithoutKnowledgeBasesInputObjectSchema } from './AssistantUncheckedUpdateWithoutKnowledgeBasesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AssistantWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AssistantUpdateWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => AssistantUncheckedUpdateWithoutKnowledgeBasesInputObjectSchema)])
}).strict();
export const AssistantUpdateWithWhereUniqueWithoutKnowledgeBasesInputObjectSchema: z.ZodType<Prisma.AssistantUpdateWithWhereUniqueWithoutKnowledgeBasesInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantUpdateWithWhereUniqueWithoutKnowledgeBasesInput>;
export const AssistantUpdateWithWhereUniqueWithoutKnowledgeBasesInputObjectZodSchema = makeSchema();
