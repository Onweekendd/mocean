import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './AssistantWhereUniqueInput.schema';
import { AssistantUpdateWithoutKnowledgeBasesInputObjectSchema as AssistantUpdateWithoutKnowledgeBasesInputObjectSchema } from './AssistantUpdateWithoutKnowledgeBasesInput.schema';
import { AssistantUncheckedUpdateWithoutKnowledgeBasesInputObjectSchema as AssistantUncheckedUpdateWithoutKnowledgeBasesInputObjectSchema } from './AssistantUncheckedUpdateWithoutKnowledgeBasesInput.schema';
import { AssistantCreateWithoutKnowledgeBasesInputObjectSchema as AssistantCreateWithoutKnowledgeBasesInputObjectSchema } from './AssistantCreateWithoutKnowledgeBasesInput.schema';
import { AssistantUncheckedCreateWithoutKnowledgeBasesInputObjectSchema as AssistantUncheckedCreateWithoutKnowledgeBasesInputObjectSchema } from './AssistantUncheckedCreateWithoutKnowledgeBasesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AssistantWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AssistantUpdateWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => AssistantUncheckedUpdateWithoutKnowledgeBasesInputObjectSchema)]),
  create: z.union([z.lazy(() => AssistantCreateWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => AssistantUncheckedCreateWithoutKnowledgeBasesInputObjectSchema)])
}).strict();
export const AssistantUpsertWithWhereUniqueWithoutKnowledgeBasesInputObjectSchema: z.ZodType<Prisma.AssistantUpsertWithWhereUniqueWithoutKnowledgeBasesInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantUpsertWithWhereUniqueWithoutKnowledgeBasesInput>;
export const AssistantUpsertWithWhereUniqueWithoutKnowledgeBasesInputObjectZodSchema = makeSchema();
