import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicWhereUniqueInputObjectSchema as TopicWhereUniqueInputObjectSchema } from './TopicWhereUniqueInput.schema';
import { TopicCreateWithoutModelInputObjectSchema as TopicCreateWithoutModelInputObjectSchema } from './TopicCreateWithoutModelInput.schema';
import { TopicUncheckedCreateWithoutModelInputObjectSchema as TopicUncheckedCreateWithoutModelInputObjectSchema } from './TopicUncheckedCreateWithoutModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopicWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TopicCreateWithoutModelInputObjectSchema), z.lazy(() => TopicUncheckedCreateWithoutModelInputObjectSchema)])
}).strict();
export const TopicCreateOrConnectWithoutModelInputObjectSchema: z.ZodType<Prisma.TopicCreateOrConnectWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicCreateOrConnectWithoutModelInput>;
export const TopicCreateOrConnectWithoutModelInputObjectZodSchema = makeSchema();
