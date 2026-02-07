import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelCreateWithoutTopicInputObjectSchema as ModelCreateWithoutTopicInputObjectSchema } from './ModelCreateWithoutTopicInput.schema';
import { ModelUncheckedCreateWithoutTopicInputObjectSchema as ModelUncheckedCreateWithoutTopicInputObjectSchema } from './ModelUncheckedCreateWithoutTopicInput.schema';
import { ModelCreateOrConnectWithoutTopicInputObjectSchema as ModelCreateOrConnectWithoutTopicInputObjectSchema } from './ModelCreateOrConnectWithoutTopicInput.schema';
import { ModelUpsertWithoutTopicInputObjectSchema as ModelUpsertWithoutTopicInputObjectSchema } from './ModelUpsertWithoutTopicInput.schema';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './ModelWhereInput.schema';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema';
import { ModelUpdateToOneWithWhereWithoutTopicInputObjectSchema as ModelUpdateToOneWithWhereWithoutTopicInputObjectSchema } from './ModelUpdateToOneWithWhereWithoutTopicInput.schema';
import { ModelUpdateWithoutTopicInputObjectSchema as ModelUpdateWithoutTopicInputObjectSchema } from './ModelUpdateWithoutTopicInput.schema';
import { ModelUncheckedUpdateWithoutTopicInputObjectSchema as ModelUncheckedUpdateWithoutTopicInputObjectSchema } from './ModelUncheckedUpdateWithoutTopicInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelCreateWithoutTopicInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutTopicInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ModelCreateOrConnectWithoutTopicInputObjectSchema).optional(),
  upsert: z.lazy(() => ModelUpsertWithoutTopicInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ModelWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ModelWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ModelWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ModelUpdateToOneWithWhereWithoutTopicInputObjectSchema), z.lazy(() => ModelUpdateWithoutTopicInputObjectSchema), z.lazy(() => ModelUncheckedUpdateWithoutTopicInputObjectSchema)]).optional()
}).strict();
export const ModelUpdateOneWithoutTopicNestedInputObjectSchema: z.ZodType<Prisma.ModelUpdateOneWithoutTopicNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpdateOneWithoutTopicNestedInput>;
export const ModelUpdateOneWithoutTopicNestedInputObjectZodSchema = makeSchema();
