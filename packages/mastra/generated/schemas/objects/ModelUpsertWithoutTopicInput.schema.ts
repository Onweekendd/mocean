import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelUpdateWithoutTopicInputObjectSchema as ModelUpdateWithoutTopicInputObjectSchema } from './ModelUpdateWithoutTopicInput.schema';
import { ModelUncheckedUpdateWithoutTopicInputObjectSchema as ModelUncheckedUpdateWithoutTopicInputObjectSchema } from './ModelUncheckedUpdateWithoutTopicInput.schema';
import { ModelCreateWithoutTopicInputObjectSchema as ModelCreateWithoutTopicInputObjectSchema } from './ModelCreateWithoutTopicInput.schema';
import { ModelUncheckedCreateWithoutTopicInputObjectSchema as ModelUncheckedCreateWithoutTopicInputObjectSchema } from './ModelUncheckedCreateWithoutTopicInput.schema';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './ModelWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ModelUpdateWithoutTopicInputObjectSchema), z.lazy(() => ModelUncheckedUpdateWithoutTopicInputObjectSchema)]),
  create: z.union([z.lazy(() => ModelCreateWithoutTopicInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutTopicInputObjectSchema)]),
  where: z.lazy(() => ModelWhereInputObjectSchema).optional()
}).strict();
export const ModelUpsertWithoutTopicInputObjectSchema: z.ZodType<Prisma.ModelUpsertWithoutTopicInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpsertWithoutTopicInput>;
export const ModelUpsertWithoutTopicInputObjectZodSchema = makeSchema();
