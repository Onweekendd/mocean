import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicCreateWithoutAssistantInputObjectSchema as TopicCreateWithoutAssistantInputObjectSchema } from './TopicCreateWithoutAssistantInput.schema';
import { TopicUncheckedCreateWithoutAssistantInputObjectSchema as TopicUncheckedCreateWithoutAssistantInputObjectSchema } from './TopicUncheckedCreateWithoutAssistantInput.schema';
import { TopicCreateOrConnectWithoutAssistantInputObjectSchema as TopicCreateOrConnectWithoutAssistantInputObjectSchema } from './TopicCreateOrConnectWithoutAssistantInput.schema';
import { TopicCreateManyAssistantInputEnvelopeObjectSchema as TopicCreateManyAssistantInputEnvelopeObjectSchema } from './TopicCreateManyAssistantInputEnvelope.schema';
import { TopicWhereUniqueInputObjectSchema as TopicWhereUniqueInputObjectSchema } from './TopicWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TopicCreateWithoutAssistantInputObjectSchema), z.lazy(() => TopicCreateWithoutAssistantInputObjectSchema).array(), z.lazy(() => TopicUncheckedCreateWithoutAssistantInputObjectSchema), z.lazy(() => TopicUncheckedCreateWithoutAssistantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TopicCreateOrConnectWithoutAssistantInputObjectSchema), z.lazy(() => TopicCreateOrConnectWithoutAssistantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TopicCreateManyAssistantInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TopicWhereUniqueInputObjectSchema), z.lazy(() => TopicWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TopicCreateNestedManyWithoutAssistantInputObjectSchema: z.ZodType<Prisma.TopicCreateNestedManyWithoutAssistantInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicCreateNestedManyWithoutAssistantInput>;
export const TopicCreateNestedManyWithoutAssistantInputObjectZodSchema = makeSchema();
