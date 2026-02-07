import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicScalarWhereInputObjectSchema as TopicScalarWhereInputObjectSchema } from './TopicScalarWhereInput.schema';
import { TopicUpdateManyMutationInputObjectSchema as TopicUpdateManyMutationInputObjectSchema } from './TopicUpdateManyMutationInput.schema';
import { TopicUncheckedUpdateManyWithoutModelInputObjectSchema as TopicUncheckedUpdateManyWithoutModelInputObjectSchema } from './TopicUncheckedUpdateManyWithoutModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopicScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TopicUpdateManyMutationInputObjectSchema), z.lazy(() => TopicUncheckedUpdateManyWithoutModelInputObjectSchema)])
}).strict();
export const TopicUpdateManyWithWhereWithoutModelInputObjectSchema: z.ZodType<Prisma.TopicUpdateManyWithWhereWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicUpdateManyWithWhereWithoutModelInput>;
export const TopicUpdateManyWithWhereWithoutModelInputObjectZodSchema = makeSchema();
