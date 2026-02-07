import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicCreateWithoutKnowledgeBasesInputObjectSchema as TopicCreateWithoutKnowledgeBasesInputObjectSchema } from './TopicCreateWithoutKnowledgeBasesInput.schema';
import { TopicUncheckedCreateWithoutKnowledgeBasesInputObjectSchema as TopicUncheckedCreateWithoutKnowledgeBasesInputObjectSchema } from './TopicUncheckedCreateWithoutKnowledgeBasesInput.schema';
import { TopicCreateOrConnectWithoutKnowledgeBasesInputObjectSchema as TopicCreateOrConnectWithoutKnowledgeBasesInputObjectSchema } from './TopicCreateOrConnectWithoutKnowledgeBasesInput.schema';
import { TopicUpsertWithoutKnowledgeBasesInputObjectSchema as TopicUpsertWithoutKnowledgeBasesInputObjectSchema } from './TopicUpsertWithoutKnowledgeBasesInput.schema';
import { TopicWhereUniqueInputObjectSchema as TopicWhereUniqueInputObjectSchema } from './TopicWhereUniqueInput.schema';
import { TopicUpdateToOneWithWhereWithoutKnowledgeBasesInputObjectSchema as TopicUpdateToOneWithWhereWithoutKnowledgeBasesInputObjectSchema } from './TopicUpdateToOneWithWhereWithoutKnowledgeBasesInput.schema';
import { TopicUpdateWithoutKnowledgeBasesInputObjectSchema as TopicUpdateWithoutKnowledgeBasesInputObjectSchema } from './TopicUpdateWithoutKnowledgeBasesInput.schema';
import { TopicUncheckedUpdateWithoutKnowledgeBasesInputObjectSchema as TopicUncheckedUpdateWithoutKnowledgeBasesInputObjectSchema } from './TopicUncheckedUpdateWithoutKnowledgeBasesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TopicCreateWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => TopicUncheckedCreateWithoutKnowledgeBasesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TopicCreateOrConnectWithoutKnowledgeBasesInputObjectSchema).optional(),
  upsert: z.lazy(() => TopicUpsertWithoutKnowledgeBasesInputObjectSchema).optional(),
  connect: z.lazy(() => TopicWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TopicUpdateToOneWithWhereWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => TopicUpdateWithoutKnowledgeBasesInputObjectSchema), z.lazy(() => TopicUncheckedUpdateWithoutKnowledgeBasesInputObjectSchema)]).optional()
}).strict();
export const TopicUpdateOneRequiredWithoutKnowledgeBasesNestedInputObjectSchema: z.ZodType<Prisma.TopicUpdateOneRequiredWithoutKnowledgeBasesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicUpdateOneRequiredWithoutKnowledgeBasesNestedInput>;
export const TopicUpdateOneRequiredWithoutKnowledgeBasesNestedInputObjectZodSchema = makeSchema();
