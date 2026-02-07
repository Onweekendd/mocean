import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './AssistantWhereUniqueInput.schema';
import { AssistantCreateWithoutKnowledgeBasesInputObjectSchema as AssistantCreateWithoutKnowledgeBasesInputObjectSchema } from './AssistantCreateWithoutKnowledgeBasesInput.schema';
import { AssistantUncheckedCreateWithoutKnowledgeBasesInputObjectSchema as AssistantUncheckedCreateWithoutKnowledgeBasesInputObjectSchema } from './AssistantUncheckedCreateWithoutKnowledgeBasesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AssistantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AssistantCreateWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => AssistantUncheckedCreateWithoutKnowledgeBasesInputObjectSchema)])
}).strict();
export const AssistantCreateOrConnectWithoutKnowledgeBasesInputObjectSchema: z.ZodType<Prisma.AssistantCreateOrConnectWithoutKnowledgeBasesInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantCreateOrConnectWithoutKnowledgeBasesInput>;
export const AssistantCreateOrConnectWithoutKnowledgeBasesInputObjectZodSchema = makeSchema();
