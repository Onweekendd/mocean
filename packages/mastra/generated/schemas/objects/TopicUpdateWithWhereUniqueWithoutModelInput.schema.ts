import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicWhereUniqueInputObjectSchema as TopicWhereUniqueInputObjectSchema } from './TopicWhereUniqueInput.schema';
import { TopicUpdateWithoutModelInputObjectSchema as TopicUpdateWithoutModelInputObjectSchema } from './TopicUpdateWithoutModelInput.schema';
import { TopicUncheckedUpdateWithoutModelInputObjectSchema as TopicUncheckedUpdateWithoutModelInputObjectSchema } from './TopicUncheckedUpdateWithoutModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopicWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TopicUpdateWithoutModelInputObjectSchema), z.lazy(() => TopicUncheckedUpdateWithoutModelInputObjectSchema)])
}).strict();
export const TopicUpdateWithWhereUniqueWithoutModelInputObjectSchema: z.ZodType<Prisma.TopicUpdateWithWhereUniqueWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicUpdateWithWhereUniqueWithoutModelInput>;
export const TopicUpdateWithWhereUniqueWithoutModelInputObjectZodSchema = makeSchema();
