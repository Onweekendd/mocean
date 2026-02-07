import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantCreateWithoutKnowledgeBasesInputObjectSchema as AssistantCreateWithoutKnowledgeBasesInputObjectSchema } from './AssistantCreateWithoutKnowledgeBasesInput.schema';
import { AssistantUncheckedCreateWithoutKnowledgeBasesInputObjectSchema as AssistantUncheckedCreateWithoutKnowledgeBasesInputObjectSchema } from './AssistantUncheckedCreateWithoutKnowledgeBasesInput.schema';
import { AssistantCreateOrConnectWithoutKnowledgeBasesInputObjectSchema as AssistantCreateOrConnectWithoutKnowledgeBasesInputObjectSchema } from './AssistantCreateOrConnectWithoutKnowledgeBasesInput.schema';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './AssistantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AssistantCreateWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => AssistantCreateWithoutKnowledgeBasesInputObjectSchema).array(), z.lazy(() => AssistantUncheckedCreateWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => AssistantUncheckedCreateWithoutKnowledgeBasesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AssistantCreateOrConnectWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => AssistantCreateOrConnectWithoutKnowledgeBasesInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AssistantWhereUniqueInputObjectSchema), z.lazy(() => AssistantWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AssistantCreateNestedManyWithoutKnowledgeBasesInputObjectSchema: z.ZodType<Prisma.AssistantCreateNestedManyWithoutKnowledgeBasesInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantCreateNestedManyWithoutKnowledgeBasesInput>;
export const AssistantCreateNestedManyWithoutKnowledgeBasesInputObjectZodSchema = makeSchema();
