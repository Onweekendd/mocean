import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicWhereUniqueInputObjectSchema as TopicWhereUniqueInputObjectSchema } from './TopicWhereUniqueInput.schema';
import { TopicUpdateWithoutModelInputObjectSchema as TopicUpdateWithoutModelInputObjectSchema } from './TopicUpdateWithoutModelInput.schema';
import { TopicUncheckedUpdateWithoutModelInputObjectSchema as TopicUncheckedUpdateWithoutModelInputObjectSchema } from './TopicUncheckedUpdateWithoutModelInput.schema';
import { TopicCreateWithoutModelInputObjectSchema as TopicCreateWithoutModelInputObjectSchema } from './TopicCreateWithoutModelInput.schema';
import { TopicUncheckedCreateWithoutModelInputObjectSchema as TopicUncheckedCreateWithoutModelInputObjectSchema } from './TopicUncheckedCreateWithoutModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopicWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TopicUpdateWithoutModelInputObjectSchema), z.lazy(() => TopicUncheckedUpdateWithoutModelInputObjectSchema)]),
  create: z.union([z.lazy(() => TopicCreateWithoutModelInputObjectSchema), z.lazy(() => TopicUncheckedCreateWithoutModelInputObjectSchema)])
}).strict();
export const TopicUpsertWithWhereUniqueWithoutModelInputObjectSchema: z.ZodType<Prisma.TopicUpsertWithWhereUniqueWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicUpsertWithWhereUniqueWithoutModelInput>;
export const TopicUpsertWithWhereUniqueWithoutModelInputObjectZodSchema = makeSchema();
